"use strict"

var shoppingModel= new ShoppingList()
var myView=new ShoppingView(shoppingModel)

function clickedon() {
	let rowcolids=['item', 'quantity', 'store', 'section', 'price', 'priority']
	let vals={}
	for (let cid of rowcolids) {
		vals[cid]=document.getElementById(cid).value
	}
	let it=new Item(vals.item, vals.quantity, vals.store, vals.section, vals.price, vals.priority)
	shoppingModel.addItem(it)
}