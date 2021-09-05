# heroku-sudoku

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
- Now we would open the heroku app that I made [Hank Scorpio](https://knight-hello-heroku.herokuapp.com/)
