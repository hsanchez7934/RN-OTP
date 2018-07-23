const admin = require("firebase-admin");

module.exports = (request, response) => {
  //Verify user provided a phone number
  if (!request.body.phone) {
    return response.status(422).send({ error: 'Bad Input'});
  }
  //Format the phone number to remove dashes and parenthesis - store raw numbers
  //Regex expression that matches anything that is not a character letter of numeric, and replace with string
  const phone = String(request.body.phone).replace(/[^\d]/g, "");

  //Verify that phone number is 10 digit length
  if (phone.length < 10 || phone.length > 10) {
    return response.status(422).send({ error: 'Phone not valid length'});
  };
  //Create a new user account using the phone number
  admin.auth().createUser({ uid: phone })
    .then(user => response.send(user))
    .catch(error => response.status(422).send({ error }));
  //Respond to user request saying the account was made
};
