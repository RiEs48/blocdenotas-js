


import { Todo } from '../models/todo.model';
import { createHtml } from "./";

let element;

// pedimos el id   del elemento y  el nombre todos 
export const renderTodos = (elementId, todos=[] )=>{

    if(!element)
    element = document.querySelector(elementId);

    if( !element) throw new Error(`Element ${elementId} no se encontro`);

    element.innerHTML = '';
    
    todos.forEach(todo => {
            element.append(createHtml(todo))
    });
}