# FullStackDevFrontendProject

##Summary
this application is made using hacker news api endpoints to display and share news areticles

It has 4 pages
a home page with random news
a popular page with the most popular news articles at the moment
and a job posting page that has different articles related to job postings
and an about page to explain who we are

our app uses react router for navigation between pages

when each page is loaded we use useState to fetch the data from the API to populate our own database, and then pull the news items from that database to populate our useState news and then roll down the state to the newslist component for display

then in newslist we destructure and pass specific props to the newsitem to build each news item component.

we do this for each seperate page but using a different API endpoints

we also have a button with a Modal for asking the user to subscribe to our newsletter.

##Api used
hackernews API endpoints

##database used
firebase

##deployment setup using netlify
https://incredible-buttercream-e162ef.netlify.app
