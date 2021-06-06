//developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// redirect user to spotify for authentication
export const authEndpoint = "https://accounts.spotify.com/authorize";

// pull User back to our App Spotify-clone
//const redirectUri = "http://localhost:3000/";
const redirectUri = "https://spotify-clone-4b92f.web.app"; //where are you running your app (local react by default is http://localhost:3000/
// "https://spotify-clone-4b92f.web.app"

const clientId = "8356dbe6c89a44b19bf20200829971ec"; // clintId you can get at https://developer.spotify.com/dashboard

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//extract token
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      // parts[1] is the actual token
      // parts[0] = "#access_token"
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

//once get authenticated, give me token
// ${scopes.join("%20")} join everything in scopes with space ASCII code %20
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
