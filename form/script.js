const submit = document.getElementById('submitBtn');


submit.addEventListener('click',() => {

     event.preventDefault();
     
    const userName=document.getElementById("userName").Value
    const userGmail=document.getElementById("userGmail").value
    const userNumber=document.getElementById("userNumber").value
    const userAddress=document.getElementById("userAddress").value

    xonsole.log("namw:$ {userName}
    Email: ${userEmail}
    Number: ${userNumber}
    Address: ${userAddress}
    );
});