import React from 'react'
import { loginUrl } from './spotifyApi'

const Login = () => {
  return (
    <div data-styling='tailwind' aria-label='spotify login page' className='login-spotify-page grid place-items-center bg-black h-screen'>
        <div className='spotify-slogan w-4/5 lg:w-1/2 md:w-1/3'>
            <img className='w-full object-contain' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='logo' />
        </div>
        <div className='spotify-login-button'>
            <a href={loginUrl} className='uppercase bg-GREEN font-semibold md:text-lg text-lg py-1 px-5 md:py-2 md:px-7 rounded-two text-white'>
                login to spotify
            </a>
        </div>
    </div>
  )
}

export default Login