# #####################         About Me             ############################
#   Name: Ahmed Fawzy Elragal                                                   #
#   mail : elragal30@gmail.com                                                  #
#   GitHub: https://github.com/Ahmed-Elragal                                    #
#   LinkedIN : https://www.linkedin.com/in/ahmed-fawzy-elragal/                 #
#   this project made mainly for Udacity                                        #
#   thanks for mentors, and Special thanks to session Leader : Peter Shaker     #
# ###############################################################################

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

            ## instructions:

## install Scripts
    before you start , you must install all dependencies by :
### `npm install`

## Available Scripts

In the project directory, you can run:

### `yarn start  / npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.0

## About App:
this app is SPA base on famous game `Would you rather`
where user ask question : 'would you rather' ,
and give 2 options .
other users can answer his question and also ask questions
        
## Main features
* simple Login Choice from drop down list of current users
* after Login you can see questions (your unAnswered / answered question)  listed by Date (newest first)
* you can view any question by clickink on its link to go for its details
    * if you didn't answer this question yet , you will see options to answer it , but NOTICE :
        - you can choose one answer only and once you submitted you can't reanswer it again
    * if you answered it already ,
        -you 'll see votes number and percentage % about count of user select each option
        - total user answer this question 
        - you answered will be clearly visable by Correct Sign and text (your select)
* you also be able to add your new Question :
    - you must fill 2 answers 
    - the 2 answeres had to be diffrent
    - once you submit the question you can view it in unanswered questions in home page , and you can view it and answer it 
* you can see leaderboard that had users sorted by theirs scores 
    - score based on Question they asked / answered
    - the users sorted from heightest (on TOP) and lowest (on BOTOOM)
* there are nav Bar on All pages (after you login ofcorse) that contain
    - links to navigate easily in the app
    - your avatar as your name (not username) and also logout link
*

## Othe available Scripts
### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
