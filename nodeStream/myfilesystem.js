const fs = require('fs');
// basic file reader sync
var readMe = fs.readFileSync('readMe.txt', 'utf8')
console.log(readMe)
//basic file writter sync
fs.writeFileSync('writeMe.txt',"write Me \n write line 2")
console.log('done writing')
// read file async
fs.readFile('writeMe.txt', 'utf8', function(err, data){
    console.log(`reading file contect asynchronizely: \n ${data}`)
})
console.log('code after asyc reading')