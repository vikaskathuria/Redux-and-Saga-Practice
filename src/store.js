import {applyMiddleware,createStore} from 'redux'
import {todoReducer} from './reducer/todoReducer'
// import {logger} from 'redux-logger'
import {reducer} from './redux' 
import createSagaMiddleware from 'redux-saga'
import {watchAgeUp} from './saga/saga'
//  import {watcherSaga} from './saga/dogSaga'

const sagaMiddleware=createSagaMiddleware()
 
export const store=createStore(todoReducer,applyMiddleware(sagaMiddleware))
// export const store=createStore(reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchAgeUp)
// sagaMiddleware.run(watcherSaga)
