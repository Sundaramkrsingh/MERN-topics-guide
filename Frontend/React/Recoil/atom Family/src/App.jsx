import { RecoilRoot, useRecoilValue } from 'recoil'
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
  const todo = useRecoilValue(todosAtom(id))

  return <>
    {todo.title}
    {todo.description}
  </>
}

export default App