//VUE.JS

const app = new Vue({
    el : '#root',
    data : {
        newItemList : '', //list items che inserirà l'utente dall'input
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
        addItemList() { //funzione per aggiungere elementi alla lista tramite l'input
            if (this.newItemList.trim() == '') {
                alert('Scrivi qualcosa!') //se l'utente lascia l'input vuoto esce l'alert
            } else {
                this.arrToDoItems.push({text: this.newItemList, done: false}); //aggiungo i nuovi items nell'array
                this.newItemList = ''; //azzeramento del campo input
            }
        }
    }
});