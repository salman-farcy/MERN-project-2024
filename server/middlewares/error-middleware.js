


const errorMiddleware = (err, req, res, next) => {
     const status = err.status || 500;
     const message = err.message || "Back End Erroe$";
     const extraDetails = err.extraDetails || "Error from Backend$";
     console.log(extraDetails);
     

     return res.status(status).json({ message, extraDetails });
};
module.exports = errorMiddleware; 