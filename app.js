var takeScreenshot = require('./take-screenshot')

takeScreenshot()
  .then(function(fileName) {
    console.log('Image saved:', fileName)
  })
  .catch(function(error) {
    console.log('There was an error taking the screenshot', error)
  })
