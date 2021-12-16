# holy-grail
This is a very basic set-up for the "holy grail" of front-end design with header, footer, and then three columns between (left, article, and right, right typically being used for ads). For the backend, I used redis on top of a docker container to be able to read and write to the database.

## How to Run:
Download contents of public folder (these are each of the components for the "holy grail" front-end) as well as the app entry-point, which is the index.js file outside of the public folder. Initialize the app with node (npm init), and then download dependencies (express, redis). As mentioned, I also used docker, so you'll want to have that. For this project, it's an old version of redis, so use npm i redis@3.1.2 for proper functionality. 

##Roadmap:
Additional styling could be useful, and it's obviously not an app that really does anything, but this could be used as a base for an informational article or really the base of many different apps.

##License:
This project is licensed under the MIT license as described in included license file.
