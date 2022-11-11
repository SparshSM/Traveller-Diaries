const notFound =(req, res, next) => {
    const error = new Error("Not Found");
    res.status(404);
    next(error);
  }

  const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.send({
      message: error.message,
      stack: error.stack,
    });
  }

  module.exports = {
    notFound,errorHandler
  }