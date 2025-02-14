from flask import Flask,jsonify
from Controller.DatabaseController import *

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'

@app.route("/get_redstone/x")
def get_redstone():
    output=DatabaseController().get_item("redstone","x")
    print("request for x")
    print(output)
    return jsonify(output)



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050, debug=True)
