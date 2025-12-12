import React, { useState } from "react";
interface UI{
    id:number;
    title:string;
    done:boolean;
}

const TodoPage = () => {
    const [text, setText] = useState<string>('');
    const [todos, setTodos] = useState<UI[]>([]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);//step 2 :(Usestatil ulla values)input ulla current value kittan ulla function(e)-Controlled component
    }
    function handleAdd(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        if (!text.trim()) return;

        const newTodo = {
            id: Date.now(),
            title: text.trim(),
            done: false
        };

        setTodos([...todos, newTodo]);
        setText('');
    }

    function toggleTodo(id: number) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    }

    function handleDelete(id: number) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    return (
        <>


            <div>
                <h1>Todo List</h1>
                <form onSubmit={handleAdd}>
                    <input type="Text" placeholder='Enter todo item ' onChange={handleChange} value ={text}/> 
                            {/* step 1 */}
                    <button type="Submit" onClick={handleAdd}>Add Todo</button>
                </form> 

                {todos.length === 0 && <p>No todo items</p>}

                <ul>
                    {todos.map((todo) => (
                <li key={todo.id} ><span style={{textDecoration: todo.done ? 'line-through' : 'none', cursor: 'pointer'}} onClick={() => toggleTodo(todo.id)}>{todo.title}</span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
            ))}

            </ul>
        </div >
    </>
  );
};

export default TodoPage;
