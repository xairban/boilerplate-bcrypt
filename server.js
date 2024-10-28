'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt	  = require('bcrypt');

fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

bcrypt.hash(myPlaintextPassword, saltRounds, (err,hash) => {
  if (err) {
    console.error("Hashing error:", err);
  } else {
    console.log("Hash generated:", hash);

    bcrypt.compare(myPlaintextPassword, hash, (err,result) => {
      if (err) {
        console.error("Comparison error:", err);
      } else {
        console.log("Password match:", result);
      }
    });

   bcrypt.compare(someOtherPlaintextPassword, hash, (err,result) => {
      if (err) {
        console.error("Comparison error:", err);
      } else {
        console.log("Password match:", result);
      }
    });

  }
});

//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
