const themeSwitcher = document.querySelector("#themeSwitcher");

navigator.geolocation.getCurrentPosition((position)=>{
  // Not now 
})

const defaultTheme = localStorage.getItem('theme') || 'theme-light'; 

setTheme(defaultTheme);


themeSwitcher.addEventListener('change', (e) => {

    setTheme(e.target.value)
})
function setTheme(theme) {
    theme = theme || 'theme-light'
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
    themeSwitcher.value = theme;
}