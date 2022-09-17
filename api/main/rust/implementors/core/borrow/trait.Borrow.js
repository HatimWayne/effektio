(function() {var implementors = {};
implementors["arrayvec"] = [{"text":"impl&lt;T, const CAP:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;T, CAP&gt;","synthetic":false,"types":["arrayvec::arrayvec::ArrayVec"]},{"text":"impl&lt;const CAP:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayString.html\" title=\"struct arrayvec::ArrayString\">ArrayString</a>&lt;CAP&gt;","synthetic":false,"types":["arrayvec::array_string::ArrayString"]}];
implementors["bytes"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"bytes/struct.Bytes.html\" title=\"struct bytes::Bytes\">Bytes</a>","synthetic":false,"types":["bytes::bytes::Bytes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>","synthetic":false,"types":["bytes::bytes_mut::BytesMut"]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"crossbeam_epoch/trait.Pointable.html\" title=\"trait crossbeam_epoch::Pointable\">Pointable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;T&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Owned.html\" title=\"struct crossbeam_epoch::Owned\">Owned</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Owned"]}];
implementors["futures_signals"] = [{"text":"impl&lt;'a, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[A]</a>&gt; for <a class=\"struct\" href=\"futures_signals/signal_vec/struct.MutableVecLockRef.html\" title=\"struct futures_signals::signal_vec::MutableVecLockRef\">MutableVecLockRef</a>&lt;'a, A&gt;","synthetic":false,"types":["futures_signals::signal_vec::mutable_vec::MutableVecLockRef"]},{"text":"impl&lt;'a, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[A]</a>&gt; for <a class=\"struct\" href=\"futures_signals/signal_vec/struct.MutableVecLockMut.html\" title=\"struct futures_signals::signal_vec::MutableVecLockMut\">MutableVecLockMut</a>&lt;'a, A&gt;","synthetic":false,"types":["futures_signals::signal_vec::mutable_vec::MutableVecLockMut"]}];
implementors["generic_array"] = [{"text":"impl&lt;T, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":["generic_array::GenericArray"]}];
implementors["http"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"http/header/struct.HeaderName.html\" title=\"struct http::header::HeaderName\">HeaderName</a>","synthetic":false,"types":["http::header::name::HeaderName"]}];
implementors["pulldown_cmark"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"pulldown_cmark/enum.CowStr.html\" title=\"enum pulldown_cmark::CowStr\">CowStr</a>&lt;'a&gt;","synthetic":false,"types":["pulldown_cmark::strings::CowStr"]}];
implementors["relative_path"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"relative_path/struct.RelativePath.html\" title=\"struct relative_path::RelativePath\">RelativePath</a>&gt; for <a class=\"struct\" href=\"relative_path/struct.RelativePathBuf.html\" title=\"struct relative_path::RelativePathBuf\">RelativePathBuf</a>","synthetic":false,"types":["relative_path::RelativePathBuf"]}];
implementors["ruma_common"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/user_id/struct.UserId.html\" title=\"struct ruma_common::user_id::UserId\">UserId</a>&gt; for <a class=\"struct\" href=\"ruma_common/user_id/struct.OwnedUserId.html\" title=\"struct ruma_common::user_id::OwnedUserId\">OwnedUserId</a>","synthetic":false,"types":["ruma_common::identifiers::user_id::OwnedUserId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/struct.ClientSecret.html\" title=\"struct ruma_common::ClientSecret\">ClientSecret</a>&gt; for <a class=\"struct\" href=\"ruma_common/struct.OwnedClientSecret.html\" title=\"struct ruma_common::OwnedClientSecret\">OwnedClientSecret</a>","synthetic":false,"types":["ruma_common::identifiers::client_secret::OwnedClientSecret"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/struct.DeviceId.html\" title=\"struct ruma_common::DeviceId\">DeviceId</a>&gt; for <a class=\"struct\" href=\"ruma_common/struct.OwnedDeviceId.html\" title=\"struct ruma_common::OwnedDeviceId\">OwnedDeviceId</a>","synthetic":false,"types":["ruma_common::identifiers::device_id::OwnedDeviceId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/struct.DeviceKeyId.html\" title=\"struct ruma_common::DeviceKeyId\">DeviceKeyId</a>&gt; for <a class=\"struct\" href=\"ruma_common/struct.OwnedDeviceKeyId.html\" title=\"struct ruma_common::OwnedDeviceKeyId\">OwnedDeviceKeyId</a>","synthetic":false,"types":["ruma_common::identifiers::device_key_id::OwnedDeviceKeyId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/struct.EventId.html\" title=\"struct ruma_common::EventId\">EventId</a>&gt; for <a class=\"struct\" href=\"ruma_common/struct.OwnedEventId.html\" title=\"struct ruma_common::OwnedEventId\">OwnedEventId</a>","synthetic":false,"types":["ruma_common::identifiers::event_id::OwnedEventId"]},{"text":"impl&lt;A, K:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/struct.KeyId.html\" title=\"struct ruma_common::KeyId\">KeyId</a>&lt;A, K&gt;&gt; for <a class=\"struct\" href=\"ruma_common/struct.OwnedKeyId.html\" title=\"struct ruma_common::OwnedKeyId\">OwnedKeyId</a>&lt;A, K&gt;","synthetic":false,"types":["ruma_common::identifiers::key_id::OwnedKeyId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/struct.KeyName.html\" title=\"struct ruma_common::KeyName\">KeyName</a>&gt; for <a class=\"struct\" href=\"ruma_common/struct.OwnedKeyName.html\" title=\"struct ruma_common::OwnedKeyName\">OwnedKeyName</a>","synthetic":false,"types":["ruma_common::identifiers::key_name::OwnedKeyName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/struct.MxcUri.html\" title=\"struct ruma_common::MxcUri\">MxcUri</a>&gt; for <a class=\"struct\" href=\"ruma_common/struct.OwnedMxcUri.html\" title=\"struct ruma_common::OwnedMxcUri\">OwnedMxcUri</a>","synthetic":false,"types":["ruma_common::identifiers::mxc_uri::OwnedMxcUri"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/struct.RoomAliasId.html\" title=\"struct ruma_common::RoomAliasId\">RoomAliasId</a>&gt; for <a class=\"struct\" href=\"ruma_common/struct.OwnedRoomAliasId.html\" title=\"struct ruma_common::OwnedRoomAliasId\">OwnedRoomAliasId</a>","synthetic":false,"types":["ruma_common::identifiers::room_alias_id::OwnedRoomAliasId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/struct.RoomId.html\" title=\"struct ruma_common::RoomId\">RoomId</a>&gt; for <a class=\"struct\" href=\"ruma_common/struct.OwnedRoomId.html\" title=\"struct ruma_common::OwnedRoomId\">OwnedRoomId</a>","synthetic":false,"types":["ruma_common::identifiers::room_id::OwnedRoomId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/struct.RoomOrAliasId.html\" title=\"struct ruma_common::RoomOrAliasId\">RoomOrAliasId</a>&gt; for <a class=\"struct\" href=\"ruma_common/struct.OwnedRoomOrAliasId.html\" title=\"struct ruma_common::OwnedRoomOrAliasId\">OwnedRoomOrAliasId</a>","synthetic":false,"types":["ruma_common::identifiers::room_or_room_alias_id::OwnedRoomOrAliasId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/struct.ServerName.html\" title=\"struct ruma_common::ServerName\">ServerName</a>&gt; for <a class=\"struct\" href=\"ruma_common/struct.OwnedServerName.html\" title=\"struct ruma_common::OwnedServerName\">OwnedServerName</a>","synthetic":false,"types":["ruma_common::identifiers::server_name::OwnedServerName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/struct.SessionId.html\" title=\"struct ruma_common::SessionId\">SessionId</a>&gt; for <a class=\"struct\" href=\"ruma_common/struct.OwnedSessionId.html\" title=\"struct ruma_common::OwnedSessionId\">OwnedSessionId</a>","synthetic":false,"types":["ruma_common::identifiers::session_id::OwnedSessionId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/struct.TransactionId.html\" title=\"struct ruma_common::TransactionId\">TransactionId</a>&gt; for <a class=\"struct\" href=\"ruma_common/struct.OwnedTransactionId.html\" title=\"struct ruma_common::OwnedTransactionId\">OwnedTransactionId</a>","synthetic":false,"types":["ruma_common::identifiers::transaction_id::OwnedTransactionId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ruma_common/struct.VoipId.html\" title=\"struct ruma_common::VoipId\">VoipId</a>&gt; for <a class=\"struct\" href=\"ruma_common/struct.OwnedVoipId.html\" title=\"struct ruma_common::OwnedVoipId\">OwnedVoipId</a>","synthetic":false,"types":["ruma_common::identifiers::voip_id::OwnedVoipId"]}];
implementors["serde_bytes"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"serde_bytes/struct.Bytes.html\" title=\"struct serde_bytes::Bytes\">Bytes</a>&gt; for <a class=\"struct\" href=\"serde_bytes/struct.ByteBuf.html\" title=\"struct serde_bytes::ByteBuf\">ByteBuf</a>","synthetic":false,"types":["serde_bytes::bytebuf::ByteBuf"]}];
implementors["sled"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"sled/struct.IVec.html\" title=\"struct sled::IVec\">IVec</a>","synthetic":false,"types":["sled::ivec::IVec"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; for &amp;<a class=\"struct\" href=\"sled/struct.IVec.html\" title=\"struct sled::IVec\">IVec</a>","synthetic":false,"types":["sled::ivec::IVec"]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[&lt;A as <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>]&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;","synthetic":false,"types":["smallvec::SmallVec"]}];
implementors["time"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>&gt; for <a class=\"struct\" href=\"time/struct.Instant.html\" title=\"struct time::Instant\">Instant</a>","synthetic":false,"types":["time::instant::Instant"]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[&lt;A as <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>]&gt; for <a class=\"struct\" href=\"tinyvec/struct.ArrayVec.html\" title=\"struct tinyvec::ArrayVec\">ArrayVec</a>&lt;A&gt;","synthetic":false,"types":["tinyvec::arrayvec::ArrayVec"]},{"text":"impl&lt;'s, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"tinyvec/struct.SliceVec.html\" title=\"struct tinyvec::SliceVec\">SliceVec</a>&lt;'s, T&gt;","synthetic":false,"types":["tinyvec::slicevec::SliceVec"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[&lt;A as <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>]&gt; for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt;","synthetic":false,"types":["tinyvec::tinyvec::TinyVec"]}];
implementors["uuid"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Hyphenated.html\" title=\"struct uuid::fmt::Hyphenated\">Hyphenated</a>","synthetic":false,"types":["uuid::fmt::Hyphenated"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Simple.html\" title=\"struct uuid::fmt::Simple\">Simple</a>","synthetic":false,"types":["uuid::fmt::Simple"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Urn.html\" title=\"struct uuid::fmt::Urn\">Urn</a>","synthetic":false,"types":["uuid::fmt::Urn"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Braced.html\" title=\"struct uuid::fmt::Braced\">Braced</a>","synthetic":false,"types":["uuid::fmt::Braced"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()