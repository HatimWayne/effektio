use anyhow::Result;
use futures::{
    channel::mpsc::{channel, Receiver, Sender},
    StreamExt,
};
use log::{info, warn};
use matrix_sdk::{
    encryption::identities::Device as MatrixDevice,
    ruma::{
        api::client::sync::sync_events::v3::DeviceLists, device_id,
        events::key::verification::VerificationMethod, MilliSecondsSinceUnixEpoch, OwnedUserId,
    },
    Client,
};
use parking_lot::Mutex;
use serde_json::{json, Value};
use std::sync::Arc;

use crate::RUNTIME;

#[derive(Clone, Debug)]
pub struct DeviceChangedEvent {
    client: Client,
}

impl DeviceChangedEvent {
    pub(crate) fn new(client: &Client) -> Self {
        DeviceChangedEvent {
            client: client.clone(),
        }
    }

    pub async fn get_devices(&self, verified: bool) -> Result<Vec<Device>> {
        let c = self.client.clone();
        RUNTIME
            .spawn(async move {
                let user_id = c
                    .user_id()
                    .expect("guest user cannot get the verified devices");
                let mut devices: Vec<Device> = vec![];
                let response = c.devices().await?;
                for device in c.encryption().get_user_devices(user_id).await?.devices() {
                    if device.verified() == verified {
                        if let Some(dev) = response
                            .devices
                            .iter()
                            .find(|e| e.device_id == device.device_id())
                        {
                            devices.push(Device::new(
                                &device,
                                dev.last_seen_ip.clone(),
                                dev.last_seen_ts,
                            ));
                        } else {
                            devices.push(Device::new(&device, None, None));
                        }
                    }
                }
                Ok(devices)
            })
            .await?
    }

    pub async fn request_verification_to_user(&self) -> Result<bool> {
        let c = self.client.clone();
        RUNTIME
            .spawn(async move {
                let user_id = c.user_id().expect("guest user cannot request verification");
                let user = c
                    .encryption()
                    .get_user_identity(user_id)
                    .await?
                    .expect("alice should get user identity");
                user.request_verification().await?;
                Ok(true)
            })
            .await?
    }

    pub async fn request_verification_to_device(&self, dev_id: String) -> Result<bool> {
        let c = self.client.clone();
        RUNTIME
            .spawn(async move {
                let user_id = c.user_id().expect("guest user cannot request verification");
                let dev = c
                    .encryption()
                    .get_device(user_id, device_id!(dev_id.as_str()))
                    .await
                    .expect("alice should get device")
                    .unwrap();
                dev.request_verification_with_methods(vec![VerificationMethod::SasV1])
                    .await?;
                Ok(true)
            })
            .await?
    }

    pub async fn request_verification_to_user_with_methods(
        &self,
        methods: &mut Vec<String>,
    ) -> Result<bool> {
        let c = self.client.clone();
        let _methods: Vec<VerificationMethod> =
            (*methods).iter().map(|e| e.as_str().into()).collect();
        RUNTIME
            .spawn(async move {
                let user_id = c.user_id().expect("guest user cannot request verification");
                let user = c
                    .encryption()
                    .get_user_identity(user_id)
                    .await?
                    .expect("alice should get user identity");
                user.request_verification_with_methods(_methods).await?;
                Ok(true)
            })
            .await?
    }

    pub async fn request_verification_to_device_with_methods(
        &self,
        dev_id: String,
        methods: &mut Vec<String>,
    ) -> Result<bool> {
        let c = self.client.clone();
        let _methods: Vec<VerificationMethod> =
            (*methods).iter().map(|e| e.as_str().into()).collect();
        RUNTIME
            .spawn(async move {
                let user_id = c.user_id().expect("guest user cannot request verification");
                let dev = c
                    .encryption()
                    .get_device(user_id, device_id!(dev_id.as_str()))
                    .await
                    .expect("alice should get device")
                    .unwrap();
                dev.request_verification_with_methods(_methods).await?;
                Ok(true)
            })
            .await?
    }
}

#[derive(Clone, Debug)]
pub struct DeviceLeftEvent {
    client: Client,
}

impl DeviceLeftEvent {
    pub(crate) fn new(client: &Client) -> Self {
        DeviceLeftEvent {
            client: client.clone(),
        }
    }

    pub async fn get_devices(&self, deleted: bool) -> Result<Vec<Device>> {
        let c = self.client.clone();
        RUNTIME
            .spawn(async move {
                let user_id = c
                    .user_id()
                    .expect("guest user cannot get the deleted devices");
                let mut devices: Vec<Device> = vec![];
                let response = c.devices().await?;
                for device in c.encryption().get_user_devices(user_id).await?.devices() {
                    if device.deleted() == deleted {
                        if let Some(dev) = response
                            .devices
                            .iter()
                            .find(|e| e.device_id == device.device_id())
                        {
                            devices.push(Device::new(
                                &device,
                                dev.last_seen_ip.clone(),
                                dev.last_seen_ts,
                            ));
                        } else {
                            devices.push(Device::new(&device, None, None));
                        }
                    }
                }
                Ok(devices)
            })
            .await?
    }
}

#[derive(Clone, Debug)]
pub struct Device {
    inner: MatrixDevice,
    last_seen_ip: Option<String>,
    last_seen_ts: Option<MilliSecondsSinceUnixEpoch>,
}

impl Device {
    pub(crate) fn new(
        inner: &MatrixDevice,
        last_seen_ip: Option<String>,
        last_seen_ts: Option<MilliSecondsSinceUnixEpoch>,
    ) -> Self {
        Device {
            inner: inner.clone(),
            last_seen_ip,
            last_seen_ts,
        }
    }

    pub fn was_verified(&self) -> bool {
        self.inner.verified()
    }

    pub fn was_deleted(&self) -> bool {
        self.inner.deleted()
    }

    pub fn get_user_id(&self) -> String {
        self.inner.user_id().to_string()
    }

    pub fn get_device_id(&self) -> String {
        self.inner.device_id().to_string()
    }

    pub fn get_display_name(&self) -> Option<String> {
        self.inner.display_name().map(|s| s.to_owned())
    }

    pub fn get_last_seen_ip(&self) -> Option<String> {
        self.last_seen_ip.clone()
    }

    pub fn get_last_seen_ts(&self) -> Option<MilliSecondsSinceUnixEpoch> {
        self.last_seen_ts
    }
}

#[derive(Clone)]
pub struct DeviceListsController {
    changed_event_tx: Sender<DeviceChangedEvent>,
    changed_event_rx: Arc<Mutex<Option<Receiver<DeviceChangedEvent>>>>,
    left_event_tx: Sender<DeviceLeftEvent>,
    left_event_rx: Arc<Mutex<Option<Receiver<DeviceLeftEvent>>>>,
}

impl DeviceListsController {
    pub(crate) fn new() -> Self {
        let (changed_event_tx, changed_event_rx) = channel::<DeviceChangedEvent>(10); // dropping after more than 10 items queued
        let (left_event_tx, left_event_rx) = channel::<DeviceLeftEvent>(10); // dropping after more than 10 items queued
        DeviceListsController {
            changed_event_tx,
            changed_event_rx: Arc::new(Mutex::new(Some(changed_event_rx))),
            left_event_tx,
            left_event_rx: Arc::new(Mutex::new(Some(left_event_rx))),
        }
    }

    pub fn get_changed_event_rx(&self) -> Option<Receiver<DeviceChangedEvent>> {
        self.changed_event_rx.lock().take()
    }

    pub fn get_left_event_rx(&self) -> Option<Receiver<DeviceLeftEvent>> {
        self.left_event_rx.lock().take()
    }

    pub(crate) fn process_events(&self, client: &Client, device_lists: DeviceLists) {
        let mut changed_event_tx = self.changed_event_tx.clone();
        for user_id in device_lists.changed.into_iter() {
            info!("device-changed user_id: {}", user_id);
            let current_user_id = client
                .user_id()
                .expect("guest user cannot handle the device changed event");
            if *user_id == *current_user_id {
                let evt = DeviceChangedEvent::new(client);
                if let Err(e) = changed_event_tx.try_send(evt) {
                    warn!("Dropping devices changed event: {}", e);
                }
            }
        }

        let mut left_event_tx = self.left_event_tx.clone();
        for user_id in device_lists.left.into_iter() {
            info!("device-left user_id: {}", user_id);
            let current_user_id = client
                .user_id()
                .expect("guest user cannot handle the device left event");
            if *user_id == *current_user_id {
                let evt = DeviceLeftEvent::new(client);
                if let Err(e) = left_event_tx.try_send(evt) {
                    warn!("Dropping devices left event: {}", e);
                }
            }
        }
    }
}
