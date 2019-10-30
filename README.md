# OCTO REWARDS
GA SEI-20 Project 2 

Hosted on: https://octo-rewards.herokuapp.com/

There are many tools out there helping you find the best credit card for you, but none that help your optimise your credit card use. Some people use multiple Excel spreadsheets to track their spending to maximise their rewards, but they often get forgotten or disorganised after some time. 

Octo Rewards was created to to help users track their credit cards spending and rewards, maximising their benefits.

![screenshot of octo user page](https://github.com/jasminesis/octo-rewards/blob/master/documents/octorewards.png)

# Technologies Used
- javascript
- nodejs
- express
- react
- postgres
- bootstrap

# Installation Instructions
1. Install dependencies
``` 
npm install
```
2. Create db
```
createdb DATABASE_NAME -U USERNAME
```
3. Seed data
```
psql -d DATABASE_NAME -U USERNAME -f tables.sql
psql -d DATABASE_NAME -U USERNAME -f seed.sql
```

# Wireframes
![wireframe](https://github.com/jasminesis/octo-rewards/blob/master/documents/wireframe2.png)
# ERD diagram
![ERD diagram](https://github.com/jasminesis/octo-rewards/blob/master/documents/ERDoctorewards.png)

# User Stories
Most people begin using a credit card in their 20s, sucked in by the line of credit the bank is offering, perks such as airport lounge access and cashback rewarded for spending. 

Earn money by spending money?! Sign me up! 

Although there are many websites that direct you to the 'best credit card' for cashback, miles, shopping, dining or fashion, what do you do once you receive that coveted piece of plastic in the mail? 

We want to maximise it

# Approach
I looked at websites comparing credit cards to get the data on their reward rates, from categories of cards such as cashback, rebate, and points or miles. Within those categories, award structures are different such as if there is a minimum spend or a maximum cap on points earned. I first wrote out the PSQL table file and the ERD diagram, but those had to continually change as I learned more about the different credit cards. 

I used MVC because it helps me focus on one task, especially with models and the PSQL query string, and makes things clearer with where things are going and coming from. The structure and styling of the pages was done with Bootstrap, and AJAX to get selector options that are specific to the user and database. 

The user homepage combines cards and expenses to show what action should be taken for each card, such as spending more to meet the threshold or to stop spending on that card, which required conditional rendering in the JSX file.


# Unsolved Problems
- linking billing date to each card so it can alert you to pay your bills, or to optimise spending even further
- displaying login/logout button depending on logged in status (apparently easier on the real React)
- not unsolved, but the database of cards could have been larger if I had more time

