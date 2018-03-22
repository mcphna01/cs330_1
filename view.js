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

class LocalStorageSaver {
    constructor(model, lsname) {
        this.lsname=lsname
        let self=this
        model.subscribe(function(slist, msg) {
            self.saveAll(slist)
        })
        let restore_list=JSON.parse(localStorage.getItem(this.lsname))
        for (let vals of restore_list) {
            let it=new Item(vals.item, vals.quantity, vals.priority, vals.store, vals.section, vals.price)
            model.addItem(it)
        }
    }

    saveAll(slist) {
        let ls_list=JSON.stringify(slist.newItems)
        localStorage.setItem(this.lsname, ls_list)
    }
}