const form= document.getElementById("form");
const Name = document.getElementById("name");
const number = document.getElementById("PhoneNumber");
const address= document.getElementById("Address");
const time = document.getElementById("time");
const error =document.getElementById("error");
const order= document.getElementById("order")
const items=document.getElementById("items")
const email =document.getElementById("email")
console.log(form)
form.addEventListener("submit",e=>{
    let values=[];
    if(Name.value==="" ||Name.value===null){
        values.push('Name is required !!!')
    }
    if(Address.value==="" ||Address.value===null){
        values.push('Date is required !!!')
    }
    if(number.value==="" ||number.value===null){
        values.push('Number is required !!!')
    }
    if(time.value==="" ||time.value===null){
        values.push('The time is required !!!')
    }
    if(order.value==="" ||order.value===null){
        values.push('your order is required !!!')
    }
    if(items.value==="" ||items.value===null){
        values.push('your order is required !!!')
    }
    if(items.value=="0"){
        values.push('item must be at least one !!!')
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