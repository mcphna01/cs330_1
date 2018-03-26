from flask import Flask, Response, request, jsonify
import random, json
import time

app=Flask(__name__)

@app.route('/savelist', methods=['POST'])
def savelist():
    it=request.json.get('item')
    quant=request.json.get('quantity')
    prior=request.json.get('priority')
    sto=request.json.get('store')
    sec=request.json.get('section')
    pri=request.json.get('price')
    return json.stringify({item:it, quantity:quant, priority:prior, 
    	store:sto, section:sec, price:pri})


@app.route('/getlist', methods=['GET'])
def getlist():
    return "<h1>get list<h1>"


app.run(debug=True, port=5001)

#if __name__=='__main__':
 #   app.run()