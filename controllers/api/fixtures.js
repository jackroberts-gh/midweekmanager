'use strict';

let Team = require('../../models/team');
let Fixture = require('../../models/fixture');
let router = require('express').Router();

// \\ ** FIXTURE API ENDPOINT ** \\ //

router.get('/', function(req, res, next) {
  if (!req.headers['x-auth']) {
    return res.sendStatus(401);
  }
  if (req.auth.username) {
    Fixture.find()
      .sort('-date')
      .exec(function(err, fixtures) {
        if (err) {
          return next(err);
        }
        res.json(fixtures);
      })
  } else {
    res.status(401);
  }
})

router.post('/', function(req, res, next) {
  if (!req.headers['x-auth']) {
    return res.sendStatus(401);
  }
  if (req.auth.username) {
    let fixture = new Fixture({
      opposition: req.body.opposition,
      fixturedate: req.body.fixturedate
    })
    fixture.save(function(err, fix) {
      if (err) {
        return next(err);
      }
      res.status(201).json(fix);
    })
  } else {
    res.status(401);
  }
})

router.get('/fixture/:fixture_id', function(req, res, next) {
  if (!req.headers['x-auth']) {
    return res.sendStatus(401);
  }
  if (req.auth.username) {
    Fixture.findOne({
      _id: req.params.fixture_id
    }, function(err, fixture) {
      if (err) {
        return next(err);
      }
      res.json(fixture);
    })
  } else {
    res.status(401);
  }
})

router.put('/result', function(req, res) {
  if (!req.headers['x-auth']) {
    return res.sendStatus(401)
  }
  if (req.auth.username) {
    Fixture.findById(req.body.fixture_id, function(err, fixture) {
      fixture.result = true;

      fixture.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.status(201).json(fixture);
      })
    })
  } else {
    res.status(401)
  }
})

router.put('/player', function(req, res) {
  if (!req.headers['x-auth']) {
    return res.sendStatus(401)
  }
  if (req.auth.username) {
    Fixture.findByIdAndUpdate(req.body.fixture._id, req.body.fixture, {
      upsert: true,
      new: true
    }, function(err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.json(doc);
      }
    })
  } else {
    res.status(401)
  }
})

module.exports = router;