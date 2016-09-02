var Team = require('../../models/team');
var Fixture = require('../../models/fixture');
var router = require('express').Router();

// \\ ** TEAM API ENDPOINT ** \\ //

router.get('/', function (req, res, next) {
  if (!req.headers['x-auth']) {
    return res.sendStatus(401)
  }
  if (req.auth.username) {
    Team.find()
    .sort('-date')
    .exec(function (err, teams) {
      if (err) { return next(err) }
      res.json(teams)
    })
  }
  else {
    res.status(401)
  }
})

router.get('/:manager_id', function (req, res, next) {
  if (!req.headers['x-auth']) {
    return res.sendStatus(401)
  }
    if (req.auth.username) {
    Team.find({'manager': req.params.manager_id})
    .sort('-date')
    .exec(function (err, teams) {
      if (err) { return next(err) }
      res.json(teams)
    })
  }
  else {
    res.status(401)
  }
})

router.get('/myteams/:players', function (req, res, next) {
  if (!req.headers['x-auth']) {
    return res.sendStatus(401)
  }
    if (req.auth.username) {
      var ids = req.params.players.split(",");

      Team.find({'players': { $in : ids } })
      .sort('-date')
      .exec(function (err, teams) {
        if (err) { return next(err) }
        res.json(teams)
      })
    }
    else {
      res.status(401)
    }
})

router.get('/team/:team_id', function (req, res, next) {
    Team.findById(req.params.team_id)
    .populate('players')
    .populate('manager')
    .populate('fixtures')
    .sort('-date')
    .exec(function (err, teams) {
      if (err) { return next(err) }
      res.json(teams)
    })

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

router.put('/player', function (req, res) {
  Team.findByIdAndUpdate(
    req.body.team_id,
    {$push: {players: {_id: req.body.player_id}}},
        {new: true},
        function(err, doc){
            if(err){
                res.send(err);
            } else {
                res.json(doc);
            }
        });
});

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
