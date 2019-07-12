import React, { Component } from 'react'
import {InputGroup,FormControl,Button,ListGroup, ListGroupItem} from 'react-bootstrap'
import {connect} from 'react-redux'
import {addToDo,deleteToDo} from '../action/todoAction'

 class Todo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            task:'',
            id:1,
        
             
        }
    }
    onClick=()=>{
        this.props.addToDo({id:this.state.id,title:this.state.task})
        this.setState({
            task:'',
            id: this.state.id + 1
        })

    }
    renderItems=()=>{
        console.log("console=>",this.props.todos)
     return this.props.todos.map((v,k)=><ListGroupItem onClick={()=>this.deleteToDo(v)} key={k} style = {{marginTop:"3%"}}>{v.title}</ListGroupItem>)
    }
    deleteToDo=(value)=>{
        this.props.deleteToDo(value)
    }
    onChange=(e)=>{
        this.setState({
         task:e.target.value
        })
        console.log(e.target.value)
    }
    
    render() {
        console.log("--->",this.props.todos)
        return (
            <div style={{margin:'auto',padding:100,width:'600px'}}>
                 <InputGroup className="mb-3">
                 <FormControl
      placeholder="To Do App"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      value={this.state.task}
      onChange={this.onChange}
    />
     <InputGroup.Append>
     <Button variant="primary" onClick={this.onClick}>Add To Do</Button>
    </InputGroup.Append>
                 </InputGroup>

                 <ListGroup>
                     {this.renderItems()}
                 </ListGroup>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    todos:state.todos
})
const mapDispatchToProps=(dispatch)=>({
    addToDo:(task)=>dispatch(addToDo(task)),
    deleteToDo:(id)=>dispatch(deleteToDo(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Todo)
