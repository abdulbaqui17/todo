import { useRecoilValue,useRecoilState } from "recoil";
import { todoListAtom } from "../store/atoms/count";


const TodoItems = () => {
    const [todoList,setTodoList] = useRecoilState(todoListAtom);

    const deleteTodo=(id)=>{
        setTodoList((oldTodoList)=> oldTodoList.filter((i)=>i.id!==id))
    }
    return (
      <div className="flex flex-col gap-3">
        {todoList.map((e) => (
          <div key={e.id} className="flex justify-between items-center p-2 bg-gray-100 rounded-full">
            <span>{e.text}</span>
            <button className="text-red-500 hover:text-red-700" onClick={()=>deleteTodo(e.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
export default TodoItems;