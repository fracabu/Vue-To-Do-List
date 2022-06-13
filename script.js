const appVue = new Vue({
	// selettore dell'elemento html dove avviare vue
    el: "#app",

  // Conterrà tutti i dati necessari all'applicazione
    data: {
	  // varie chiavi necessarie all'app
    todolist : ['compra pane'],
    newItem : "",
    },
	
	// Conterrà una serie di funzioni
	methods: {
		// funzioni che useremo nell'app
        addItem () {
            this.todolist.push(this.newItem);
            this.newItem = '';
        }
	}
});