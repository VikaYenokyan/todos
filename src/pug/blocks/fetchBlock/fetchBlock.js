export default function fetchInit() {

  const form = document.querySelector('.load-todo-form')
  const res = document.querySelector('.result')
  const input = document.getElementById('todo-id')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch(`https://jsonplaceholder.typicode.com/todos/${input.value}`)
      .then(response => response.json())
      .then(json => {
        console.log(json)

        const { id, title, completed } = json

        res.innerHTML = `
            <input id="todo-${id}" type="checkbox" ${completed ? 'checked' : ''}>
            <label for="todo-${id}">${title}</label>
          `

      })

  })

}