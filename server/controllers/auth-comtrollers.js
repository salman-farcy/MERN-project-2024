//*Controllers




//* Home Page Logic
const home = async (req, res) => {
     try{
          res.status(200).send("Home Welcome to world best mern series by salman farcy USING router");
     }
     catch(error){
          console.log(error);
     }    
}

//* Register
const register = async (req, res) => {
     try{
          res.status(200).send("Welcome to registration page");
     }
     catch(error){
          console.log(error);
          
     }
}

//* About 
const about = async (req, res) => {
     try{
          res.status(200).send("This is a About page")
     }
     catch(error){
          console.log(error);
     }
}


module.exports = {home, register, about}