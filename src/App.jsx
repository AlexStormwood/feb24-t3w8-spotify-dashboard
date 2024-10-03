import './App.css'
import { useSpotifyAuthContext } from './contexts/SpotifyAuthProvider';
import { useThemeContext } from './contexts/ThemeContextProvider'

function App() {
  
  const [currentTheme, toggleTheme, setToSystem] = useThemeContext();
  const {redirectToAuthCodeFlow} = useSpotifyAuthContext();

  return (
    <>
      <button onClick={toggleTheme}>
        Toggle theme
      </button>
      <button onClick={setToSystem}>
        Set to system theme
      </button>
      <button onClick={redirectToAuthCodeFlow}>
        Sign in via Spotify
      </button>
    </>
  )
}

export default App
