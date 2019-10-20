const fs = require('fs')

// read something from a file and pump the content to another file without using pipe
const readStream = fs.createReadStream(`${__dirname}/readme.txt`)
const writeStream = fs.createWriteStream(`${__dirname}/non-pipe-writeme.txt`)
//readable stream events
readStream.on('end', () => { //emit when reading is finished
    console.log('There will be no more data.');
});
readStream.on('data', function(receivedData){ //emit everytime when read buffer is full, will read next chunk from the file
    writeStream.write(`received data: ${receivedData}`)
}) 

//using pipe to read something from a file and pump the content to another file (the effect is same as above)
const myReadableStream = fs.createReadStream(`${__dirname}/readMe.txt`, 'utf8')
const myWritableStream = fs.createWriteStream(`${__dirname}/writeMe.txt`)
myReadableStream.pipe(myWritableStream)
