from flask import Flask, Response, request, jsonify
import random, json
import time

app=Flask(__name__)

@app.route('/savelist', methods=['GET','POST'])
def savelist():
    if request.method=='GET':
        num1=int(request.args['num1'])
        num2=int(request.args['num2'])
        print("got: ", num1, num2)
    else:
    	num1=int(request.json.get('num1'))
    	num2=int(request.json.get('num2'))
    #request.data contains raw data
    #request.form contains data from a submitted form
    #request.args contains the URL query_string
    #request.values combines args and form into one
	#res=Response(json.dumps(num1+num2))
	#res.headers['Content-Type']='application/json'
	#return res
    return jsonify(num1+num2) #does previous 3 lines all in one


@app.route('/getlist')
def getlist():
    
app.run(debug=True, port=5001)