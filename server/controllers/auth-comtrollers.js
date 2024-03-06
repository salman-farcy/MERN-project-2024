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
          console.log(req.body);
          res.status(200).send({msg: req.body});
     }
     catch(error){
          console.log(error);
     }
}

//* About 
const about = async (req, res) => {
     try{
          res.status(400).send({msg: 'this is a bad requiest'})
     }
     catch(error){
          console.log(error);
     }
}


module.exports = {home, register, about}