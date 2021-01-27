const Students = {
    data() {
        return {
            counter: 0,
            lastName: '',
            firstName: '',
            students: [],
            filled: false
        }
    },
    methods: {
        name(event) {
            this.firstName=event.target.value;
            this.counter=this.firstName.length + this.lastName.length;
            if (this.lastName != '' && this.firstName != '') {
                this.filled = true;
            }
        },
        surname(event) {
            this.lastName=event.target.value;
            this.counter=this.firstName.length + this.lastName.length;
            if (this.lastName != '' && this.firstName != '') {
                this.filled = true;
            }
        },
        addStudent () {
            if (this.lastName != '' && this.firstName != '') 
            {
                this.students.push(newSpisok(this.firstName)+' '+newSpisok(this.lastName));
                this.lastName = '';
                this.firstName = '';
                this.counter = 0;
                this.filled = false;
            }
        }
    }
}
Vue.createApp(Students).mount('.container');
function newSpisok(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}