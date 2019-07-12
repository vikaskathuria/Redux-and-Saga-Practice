import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './container/Todo'
import {Provider} from 'react-redux'
import {store} from './store'
import Age  from './container/Age';
import Dog  from './container/dog';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
 <Todo/>
   {/* < Age/> */}
   {/* <Dog/> */}
    </Provider>
    </div>
  );
}

export default App;
