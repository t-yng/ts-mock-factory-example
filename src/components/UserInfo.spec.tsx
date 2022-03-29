import { render, screen } from "@testing-library/react";
import { UserInfo, DEFAULT_AVATAR } from "./UserInfo";
import { createUser } from "@test/helpers/mock/user";

describe("UserInfo", () => {
  it("デフォルトのアバター画像を表示", () => {
    const user = createUser({ avatar: null });
    const { container } = render(<UserInfo user={user} />);

    expect(
      container.querySelector(`img[src="${DEFAULT_AVATAR}"]`)
    ).toBeInTheDocument();
  });
});
