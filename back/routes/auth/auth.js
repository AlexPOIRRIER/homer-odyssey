const express = require('express');
const connection = require('../../helpers/db');
const router = express.Router();

router.post('/signup', (req, res, next) => {
  const { email, password, name, lastname } = req.body;
  connection.query(
    'INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)',
    [email, password, name, lastname],
    (err, results) => {
      if(err) {
        res.status(500).send('Error');
        res.end()
      }else{
        res.status(200).send('I am in POST signup');
      }
    }
  )
});

module.exports = router;