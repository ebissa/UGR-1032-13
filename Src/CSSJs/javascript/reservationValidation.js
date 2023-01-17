const form= document.getElementById("form");
const Name = document.getElementById("name");
const number = document.getElementById("number");
const date = document.getElementById("date");
const time = document.getElementById("time");
const error =document.getElementById("error");
form.addEventListener("submit",e=>{
    let values=[];
    if(Name.value==="" ||Name.value===null){
        values.push('Name is required !!!')
    }
    if(date.value==="" ||date.value===null){
        values.push('Date is required !!!')
    }
    if(number.value==="" ||number.value===null){
        values.push('Number is required !!!')
    }
    if(time.value==="" ||time.value===null){
        values.push('The time is required !!!')
    }
    
    if (values.length>0){
        error.innerText= values.join(', ')
        e.preventDefault()
        alert(values.join(', '))
    }
})