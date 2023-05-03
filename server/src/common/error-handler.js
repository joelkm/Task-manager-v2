const handleError = (err, req, res) => {
  console.error(err)
  
  if (!err.isOperational) {
    console.error('Shutting down the application...');
    process.exit(1);
  }
  return res.status(err.statusCode).json({
    message: err.message,
  });
};
  
module.exports = handleError;