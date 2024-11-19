const exceptionHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({ success: false, message: "An error ocurred!" });
};

export { exceptionHandler };