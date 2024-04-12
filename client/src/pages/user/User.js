import { useState } from 'react';
import './User.scss';

function User() {
  const [todosList, setTodosList] = useState([]);

  return (
    <div className="User">
      <header className="User-header">
        <h1>User</h1>
        {/* Lazy Loading on dynamic Data */}
        <button onClick={() => { import('./../../constant/data').then((module) => setTodosList(module.todos)) }}>Load Data</button>
        {
          todosList.map((item) => <p key={item.id}> {item.id} - {item.title}</p>)
        }
      </header>
    </div>
  );
}

export default User;
