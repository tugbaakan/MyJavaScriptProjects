// constructor
let myComputer = new Object();
let resolution = "screenresolution"

myComputer.brand = "Toshiba"
myComputer.memory = 1024
myComputer["color"] = "gray"
myComputer[resolution] = "1080p";

console.log(
    "My computer brand is ", myComputer.brand, ". It has memory of ", myComputer["memory"]
    , "Its color is " , myComputer["color"], ". It has resolution of ", myComputer.screenresolution
);

// create
const occupation = {
    type : "none",
    displayType : function() {
        console.log(this.type);
    }
}

let police = Object.create(occupation);
police.type = "policeman";
police.displayType();

let developer = Object.create(occupation);
developer.type = "web developer";
developer.displayType();

// clonning of object using assign()
let student = {
    name : "Taurun",
    age: 21
}

let tutor = {

}
tutor = Object.assign({},student);

console.log("Student: " , student);
console.log("Tutor: ", tutor);

// appending of object using assign()
let student2 = {
    name : "Taurun",
    age: 21
}

let skills = {
    languages: "Python, Javascript",
    experience: 3    
}

tutor2 = Object.assign({}, student2, skills);

console.log("Student2: " , student2);
console.log("Tutor2: ", tutor2);


