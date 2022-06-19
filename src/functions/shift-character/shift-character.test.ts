import { shiftCharacter } from "./shift-character";

describe("shiftCharacter", () => {
   it.each`
      character | offset | expected
      ${"a"}    | ${1}   | ${"b"}
      ${"a"}    | ${-1}  | ${"z"}
      ${"a"}    | ${26}  | ${"a"}
      ${"a"}    | ${0}   | ${"a"}
      ${"a"}    | ${-0}  | ${"a"}
      ${"a"}    | ${5}   | ${"f"}
   `(
      "should return $expected, when character is $character and offset is $offset",
      ({ character, offset, expected }: { character: string; offset: number; expected: boolean }) => {
         // Arrange
         // Act
         var result = shiftCharacter(character, offset);

         // Assert
         expect(result).toBe(expected);
      }
   );
});
