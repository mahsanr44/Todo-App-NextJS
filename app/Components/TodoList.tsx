import { Todo } from '../lib/drizzle';


const getData = async () => {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/todo",{
      method: "GET",
      cache:"no-store",
      headers:{
        "Content-Type": "application/json"
      }
    });

    if (!res.ok) {
      throw new Error("Error fetching")
    }

    const result = await res.json();
    return result
  }
  catch (error) {
    console.log(error)
  } 
}

const TodoList = async () => {
  const res: { data: Todo[] } = await getData();

  
  return (
    
    <div className="max-h-[350px] overflow-auto mb-4 p-1">
      
    
 {  
      res.data.map((item) => {
          return (

            <div className='bg-gray-100 py-3 px-3 flex items-center rounded-lg gap-x-3 shadow my-3'>
              {/* Circle  */}
              <div className='bg-secondary rounded-full h-3 w-3'>

              </div>
              {/* Task Title */}
              <div>
                <p className='text-lg font-medium'>{item.task}</p>      </div>
            </div>
          )
        })
      }
   </div>
  )
}

export default TodoList
