module.exports = (request, response) => {
  if (!request.body.phone || !request.body.code) {
    return response.status(422).send({ error: 'Phone and code must be provided'});
  }
  const phone = String(request.body.phone).replace(/[^\d]/g, "");
  const code = parseInt(code);

  

}
