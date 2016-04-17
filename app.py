import os.path

from flask import Flask, request, make_response, send_from_directory, send_file, abort
                  
app = Flask(__name__, static_url_path='/static')

app.config.from_object(__name__)


### Use static directory to serve files
@app.route('/')
@app.route('/index.html')
# def hello():
#   return 'Hello, World!'
def send_index():
  # return send_from_directory('Site','index.html')
  return make_response(open('static/index.html').read())

# @app.route('/js/<filename>')
# def send_js(filename):
#   return send_from_directory('static/js',filename)

# @app.route('/css/<filename>')
# def send_css(filename):
#   return send_from_directory('static/css',filename)

# @app.route('/site/<path:path>')
# def send_site(path):
#   return send_from_directory('static',path)
###

### Services
@app.route('/file_list/')
def file_list():
  return 'File list'

## get file from any directory
# @app.route('/get_file/<filename>')
# def get_file(filename):
#   if '..' in filename or filename.startswith('/'):
#     abort(404)
#   filepath = os.path.join('/Users/hs3m/Desktop', filename)
#   if os.path.isfile(filepath):
#     return send_file(filepath)
#   else:
#     return 'File: {}'.format(filename)


@app.route('/set_score/<score>')
def set_score(score):
  return 'got score: {}'.format(score)
###
#
if __name__ == '__main__': 
  app.run(debug=True)