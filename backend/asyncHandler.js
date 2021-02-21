// https://stackoverflow.com/questions/51535455/express-js-use-async-function-on-requests

const asyncHandler = fn => (req, res, next) =>
  Promise
    .resolve(fn(req, res, next))
    .catch(next)


export { asyncHandler }