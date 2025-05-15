import { useEffect, useState } from 'react'


export default function DarkMode() {
  const [theme, setTheme] = useState(() => {
    // obten el tema guardado en localstorage o usa 'light'
    return localStorage.getItem('theme') || 'light';
  })

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };


  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark")
    }
  }, [theme]);

  return (
    <div>
      <img 
      className="w-12 cursor-pointer"  
      src={theme === 'light' ? "/assets/website/light-mode-button.png" : "/assets/website/dark-mode-button.png"}
      alt="Toggle Theme"
      onClick={toggleTheme}/>
    </div>
  )
}


