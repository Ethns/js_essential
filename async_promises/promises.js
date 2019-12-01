const posts = [
    { title: 'Post one', body: 'this is post one'},
    { title: 'Post two', body: 'this is post two'}
];

function getposts(){
    setTimeout( () => {
        let output = '';
        posts.forEach((post, index) => {
            output += `the title of the post is ${post.title}\n`
        });
        console.log(output);
    }, 1000)
}

function createpost(post){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if( !error ){
                resolve()
            }else{
                reject("something went wrong")
            }
        })
    }, 2000);
}
// single Promise (if we dont comment out below function call, there will be an extra "Post three" be printed out, dont know why)
createpost({ title: 'Post three', body: 'this is post three'}).then(getposts).catch( err => console.log(err));

// Async / Await
async function init() {
    await createpost({ title: 'Post three', body: 'this is post three'});
    getposts();
}
init(); // same as above single Promise, just more elegant without .then or .catch

// Promise all: will await until the longest promise resolved and then execute
const promise01 = Promise.resolve('hellw world');
const promise02 = 10
const promise03 = new Promise( (resolve, reject) => {
    setTimeout( resolve, 2000, 'Say goodbye')
})

Promise.all( [promise01, promise02, promise03] ).then(values => console.log(values))
