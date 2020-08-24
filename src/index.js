import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import Header from "./Header";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <Header/>
        <TodoList/>
    </div>,
    destination
)