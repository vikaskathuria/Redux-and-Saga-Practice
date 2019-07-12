import React, { Component } from 'react'
import logo from "../logo.svg";
import "../App.css";
import  { connect } from 'react-redux';
class dog extends Component {
    render() {
        const {dog,fetching,error,onRequestDog}=this.props
        return (
            <div>
             <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>
        {dog?
          (<p className="App-intro">Keep clicking for new dogs</p>):
          (<p>Replace the react logo with dog icon</p>)

        }
        {fetching?
        (<button disabled>Fetching...</button>):
        (<button onClick={onRequestDog}>Request a Dog</button>)
        }
        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

                
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
    })
    const mapDispatchToProps=(dispatch)=>{
        return{
            onRequestDog:()=>dispatch({type:'API_CALL_REQUEST'})
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(dog)
