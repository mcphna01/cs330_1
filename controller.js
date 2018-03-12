"use strict"

var shoppingModel= new ShoppingList()
var myView=new ShoppingView(shoppingModel)

function clickedon() {
	let rowcolids=['item', 'quantity', 'priority', 'store', 'section', 'price']
	let vals={}
	for (let cid of rowcolids) {
		vals[cid]=document.getElementById(cid).value
	}
	let it=new Item(vals.item, vals.quantity, vals.priority, vals.store, vals.section, vals.price)
	shoppingModel.addItem(it)
}