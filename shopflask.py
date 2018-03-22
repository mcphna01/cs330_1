from flask import Flask, Response, request, jsonify
import random, json
import time

app=Flask(__name__)

@app.route('/savelist', methods=['GET','POST'])
def savelist():
    return "<h1>save list<h1>"


@app.route('/getlist')
def getlist():
    return "<h1>get list<h1>"


app.run(debug=True, port=5001)

#if __name__=='__main__':
 #   app.run()