import { RecoilRoot, useRecoilValueLoadable } from 'recoil'
import { todosAtom } from './store/atoms/count'

function App() {
  
  return <>
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={1} />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  </>
}

function Todo({id}) {
  const todo = useRecoilValueLoadable(todosAtom(id)) 
  // useRecoilStateLoadable()

  // todo.state === hasValue
  // todo.state === hasValue
  if(todo.state === 'hasValue')
  {
    return <>
      {todo.contents.title}
      {todo.contents.description}
    </>
  } 
  else if(todo.state === 'loading')
  {
    return <>
      ...loading
    </>
  }
  else if(todo.state === 'hasError')
  {
    return <>
      Error while getting data from backend
    </>
  }
}

export default App