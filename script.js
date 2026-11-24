let heading = document.getElementById("heading");
heading.style.color="blue";
heading.style.fontsize="24px";



let message =document.getElementById("message");
message.style.color="red";
heading.style.fontsize="18px";

let anotherparagraph =document.querySelector("#another-paragraph");
anotherparagraph.style.color="yellow";
anotherparagraph.style.fontsize="18px";

let students=["Erick","john","Rita","lavender"];
let studentList =document.getElementById("studentlist");
for (let name of students){
    let listItem =document.createElement("li");
    listItem.textContent = name;
    studentList.appendChild(listItem);
}

function handleClick(){
    document.getElementById("heading1").textContent="This is javascript events!";
}

let button=document.getElementById("myButton");
button.addEventListener("click",
    function(){
        alert("Button clicked!");
    }
);