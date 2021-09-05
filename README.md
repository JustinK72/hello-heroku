# heroku-sudoku
[Functioning Heroku](https://knight-hello-heroku.herokuapp.com/)

**Welcome to the Hello-Heroku App program and here**

We will be going through a basic tutorial on how to create or install and run the hello heroku app.

## Install - Tutorial
In this section we will go over the necessary steps to installing your app from this Gitrepsoitory.
1. We will need to download my repository
2. Next we open virtual studio code
3. We will then drag the folder over the now open VScode
   1. If folder did not open click *file -> open -> hello-heroku folder*
4. Now we need to open the terminal `ctrl+shift+~` which opens your default
   1. `ctrl+shift+p` and select git bash

Now we have to check and see if we have the neccissary programs installed
- We will check to see if Node.js is install by typing `npm -v` into the terminal
   - If not download [Node.js](https://nodejs.org/en/)
      - Accept all defaults and install
   - Type `node -v` to check if installed
      - if not close and open VScode again
   - Check to see if npm is installed `npm -v`
- You will need to initialize it with `$:` `npm init -y`
- We will also need `express.js`
   - Install *express.js* `$:` `install i express --save`
- Now we will open index file
  - Either click on the file named `index.js`
  - or type `index.js`
- Next we will check the file `package.json` to make sure we see this code
```json
 "scripts": {
         "test": "echo \"Error: no test specified\" && exit 1",
         "start": "node index.js"
    },
```
- If the code is missing you will need to add it
- Then you will need to save it all
- Now we would open the heroku app that I made [Hank Scorpio](https://knight-hello-heroku.herokuapp.com/) to check and see if everything functions

## Creating - Tutorial
In this section we will go about creating your own version of a heroku app
You will go through the same steps opening *vsCode* and opening the terminal (GitBASH)
We also need to follow the same steps to checking the installs
Now we have to check and see if we have the neccissary programs installed
- We will check to see if Node.js is install by typing `npm -v` into the terminal
   - If not download [Node.js](https://nodejs.org/en/)
      - Accept all defaults and install
   - Type `node -v` to check if installed
      - if not close and open VScode again
   - Check to see if npm is installed `npm -v`

- [ ] The folder will be put on your desktop; `$:` `cd desktop`
- [ ] Create the root folder; `$:` `mkdir you-choo-choo-choose-me`
- [ ] Go into the folder; `$:` `cd you-choo-choo-choose-me`
- [ ] Open the folder; `$:` `open you-choo-choo-choose-me`
- [ ] You will need to initialize it with; `$:` `npm init -y`
- [ ] Install *express.js*; `$:` `install i express --save`
- [ ] Create a new file; `$:` `touch index.js`
- [ ] Open *index.js* in VScode and place this code into it;
```
console.log('hello node');

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('<h3>have you ever seen a man say goodbye to a pair of shoes before?</h3> <a href = "https://github.com/JustinK72/hello-heroku"> thrillhouse </a> ') //This will be replaced with your own link to tie back into your github
});

app.get('/about', function (req, res) {
    res.sendFile('/README.md', { root: _dirname });
});

app.listen(process.env.PORT || 3000)
```
- [ ] Open *package.json* and edit it to match this;
```json
 "scripts": {
         "test": "echo \"Error: no test specified\" && exit 1",
         "start": "node index.js"
    },
```
**Make sure to save frequently otherwise you will lose all of your progress**
- [ ] Create a *.gitignore* file; `$:` `echo 'node_modules' >> .gitignore`
- [ ] Initialize local git repo; `$:` `git init`
- [ ] Go to [GitHub](https://github.com/)
   - [ ] sign in (must have active account)
      - [ ] if you do not have one make one
   - [ ] create a new repo name it something distinct that you would know
   - [ ] do **NOT** check any defaults just name it and create it
- [ ] Connect our **remote repo** to the local repo
```
echo "# hello-heroku-or-whatever-you-named-it" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/{YOUR-USER-NAME}/{YOUR-REPO-NAME}.git
git push -u origin main
```
- [ ] Now we need to add it all to it; `$:` `git add .`
- [ ] Go to Heroku and login [Heroku](https://www.heroku.com)
   - [ ] just like gitHub you need a active account
- [ ] 
