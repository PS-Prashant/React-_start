import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './components/themeBtn';
import Card from './components/Card';

function App() {
    const [themeMode, setThemeMode] = useState('light');

    const lightTheme = () => {
        setThemeMode( 'light' )
    }
    const darkTheme = () => {
        setThemeMode( 'dark' )
    }
    
    //?change in theme

    useEffect( () => {
        const documentClass = document.querySelector('html');
        documentClass.classList.remove( "light", "dark" );
        documentClass.classList.add( themeMode );

    }, [ themeMode ] )

  return (
    <ThemeProvider value={{ lightTheme, themeMode, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">

            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
            </div>
            <div className="w-full max-w-sm mx-auto">
                <Card/>
            </div>

        </div>
        </div>
    </ThemeProvider>

  )

}

export default App;
