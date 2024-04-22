
console.log("Welcome to hackKeshav2.0! ");
const Author = "Adarsh";
console.log(`Developed by ${Author}`);

// Submitting the Registration Form
let regForm = document.getElementById("my-form");
let submit = document.getElementById("submit");
// submit.addEventListener("click", ()=>{
//     regForm.submit();
// });


// creating the chatbot interface

let chatbot = document.getElementById("chatbot");

let chatlist = document.createElement('ul');
chatlist.classList.add("chat-list");

for (let i = 0; i < 5; i++) {
    let chatitem = document.createElement("li");

    let chatpara = document.createElement('p');
    chatpara.classList.add("chat-para");
    chatpara.innerText = "Hello, How can I assist you? Today.";
    chatitem.appendChild(chatpara);
    chatlist.appendChild(chatitem);


}
let chatForm = document.getElementById("chat-form");

// console.log(submitBtn)
// submitBtn.addEventListener("click", function(){
//     chatForm.submt;

// })

let userData = {
    "name": "unkown",
    "class": "4th B",
    "Roll No ": "4242",

}

console.log(userData);

document.getElementById('send-button').addEventListener('click', function () {
    var userInput = document.getElementById('chat-input').value;


    // Create a new chat item with the user input (for demonstration purposes)
    var responseContainer = document.getElementById('response-container');
    var newItem = document.createElement('div');
    newItem.classList.add("chat-div");

    let newItemPara = document.createElement("p");
    newItemPara.classList.add("chat-para");


    newItemPara.textContent = userInput;

    newItem.appendChild(newItemPara);

    // chat response 
    let resPara = document.createElement("p");
    resPara.classList.add("res-para");

    // calling the function for chat
    query(userInput).then((response) => {
        // let myoutput = JSON.stringify(response)
        let myoutput = response[0].generated_text;

        console.log(`Reply : ${myoutput}`);
        resPara.textContent = myoutput;

    });


    newItem.appendChild(resPara);

    responseContainer.appendChild(newItem);

    document.getElementById('chat-input').value = '';
});

// js program for send button effects
let sendBtn = document.getElementById("send-button");
let sendBtnImg = document.getElementById("ss-btn-img");
sendBtn.addEventListener("mouseover", function () {
    let BtnCond = true;
    if (BtnCond) {
        sendBtn.style.backgroundColor = "var(--dark-pink)";
        sendBtnImg.style.color = "var(--white)";
        BtnCond = false;

    }
    else {
        sendBtn.style.backgroundColor = "var(--white)";
        sendBtnImg.style.color = "var(--dark-pink)";
        BtnCond = true;

    }



})

// Submitting user chat on enter press

let myInput = document.getElementById("chat-input");
myInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("send-button").click();

    }
}
)


const HF_API_TOKEN = "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";
async function query(data) {

    const response = await fetch(
        "https://api-inference.huggingface.co/models/gpt2",
        {
            headers: { Authorization: `Bearer ${HF_API_TOKEN}` },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}


// Form Validation using JS Frontend

// displaying the error message
const msgDisplay = function (msg) {
    alert(msg);
    console.log(msg);

}


const alphaCheck = function (myStr) {
    let alphaArr = "abcdefghijklmnopqrstuvwxyz";
    for (let str of myStr) {
        let lowerStr = str.toLowerCase();
        for (let item of alphaArr) {
            if (lowerStr != item) {

                return false
            }
        }
    }
}

const formVal = () => {
    let fname = document.getElementById("f-name").value;
    let lname = document.getAnimations("l-name").value;
    let uemail = document.getElementById("email").value;

    let utelephone = document.getElementById("telephone").value;

    let password = document.getElementById("password").value;
    let cnfPassword = document.getElementById('cnf-password').value;


    let errMsg;

    if (fname == "" || lname == "" || uemail == "" || password == "" || cnfPassword == "") {
        errMsg = "Fields Cannot be blank! Try again. ";
        msgDisplay(errMsg);
        return false;

    }
    // Check for username contain nuerical or special characters

    if (!NaN(utelephone)) {
        errMsg = "Telephone must be numberical digits! ";
        msgDisplay(errMsg);
        return false;
    }
    if (password != cnfPassword) {
        errMsg = "Passwords Do not match!";
        msgDisplay(errMsg);
        return false;

    }
    if (utelephone.length > 10) {
        errMsg = "Telephone Number must not have more than 10 digits! ";
        msgDisplay(errMsg);
        return false;

    }

    // alpha check
    let fout = alphaCheck(fname);
    let lout = alphaCheck(lname);

    if (!fout) {
        errMsg = `${fname} must have alphabetical values`;
        msgDisplay(errMsg);
        return false;
    }
    if (!lout) {
        errMsg = `${lname} must have alphabetical values`;
        msgDisplay(errMsg);
        return false;

    }

    return true;


}



// Submitting form onclick btn
const registerFunc = function () {
    document.getElementById("my-form").submit();
    console.log("Form submitted Successfully! ")
    alert("Form submitted Successfully!")
}










