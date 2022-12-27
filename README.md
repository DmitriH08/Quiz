DOCUMENTATION

Tools and frameworks:
React JS,PSh, CSS.

This project was created for trying your knowledge in quiz game about popular "old school" game Heroes of Might and Magic 3 + add. version Horn of the Abyss.
Strong side of this app is versatility (If you want to add or change for example data, you dont crush app probably).This app have tree-kind code structure:

1) Data.js ("BackEnd imitation"), where we have array of data (questions,answers..)
2) App.js ("Main file"), where we have almost all logic of the app. Plus render of  components
3) MainComponent is a "Game Menu where user can choose level" its bind with QuizComponent and App.js by EventMethod (handleChange). 
4) QuizContainer needs to render different questions and answers from Data.js using filter and map methods.
5) ResultComponent renders your score and shows correct answers if you wish, also you can try again or turn back due to misclick or whatewer...
6) AudioComponent contains audio and visual effects for this app.

All question/answers were checked in game-map redactor, so author guarantees that correctAnswer === true.
