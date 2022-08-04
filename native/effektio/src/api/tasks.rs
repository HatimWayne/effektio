use super::{client::Client, group::Group, RUNTIME};
use anyhow::{bail, Context, Result};
use effektio_core::{
    events::{
        self,
        tasks::{SyncTaskEvent, SyncTaskListEvent, TaskBuilder, TaskListBuilder},
    },
    models,
    // models::,
    ruma::{
        events::{
            room::message::{RoomMessageEventContent, SyncRoomMessageEvent},
            SyncMessageLikeEvent,
        },
        OwnedEventId, OwnedRoomId,
    },
};
use futures_signals::signal::Mutable;
use matrix_sdk::{room::Joined, room::Room, Client as MatrixClient};

impl Client {
    pub(crate) async fn init_tasks(&self) {
        self.client
            .register_event_handler(
                |ev: SyncTaskListEvent, room: Room, client: MatrixClient| async move {
                    println!("received the task list event: {:?}", ev);
                    // Common usage: Room event plus room and client.
                    // if let ruma::events::SyncMessageLikeEvent::Original() ev {}
                },
            )
            .await;
    }

    pub async fn task_lists(&self) -> Vec<TaskList> {
        Default::default()
    }
}

#[derive(Clone)]
pub struct TaskListDraft {
    client: MatrixClient,
    room: Joined,
    content: TaskListBuilder,
}

impl std::ops::DerefMut for TaskListDraft {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.content
    }
}

impl std::ops::Deref for TaskListDraft {
    type Target = TaskListBuilder;
    fn deref(&self) -> &Self::Target {
        &self.content
    }
}

impl TaskListDraft {
    pub async fn send(&self) -> Result<OwnedEventId> {
        let room = self.room.clone();
        let inner = self.content.build()?;
        RUNTIME
            .spawn(async move {
                let resp = room.send(inner, None).await?;
                Ok(resp.event_id)
            })
            .await?
    }
}

pub struct TaskList {
    client: MatrixClient,
    room: Joined,
    content: models::TaskList,
}

impl std::ops::Deref for TaskList {
    type Target = models::TaskList;
    fn deref(&self) -> &Self::Target {
        &self.content
    }
}

impl TaskList {
    pub fn task_builder(&self) -> TaskDraft {
        let mut content = TaskBuilder::default();
        content.task_list_id(self.event_id());
        TaskDraft {
            client: self.client.clone(),
            room: self.room.clone(),
            content: content,
        }
    }

    pub fn tasks(&self) -> Vec<Task> {
        Default::default()
    }
}

pub struct Task {
    client: MatrixClient,
    room: Joined,
    content: models::Task,
}

impl std::ops::Deref for Task {
    type Target = models::Task;
    fn deref(&self) -> &Self::Target {
        &self.content
    }
}

#[derive(Clone)]
pub struct TaskDraft {
    client: MatrixClient,
    room: Joined,
    content: TaskBuilder,
}

impl std::ops::DerefMut for TaskDraft {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.content
    }
}

impl std::ops::Deref for TaskDraft {
    type Target = TaskBuilder;
    fn deref(&self) -> &Self::Target {
        &self.content
    }
}

impl TaskDraft {
    pub async fn send(&self) -> Result<OwnedEventId> {
        let room = self.room.clone();
        let inner = self.content.build()?;
        RUNTIME
            .spawn(async move {
                let resp = room.send(inner, None).await?;
                Ok(resp.event_id)
            })
            .await?
    }
}

impl Group {
    pub fn task_list_draft(&self) -> Result<TaskListDraft> {
        if let matrix_sdk::room::Room::Joined(joined) = &self.inner.room {
            Ok(TaskListDraft {
                client: self.client.clone(),
                room: joined.clone(),
                content: Default::default(),
            })
        } else {
            bail!("You can't create todos for groups we are not part on")
        }
    }
}
