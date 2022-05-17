import { render, screen } from "@testing-library/react";
import Qcard from "./index";

//arrange
const mock = { name: "test", avatar: "", qq: "12345" };
test("qcard component", () => {
  const dom = render(<Qcard {...mock}></Qcard>);
  // act
  const qcard = dom.getByText(mock.name);
  // assert
  expect(qcard).toBeInTheDocument();
});
