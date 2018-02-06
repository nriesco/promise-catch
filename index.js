var fs = require('fs');

// simple promise-style readfile
let promiseReadFile = function(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + '/' + fileName, (err, data) => {
      if (!err) {
        return resolve(data.toString());
      } else {
        return reject(err);
      }
    });
  });
};


// example 1
Promise.resolve()
  .then(() => promiseReadFile('in.txt'))
  .then(data => console.log('## EXAMPLE 1:', data));


// example 2
Promise.resolve()
  .then(() => promiseReadFile('in-not.txt'))
  .then(data => console.log(data))
  .catch(e => console.log('## EXAMPLE 2:', e.message));


// example 3
Promise.resolve()
  .then(() => promiseReadFile('in-not.txt'))
  .then(data => console.log('step 1 ok', data))
  .catch(e => { throw new Error('Fail on step #1: ' + e.message); })
  .then(() => promiseReadFile('in.txt'))
  .then(data => console.log('step 2 ok', data))
  .catch(e => { throw new Error('Fail on step #2: ' + e.message); })
  .then(() => promiseReadFile('in.txt'))
  .then(data => console.log('step 3 ok', data))
  .catch(e => { throw new Error('Fail on step #3: ' + e.message); })
  .then(() => promiseReadFile('in.txt'))
  .then(data => console.log('step 4 ok', data))
  .catch(e => { throw new Error('Fail on step #4: ' + e.message); })
  .catch(e => console.log('## EXAMPLE 3 - Final report: ', e.message));


// example 4
Promise.resolve()
  .then(() => promiseReadFile('in-not.txt'))
  .then(data => console.log('step 1 ok', data))
  .catch(e => Promise.reject('Fail on step #1: ' + e.message))
  .then(() => promiseReadFile('in.txt'))
  .then(data => console.log('step 2 ok', data))
  .catch(e => Promise.reject('Fail on step #2: ' + e.message))
  .then(() => promiseReadFile('in.txt'))
  .then(data => console.log('step 3 ok', data))
  .catch(e => Promise.reject('Fail on step #3: ' + e.message))
  .then(() => promiseReadFile('in.txt'))
  .then(data => console.log('step 4 ok', data))
  .catch(e => Promise.reject('Fail on step #4: ' + e.message))
  .catch(e => console.log('## EXAMPLE 4 - Final report: ', e));



