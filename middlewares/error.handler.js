function logErrors (err, req, res, next) {
  console.error(err)
  next(err)
}

function errorHandler (err, req, res, next) {
  const { message, stack } = !!err && err

  res.status(500).json({ message, stack })
  next(err)
}

module.exports = {
  logErrors,
  errorHandler
}
