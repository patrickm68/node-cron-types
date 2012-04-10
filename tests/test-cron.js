var testCase = require('nodeunit').testCase,
    cron = require('../lib/cron');

module.exports = testCase({
  'test second (* * * * * *)': function(assert) {
    assert.expect(1);
    var c = new cron.CronJob('* * * * * *', function() {
      assert.ok(true);
    });
    setTimeout(function() {
      c.stop();
      assert.done();
    }, 1250);
  },
  'test second with oncomplete (* * * * * *)': function(assert) {
    assert.expect(1);
    var c = new cron.CronJob('* * * * * *', function(done) {
      done();
    }, function () {
      assert.ok(true);
    });
    setTimeout(function() {
      c.stop();
      assert.done();
    }, 1250);
  },
  'test every second for 5 seconds (* * * * * *)': function(assert) {
    assert.expect(5);
    var c = new cron.CronJob('* * * * * *', function() {
      assert.ok(true);
    });
    setTimeout(function() {
      c.stop();
      assert.done();
    }, 5250);
  },
  'test every second for 5 seconds with oncomplete (* * * * * *)': function(assert) {
    assert.expect(5);
    var c = new cron.CronJob('* * * * * *', function(done) {
      done();
    }, function() {
      assert.ok(true);
    });
    setTimeout(function() {
      c.stop();
      assert.done();
    }, 5250);
  },
  'test every 1 second for 5 seconds (*/1 * * * * *)': function(assert) {
    assert.expect(5);
    var c = new cron.CronJob('*/1 * * * * *', function() {
      assert.ok(true);
    });
    setTimeout(function() {
      assert.done();
      c.stop();
    }, 5250);
  },
  'test every 1 second for 5 seconds with oncomplete (*/1 * * * * *)': function(assert) {
    assert.expect(5);
    var c = new cron.CronJob('*/1 * * * * *', function(done) {
      done();
    }, function() {
      assert.ok(true);
    });
    setTimeout(function() {
      c.stop();
      assert.done();
    }, 5250);
  },
  'test every second for a range ([start]-[end] * * * * *)': function(assert) {
    assert.expect(2);
    var d = new Date();
    var s = d.getSeconds()+2;
    var e = s + 1; //end value is inclusive
    var c = new cron.CronJob(s + '-' + e +' * * * * *', function() {
      assert.ok(true);
    });
    setTimeout(function() {
      c.stop();
      assert.done();
    }, 3250);
  },
  'test every second for a range with oncomplete ([start]-[end] * * * * *)': function(assert) {
    assert.expect(2);
    var d = new Date();
    var s = d.getSeconds()+2;
    var e = s + 1; //end value is inclusive
    var c = new cron.CronJob(s + '-' + e +' * * * * *', function(done) {
      done();
    }, function() {
      assert.ok(true);
    });
    setTimeout(function() {
      c.stop();
      assert.done();
    }, 3250);
  }
});
