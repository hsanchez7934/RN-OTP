/* eslint-disable */
const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = (request, response) => {
  if (!request.body.phone) {
    return response.status(422).send({ error: 'You must provide a phone number.'})
  }

  const phone = String(request.body.phone).replace(/[^\d]/g, "");

  admin.auth().getUser(phone)
    .then(userRecord => {
      const code = Math.floor(Math.random() * 8999 + 1000);

      twilio.messages.create({
        body: 'Your code is ' + code,
        to: phone,
        from: '+17206051897'
      }, (error) => {
        if (error) {
          return response.status(422).send(error)
        }
        admin.database().ref('users/' + phone)
          .update({ code: code, codeValid: true }, () => {
            response.status({ success: true });
          })
      })
    })
    .catch(error => response.status(422).send(error))
};
