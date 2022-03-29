export interface User {
  name: string;
  email: string;
  /** @mockType {image.avatar} */
  avatar: string | null;
}
