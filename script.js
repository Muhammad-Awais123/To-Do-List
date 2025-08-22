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
       let span = document.createElement("span"); // create a span tag 
       span.innerHTML = "\u00d7"; // it is a symbol of X (you can write simple axe "X" also)
       
       li.append(span);   
    }
    inputBox.value = "";//after adding task it will make our input-box empty
    saveData();//call my saveData function
}
//add event lister 
TaskList.addEventListener("click"/*On click it will perform ==>*/,(e/*parameter*/)=>/*arrow function*/{
    if(e.target.tagName === "LI")//if we click on the li tag which is stored in the ul tag then it will change it's CSS class 
        {
        e.target.classList.toggle("checked");//it is a method to add the checked className
    saveData();//call my saveData function
    
    }
    else if(e.target.tagName === "SPAN")//it will chck if we click on span tag (X)
        {
        e.target.parentElement.remove();//it wil remove it's parentTag which is "li"
    saveData();//call my saveData function
    }
},false)
//function to save Data
function saveData(){
    localStorage.setItem("data",TaskList.innerHTML);
}
//function to show data after closing my website
function showData(){
    TaskList.innerHTML = localStorage.getItem("data")
}//it will add li tags in ul when we again open this site
showData();

