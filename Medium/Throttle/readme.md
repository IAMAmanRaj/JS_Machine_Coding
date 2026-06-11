## Notes

* Here we are implementing the higher order function `throttle` which returns a new function that wraps the original callback. We can call this returned function as the wrapper.
* This wrapper function controls how frequently `func` gets executed.
* So, while using this implementation we store the returned wrapper function like this:

`const throttledFn = throttle(cb, 300);`

* To get the throttling behavior, call the returned throttled function stored in (`throttledFn`) instead of invoking the original callback (`cb`) directly.

### Leading Throttle

* The first invocation executes immediately.
* After execution, we start a wait window of `wait` milliseconds.
* Any calls made during this wait window are ignored.
* Once the wait period is over, the throttle window opens again and the next call can execute.

### Leading + Trailing Throttle

* The first invocation still executes immediately.
* If additional calls occur during the wait window, we do not execute them immediately.
* Instead, we keep track of the latest arguments and `this` context received during the waiting period.
* When the current wait window ends:

  * If no calls were received, we simply reopen the throttle window.
  * If calls were received, we execute `func` using the most recent arguments and context, then start another wait window.
* This ensures that the latest call is never lost while still limiting execution frequency.
