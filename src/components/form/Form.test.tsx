import { render } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
   it("should render component", () => {
      // Arrange
      // Act
      const view = render(
         <Form>
            <div></div>
            <div></div>
         </Form>
      );

      // Assert
      expect(view.baseElement).toBeTruthy();
   });
});
