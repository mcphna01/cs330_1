"use strict"

var shoppingModel= new ShoppingList()
var myView=new ShoppingView(shoppingModel)
var myDB=new LocalStorageSaver(shoppingModel,"nathans_storage")

function clickedon() {
	let rowcolids=['item', 'quantity', 'priority', 'store', 'section', 'price']
	let vals={}
	for (let cid of rowcolids) {
		vals[cid]=document.getElementById(cid).value
	}
	let it=new Item(vals.item, vals.quantity, vals.priority, vals.store, vals.section, vals.price)
	shoppingModel.addItem(it)

	let config={}
	console.log("config created")
    config.method='POST'
    config.body=JSON.stringify({item:vals.item, quantity:vals.quantity, 
    	priority:vals.priority, store:vals.store, section:vals.section, price:vals.price})
    config.headers={'Content-Type': 'application/json', 'Accept': 'application/json'}

    fetch("/savelist", config)
    .then(function(response) {
    	console.log(config.body)
    	//console.log(response.json())
    	return response.json()
    })
}