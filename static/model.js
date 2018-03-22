"use strict"

class Subject {
	constructor() {
		this.handlers=[]
	}

	subscribe(fn) {
		this.handlers.push(fn)
	}

	unsubscribe(fn) {
		this.handlers=this.handlers.filter(
			function(item) {
				if (item!==fn) {
					return item
				}
			}
		)
	}

	publish(msg, someobj) {
		var scope=someobj||window
		for (let fn of this.handlers) {
			fn(scope,msg)
		}
	}
}

class Item {
	constructor(item, quantity, priority, store, section, price) {
		this.item=item
		this.quantity=quantity
		this.store=store
		this.section=section
		this.price=price
		this.priority=priority

		this._purchased=false
	}

	get purchased() {
		return this._purchased
	}

	set purchased(nv) {
		this._purchased=nv
		alert(`${this.item} was purchased`)
	}
}

class ShoppingList extends Subject {
	constructor() {
		super()
		this.newItems=[]
		this.oldItems=[]

	}

	addItem(it) {
        this.newItems.push(it)
        this.publish('newitem', this)
	}
}