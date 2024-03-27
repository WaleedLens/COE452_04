const functions = require('@google-cloud/functions-framework');

functions.http('div', (req, res) => {
  // Default values for X and Y
  let X = 0;
  let Y = 0;
  
  if (req.query.data) {
    try {
      const data = JSON.parse(req.query.data);
      X = data.X;
      Y = data.Y;
    } catch (error) {
      res.status(400).send({error: "Invalid JSON format in query parameter."});
      return;
    }
  }

  const result = X / Y; 

  const responseObject = {
    X: X,
    Y: Y,
    result: result
  };


  res.json(responseObject);
});
