const axios = require('axios')

//*****************************************************************

// GET with axios
async function main() {
    const response = await fetch('https://sum-server.100xdevs.com/todos')
    const json = await response.json();
    console.log(json.todos.length)
}

// GET with axios
async function main() {
    const response = await axios.get('https://sum-server.100xdevs.com/todos')
    console.log(response.data.todos.length)
}


//****************************************************************

// POST with fetch
async function main() {
    const response = await fetch('https://sum-server.100xdevs.com/todos', {
        method: 'POST',  // we can put anything here
    })                  // (PUT/delete/POST/get->default)      
    const json = await response.json();
    console.log(json.todos.length)
}

// POST with axios
async function main() {
    const response = await axios.post('https://sum-server.100xdevs.com/todos')                 // (put/get/post/delete)
    console.log(response.data.todos.length)
}


//*****************************************************************

// Headers/body in fetch
async function main() {
    const response = await fetch('https://sum-server.100xdevs.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            "username": 'Sundaram_1',
            "password": 'Sundaram10'
        }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer 113614uh23472y3iuh723'
        }
    })                  

    const json = await response.text();  
    // json() / text() / blob() / arrayBuffer()
    console.log(json.todos.length)
}

// Headers/body in axios
async function main() {
    const response = await axios.post('https://sum-server.100xdevs.com/todos', {
        "username": 'Sundaram_1',
        "password": 'Sundaram10' 
    },{
        headers: {
            "Authorization": 'Bearer 184632y893ydh23e8eh783278'
        }
    })                 
    console.log(response.data.todos.length)
}


// **** axios - using only one object for all information *****

async function main() {
    const response = await axios(
        {
            url: 'https://sum-server.100xdevs.com/todos', 
            method: 'PUT', 
            headers: {
                "Authorization": 'Bearer 184632y893ydh23e8eh783278'
            }, 
            data: {
                "username": 'Sundaram_1',
                "password": 'Sundaram10' 
            },
        }
    )                 
    console.log(response.data.todos.length)
} 