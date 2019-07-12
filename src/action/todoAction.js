export const addToDo=(task)=>({
 type:'ADD_TO_DO',
 payload:task,
})
export const deleteToDo=(deletedata)=>({
    type:'DELETE_TO_DO',
    deletedata
})
export const AgeUp=(value)=>({
    type:'AGE_UP',
    payload:value
})
export const AgeDown=(value)=>({
    type:'AGE_DOWN',
    payload:value
})