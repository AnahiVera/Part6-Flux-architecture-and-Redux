const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    //fetch() is a Fetch API function that returns a promise
    const response = await fetch(baseUrl)

    if (!response.ok) {
        throw new Error('Failed to fetch anecdotes')
    }

    return await response.json()
}

const createAnecdote = async (content) => {

    const response = await fetch(baseUrl,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content, votes: 0
            })
        }
    )

    if (!response.ok) {
        throw new Error('Failed to create note')
    }

    return await response.json()
}

const updateAnecdote = async (id, updatedAnecdote) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAnecdote) // Envía el objeto completo
    })

    if (!response.ok) {
        throw new Error('Failed to update anecdote')
    }

    return await response.json()
}





export default { getAll, createAnecdote, updateAnecdote }


/* fetch does not automatically convert any data included in the 
response to JSON format; the conversion must be done manually. It is also important to note that response.json() 
is an asynchronous method, so the await keyword. */