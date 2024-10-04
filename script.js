function store()
{
    var name=document.getElementById("name").Value;
    console.log(name);
}
// function store()
// {
//     var name=document.getElementById("name").Value;
//     var email=document.getElementById("email").value;
//     var subject=document.getElementById("subject").value;
//     var message=Document.getElementById("message").value;

//     localStorage.setItem("name",name);
//     localStorage.setItem("email",email);
//     localStorage.setItem("subject",subject);
//     localStorage.setItem("message",message);

//     let user_record=new Array();
//                     user_record = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
//                     if(user_record.some((v)=>{return v.email==email}))
//                     {
//                         alert("You already registrated with this emai");
//                     }
//                     else
//                     {
//                         user_record.push({
//                         "Name":name,
//                         "Email":email,
//                         "Subject":subject,
//                         "Message":message
//                     })
//                     }
//                     localStorage.setItem("users",JSON.stringify(user_record));
// }