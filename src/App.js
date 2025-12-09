import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const toggleFavorite = (todo) => {
    const updatedTodos = todos.map(t => {
      if (t.sno === todo.sno) {
        return { ...t, favorite: !t.favorite };
      }
      return t;
    });

    setTodos(updatedTodos);
  };


  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      favorite: false,
    }

    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />

        <Routes>

          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos
                  todos={todos}
                  onDelete={onDelete}
                  onFavorite={toggleFavorite}
                />
              </>
            }
          />

          {/* Favourites Route */}
          <Route
            path="/favourites"
            element={
              <>
                <Todos
                  todos={todos.filter(t => t.favorite)}
                  onDelete={onDelete}
                  onFavorite={toggleFavorite}
                />
              </>
            }
          />

          {/* About Route */}
          <Route
            path="/about"
            element={<About />}
          />

        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
