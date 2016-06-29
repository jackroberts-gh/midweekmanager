var Player = require('../../models/player');
var router = require('express').Router();

router.get('/', function (req, res, next) {
  //if (!req.headers['x-auth']) {
  //  return res.sendStatus(401)
  //}
  if (req.auth.username) {
    Player.find()
    .sort('-date')
    .exec(function (err, players) {
      if (err) { return next(err) }
      res.json(players)
    })
  }
//  else {
//    res.status(401)
//  }
})

router.get('/:user_id', function (req, res, next) {
//  if (!req.headers['x-auth']) {
//    return res.sendStatus(401)
//  }
  //if (req.auth.username) {
      Player.find({'_userid': req.params.user_id}, '_id')
      .sort('-date')
      .exec(function (err, players) {
        if (err) { return next(err) }
        res.json(players)
      })
  //}
//  else {
  //  res.status(401)
  //}
})

router.post('/', function (req, res, next) {
  var team = new Team({
    name:    req.body.name,
    type:    req.body.type,
    playday: req.body.playday,
    manager: req.body.manager
  })
  team.save(function (err, team) {
    if (err) { return next(err) }
    res.status(201).json(team)
  })
})

router.get('/:team_id', (function(req, res) {
        Team.findById(req.params.team_id, function(err, team) {
            if (err)
                res.send(err);
            res.json(team);
        });
    })
  )

router.put('/:team_id', function(req, res) {
        Team.findById(req.params.team_id, function(err, team) {
            if (err)
                res.send(err);

            team.username = req.body.username;
            team.body = req.body.body;

            team.save(function(err) {
                if (err)
                    res.send(err);

            res.json({ message: 'Team updated!' });
            });
        });
    })

router.delete('/:team_id', function(req, res) {
        Team.remove({
            _id: req.params.team_id
        }, function(err, team) {
            if (err)
                res.send(err);
                res.json({ message: 'Successfully deleted' });
        });
    })

// \\ ** END OF TEAM SERVICE ** \\ //

module.exports = router;
