import React, { useEffect, useState } from "react";
const themes = ['light', 'dark']

export default function Toggle(){
const [mounted, setMounted] = useState(false);
const [theme, setTheme] = useState(() => {
  if (import.meta.env.SSR) {
    return undefined;
  }
  if(typeof localStorage !== 'undefined') {
    return localStorage.getItem('theme') || 'light';
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
}
  return 'light';
})
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme)
  }
  useEffect(() => {
   const root = document.documentElement;
   if (theme === 'light') {
     root.classList.remove('dark');
   } else {
    root.classList.add('dark');
   }
  }, [theme])

  useEffect(() => {
    setMounted(true);
  }, [])
 
  return mounted ? (
    <div className="inline-flex items-center p-[1px] rounded-3xl bg-orange-300 dark:bg-zinc-600">
      {themes.map(t => {
        const checked = theme === theme
        return (
          <button
            key={theme}
            className={`${
              checked ? 'bg-white text-black' : ''
            } cursor-pointer rounded-3xl p-2`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? 'sun' : 'moon'}
          </button>
        )
      })}
    </div>
  ) : (
    <div />
  )
}
