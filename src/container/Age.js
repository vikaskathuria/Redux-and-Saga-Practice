import React, { Component } from 'react'
import {connect} from 'react-redux'
import {AgeDown,AgeUp} from '../action/todoAction'
 class Age extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             age:''
        }
    }

    
    render() {
        return (
            <div>
           <h2 style={{marginTop:'50px'}}>your age:{this.props.age}</h2>    
               <button onClick={this.props.AgeUp}>Age UP</button>
        <button onClick={this.props.AgeDown}>Age Down</button>
              
            </div>
        )
    }
}
const mapStateToProp=(state)=>({
    age : state.age
})
const mapDispatchToProps=(dispatch)=>({
    AgeUp:(value)=>dispatch(AgeUp(value)),
    AgeDown:(value)=>dispatch(AgeDown(value))

})

export default connect(mapStateToProp,mapDispatchToProps)(Age)
