const express = require("express");
const details_farmer = express.Router();
const userModel=require("./models/usermodels");

details_farmer.post("/login",signupUser);

async function signupUser(req, res) {
    // let userDetails=req.body;
    // let name=userDetails.name;
    // let email=userDetails.email;
    // let password=userDetails.password;
    try {
      let userObj = req.body;
      // user.push({email,name,password});
      //put all data in mongo db
      // create document in userModel
      console.log(req.body);
      
      console.log("user");
      let user = await userModel.create(userObj);
      console.log("user", user);
      res.json({
        message: "user signedUp",
        user: userObj,
      });
    } catch (err) {
      console.log(err);
      res.json({ message: err.message });
    }
  }

// async function loginUser(req, res) {
//   try {
//     if (req.body.email) {
//     //   let users = await userModel.findOne({ email: req.body.email });
//       if (users) {
//         if (users.password === req.body.password) {
//           let payload = users["_id"];
//           return res.json({
//             message: "user Logged In",
//           });
//         } else {
//           return res.json({
//             message: "Incorrect email or password",
//           });
//         }
//       } else {
//         return res.json({
//           message: "user not present",
//         });
//       }
//     } else {
//       return res.json({
//         message: "fill up details",
//       });
//     }
//   } catch (err) {
//     return res.status(500).json({
//       message: err.message,
//     });
//   }
// }
module.exports = details_farmer;
