import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
      <TodoList />
      </div>
    )
  }
}

class TodoList extends Component {
  constructor(props){
    super();
    this.state = {
      list: [
        'ทำการบ้าน',
        'ฟังเพลงคุกกี้เสี่ยงทาย'
      ],
      delToggleList: [
        false,
        false
      ]
    }
  }
  
  addTodoList=()=>{
    console.log('ADD was CLICK')
    this.setState({
      list: [...this.state.list, this.refs.a.value],
      delToggleList: [...this.state.delToggleList, false]
    })
  }

  changeListStyle = (e) =>{
    this.state.delToggleList[e.target.id] ? e.target.className = "onClick" : e.target.className = "unClick";
  }

  delTodoList=(e)=>{
    console.log(e.target.id)
    let tempDT = this.state.delToggleList
    tempDT[e.target.id] = !this.state.delToggleList[e.target.id]
    this.setState({
      delToggleList: tempDT
    })
    this.changeListStyle(e);
  }
    
  render() {
    console.log(this.state.delToggleList)
    return (
      <div>
        <input type="text" ref="a"/> <button onClick={this.addTodoList}>ADD</button>
        <hr />
        <h2> List </h2>*click on the list to toggle done or not done list<hr/>
        {this.state.list.map((item,index)=> <li key={index} id={index} onMouseDown={this.delTodoList} >{item} <hr/> </li>)}
      </div>
    );
  }
}

export default App;
