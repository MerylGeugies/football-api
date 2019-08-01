const Team = require('./model');
const { Router } = require('express');
const router = new Router;

router.get('/team', (require, response, next) => {
  Team.findAll()
    .then(Team => {
      console.log(Team.map(Team => Team.DataValue ))
    })
  
  // this(() => Team.findAll(results.map(response.send(Team.type) )))
  //   .catch(console.error)
  //.then(() => Message.create({ body: 'hello!', line_count: 1}))

})
module.export = router;

// app.get('/messages', (request, response, next) => {
//   Message.findAll()
//       .then(messages => {
//           console.log(messages.map(message => message.dataValues))
//           return response.json({ messages: messages })
//       })
// })