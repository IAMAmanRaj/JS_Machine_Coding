// T.C : O(N^2) , S.C : O(N+M) : where N is recursion depth & M is heap space
export default function classNames(...args) {
  const classes = [];

  args.forEach((arg) => {
    // if arg is a falsy value
    if (!arg) return;

    const argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(arg);
      return;
    }

    // before going towards obj, we will check if curr element is an array, since typeof array is also obj

    if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
      return;
    }

    if (argType === "object") {
      for (const key in arg) {
        if (Object.hasOwn(arg, key) && arg[key]) classes.push(key);
      }
      return;
    }
  });

  return classes.join(" ");
}
