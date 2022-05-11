import fetch from "node-fetch"

const API_URL = "http://localhost:8080/todos/"

async function createTodo(task) {
    const options = {
        method: "POST",
        body: JSON.stringify({task}),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(API_URL, options)
    
    const data = await response.json()
    console.log(data)

    return data
}

async function deleteTodo(id) {
    const message = await fetch(`${API_URL}${id}`, {method: "DELETE"})
    return message
}

async function updateTodo(id, payload) {
    const options = {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch(`${API_URL}${id}`, options)
    const data = response.json()
    return data
}

async function getAllTodos() {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
}

export default { createTodo, deleteTodo, updateTodo, getAllTodos }

