export default function classNames(...args) {
  const result = [];
  function classNamesImpl(result, args) {
    args.forEach((arg) => {
      // falsy values check
      if (!arg) return;

      const argType = typeof arg;

      if (argType === "string" || argType === "number") {
        result.push(arg);
        return;
      }
      // before going towards obj, we will check if curr element is an array, since typeof array is also obj
      if (Array.isArray(arg)) {
        classNamesImpl(result, arg);
        return;
      }
      // safe to proceed to object directly now
      if (argType === "object") {
        for (const key in arg) {
          if (Object.hasOwn(arg, key) && arg[key]) result.push(key);
        }
        return;
      }
    });
  }

  classNamesImpl(result, args);

  return result.join(" ");
}
