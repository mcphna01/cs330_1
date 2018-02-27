"use strict"

function dropquantity() {
    document.querySelector("#quantdrop").classList.toggle("show")
}

function add() {
	let p=document.createElement("p")
	p.innerHTML=document.querySelector("#item")
	let body=document.querySelector("#body")
	body.appendChild(p)

	let price=4
	let item="milk"
	let quant=5
	let test=document.createElement("p")
	test.innerHTML=price, item, quant
	body.appendChild(test)
}