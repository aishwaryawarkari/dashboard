import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

export default function GroupAvatars() {
  return (
    <div>
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="user1.jpg" />
        <Avatar alt="Travis Howard" src="user2.jpg" />
        <Avatar alt="Cindy Baker" src="user3.jpg" />
        <Avatar alt="Agnes Walker" src="user4.jpg" />
        <Avatar alt="Trevor Henderson" src="user1.jpg" />
      </AvatarGroup>
    </div>
  );
}
