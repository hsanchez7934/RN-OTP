const admin = require("firebase-admin");

module.exports = (request, response) => {
  //Verify user provided a phone number
  if (!request.body.phone) {
    return response.status(422).send({ error: 'Bad Input'});
  }
  //Format the phone number to remove dashes and parenthesis - store raw numbers
  //Regex expression that matches anything that is not a character letter of numeric, and replace with string
  const phone = String(request.body.phone).replace(/[^\d]/g, "");

  //Create a new user account using the phone number
  //Respond to user request saying the account was made
  response.send(request.body);
};
