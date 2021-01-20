# Travel Tracker
Travel Tracker is project I completed for the [Turing School of Software and Design](https://turing.io/). It's a web application that allows travelers to browse details of past, present, and upcoming trips, as well as book new trips with a travel agent. Travel agents can log in to approve/reject pending trips, cancel upcoming trips, and add suggested activities to a trip. Travel Tracker is deployed to GitHub Pages [here](https://deadbelly.github.io/travel-tracker/).

## Contributors
This project was completed by me, [Boone Epstein](https://github.com/deadbelly). I used a [webpack starter kit](https://github.com/turingschool-examples/webpack-starter-kit) provided to me by Turing. My cohortmate [Jeff Kersting](https://github.com/JeffKersting) review two of my pull requests and gave me some suggestions for refactoring. 

The sample profile photo was taken by [Nik MacMillan](https://stocksnap.io/author/35173%22), and the icons were made by [Freepik](https://www.flaticon.com/authors/freepik](https://www.flaticon.com/authors/freepik%22)).

## Technologies Used 
- `Mocha` and `Chai` for testing.
- `Webpack` for running the site locally and deploying. 
- `Normalize.js` for cross browser stability.
- `ESLint` for linting. 
- The `fetch` API.
- `express.js` was used for the server.
- The project was written in `JavaScript`, `Sass`, and `HTML`.

## Installation
In order to run Travel Tracker you'll first have to download the API provided to me by Turing. You can find my forked copy [here](https://github.com/deadbelly/travel-tracker-api). Before opening travel tracker: 
`git clone <travel tracker api>`
`cd ~/travel-tracker-api`
`npm i`
`npm start`

Now the site should be working in the web browser (reminder: it's deployed [here](https://deadbelly.github.io/travel-tracker/)).
If you'd rather clone this down and run it locally instead you can:
`git clone <this repo>`
`cd ~/travel-tracker`
`npm i`
`npm start`

The site should then be available at http://localhost:8080/

## Logging In
There are fifty unique users, and you can sign as any of them with the username `traveler<id>` (in which id is a number between 1 and 50) and the password `travel2020`. You can sign in as an agent with the username `agent` and the password `travel2020`.

## User Features
The user's dashboard features some basic information about them, like their name, "type", how many trips they've had approved, how many are still pending, and how much they've spent on travel in the past year. 
![the user's dashboard](https://github.com/deadbelly/travel-tracker/blob/main/src/images/screenshots/userscreen.png?raw=true)
They can also see a list of trips, including past, present, future, and pending trips. This list shows the trip's status and destination, but if they hover or tab over, each trip will reveal more information, including how many travelers were on the trip, how much it cost, and when it was. 

If the user wants to book a new trip they can click the `plan a trip` button. This will bring them to a form that lets them chose a destination, start and end dates, and number of travelers. It estimates the cost for them (including the 10% agency fee) before they decide to book it. This trip will instantly show up as a `pending` trip in their list. 

## Agent Features
The agent's dashboard features how much the agency has made off fees in the past year, how many travelers are on trips right now, and several filter options they can use to sort trips. They can choose to view only pending or upcoming trips, or they can search for a user by name. 
![the agent's dashboard](https://github.com/deadbelly/travel-tracker/blob/main/src/images/screenshots/adminscreen.png?raw=true)
They also have a form that allows them to reject/delete trips, or approve/modify trips. When a trip is rejected or deleted it is removed from the server. When a trip is approved it's status is changed to `'aproved'` from `'pending'`. At the same time that they approve an Agent can also add a list of suggested activities to the trip. When the form is submitted the Agent DOM will refresh and reflect any changes. 

## Future Iterations
Although this was a class project I may continue to work on it down the road. I really liked designing the layout and look, and it helped me get comfortable with fetch requests and working with an API. Some potential changes down the line:

- Better Error Handling: The error handling is good but I'd like to change the text color and maybe some other elements to draw the user's eye to error messages. This is an easy change I just ran out of time on the project.
- Proper Accessibility Audit: I followed most best practices I could find in terms of accessibility, but when testing the site with a screen reader I sometimes found parts confusing, or too dense. I'm sighted and don't use a screen reader so it's hard for me to say whether this reflected a problem with the site or me not being used to screen readers. I'd love to get feedback from someone who uses a screen reader regularly.
- Better Mobile View: I really like the look of the site on a computer monitor but I don't *love* it on mobile. I had some plans to make the mobile view more visually appealing but I ran out of time on this project. 
- Fixing That One Error: Sometimes when you log in as an Agent an error get's thrown in the console. Everything is working fine, I know where it's coming from, but I haven't figured out a fix yet. It will probably take a large refactor. 
