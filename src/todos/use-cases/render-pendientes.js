import todoStore, { Filters } from "../../store/todo.store";


let element;

/**
 * 
 * @param {*} elementId 
 */
export const renderPendientes = (elementId) =>{
    if (!element) 
        element =document.querySelector(elementId);
        
    if (!element) 
        throw new Error(`element ${elementId } NO SE Encontro`);

    element.innerHTML = todoStore.getTodos(Filters.Pending).length;

        
    


}