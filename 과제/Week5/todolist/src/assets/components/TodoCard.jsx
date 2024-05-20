import React, { useRef, useState } from 'react'
import plus from '../img/plus.svg'

export default function TodoCard({ todoList, setTodoList }) {
    const newId = useRef(4);
    const [newTodo,setNewTodo] = useState("")
    const [newMemo,setNewMemo] = useState("")
    const [newDone,setNewDone] = useState(false)

  
    const addTodo = () => {
        const newTodoList = [...todoList];
        // newTodoList 배열에 새롭게 받은 todoList를 추가해준다. 
        const newTodoObj = {
            id: newId.current,
            //current를 통해 생성될 때마다 다른 Id를 부여할 수 있도록 해준다. 
            title : newTodo,
            content: newMemo,
            done : newDone,
          }
          //Id값 이전값에 대해 +1씩 하기
          newId.current++;
        newTodoList.push(newTodoObj);
        setTodoList(newTodoList);
    }

  return (
    <div className ="card-container">
        <h3>TO-DO LIST</h3>
        <br/>
        <div className="todoWrap">
            <div className = "inputTodoWrap">
                <input className='input'
                    placeholder='오늘 할 일을 입력해주세요!'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                /> 
            </div>
            <div>
                <img src={plus} alt="" onClick={addTodo} className = "cardButton" />
            </div>
        </div>
    </div>
  )
}