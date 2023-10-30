//WARNING: this is not a component file, it's a service provider for delivering the spotify authentification page for the user

/*NOTE: after the user clicked the login button, we must send him directly to the authentification page */

export const authEndPoint = 'https://accounts.spotify.com/authorize'; // official authentification link

/* NOTE: the starting index page or the home page in our app is the login page */

const redirectURI = 'http://localhost:3001/'; // redirect to the login page once the user logged in

/* NOTE: this is the Client ID for the user, it's unchangeable token */

const clientID = '21ef4de19cd644c68b92ea27167a3f0e';

/* NOTE: thoses scopes are the services or possible APIs that user can handle with */

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
]; 

// Let's cook the login url for the user to enter his Spotify app, we gonna make a link using the data we have above
/** NOTE: 
 * %20 is the ASCII code of space key
 * is authorized ? return me a token, an ID like 
 * if you're already logged in in the real spotify app it will not work, you must log out first
 */

export const loginUrl = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`; // be careful here to not miss something

// Now let's get the token from the URL

export const getToken = () => {
    return window.location.hash /** go to window url hashtag mark localhost:3000/#.... */
    .substring(1) /** get the first localhost:3000/ */
    .split('&') /** to avoid the other unneeded parameters */
    .reduce((initial, target) => {
        /** here we get the token wanted */
        var token = target.split('=') 
        initial[token[0]] = decodeURIComponent(token[1]);

        return initial; /** Token geted */
    }, {} /** run once */)
}