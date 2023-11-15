
// working json data and converting it into the js object.

const jsonData = '[{  "name":"Bharat", "surname":"yadav"}, {   "id":"1234",  "batch No.":"2345"}] ';


console.log(jsonData);

const jsObject = JSON.parse(jsonData);

console.log(jsObject);
console.log(jsObject[0].name);


// js object to json 

const obj1 = {
    name:"Bharat",
    surname:"yadav"
}


const jsonformatdata = JSON.stringify(obj1);

console.log();
console.log();
console.log("this is json data from js object:");

console.log(jsonformatdata);
console.log(jsonformatdata[0]);

const arr = [10,20,30,40,50];

arr.forEach((data)=>{
    console.log(data);
})
