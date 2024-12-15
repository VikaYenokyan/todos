export default function todoTheme() {
    const themeBtn = document.querySelector('.todo-theme')
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark')
        themeBtn.querySelector('img').setAttribute('src', 'images/sun.svg')
        document.querySelectorAll('.task__edit img').forEach(item => item.setAttribute('src', 'images/edit_light.svg'))
        document.querySelectorAll('.task__delete img').forEach(item => item.setAttribute('src', 'images/delete_light.svg'))
        document.querySelector('.task__add').setAttribute('src', 'images/add_light.svg')
    }

    themeBtn.addEventListener('click', () => {

        if (localStorage.getItem('theme') === 'light') {
            localStorage.setItem('theme', 'dark')
            document.body.classList.add('dark')

            themeBtn.querySelector('img').setAttribute('src', 'images/sun.svg')
            document.querySelectorAll('.task__edit img').forEach(item => item.setAttribute('src', 'images/edit_light.svg'))
            document.querySelectorAll('.task__delete img').forEach(item => item.setAttribute('src', 'images/delete_light.svg'))
            document.querySelector('.task__add').setAttribute('src', 'images/add_light.svg')
        } else {
            localStorage.setItem('theme', 'light')
            document.body.classList.remove('dark')

            themeBtn.querySelector('img').setAttribute('src', 'images/moon.svg')
            document.querySelectorAll('.task__edit img').forEach(item => item.setAttribute('src', 'images/edit.svg'))
            document.querySelectorAll('.task__delete img').forEach(item => item.setAttribute('src', 'images/delete.svg'))
            document.querySelector('.task__add').setAttribute('src', 'images/add.svg')

        }
    })
}