const app = Vue.createApp({
    data() {
        return {
            newTask: {
                text: '',
                date: '',
                time: ''
            },
            tasks: []
        }
    },
    methods: {
        addTask() {
            if (this.newTask.text.trim()) {
                this.tasks.push({
                    text: this.newTask.text,
                    date: this.newTask.date,
                    time: this.newTask.time,
                    completed: false,
                    editing: false,
                    editText: '',
                    editDate: '',
                    editTime: ''
                });
                this.newTask = { text: '', date: '', time: '' };
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        startEdit(index) {
            this.tasks[index].editing = true;
            this.tasks[index].editText = this.tasks[index].text;
            this.tasks[index].editDate = this.tasks[index].date;
            this.tasks[index].editTime = this.tasks[index].time;
        },
        finishEdit(index) {
            if (this.tasks[index].editText.trim()) {
                this.tasks[index].text = this.tasks[index].editText;
                this.tasks[index].date = this.tasks[index].editDate;
                this.tasks[index].time = this.tasks[index].editTime;
            }
            this.tasks[index].editing = false;
        },
        cancelEdit(index) {
            this.tasks[index].editing = false;
        },
        formatDateTime(date, time) {
            if (!date && !time) return '';
            let formattedDate = date ? new Date(date).toLocaleDateString() : '';
            return `${formattedDate} ${time || ''}`.trim();
        }
    }
});

app.mount('#app');
