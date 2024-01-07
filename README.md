A react "hello-world" game.
-----
Making mini-games is my go-to method when I want to learn new technologies.

Rules are simple.
Click on a cell and reveal what it's hiding.
Beneath all of them is a hard-coded maze.

You have 3 lives. When revealing a wall (a red cell) you will lose one.

The game finishes when: 
            - you reach the end (the green cell) - you won the game
            - you hit 3 walls (the red cells), therefore, you lose all your lives - you lost game

-----
If you want to try it out:
  - clone the repo
  - npm install (for react)
  - npm start (it will be on localhost:3000)
-----
TODO:
  - auto generate a maze (random) OR have multiple blueprints in text files and the game picks one at random
  - feature to restart the game when it's finished
  - better UI which announces you what's happened (win or lose)
  - host it on github

![hidden_maze](https://user-images.githubusercontent.com/28822224/68336243-b1948480-00e6-11ea-990e-a3124f98008a.PNG)