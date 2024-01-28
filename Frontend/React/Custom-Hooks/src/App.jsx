// ******* Without custom hook *******

import { useEffect, useState } from "react";

// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//       })
//   }, [])

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App


//****************************************************************

// ******* With custom hook ********

// import { useEffect, useState } from 'react'
// import axios from 'axios'

// {/*hook*/}
// function useTodos(n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true)

  
//   useEffect(() => {
//     const value = setInterval(
//       axios.get("https://sum-server.100xdevs.com/todos")
//         .then(res => {
//           setTodos(res.data.todos)
//           setLoading(false)
//         }), 
//     n*1000)
    
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos)
//         setLoading(false)
//       })

//     return () => {
//       clearInterval(value)
//     }
//     }, [n]) // n must be here as a dependency, if 'n' may change

//   return {todos, loading};
// }

// function App() {
//   const {todos, loading} = useTodos(5); // passing quantity of data

//   return (
//     <>
//       {loading? <div>loading...</div>: todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App


//****************************************************************

// ******* swr - React Hooks for Data Fetching ********

// import useSWR from 'swr'

// // const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = async function(url) {
//   const data = await fetch(url);
//   const json = await data.json();
//   return json;
// };

// function Profile() {
//   const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher)
 
//   if (error) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>
//   return <div>hello, you have {data.todos.length} todos!</div>
// }

// function App() {
//   return(
//     <>
//       <Profile />
//     </>
//   )
// }

// export default App



//*************************************************************** 

// ***** Browser functionality related hooks *******

// *** useIsOnline hook - it's a custom hook, useful

// function useIsOnline() {
//   const [online, setOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener('online', () => setOnline(true))
//     window.addEventListener('offline', () => setOnline(false))
//   }, [])

//   return online
// }

// function App() {
//   const online = useIsOnline()
//   return (
//     <>
//       {online ? "You are online": "You are offline"}
//     </>
//   )
// }

// export default App



//*************************************************************** 

// *** useMousePointer hook - custiom hook made to return x & y -axis of mouse pointer

// function useMousePointer() {
//   const [position, setPosition] = useState({x: 0, y: 0})

//   const handleMouse = (e) => {
//     setPosition({x: e.clientX, y: e.clientY})
//   }

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouse)
//     return () => {
//       window.removeEventListener('mousemove', handleMouse);
//     };
//   }, [])

//   return position
// }

// function App() {
//   const position = useMousePointer()

//   return (
//     <>
//       Your mouse pointer is x = {position.x} y = {position.y}
//     </>
//   )
// }

// export default App


//*************************************************************** 

// ****** Performance/Timer based Custom Hooks *******

// *** useInterval - a hook that runs a certain callback function every n seconds.

// function useInterval(fn, timeout) {

//   useEffect(() => {
//     const value = setInterval(() => {
//       fn()
//     }, timeout)

//     return () => {
//       clearInterval(value)
//     };
//   }, [fn, timeout])
// }

// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount(c => c + 1)
//   }, 1000)

//   return (
//     <>
//       Timer is at {count}
//     </>
//   )
// }

// export default App


// **************************************************************

//  ****** useDebounce ******

// Create a hook that debounces a value given
// The value that needs to be debounced
// The interval at which the value should be debounced.

function useDebounce(input, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(input)
  useEffect(() => {
    const value = setTimeout(() => {
      setDebouncedValue(input)
    }, timeout)

    return () => {
      clearTimeout(value)
    }
  }, [input])

  return debouncedValue
}

function App() {
  const [input, setInput] = useState('')
  const debounced = useDebounce(input, 500)

  return (
    <> 
      Debounced value is {debounced}
      <input type='text' onChange={e => setInput(e.target.value)}></input>
    </>
  )
}

export default App