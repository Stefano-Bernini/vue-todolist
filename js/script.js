const {createApp} = Vue;

createApp({
    data(){
        return{
            title_app: 'Vue Toboolist',
            new_task: '',
            tasks: [
                {
                    text: 'Seguire la lezione di Boolean',
                    done: false,
                    edit_enabled: false
                },
                {
                    text: 'Fare l\'esercizio quotidiano',
                    done: false,
                    edit_enabled: false
                },
                {
                    text: 'Lavare la macchina',
                    done: false,
                    edit_enabled: false
                },
                {
                    text: 'Fare la spesa',
                    done: false,
                    edit_enabled: false
                },
                {
                    text: 'Giocare con il cane',
                    done: false,
                    edit_enabled: false
                },
                {
                    text: 'Falciare l\'erba del prato',
                    done: false,
                    edit_enabled: false
                },
                {
                    text: 'Fare la carbonara',
                    done: false,
                    edit_enabled: false
                }
            ]
        }
    },
    methods:{
        changeTaskStatus(index){
            this.tasks[index].done = !this.tasks[index].done;
        },
        deleteTask(index){
            this.tasks.splice(index,1);
        },
        addTask(){
            let obj = {
                text: this.new_task,
                done: false
            }

            this.tasks.push(obj);
            this.new_task = '';
            
        },
        editTask(index){
            this.tasks[index].edit_enabled = !this.tasks[index].edit_enabled;
        }
    }
}).mount('#app');