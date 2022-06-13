const appVue = new Vue({
	// selettore dell'elemento html dove avviare vue
    el: "#app",

  // Conterrà tutti i dati necessari all'applicazione
    data: {
    inputVal:'',
	newId:'',
    input: false,
    todolist : [{
        id : 1,
        elemento :'test',
    },
    
],
    newId: 2,
    },
	
	
	methods: {
		
        addTask : function () {
            if(this.addTask){
                this.todolist.push({
                id: this.newId++,
                elemento: this.inputVal,
                done:false
                })
            }
            this.inputVal = ''
        },
        done: function (text){
            if(text.done = false){
                text.done = true
            }else{
                text.done = false
            }
        }
	}
});