import { useState } from 'react';
import './App.css';

function App() {
// Whatever we store the information or data in another place we have to show that data. 
// It is called Data binding.
// It is 2 types.
//  1. One-way data binding:
//    -> We have to show the data in DOM/HTML after storing it in the Js file 
//       or update the value in js when we update the value in HTML.
//  2. Two-way data binding:
//    -> When we update in js it should be effect in html 
//       or if we update the value in html it should be update in js also.

//    --> Using the state concept we can achieve the one-way data binding.
//    --> State concept is compulsory to achieve the one-way data binding.
//    --> In React by default it is not possible to update the javascript value 
//        when we update the value in html.
//    --> We have to update the state value to achieve two-way data binding.
  let [inputTask, updateTask]=useState(''); 
  let[todoList, updateList] = useState([
    {
      Id:1,
      task: 'Learn Telugu'
    },
    {
      Id:2,
      task: 'Learn Tamil'
    }
  ])
  return (
    <div className="container mt-10 w-50">
        <h4 className='text-center mt-5'>To-do List</h4>
        <div className='input-group'>
          <input type='text' id='task' className='form-control' value={inputTask} onChange={(e)=>{
            updateTask(e.target.value);
            if(e.target.value!=='')
              document.getElementById('lblTask').innerHTML='';
          }}/>
          <button className='btn btn-primary' id='add' onClick={AddToDo}>Add</button>
        </div>
        <label htmlFor='task' id='lblTask' style={{color:'red', fontSize:'12px'}}></label>
        <ul className='list-group mt-1'>
          {
            todoList.map(
              (todo)=>{
                    return (<li className='list-group-item'>{todo.task}
                        <button className='btn' onClick={()=>{removeToDo(todo.Id)}}>❌</button>
                      </li>)
              }
            )
          /* <li className='list-group-item'>fasf
            <button className='btn'>❌</button>
          </li> */}
          
        </ul>
    </div>
  );

  function removeToDo(id){
    todoList = todoList.filter((todo)=>todo.Id!==id);
    updateList(todoList);
  }

  function AddToDo(){
    // let taskToDo = document.getElementById('task').value; //one way data binding
    let taskToDo = inputTask;
    if(taskToDo==='')
    {
      document.getElementById('lblTask').innerHTML='Enter Task';
      document.getElementById('task').focus();
    }
    else{
      updateList([
                  ...todoList,
                  {
                    Id: todoList[todoList.length-1].Id +1,
                    task: taskToDo
                  }
                ]);
      updateTask('')
      // document.getElementById('task').value='';
    }
  }
}

export default App;
