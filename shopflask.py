from flask import Flask, Response, request, jsonify
import random, json
import time

app=Flask(__name__)

@app.route('/savelist', methods=['GET','POST'])
def savelist():
    return "<h1>Hello World<h1>"


@app.route('/getlist')
def getlist():

if __name__=='__main__':
    app.run()