window.alert("Multiplication tables!!! Click on 'OK' to continue.")

const body=document.querySelector("body")

const one=document.querySelector("#one")
const two=document.querySelector("#two")
const three=document.querySelector("#three")
const four=document.querySelector("#four")
const five=document.querySelector("#five")

const six=document.querySelector("#one2")
const seven=document.querySelector("#two2")
const eight=document.querySelector("#three2")
const nine=document.querySelector("#four2")
const ten=document.querySelector("#five2")

const onecont=document.querySelector(".oneul")
const twocont=document.querySelector(".twoul")
const threecont=document.querySelector(".threeul")
const fourcont=document.querySelector(".fourul")
const fivecont=document.querySelector(".fiveul")

const sixcont=document.querySelector(".one2ul")
const sevencont=document.querySelector(".two2ul")
const eightcont=document.querySelector(".three2ul")
const ninecont=document.querySelector(".four2ul")
const tencont=document.querySelector(".five2ul")

one.addEventListener("click",
function(){
    body.style.backgroundColor="yellow"
    for(let i=1;i<11;i++){
        let listItem=document.createElement("li")
        listItem.innerText=i
        onecont.append(listItem)
    }
})
two.addEventListener("click",
function(){
    body.style.backgroundColor="turquoise"
    for(let i=1;i<11;i++){
        let listItem2=document.createElement("li")
        listItem2.innerText=i*2
        twocont.append(listItem2)
    }
})
three.addEventListener("click",
function(){
    body.style.backgroundColor="lime"
    for(let i=1;i<11;i++){
        let listItem3=document.createElement("li")
        listItem3.innerText=i*3
        threecont.append(listItem3)
    }
})
four.addEventListener("click",
function(){
    body.style.backgroundColor="lightblue"
    for(let i=1;i<11;i++){
        let listItem4=document.createElement("li")
        listItem4.innerText=i*4
        fourcont.append(listItem4)
    }
})
five.addEventListener("click",
function(){
    body.style.backgroundColor="lightyellow"
    for(let i=1;i<11;i++){
        let listItem5=document.createElement("li")
        listItem5.innerText=i*5
        fivecont.append(listItem5)
    }
})
six.addEventListener("click",
function(){
    body.style.backgroundColor="yellow"
    for(let i=1;i<11;i++){
        let listItem6=document.createElement("li")
        listItem6.innerText=i*6
        sixcont.append(listItem6)
    }
})
seven.addEventListener("click",
function(){
    body.style.backgroundColor="turquoise"
    for(let i=1;i<11;i++){
        let listItem7=document.createElement("li")
        listItem7.innerText=i*7
        sevencont.append(listItem7)
    }
})
eight.addEventListener("click",
function(){
    body.style.backgroundColor="lime"
    for(let i=1;i<11;i++){
        let listItem8=document.createElement("li")
        listItem8.innerText=i*8
        eightcont.append(listItem8)
    }
})
nine.addEventListener("click",
function(){
    body.style.backgroundColor="lightblue"
    for(let i=1;i<11;i++){
        let listItem9=document.createElement("li")
        listItem9.innerText=i*9
        ninecont.append(listItem9)
    }
})
ten.addEventListener("click",
function(){
    body.style.backgroundColor="lightyellow"
    for(let i=1;i<11;i++){
        let listItem10=document.createElement("li")
        listItem10.innerText=i*10
        tencont.append(listItem10)
    }
})
