import { FC } from "react";

export const DEFAULT_AVATAR = "https://example.com/avatar.jpg";

export type User = {
  name: string;
  avatar: string | null;
};

type UserInfoProps = {
  user: User;
};

export const UserInfo: FC<UserInfoProps> = ({ user }) => {
  return (
    <div>
      <img src={user.avatar ?? DEFAULT_AVATAR} />
      <span>{user.name}</span>
    </div>
  );
};
