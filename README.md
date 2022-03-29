## About
This is example to create mock data function by [hygen](https://github.com/jondot/hygen) + [intermock](https://github.com/google/intermock)

## Usage

```shell
$ yarn gen:mock
yarn run v1.22.17
$ hygen mock new
✔ which type file? · ./src/models/user.ts
✔ create interfaces · User

Loaded templates: _templates
       added: test/helpers/mock/user.ts
```

### Example type

```typescript
export interface User {
  name: string;
  email: string;
  /** @mockType {image.avatar} */
  avatar: string | null;
}
```

### Example generated code

```typescript
import { User } from '@/models/user';

export const createUser = (User?: Partial<User>): User => {
  const defaultUser: User = {
    name: "Mr. Lera O'Kon",
    email: "Kayleigh.Altenwerth@gmail.com",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg"
  }

  return {
    ...defaultUser,
    ...User,
  }
}
```
