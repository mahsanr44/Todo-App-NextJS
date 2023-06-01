import React from 'react'

const AddTodo = () => {
  return (
    <div className=''>
      <form className='w-full flex justify-center  items-center'>
        <input type="text" placeholder='Add Task...' className='px-3 py-3 rounded-full border focus:outline-secondary' />
        <button className='ml-10'>
            <svg width="45" height="47" viewBox="0 0 45 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="22.5" cy="23.5" rx="22.5" ry="23.5" fill="url(#paint0_linear_2_102)"/>
<path d="M15.7909 23.5H21.3136M19.9534 15.2002L28.708 19.772C32.6352 21.823 32.6352 25.177 28.708 27.228L19.9534 31.7998C14.0625 34.8761 11.6591 32.3552 14.6046 26.2132L15.4943 24.3652C15.7193 23.8952 15.7193 23.1155 15.4943 22.6455L14.6046 20.7868C11.6591 14.6448 14.0727 12.1239 19.9534 15.2002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_2_102" x1="22.5" y1="0" x2="22.5" y2="47" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF512F"/>
<stop offset="1" stop-color="#DD2476"/>
</linearGradient>
</defs>
</svg>
</button>
      </form>
    </div>
  )
}

export default AddTodo
