var webshot = require('webshot')

var options = {
  screenSize: {
    width: 1024,
    height: 800
  },
  shotSize: {
    width: 'window',
    height: 'window'
  },
  shotOffset: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
}

function takeScreenshot() {
  var fileName = Date.now() + '.png'
  webshot('flickr.com', fileName, options, function(err) {
    console.log('Image saved:', fileName)
  })
}

module.exports = takeScreenshot
