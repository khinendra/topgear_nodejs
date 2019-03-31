var Person = {
    empNo : "255139",
    firstName : "Khinendra",
    lastName : "Bisen",
    company : "Wipro Technology",
    fullName : function(){
        return this.firstName+" "+this.lastName;
    },
    getFirstName : function (){
        return this.firstName;
    },
    getLastName : function(){
        return this.lastName;
    },
    getEmpNo : function(){
        return this.empNo;
    },
    getCompany : function(){
        return this.company;
    }
}

var full_name = Person.fullName();
console.log("Emp full name = "+full_name);
console.log("Emp ID = "+Person.getEmpNo());
console.log("Company = "+Person.getCompany());