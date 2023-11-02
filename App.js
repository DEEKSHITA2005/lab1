import React from 'react';
import ProductList from './Components/ProductList';
import TodoList from './Components/TodoList';

function App() {
  const products = [
    { id: 1, name: 'Pants', price: 10 },
    { id: 2, name: 'Apples', price: 20 },
    { id: 3, name: 'Shoes', price: 30 },
  ];

  const todos = [
    { title: 'Task 1', completed: false },
    { title: 'Task 2', completed: true },
    { title: 'Task 3', completed: false },
  ];

  return (
    <div className="App">
      <h3>Exercise 1</h3>
      <ProductList products={products} />
      <hr />
      <h3>Exercise 2</h3>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;