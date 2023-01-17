const form= document.getElementById("form");
const Name = document.getElementById("Name");
const email =document.getElementById("email")
form.addEventListener("submit",e=>{
    let values=[];
    if(Name.value==="" ||Name.value===null){
        values.push('Name is required !!!')
    }
    if(email.value==="" ||email.value===null){
        values.push('email is required !!!')
    }
    
    if (values.length>0){
        e.preventDefault()
        alert(values.join(', '))
    }
})
const togglerButton= document.getElementById("togglerButton")
const navList= document.getElementById("navList")
togglerButton.addEventListener("click",function(){
    navList.classList.toggle("active");
})