import { useRef } from "react";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../store/atoms/count";
import TodoItems from "./TodoItems";

const Todo=()=>{
    const inputRef=useRef()
    const [todoList,setTodoList]=useRecoilState(todoListAtom)
    const add = () => {
        const inputText = inputRef.current.value.trim();
      
        if (inputText) {  // Check if the input is not empty
          setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
              id:Date.now(),  // Use Date.now() correctly
              text: inputText,
              isComplete: false,  // Default the completion status to false
            },
          ]);
      
          inputRef.current.value = '';  // Clear the input field after adding
        }
      };

    return <div className="bg-white place-self-center w-11/12 max-w-md 
    flex flex-col p-7 min-h-[550px] rounded-xl shadow shadow-blue-500/40 hover:shadow-black">
       <div className="flex items-center mt-7 gap-2">
        <h1 className="text-3xl font-semibold">To-Do List</h1>
       </div>
       <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input ref={inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 placeholder:text-slate-600" type="text" placeholder="add your task"/>
        <button onClick={add} className="border-none rounded-full bg-black h-14 w-32 text-white text-lg font-bold hover:shadow-black">add todo</button>
       </div>
       <div>
        <TodoItems/>
        </div>
    </div>
}

export default Todo;

