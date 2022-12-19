
In this weeks assignment I was tasked with making a quiz that has several different questions, a timer counting down, incorrect answers mark down time, when all questions are done the game is over and the user can save this initials and score.

I started out by writing some pseudo code on what I wanted to accomplish with this modules challenge.
First I wanted to complete my HTML and structure out the website to include a "Start screen" with Highscores in the left side and a timer on the right side. This also includes a big button to iniate the game.

I then created "sections" for different parts of the quiz which include, Highscores to view the leaderboard, an "Enter Highscores" section that would show up after the game is done, and then the last section is my "container" that includes the game and quiz questions.

<img src=https://github.com/Ryebread5555/module4-dec-19-2022/blob/0015d2ffbbe65b59d10118956e0fd2e6a83e8e1b/assets/starting-page.jpg>

Now my HTML is complete and I want to start styling the page to make it look not so plain. I started by marking everything included in my header. When I hover over buttons I want the cursor to change to a pointer and the opacity will go lighter to show you are on the button.

I also added a progress bar to show how many questions are left as you progress through the quiz.

My CSS styling is complete and now its time for JavaScript to make my page come alive.

I've added lots of global Variables to define certain actions that would happen on my screen. One variable that I created includes multiple strings that would generate questions when the user is taking the quiz.

next I created a function for my questions that would take from my "Var Questions" variable and state that if you got the question correct you would get 20 points, else if you were wrong you would get 10 points and -5 seconds to the clock. Once you reached the end of the questions you would be hit with a gameover screen and a score.

my next function would show the "game" screen and hide all other screens. then I created a function for "getNewQuestion" that would grab a questions from my questions variable and ready them out from 0-4 and present them in the same order every time.

the next highScoresButton would let you view the High scores from the main game screen and check the leader board, while also having a home key to bring you back to the main screen to play the game.

I created a countdown function to make the in game timer while you would play the game.

The rest were just my functions for how the game would end, my high scores, and to return home.

Finally I worked on my local storage to store highscores as well as initals, when you reload the page the scores are still there.

This was a difficult activity and thinking back I would change some of the things I had done when I started it.
