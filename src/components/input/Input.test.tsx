import { render } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
   it("should render component", () => {
      // Arrange
      // Act
      const view = render(<Input label={"hello"} />);

      // Assert
      expect(view.baseElement).toBeTruthy();
   });
});
