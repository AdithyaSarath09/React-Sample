import React, { useState } from 'react';

interface UI {
  id: number;
  text: string;
}

 const Task : React.FC=() => {
  const [text, setText] = useState<string>('');
  const [items, setItems] = useState<UI[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();   // prevent page reload

  }

  function handleAdd() {
    if (!text.trim()) return;

    const newItem: UI = {
      id: Date.now(),
      text: text.trim(),
    };

    setItems([...items, newItem]);
    setText('');
  }

  function handleDelete(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h1>TO-DO TASK</h1>

      <form onSubmit={(e) =>  {handleSubmit(e); handleAdd(e); }}>
        <input
          type="text"
          placeholder="Enter todo item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
    </form>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.text}
              <button type="button" onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default Task;