import { isDefined } from "./is-defined";

describe("isDefined", () => {
   it.each`
      input        | expected
      ${undefined} | ${false}
      ${null}      | ${false}
      ${NaN}       | ${false}
      ${0}         | ${true}
      ${""}        | ${true}
      ${[]}        | ${true}
      ${{}}        | ${true}
   `(
      "should return $expected, when input is $input",
      ({ input, expected }: { input: null | undefined | unknown; expected: boolean }) => {
         // Arrange
         // Act
         var result = isDefined(input);

         // Assert
         expect(result).toBe(expected);
      }
   );
});
