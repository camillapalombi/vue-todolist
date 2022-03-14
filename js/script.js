//VUE.JS

const app = new Vue({
    el : '#root',
    data : {
        newItemList :
            {
                text: '',
                done: false
            },
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
            if (this.newItemList.text.trim() != '') {

            this.arrToDoItems.push(this.newItemList);
            this.newItemList = {};

            }
        }
    }
});