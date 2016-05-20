var phantom = require('phantom')
var https = require('https')

// var req = https.request({
//   protocol: 'https:',
//   hostname: 'mva.microsoft.com',
//   path: '/zh-cn/training-courses/windows-web--14740',
//   port: 443,
//   method: 'GET',
//   headers: {
//     'User-Agent': 'Baiduspider'
//   }
// })

// req.on('response', function (res) {
//   console.log(res.headers)
//   console.log(res.statusCode)
//   var data = ''
//   res.on('data', function(chunk) {
//     data += chunk
//   })
//   res.on('end', function() {
//     // console.log(data)
//   })
// })

// req.end()

var phantom = require('phantom');

var sitepage = null;
var phInstance = null

phantom.create()
  .then(function (instance) {
    phInstance = instance
    return phInstance.createPage()
  })
  .then(function (page) {
    sitepage = page
    return page.open('https://mva.microsoft.com/zh-cn/training-courses/windows-web--14740')
  })
  .then(function (status) {
    return sitepage.property('content')
  })
  .then(function (content) {
    console.log('test')
    sitepage.close()
    phInstance.exit()
  })
  .catch(function (error) {
    console.log(error)
    phInstance.exit()
  })



