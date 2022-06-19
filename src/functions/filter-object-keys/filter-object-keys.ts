export const filterObjectKeys = <T = Record<string | number, unknown>, U = T>(
   inputObject: T,
   ...keys: (keyof T)[]
): U => {
   return (Object.keys(inputObject) as (keyof T)[])
      .filter((k) => !keys.includes(k))
      .reduce(
         (newObject, key) => ({
            ...newObject,
            [key]: inputObject[key],
         }),
         {}
      ) as U;
};
