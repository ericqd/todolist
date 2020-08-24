import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
    }
    addItem = (e) =>{
        if(this.userInput.value !== ""){
            var newItem = {
                text: this.userInput.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return{
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this.userInput.value = "";
        e.preventDefault();
    }
    deleteItem = (key) =>{
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });
        this.setState({
            items: filteredItems
        });
    }
    
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="Enter tasks here..." ref={(a)=> this.userInput = a}></input>
                        <button type="submit"></button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                           delete={this.deleteItem}/>
            </div>
        );
    }
}

export default TodoList;