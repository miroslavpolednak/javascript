var person = {
    age: "11",
    personName: "Miras",
    address: {
        street: "Tachlovice",
        postalCode: "25217"

    }
};


class personObj {
    /**
     * @param {number} age
     * @param {string} personName
     */
    constructor(age, personName) {
        var lastname = "Polednak";
        this.age = age;
        this.personName = personName;
        this.getLastname = () => {
            return lastname;
        };
    }
    Say() {
        console.log(`${this.age} ${this.personName} ${this.getLastname()} `);
    };
}

var prObj = new personObj(32, "Miras");
prObj.Say();