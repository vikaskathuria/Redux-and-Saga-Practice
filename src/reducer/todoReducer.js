const initialState={
    // id:0,
        // title:'Redux to do app',
        age:20,
        todos:[]
}
export const todoReducer=(state=initialState,action)=>{
    console.log("action=>",action)
    switch(action.type) {
        case "ADD_TO_DO":
        return{
            ...state,
            todos:[...state.todos,action.payload]
        }
        case "DELETE_TO_DO":
        const index= state.todos.indexOf(action.deletedata);
        console.log("index->",index)
        return{
            ...state,
        //    ...state.todos.splice(0,1,action.deletedata)
            todos:[
                ...state.todos.slice(0,index),
                ...state.todos.slice(index+1)
            ]
            // todos:state.todos.filter(v=>v.id!==action.id)
        }
       case "AGE_UP_ASYNC":
       return{
           ...state,
           age:state.age + action.value

       }
       case "AGE_DOWN_ASYNC":
       return{
           ...state,
           age:state.age - 1

       }
        default:
        return state
    }

}