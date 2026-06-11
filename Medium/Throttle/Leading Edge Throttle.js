export default function throttle(func, wait) {
  let shouldWait = false;
  return function (...args) {
    if (shouldWait) return;
    func.apply(this, args);
    shouldWait = true;
    setTimeout(() => (shouldWait = false), wait);
  };
}
