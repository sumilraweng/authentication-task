//This function create the Immutable object This is called deepFreeze

export function creatingEnums(obj) {
  if (typeof obj === "object") {
    for (const child in obj) creatingEnums(obj[child]);
    return Object.freeze(obj);
  }
}
