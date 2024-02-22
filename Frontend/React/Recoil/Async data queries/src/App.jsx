import { RecoilRoot, useRecoilValue } from "recoil"
import { countAtom } from "./store/atoms/count"


function App() {

  return <>
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  </>
}

function Main() {
  const count = useRecoilValue(countAtom)

  return <>
    <button>Home</button>
    <button>My Network({count.network})</button>
    <button>Jobs({count.jobs})</button>
    <button>Messaging({count.messaging})</button>
    <button>Notification({count.notifications})</button>
    <button>Me()</button>
  </>
}

export default App