# Spotify Stats Dashboard 

## Context data / global state 

- Spotify API Context Provider
	- async reducer 
		- endpoints for the data we want handled in the switch statement 
		- save endpoint responses to state 

- CSS Theme context provider 
	- dark/light/system 
	- no reducer, just simple context state stuff 

## Routes 

- `localhost:3000/`
	- homepage 
	- Tiles for different stats:
		- top 5 songs 
		- top 5 albums 
		- top 5 artists 
		- currently listening 
		- most listened to genre (based on top 5 songs)
		- larger list of followed artists 
		- users saved or top audiobooks 
		- recommended content 
- `localhost:3000/search/{userId}/`
	- search page to get stats of other users 
	- "nice to have" not a main thing to focus on or build first 


## App Features 

- User profile data 
	- Different API endpoints for self/current user and for user by id/username 
- User's top items 
- User's currently playing 
- Form to check if user follows an artist 
- Animations
- Cool styling 
	- Ask Damian for inspiration 
- Good documentation and code comments 
- App theme 

## FrontEnd UI Frameworks 

- [Chakra UI](https://v2.chakra-ui.com/)
- [Material UI](https://mui.com/)
- [UI ShadCN](https://ui.shadcn.com/)


## Deployment & Security

- Netlify env variables: https://docs.netlify.com/environment-variables/overview/ 

## Useful resources 

- [Spotify Developer Docs](https://developer.spotify.com/documentation/web-api)
