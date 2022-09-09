const socket = io();

let chatUsername = document.querySelector('#chat-username')
let chatMessage = document.querySelector('#chat-message')
let chatForm = document.querySelector("#form")
let chatDisplay = document.querySelector("#chat-display")
console.log("work1")
socket.on("updateMsg", data =>{
    let newMessage = document.createElement("p")
    // let newMessage = `<p></p>`
    console.log(newMessage)
    if(chatUsername.value === data.username){
        newMessage.className = "bg-success chat-text text-lg-end"
    }
    else{
        newMessage.className = "bg-info text-warning chat-text"
    }
    newMessage.innerHTML = `<strong>${data.username}</strong>: ${data.message}`
    console.log(newMessage.innerHTML)

    console.log(newMessage)
    console.log(chatDisplay.firstChild)

    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild)
    // chatDisplay

    // newMessage.innerHTML = ""

})

chatForm.addEventListener("submit", e=>{
    e.preventDefault()
    console.log("2")
    socket.emit('postMessage',{
        username: chatUsername.value,
        message: chatMessage.value 
    })
    chatMessage.value = ""

})