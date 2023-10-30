import React, { useEffect, useState } from 'react';
import { getToken } from './spotifyApi'
import Login from './Login';
import SpotifyWebApi from 'spotify-web-api-js';
import SpotifyApp from './SpotifyApp';
import { useStateProviderValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getToken();
    window.location.hash = ''; // set to empty

    const _token = hash.access_token;
    
    if (/** there is a token ? */ _token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
    }

  }, [] /** Run onChanging */)

  return (
    <div className="app">
     {
       token ? /** get into app */ (<SpotifyApp spotify={spotify}/>) : /** Otherwise */ (<Login />)
     }
    </div>
  );
}

export default App;
