// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'antd';
import useLocalStorage from 'use-local-storage';
import LandingPage from './Container/LandingPage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

const switchTheme = () => {
  const newTheme = theme === 'light' ? 'dark': 'light';
  setTheme(newTheme);
}

  return (
    <div className="App" data-theme={theme}>
      <div className='themeButton'>
      <span>Switch to</span>
      <button onClick={switchTheme}>
        { theme === 'light' ? 'Dark': 'Light' } Theme
      </button>
      </div>
   <LandingPage />
    </div>
  );
}

export default App;
