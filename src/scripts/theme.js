/* Desenvolva sua lógica aqui ... */

export const themeDark = () => {
    const buttonDarkMod = document.querySelector('.bnt-drak-mod')
    const html = document.querySelector('html')
    const imgMoonSun = document.querySelector('.sunMoon')

    const modeUser = JSON.parse(localStorage.getItem('dark-mode'))

    if(modeUser){
        imgMoonSun.src = './src/assets/img/sun.svg'
        html.classList.add('dark-mode') 
    }else{
        imgMoonSun.src = './src/assets/img/moon.svg'
        html.classList.remove('dark-mode')
    }

    buttonDarkMod.addEventListener('click', () => {
        html.classList.toggle("dark-mode")

        if(html.classList.contains('dark-mode')){
            imgMoonSun.src = './src/assets/img/sun.svg'
            localStorage.setItem('dark-mode', true)
        }else{
            imgMoonSun.src = './src/assets/img/moon.svg'
            localStorage.setItem('dark-mode', false)
        }
    })
}