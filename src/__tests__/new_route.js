import React from "react";
import {TungeRoute} from "../new_route";
import renderer from "react-test-renderer";


test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <TungeRoute />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
