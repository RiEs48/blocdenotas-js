// 
import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All         :'all',
    Completed   :'Completed',
    Pending     :'Pending'
}
const state = {
    todos: [
        new Todo('PIEDRA DEL ALAMA'),
        new Todo('PIEDRA DEL infinito'),
        new Todo('PIEDRA DEL tiempo'),
        new Todo('PIEDRA DEL realidad'),
        new Todo('PIEDRA DEL poder'),
        new Todo('PIEDRA DE de su amor jaja :V'),

    ],
    filter: Filters.All,
}

const initStore = () =>{
    loadStore();
   
    console.log('InitStore 🥑');
}



 const loadStore = () =>{
    // hacemos la condicion para preguntar si tenemos algun dato en el LOCALSTORAGE
    if(!localStorage.getItem('state')) return;
    //desestructuramos  para que sea facil la manipulacion de datos 
   const{todos = [],filter= Filters.All} = JSON.parse(localStorage.getItem('state'));
   state.todos=todos;
   state.filter=filter;

 }
 // esta funcion se llama en todas las funciones que se adjuntan datos o se eliminan
 const salvandoStadoEnLocalStorage =() => {
//mandamos todo en objeto JSON
    localStorage.setItem('state',JSON.stringify(state));

 }


 const getTodos = (filter = Filters.All) => {
    // condicion  para obeter datos 

    switch (filter) {
        case Filters.All:

        // utilizamos el operador spreed ...
         return [...state.todos];
         case Filters.Completed:
            return state.todos.filter(todo => todo.done);
         case Filters.Pending:
            return state.todos.filter(todo => !todo.done);

          default:
            throw new Error(`Opcion ${filter} no es valida `);
    }


 }

 /**
  * 
  * @param {String} todo 
  */
 //metodo de agregacion
const addTodo = ( descripcion ) =>{
    // insertando una descripcion 
    if (!descripcion)   throw new Error('Not IMPLEMENTADO');
    state.todos.push(new Todo(descripcion));
    salvandoStadoEnLocalStorage();
  

}


const toggleTodo = (todoId) => {
    // aqui usamos el metodo map  QUE NOS PERIMITE  RETORNAR CADA ELEMENTO
    state.todos = state.todos.map(todo  => {
         if (todo.id === todoId) {

            todo.done =!todo.done;            
         }
         return todo;
    });
    salvandoStadoEnLocalStorage();
}

// funcion de eliminar 
const deleteTodo = (todoId) =>{
    // agarramos  el elemeto 
    state.todos = state.todos.filter( todo =>todo.id !==  todoId);
    salvandoStadoEnLocalStorage();
   

}
const deleteCompleted =() => {
    state.todos = state.todos.filter( todo =>!todo.done);
    salvandoStadoEnLocalStorage();
    

}
//
const setfilter = (newFilter = Filters.All) =>{
    
    state.filter = newFilter;
    salvandoStadoEnLocalStorage();


}

const getCurrentFilter =() => {
    return state.filter;

}
// metodos  o funciones 
export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setfilter,
    getCurrentFilter,
}