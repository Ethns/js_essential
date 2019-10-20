// const zlib = require('zlib')
// const gzip = zlib.createGzip();
const fs = require('fs');
const tar = require('tar')
// compress a folder
const readStream = tar.c({
    gzip: true,
    sync: true
},
    ['dir2archived']
).pipe(fs.createWriteStream(`${__dirname}/tarfolder/tar.tgz`))
// uncompress a tar ball
fs.createReadStream(`${__dirname}/tarfolder/tar.tgz`).pipe(
    tar.x({
        sync: true,
        strip: 0,
        C: 'tarunzipped'
    })
)
// copy a new tar and rename it then put it under root directory
const myReadStream = fs.createReadStream(`${__dirname}/tarfolder/tar.tgz`)
myReadStream.pipe(fs.createWriteStream('toBeSent.tar.gz'))