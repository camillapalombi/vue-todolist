//VUE.JS

const app = new Vue({
    el : '#root',
    data : {
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
    }
});