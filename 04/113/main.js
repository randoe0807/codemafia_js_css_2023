const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this);
    }
}

console.log(obj.printFullName());

class MyObj {
    constructor() {
        this.first_name = 'Ryuichi';
        this.last_name = 'Ando';
    }
    printFullName(){
        console.log(`${this.first_name} ${this.last_name}`)
    }
}
const obj2 = new MyObj();
obj2.printFullName();
