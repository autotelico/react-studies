import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"
import {Theme} from './ThemeProvider'

// interface DestructuredTheme {
//     theme: string;
//     toggleTheme: (() => void);
// }

export default function InputBar(): React.ReactNode {
    const {theme, toggleTheme}: any = useContext(ThemeContext) 
    
    return (
        <>
        <input type="text" className={theme === 'light'
            ? 'bg-slate-300 text-black'
            : 'bg-slate-900 text-white'
        } />
        <button onClick={toggleTheme}>Toggle theme</button>
        </>
    )
}