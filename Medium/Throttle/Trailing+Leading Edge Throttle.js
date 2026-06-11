export default function throttle(func, wait) {
  let shouldWait = false;
  let lastContext;
  let waitingArgs;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false; // window should open since we waited for wait ms
    } else {
      func.apply(lastContext, waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, wait);
    }
  };

  return function (...args) {
    if (shouldWait) {
      waitingArgs = args;
      lastContext = this;
      return;
    }
    func.apply(this, args);
    shouldWait = true;
    setTimeout(timeoutFunc, wait);
  };
}
