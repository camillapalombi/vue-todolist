//VUE.JS

const app = new Vue({
    el : '#root',
    data : {
        newItemList : '',
        arrToDoItems : [
            {
                text : 'Fare la spesa',
                done : true
            },
            {
                text : 'Lavare la macchina',
                done : false
            },
            {
                text : 'Rispondere alle e-mail',
                done : true
            },
            {
                text : 'Prendere appuntamento dal dentista',
                done : false
            }
        ]
    },
    methods : { //funzione per eliminare gli elementi dalla lista
        deleteItemList(index) {
            this.arrToDoItems.splice(index, 1);
        },
        addItemList() {
            if (this.newItemList.trim() != '') {
            this.arrToDoItems.push({text: this.newItemList, done: false});
            this.newItemList = '';
            }
        }
    }
});