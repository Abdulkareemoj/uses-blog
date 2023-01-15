import React, { useEffect, useState } from "react";
const theme = ['light', 'dark']

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
  return mounted ?(<div className="inline-flex">Button</div>):(<div />)

}