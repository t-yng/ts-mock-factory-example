import { User } from "@/models/user";

export const createUser = (User?: Partial<User>): User => {
  const defaultUser: User = {
    name: "Mr. Lera O'Kon",
    email: "Kayleigh.Altenwerth@gmail.com",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg",
  };

  return {
    ...defaultUser,
    ...User,
  };
};
