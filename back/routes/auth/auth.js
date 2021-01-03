const express = require('express');
const connection = require('../../helpers/db');
const router = express.Router();

router.post('/signup', (req, res, next) => {
  const { email, password, name, lastname } = req.body;
  connection.query(
    'INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)',
    [email, password, name, lastname],
    (error, results) => {
      if (error)
        res.status(500).json({ flash: error.message });
      else
        res.status(200).json({ flash: "User has been signed up !" });
    }
  )
});

module.exports = router;