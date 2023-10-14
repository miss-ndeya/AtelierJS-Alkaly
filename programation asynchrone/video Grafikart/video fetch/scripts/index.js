async function fetchUsers() {
    const r = await fetch('https://jsonplaceholder.typicode.com/users')
    if (r.ok === true) {
        return r.json()
    }
    throw new Error('Imposssible de contacter le serveur')
}
fetchUsers().then(users => console.log(users))
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(r => r.json())
// .then(body => console.log(body))