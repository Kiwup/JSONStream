var JSONStream = require('../');
var test = require('tape')

test('parse objects', function (t) {
    let data
    var stream = JSONStream
      .parse('#')
      .once('data', function (parsedData) {
        data = parsedData
      })
      .on('end', function () {
        t.deepEqual(data, { bar: 'foo', bar2: 'foo2' });
        t.end();
      });
  
    stream.write('{"bar":"foo", "bar2": "foo2"}');
    stream.end();
});

test('parse objects nested', function (t) {
    let data
    var stream = JSONStream
      .parse('data.#')
      .once('data', function (parsedData) {
        data = parsedData
      })
      .on('end', function () {
        t.deepEqual(data, { bar: 'foo', bar2: 'foo2' });
        t.end();
      });
  
    stream.write('{"data": {"bar":"foo", "bar2": "foo2"}}');
    stream.end();
});