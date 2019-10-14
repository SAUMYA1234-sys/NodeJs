

console.log('after');
getUser(1, (user) => {
    console.log('User log ', user);
})

getRepositories('Mosh Video', (repoLst) => {
    console.log('repo',repoLst);
})

console.log('before');

function getUser(id, callback){
    setTimeout(() => {
     console.log('Reading a user');
     callback({id:id,gitUsrName:'Git'});
    },2000);
}

function getRepositories(username){
    const p = new Promise((resolve, reject)=>{
        resolve(['repo1','repo2','repo3']) ;
    })
   
}

getUser(1,getRepos);

function displayCommit(commits){
    console.log(commits);
}

function getCommits(repo){
    getCommits(repo, displayCommit);
}
function getRepos(user){
    getRepositories(user.getUsrName,getCommits)
}