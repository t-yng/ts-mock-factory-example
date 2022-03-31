import { User } from "@/models/user";

export const createUser = (User?: Partial<User>): User => {
  const defaultUser: User = {
    name: "Kaley Brakus DDS",
    email: "Marianne91@hotmail.com",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/wake_gs/128.jpg",
  };

  return {
    ...defaultUser,
    ...User,
  };
};
