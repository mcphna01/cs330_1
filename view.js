"use strict"

class ShoppingView {
	constructor(model) {
		//let self=this
	    model.subscribe(this.redrawList.bind(this))
    }

    redrawList(shoppingList, msg) {
    	let tbl=document.getElementById("shoppinglist")
    	tbl.innerHTML=""
    	for (let item of shoppingList.newItems) {
    		this.addRow(item, tbl)
    	}
    }

    addRow(item, parent) {
    	let row=document.createElement("tr")
    	row.classList.add(item.priority)
    	let cb=document.createElement("input")
    	cb.type="checkbox"
    	cb.classList.add("form-control")
    	row.appendChild(cb)

    	for (let val of ['item', 'quantity', 'priority', 'store', 'section', 'price']) {
    		let td=document.createElement("td")
    	    td.innerHTML=item[val]
    	    row.appendChild(td)
    	}
    	parent.appendChild(row)

        cb.onchange=function() {
            //put line through row//
            let del=document.createElement("del")
            del.classList.add("form-control")
            //row.appendChild(strike)//
            let child_list=[]
            for (let i=0; i<7; i++) {
                child_list.push(row.children[i])
            }
            //child_list.unshift(document.createElement("del"))
            console.log(child_list)
            row.innerHTML=""
            parent.appendChild(del)
            del.appendChild(row)
            for (let i of child_list) {
                row.appendChild(i)
            }
            console.log(row)
            console.log(parent.children)
        }
    }
}