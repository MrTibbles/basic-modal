import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

/* In here please contribute a test or tests that 
show the modal meets WCAG 2.1 AA Standards, you can
put your tests in different files to this one */

it("should have NewDay as text", () => {
  const { queryByText } = render(<App />);

  expect(queryByText(/NewDay/)).toBeTruthy();
});
