import AddTodo from "./Components/AddTodo"
import TodoList from "./Components/TodoList"

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-primary to-secondary h-screen flex justify-center items-center">
      <div className=" bg-gradient-to-bl from-[#D9D9D9] to-[#D9D9D9]/60   px-3 py-4 rounded-xl max-w-md w-full">
        

        {/* Todo List  */}
        {/* @ts-ignore */}
        <TodoList/>
        
        {/* Add Todo  */}
        <AddTodo/>
        <div className="mt-5 bg-[#2D2D2D] w-1/2 rounded mx-auto h-1">

        </div>
      </div>
    </main>
  )
}
