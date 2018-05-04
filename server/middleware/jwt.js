
// Middleware function


const verifyToken = (req, res, next) => {
  // Get the auth header value
  const headerHolder = req.headers.authorization;
  // Check if bearer is undefined
  if (typeof headerHolder !== 'undefined') {
    // Split and turn into an array
    const headerHolderArray = headerHolder.split(' ');
    // Get token from the arrray
    const mainToken = headerHolderArray[1];

    // Sets the header to the request object
    req.token = mainToken;
    // Go straight to the next middleware
    next();
  } else {
    // Display an error status of 403 Forbidden
    res.sendStatus(403);
  }
};
// Exporting the middleware
export default verifyToken;
