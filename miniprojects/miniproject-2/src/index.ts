const form = document.getElementById('form') as HTMLFormElement
const input = document.getElementById('input') as HTMLInputElement
const ul = document.querySelector("ul") as HTMLUListElement;
interface TodoItem {
    checkbox: boolean
    value: string
}
const todos: TodoItem[] = getTodosStorage()

function getTodosStorage(): TodoItem[] {
    //to make TS detect that you're working with the same varaible and make it track this vraible with type narrowing down in your code
    const todosStorage = localStorage.getItem('todos')
    if (todosStorage === null) {
        return []
    }
    const todos = JSON.parse(todosStorage) as TodoItem[]
    todos.forEach(addTodo)
    return todos
}



function submitHandler(e: SubmitEvent): void {
    e.preventDefault()
    const { value } = input
    const todo = { value, checkbox: true }
    addTodo(todo)
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))

}
function addTodo(todo: TodoItem) {
    const { value, checkbox = true } = todo
    const liEl = document.createElement('li')
    const checkboxEl = document.createElement('input')

    checkboxEl.type = 'checkbox'
    checkboxEl.checked = checkbox
    liEl.textContent = value
    //callabck function it's closure , remember it's lexical varaibles scope when it's called later !🚀👩‍🚀
    checkboxEl.addEventListener('click', () => {
        // todos.forEach(todoItem => {
        //     if (todoItem == todo) {
        //         todo.checkbox = checkboxEl.checked
        //         localStorage.setItem('todos', JSON.stringify(todos))
        //     }
        // })//
        // even  simpler due to closuer 💫✨
        todo.checkbox = checkboxEl.checked
    })
    liEl.appendChild(checkboxEl)
    ul.appendChild(liEl)
    input.value = ''


}
form.addEventListener('submit', submitHandler)
