import React from 'react'
import Add from './Views/Add';

const TodoList = () => {

   const [addShow, setAddShow] = React.useState(false)
   const [list , setList] = React.useState(JSON.parse(localStorage.getItem("list0323")) || [])


  return (
    <div >
      <div className='d-flex justify-content-center mt-1'>
        <button 
          className='btn btn-primary'
          onClick={()=> setAddShow(true)}
        >Add</button>
      </div>
      
      <Add show={addShow} setAddShow ={setAddShow} list = {list} setList={setList}/>

    
      {list.map((item, index) => 
        <div key={index}>
          <h1>{item.name}</h1>
          <h2>{item.surname}</h2>
          <h3>{item.work}</h3>
        </div>
      )}

        


    </div>
  )
}

export default TodoList;