import React, { Component } from 'react';
import TodoItem from './TodoItem'
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            inputValue:''
        }
        this.handleBtnClickAdd=this.handleBtnClickAdd.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
    }
 
    handleBtnClickAdd(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
        
    }
    handleInputChange(e){
        this.setState({inputValue:e.target.value})
    }   
    handleDel(index){
        console.log(index)
        const list=[...this.state.list]
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
    getHtmlTodoItem(){
       return (
            this.state.list.map((item,index)=>{
                return (<TodoItem key={index} contents={item} index={index} delete={this.handleDel.bind(this,index)}></TodoItem>)
            })
       )   
    }
  render(){
    return (
        <div>              
            <div>
                <input className='input-color' value={this.state.inputValue} onChange={this.handleInputChange}/>
                <button style={{marginLeft:"10px",background:'orange',color:'#fff',border:'1px solid orange',height:'34px',width:'50px'}} onClick={this.handleBtnClickAdd}>add</button>
            </div>
            <ul>
                {
                    this.getHtmlTodoItem()
                }       
            </ul>        
        </div>
    )
  }
}
 
export default TodoList;