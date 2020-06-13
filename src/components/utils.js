/**
 * 函数防抖
 */
// eslint-disable-next-line import/prefer-default-export
export const debounce = (fn, waitTime) => {
  let timer = null
  waitTime = waitTime || 1000
  return () => {
    const me = this
    // eslint-disable-next-line no-undef
    const args = arguments
    if (timer) {
      window.clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(me, args)
    }, waitTime)
  }
}
