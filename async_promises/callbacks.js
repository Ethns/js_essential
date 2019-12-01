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

function createpost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

// getposts(); //pass this function call into the `createpost` function as a callback
// so that the console output will wait until the "Post three" being added by the `createpost` function, then print out all posts)

createpost({ title: 'Post three', body: 'this is post three'}, getposts)