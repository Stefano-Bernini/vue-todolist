const {createApp} = Vue;

createApp({
    data(){
        return{
            title_app: 'Vue Toboolist',
            new_task: '',
            tasks: [
                {
                    text: 'Seguire la lezione di Boolean',
                    done: true
                },
                {
                    text: 'Fare l\'esercizio quotidiano',
                    done: true
                },
                {
                    text: 'Lavare la macchina',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Giocare con il cane',
                    done: true
                },
                {
                    text: 'Falciare l\'erba del prato',
                    done: false
                },
                {
                    text: 'Fare la carbonara',
                    done: false
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
            
        }
    }
}).mount('#app');