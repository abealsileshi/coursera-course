const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gmail.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gmail.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gmail.com",
        DOB:"21-03-1989",
    },
];

// let newUser = {firstName: 'Kalkidan', lastName: 'Assefa', email: 'kalkidan@gmail.com', DOB : '01-05-2015'}
// users.push(newUser)

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  res.send(JSON.stringify({users}, null, 4))
});

// POST request: Create a new user
router.post("/", (req,res) => {
    let newUser = {
      firstName: req.query.firstName, 
      lastName: req.query.lastName, 
      email: req.query.email, 
      DOB : req.query.DOB
    }
  
    users.push(newUser)
    res.send('The user : '+ req.query.firstName + " has been added!")
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  
  eInfo = users.filter(user => user.email == req.params.email)

  res.send(eInfo)
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


router.put("/:email", (req, res) => {
  // Extract email parameter and find users with matching email
  const email = req.params.email;
  let filtered_users = users.filter((user) => user.email === email);
  
  if (filtered_users.length > 0) {
      // Select the first matching user and update attributes if provided
      let filtered_user = filtered_users[0];
      
       // Extract and update DOB if provided
      let DOB = req.query.DOB;    
      if (DOB) {
          filtered_user.DOB = DOB;
      }
      
      /*
      Include similar code here for updating other attributes as needed
      */
     let firstName = req.query.firstName;
     if(firstName) {
          filtered_user.firstName = firstName;
     }
     
     let lastName = req.query.lastName;
     if(lastName) {
          filtered_user.lastName = lastName;
     }
      
      // Replace old user entry with updated user
      users = users.filter((user) => user.email != email);
      users.push(filtered_user);
      
      // Send success message indicating the user has been updated
      res.send(`User with the email ${email} updated.`);
  } else {
      // Send error message if no user found
      res.send("Unable to find user!");
  }
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  //extract the email parameter from the requested URL
  const email = req.params.email;
  // filter the users array to exclude the user with the specified email
  users = users.filter((user) => user.email != email)
  //send a success message as the response, indicating the user has been deleted
  res.send(`User with the email ${email} deleted `);
});

module.exports=router;
