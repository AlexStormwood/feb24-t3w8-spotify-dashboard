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



# Spotify Usage Flow 

1. User clicks button to sign in via Spotify 
2. App redirects to Spotify's signin page 
3. User clicks on Spotify to sign in 
4. Spotify finishes the sign in, and redirects to our designated "Redirect URI"
5. React app detects Spotify's signin result and processes it 
6. Save the processed result (auth or access token) to state and/or localstorage and/or context 
7. Components throughout the React app reach up to grab the access token and use that in fetch requests 




Verifier code process:
1. User clicks button to sign in via Spotify 
2. Generate a "verifier" code word and save it to local storage
3. Redirect to Spotify to sign in
4. Spotify redirects back to our website to finish the sign in
5. Use the "verifier" code word from localstorage to finish the sign in 