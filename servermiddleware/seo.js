module.exports = function(req, res, next) {
  if (req.url == '/') return next()

  if (req.url.match(/\/$/g) == '/') {
    let redirect = req.url.replace(/\/$/g, '')
    res.writeHead(301, { Location: redirect })
    res.end()
  }else if (req.url.match(/[A-Z\s]+/) && req.url.indexOf(".vue") == -1) {
      let redirect = req.url.toLowerCase()
      res.writeHead(301, { Location: redirect })
      res.end()
  } else {
    next()
  }
}
