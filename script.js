const inputBox = document.getElementById("input"); //get input tag by method of getElementById 
const TaskList = document.getElementById("tasks");//get ul tag by method of getElementById

// onclicking "Add" Button created a function to add task 
function AddTask(){
    // if input box is empty then it will  show alert message 
    if(inputBox.value.trim() === "") //trim() is used to avoid add task in the condition of adding only space in input
        {
        alert("Please Enter Task First");
    }
    // if in input  task is written then it will create a "li" tag which chlid of "ul" tag  
    else{
       let li = document.createElement("li"); //to create a li tag
       li.innerHTML = inputBox.value //it will write a input which is written by user in input-box
       TaskList.append(li); //append() function is used to assign the value(means add li tag value in ul tag )
       let cross = document.createElement("span"); // create a span tag 
       cross.innerHTML = "\u00d7"; // it is a symbol of X (you can write simple axe "X" also)
       TaskList.append(cross);   
    }
    
    inputBox.value = "";//after adding task it will make our input-box empty
}


