export const isDefined = (value: unknown): boolean => {
   return value !== null && value !== undefined && (typeof value === "number" ? !isNaN(value) : true);
};
