const page = document.querySelector('html')
const switchBtn = document.querySelector('#switch')

switchBtn.addEventListener('click', () => {
    page.classList.toggle('light')
})