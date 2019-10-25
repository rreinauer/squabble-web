const router = require('express').Router();
const User = require('../db/models/user');
module.exports = router;

router.post('/login', async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
      console.log('No such user found:', req.body.username);
      res.status(401).send('Wrong username and/or password');
    } else {
      req.session.userId = user.id;
      req.login(user, err => (err ? next(err) : res.json(user)));
    }
  } catch (err) {
    next(err);
  }
});

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

router.get('/me', (req, res, next) => {
  if (!req.user) {
    res.status(200).end();
  } else {
    res.send(req.user);
  }
});
