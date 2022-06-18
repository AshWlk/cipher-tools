import { alphabet } from "../../constants/alphabet";

export const shiftCharacter = (character: string, offset: number) => {
   let newCharacterIndex = (alphabet.indexOf(character) + offset) % alphabet.length;
   newCharacterIndex = newCharacterIndex < 0 ? newCharacterIndex + alphabet.length : newCharacterIndex;
   return alphabet[newCharacterIndex];
};
