import React, { useState } from 'react'


const TodoList= ({ todoList,setTodoList }) => {
    

    const deleteTodo=(id)=>{
        const newTodoList=todoList.filter(a=>a.id !== id);
        
        setTodoList(newTodoList)
    }


    return (
        <div className='list-container'>
        <div className="TodoList">
            <div>
                {todoList.map((it)=>(
                    <div className="item-wrap" key={it.id}>
                        <div>
                            <input type="checkbox" id="check1" />
                            <label for ="check1"></label>
                        </div>

                        <div>
                        <div className='title-container'>{it.title} </div>
                        </div>
                        
                        <div>
                        <button 
                        className = "deleteBtn"
                        onClick={()=> {deleteTodo(it.id)}}>
                            삭제</button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}


export default TodoList;