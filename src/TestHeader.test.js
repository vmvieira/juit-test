import { shallow } from "enzyme";
import TestHeader from "./components/TestHeader";

describe("Suite description", () => {
  test("shallow renders correctly", () => {
    const wrapper = shallow(<TestHeader />);
  });
});
