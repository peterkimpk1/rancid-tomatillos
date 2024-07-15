## Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
The Rancid Tomatillos app helps users discover new movies. Upon page load, the app renders a series of movie cards containing data from an API call. Each movie card displays the movie poster, title, release date, movie rating, and button to give the user the option to see more movie data. The user has the ability to filter movies by either title or genre. Upon selection of the individual movie data, a modal is rendered to display the movie's genres, revenue, budget, runtime, rating, and description. The user can click the play button to display a modal with the movie trailer. 

## Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1) Clone down the repository using `git clone`
2) cd into cloned directory
3) run `npm install`
4) run `npm start` to start the application

For Testing:
1) In another tab in your terminal, run 'npm run cy:open" 
2) Choose `e2e testing`
3) Run on your browser of choice (Preferebly Chrome)
4) Select 'rt-test.cy.js' in the browser

## Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
![Imgur magic](https://github.com/user-attachments/assets/03660375-391d-4229-9824-eae691f29ab4)
The app has a live search function to filter movies based on inclusion of title. 

As can also be seen in this screenshot, the border of each movie presented is dependant on the movie rating. <br>(Under 4: Red, 4 to under 7: Yellow, 7+: Green)

## Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The primary learning goal of this project was to build a single app using React and React Router to simulate a multi-page app.  

Technologies across the project involved React, React Router, JSX, Cypress, PropTypes, JS/ES6, and CSS. 


## Wins & Challenges 
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
### Wins
1) The primary win of the Rancid Tomatillos project was converting the first phase of the project into using React Routes for dynamic paths. 
2) Implementing modal capability for movie trailer

### Challenges
1) Getting data to persist outside of fetch function
2) Combining filter functions into one function

## Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
- Peter Kim: https://github.com/peterkimpk1
- Zach Wolek: https://github.com/zachwolek/
