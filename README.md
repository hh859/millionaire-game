# Interactive Frontend Development Project "Millionaire Game"

Millionaire Game is an online game created with the purpose of entertainment. The inspiration for the game came from the popular TV show "Who Wants to be a Millionaire?" which I loved watching in my childhood. The game interface resembles the one of the actual show, where there is a question in the middle of the screen, four answer options, three lifeline buttons and a score that indicates current position and financial reward. The rules of the game are simple - answer all 15 questions to win the game.

## UX Aims
- Positive and enjoyable interaction with the game
- Responsive control for accurate and precise use of the buttons
- Realistic and immersive design 
- Fully responsive design to be accessible across various devices

## User Stories 
- I want to see a welcoming screen with clear instructions on how to start the game, so I can easily understand how to begin
- I want to see lifeline options (50/50, Phone a Friend, Hall Assistance) clearly presented, so I can use them strategically.
- I want to receive feedback on my progress, including reaching specific monetary milestones and achievements, to keep me motivated.
- I want to have the option to replay the game or start a new session, so I can continue enjoying the experience.

## Design and Development 
The initial design was developed in [Balsamiq](https://balsamiq.com). It included a home page and a game page. The final version looks slightly different, reflecting the timescale of the project and my own abilities.
 ![alt text](https://github.com/hh859/millionaire-game/blob/main/assets/images/front%20page.png)
 ![alt text](https://github.com/hh859/millionaire-game/blob/main/assets/images/game%20page.png)

### Home page
This page is structured in a minimalistic design, where the player puts their name to go on to the next page and start the game. Once the name is typed in, a message welcoming a user by their name is displayed.
 ![alt text](https://github.com/hh859/millionaire-game/blob/main/assets/images/home%20page.png)

 ### Game page 
 Once the credentials are validated, the user lands on the game page, where the game is set to begin. The layout is simple - a question in the middle of the screen, four answer options, lifeline buttons and a score track which also indicates an incentive reward. 
 The initial design also intended to include a 60" timer to answer each question and background music. However, due to the time constraint, the only essential elements of the game functioning were create:
  ![alt text](https://github.com/hh859/millionaire-game/blob/main/assets/images/game%20page%20.png)

## Testing 
The initial part of the game was created in HTML and CSS to style the elements. To create a grid for the answer options I initially attempted to use Bootstrap, but was having difficulty arranging them as required. At the end, I used CSS to style the elements. 

### Trying to validate username credentials 
In an attempt to create a more interactive environment, I tried to set up a start page, where a user must put their name in order to go onto the game page. I used getElementById but was having difficulty passing the User Name from index.hmtl to game.html. With the support of my tutor, I merged two pages together and added startContainer.style.display = 'none'; to hide the form once used.
This is the final outlook of the HTML page:
   ![alt text](https://github.com/hh859/millionaire-game/blob/main/assets/images/updated%20actual%20game%20page%20.png)

### Code validation 
 * #### HTML
 ![alt text](https://github.com/hh859/millionaire-game/blob/main/assets/images/HTML%20Validation.png)

 * #### CSS
![alt text](https://github.com/hh859/millionaire-game/blob/main/assets/images/CSS%20Validation.png)

* #### Lighthouse

## Features to add 
- I would like to add a timer that would count 20" for each question and, if not answered, would automatically display "Game Over", restarting the game.
- I would like to improve the visuals of the page so it is more obvious for the user what kind of game it is.
- I would like to add music for more realistic experience 
- For question storage (or any large amount of data storage), next time, I would use the following method suggested to me by my tutor:
"Question_01",
    "Answer_01",
    ["Choice_01_01", "Choice_01_02", "Choice_01_03", "Choice_01_04"],
  ]
  where arrays can be then shuffled, along with the question. It would create a more structured and orginised code. 

## Deployment 
### Github 
This website was deployed to GitHub using the following steps:
1. In the Github repository, navigate to Settings
2. Once in Settings, navigate to the Pages tab on the left-hand side
3. Under the Source, select the branch to master and click Save
4. Once the page is refreshed, the link will appear, indicating the website is now live
![alt text]()

### Forking the GitHub repository 
A copy of the GitHub repository can be created to allow viewing and modification without affecting the original repository.
1. Locate the repository
2. On the right-hand side of the page opposite your repository name is a button called 'Fork'
3. Click it to have a copy of the repository saved to your GitHub account

### Creating a local clone 
1. Locate the repository
2. Find a 'Code' button and click on the arrow 
3. To clone with HTTPS, click on the clipboard to copy the URL
4. In the Gitpod, change the directory to the chosen location
5. Type git clone, and then paste the URL from step 3
6. Press 'enter' to have a local clone created

## Credits 
- [Balsamiq](https://balsamiq.com) was used for wireframes.
- ["Who Wants to Be a Millionaire?"](https://wwbm.com) was used for design inspiration.
- [Code Institute](https://learn.codeinstitute.net/dashboard) and [W3School](https://www.w3schools.com) were used for for help with code.

## Acknowledgment
I would like to express a big gratitute to my mentor Jack and to my tutor Komal, who helped me to navigate through the issues of the project 





