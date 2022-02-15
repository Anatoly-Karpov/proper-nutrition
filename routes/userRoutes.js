// const express = require('express');

// const router = express.Router();
// const sha256 = require('sha256');

// router.post('/register', async (req, res) => {
//   const {
//     name, email, password,
//   } = req.body;
//   try {
//     const user = await User.create({
//       name, email, password: sha256(password),
//     });
//     req.session.username = user.name;
//     req.session.userId = user.id;
//     res.json({ id: user.id });
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// // login
// router.get('/login', async (req, res) => {
//   res.render('login');
// });




// module.exports = router;
