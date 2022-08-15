// Using for in with object

let student = {
    id : "ganesh", 
    msg   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    task : "zen portal task",
    mail: "shgane468@gmail.com"
};
console.log(student.id);
for(let key in student){
    console.log(key,":",student[key]);
}





//USing for loop with array

let student2  = [{
    "id" : "ganesh", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "shgane468@gmail.com"
}]
for(let i = 0; i < student2.length; i++) {
    var obj = student2[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);}
// using for of in array
    for (let i of student2){
        console.log(i);
    }
    
student2.forEach(function(task){
    console.log(student2);
})