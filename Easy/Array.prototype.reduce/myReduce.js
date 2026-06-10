Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (this == null)
    throw new TypeError("cannot convert undefined or null to an object");

  if (typeof callbackFn !== "function")
    throw new TypeError(callbackFn + "is not a function");

  const noInitialValue = arguments.length < 2;

  const obj = Object(this);
  const len = obj.length;

  let acc;
  let k = 0;

  if (noInitialValue) {
    // Skip holes in sparse arrays
    while (k < len && !Object.hasOwn(obj, k)) k++;

    if (k > len)
      throw new TypeError("reduce of empty array with no initial value");

    acc = obj[k];
    k++;
  } else {
    acc = initialValue;
  }

  for (; k < len; k++) {
    if (Object.hasOwn(obj, k)) acc = callbackFn(acc, obj[k], k, obj);
  }

  return acc;
};
