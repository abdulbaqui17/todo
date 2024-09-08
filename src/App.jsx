import { RecoilRoot } from "recoil"
import Todo from "./components/Todo"
import TodoItems from "./components/TodoItems"

const App = () => {
  return (<div className="bg-slate-300 grid py-4 min-h-screen ">
    <RecoilRoot>
        <Todo></Todo>
    </RecoilRoot>
  </div>
  )
}

export default App
