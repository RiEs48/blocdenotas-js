import { Todo } from "../models/todo.model";

export const createHtml = (todo) =>{
    if (!todo) throw new Error('todo es un objeto requerido');

 // esto se llama la desestructuracion { done}de codigo para podeer llamar facilmente los elementos del objeto
    const {done,descripcion,id} = todo;
   // creaamos el htmle que requerimos para el append
    const html = `
   
                <div class="view">
                    <input class="toggle" type="checkbox" ${ done ? 'cheked' :''} >
                    <label>${descripcion}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
           
            `;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id',id);
    if(todo.done)
    liElement.classList.add('completed');
    
    return liElement;
    
}
