# Interactive Frontend Development Project "Millionaire Game"

Millionaire Game is an online game created with the purpose of entertainment. The inspiration for the game came from the popular TV show "Who Wants to be a Millionaire?" which I loved watching in my childhood. The game interface resembles the one of the actual show, where there is a question in the middle of the screen, four answer options, three lifeline buttons and a score that indicates current position and financial reward. The rules of the game are simple - answer all 15 questions to win the game.
https://github.com/hh859/millionaire-game/blob/main/README.md
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

### Mobile view 
  ![alt text](https://github.com/hh859/millionaire-game/blob/main/assets/images/mobile%20view.jpeg)

## Testing 
The initial part of the game was created in HTML and CSS to style the elements. To create a grid for the answer options I initially attempted to use Bootstrap, but was having difficulty arranging them as required. At the end, I used CSS to style the elements. 

### Trying to validate username credentials 
In an attempt to create a more interactive environment, I tried to set up a start page, where a user must put their name in order to go onto the game page. I used getElementById but was having difficulty passing the User Name from index.hmtl to game.html. With the support of my tutor, I merged two pages together and added startContainer.style.display = 'none'; to hide the form once used.







