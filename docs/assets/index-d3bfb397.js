(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const v=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Marca todo lo que Completaste!!!</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="selected filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
   \r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="">Marvin Rivas</a></p>\r
  \r
</footer>`;let w;const L=new Uint8Array(16);function C(){if(!w&&(w=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!w))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return w(L)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function S(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}const A=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),E={randomUUID:A};function P(e,t,i){if(E.randomUUID&&!t&&!e)return E.randomUUID();e=e||{};const d=e.random||(e.rng||C)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=d[o];return t}return S(d)}class u{constructor(t){this.id=P(),this.descripcion=t,this.done=!1,this.createdAt=new Date}}const c={All:"all",Completed:"Completed",Pending:"Pending"},l={todos:[new u("PIEDRA DEL ALAMA"),new u("PIEDRA DEL infinito"),new u("PIEDRA DEL tiempo"),new u("PIEDRA DEL realidad"),new u("PIEDRA DEL poder"),new u("PIEDRA DE de su amor jaja :V")],filter:c.All},D=()=>{T(),console.log("InitStore 🥑")},T=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=c.All}=JSON.parse(localStorage.getItem("state"));l.todos=e,l.filter=t},f=()=>{localStorage.setItem("state",JSON.stringify(l))},I=(e=c.All)=>{switch(e){case c.All:return[...l.todos];case c.Completed:return l.todos.filter(t=>t.done);case c.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Opcion ${e} no es valida `)}},R=e=>{if(!e)throw new Error("Not IMPLEMENTADO");l.todos.push(new u(e)),f()},M=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},O=e=>{l.todos=l.todos.filter(t=>t.id!==e),f()},k=()=>{l.todos=l.todos.filter(e=>!e.done),f()},x=(e=c.All)=>{l.filter=e,f()},N=()=>l.filter,a={initStore:D,loadStore:T,getTodos:I,addTodo:R,toggleTodo:M,deleteTodo:O,deleteCompleted:k,setfilter:x,getCurrentFilter:N},U=e=>{if(!e)throw new Error("todo es un objeto requerido");const{done:t,descripcion:i,id:d}=e,o=`
   
                <div class="view">
                    <input class="toggle" type="checkbox" ${t?"cheked":""} >
                    <label>${i}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
           
            `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",d),e.done&&n.classList.add("completed"),n};let g;const q=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(`Element ${e} no se encontro`);g.innerHTML="",t.forEach(i=>{g.append(U(i))})};let b;const H=e=>{if(b||(b=document.querySelector(e)),!b)throw new Error(`element ${e} NO SE Encontro`);b.innerHTML=a.getTodos(c.Pending).length},h={ClearCompleted:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",ConteoPendienteslabel:"#pending-count"},V=e=>{const t=()=>{const s=a.getTodos(a.getCurrentFilter());q(h.TodoList,s),i()},i=()=>{H(h.ConteoPendienteslabel)};(()=>{const s=document.createElement("div");s.innerHTML=v,document.querySelector(e).append(s),t()})();const d=document.querySelector(h.NewTodoInput),o=document.querySelector(h.TodoList),n=document.querySelector(h.ClearCompleted),p=document.querySelectorAll(h.TodoFilters);d.addEventListener("keyup",s=>{s.keyCode===13&&s.target.value.trim().length!==0&&(a.addTodo(s.target.value),t(),s.target.value="")}),o.addEventListener("click",s=>{const m=s.target.closest("[data-id]");a.toggleTodo(m.getAttribute("data-id")),t()}),o.addEventListener("click",s=>{const m=s.target.className==="destroy",y=s.target.closest("[data-id]");!y||!m||(a.deleteTodo(y.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{a.deleteCompleted(),t()}),p.forEach(s=>{s.addEventListener("click",m=>{switch(p.forEach(y=>y.classList.remove("selected")),m.target.classList.add("selected"),m.target.text){case"Todos":a.setfilter(c.All);break;case"Pendientes":a.setfilter(c.Pending);break;case"Completados":a.setfilter(c.Completed);break}t()})})};a.initStore();V("#app");
