import html from './app.html?raw';
import  todoStore, { Filters }    from '../store/todo.store';
import { renderTodos , renderPendientes} from './use-cases';


 const ElementIds =  {
    ClearCompleted : '.clear-completed',
    TodoList : '.todo-list',
    NewTodoInput: '#new-todo-input',
    TodoFilters : '.filtro',
    ConteoPendienteslabel :'#pending-count',
   
 }
/**
 * 
 * @param {*} elementId 
 */

export const App = (elementId) => {
    
    const displayTodos = () => {
    const todos  = todoStore.getTodos(todoStore.getCurrentFilter());
   
    renderTodos(ElementIds.TodoList,todos);
    actualizarConteoPendientes();

    }
    // funcion para el conteo de TODOOS
    const actualizarConteoPendientes =()=>{
      renderPendientes(ElementIds.ConteoPendienteslabel);

    }

    (()=>{

        const app = document.createElement('div');
        app.innerHTML= html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

// refrenecias  HTML

 const nuevaDescripcionInput = document.querySelector(ElementIds.NewTodoInput);
 const todolistaOrdenada = document.querySelector(ElementIds.TodoList);
 const Eliminartodo = document.querySelector(ElementIds.ClearCompleted);
 const filtrarLISTAS=document.querySelectorAll(ElementIds.TodoFilters);


 //listeners

 nuevaDescripcionInput.addEventListener('keyup', (event) =>{


    //validaciones del input de insercion de datos 
    if(event.keyCode !== 13) return;
    //validacion que no entre espacios en el imput
    if(event.target.value.trim().length === 0) return;
    // si cumple se manda a llamar el valor  de todos 
    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value='';


 });

 // escuchamos el evento 

 todolistaOrdenada.addEventListener('click',(evento)=>{
// aqui hacemos  la buscqueda del elemneto HTML padre mas cercado en este caso el ID que es un identificador unico
   const elementopadre= evento.target.closest('[data-id]');
   //AQUI LLAMAMOS LA FUNCION TOGGLETOODO PARA ALMACERNAR EL ID DEL HTML QUE TIENE TODOS LOS ELEMENTOS
   todoStore.toggleTodo(elementopadre.getAttribute('data-id'));
   displayTodos();



 });


 /// elimmnar 
 todolistaOrdenada.addEventListener('click',(evento)=>{
  
    // creamos una variable
    const eliminarElemento = evento.target.className === 'destroy';
    
    const elemento= evento.target.closest('[data-id]');
    if(!elemento || !eliminarElemento) return;

    todoStore.deleteTodo(elemento.getAttribute('data-id'));
    displayTodos();

    

   // const elementoPadre = evento.target.closest()
 });
 Eliminartodo.addEventListener('click',() => {
    

  
    //AQUI LLAMAMOS LA FUNCION TOGGLETOODO PARA ALMACERNAR EL ID DEL HTML QUE TIENE TODOS LOS ELEMENTOS
    todoStore.deleteCompleted();
    displayTodos();

 });

 filtrarLISTAS.forEach(elemento => {

    elemento.addEventListener('click',(elemento)=>{
        filtrarLISTAS.forEach(el => el.classList.remove('selected'));
        elemento.target.classList.add('selected');

        switch (elemento.target.text) {
            case 'Todos':

                todoStore.setfilter(Filters.All)
                break;
                case 'Pendientes':

                todoStore.setfilter(Filters.Pending)
                break;  
                case 'Completados':

                todoStore.setfilter(Filters.Completed)
                break;  
        
            
        }
        displayTodos();
    });
 })




}