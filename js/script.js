const app =  new Vue({
    el:"#app",
    data:{
        dontShowNotify:true,
        indexContact:0,
        massageInput:" ",
        messagesIndex: 0, /* this.contacts[this.indexContact].messages.length - 1, */ /* problema ad inpostare l'ultimo accesso del contatto alla creazione della pagina */
        search:"",
        user:{
            name:"Nome",
            surname:"Utente",
            avatar:'./img/avatar_io.jpg',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        

    },
    created(){

    
    },
    mounted(){
        
    },
    computed: {
        filteredAndSorted(){
         // function to compare names
         function compare(a, b) {
           if (a.name < b.name) return -1;
           if (a.name > b.name) return 1;
           return 0;
         }
          
         return this.contacts.filter(user => {
            return user.name.toLowerCase().includes(this.search.toLowerCase())
         }).sort(compare)
        }
    },
    methods:{
        getCurrentDateTime: function () {
              
            const dateTimeNow = dayjs();
            return dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
            
        },
        addNotify:function(){
            let notify_button =document.getElementById("notify-button");

            if(this.dontShowNotify){
                this.dontShowNotify=false
                notify_button.className= `fas fa-bell-slash`
            }else{
                this.dontShowNotify=true     
                notify_button.className= `fas fa-bell`
            }
        },
        showMessage:function(contact,index){
           /* this.messagesIndex = contact.messages.length-1  */

            this.indexContact = index
            console.log(this.indexContact)
            
        },
        sendMessage:function(){

            this.contacts[indexContact].messages.push(
                {
                date: getCurrentDateTime() ,
                text: this.massageInput,
                status: 'sent',
            });

            console.log(this.contacts[indexContact].messages)

            this.massageInput = "";

            setInterval(function(){
                this.contacts[indexContact].messages.push(
                    {
                    date: getCurrentDateTime(),
                    text: "ciao",
                    status: 'received',
                });
            },1000)
        },

        

        
    }
}
);