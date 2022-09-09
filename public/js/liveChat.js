 
let form = document.querySelector('form'); 

form.addEventListener('submit', async (e)=>{
    //prevents default behavior of form (reload)
    e.preventDefault();

    // make fetch call

    let newMessage = {
        name: document.querySelector('#comment-username').value, 
        title: document.querySelector('#comment-title').value, 
        message: document.querySelector("#comment-message").value
    }

    //make api call to add a new message 
    // socket.emit('msgFromClient', await fetch('/api', {
    //     method: "POST", 
    //     headers: {'Content-type': 'application/json; charset=UTF-8'},
    //     body: JSON.stringify(newMessage)
    // }).json()
    // )


    let results = await fetch('/api', {
        method: "POST", 
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(newMessage)
    })

    let messages = await results.json(); 

    // socket.on('msgFromServer', serverMessage=>{
    //     updateFeedback(serverMessage)
    // })
    updateFeedback(messages)
 
})


const displayMessages = async () => {
    
    let result = await fetch('/api'); 
    let messages = await result.json();  //[{}, {}, {}]

    // socket.emit('msgFromClient', await (await fetch('/api')).json())

    updateFeedback(messages)

    // socket.on('msgFromServer', serverMessage=>{
    // //     updateFeedback(serverMessage)
    // })
}


const updateFeedback = (messagesArr) => {
    let htmlBlock = "";
    messagesArr.forEach((item, index) =>{

        htmlBlock += '     <div class="feedback-item item-list media-list mb-3">';
        htmlBlock += '       <div class="feedback-item media">';
        htmlBlock += '       <br>';
        htmlBlock += '         <div class="feedback-info media-body">';
        htmlBlock += '           <div class="feedback-head">';
        htmlBlock += '             <div class="feedback-title"><strong>' + item.name + '</strong></div>';
        htmlBlock += '           </div>';
        htmlBlock += '           <div class="feedback-message">' + item.title + '<small> - ' + item.message + '</small></div>';
        htmlBlock += '         </div>'; 
        htmlBlock += '       </div>';
        htmlBlock += '     </div>';
    })
    
    //attach to a dom element
    let feedbackMessages = document.querySelector('.feedback-messages');
    feedbackMessages.innerHTML = htmlBlock;
}


displayMessages()