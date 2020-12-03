from flask import Flask, redirect, render_template
import json
app = Flask(__name__, static_folder='static', static_url_path='/')

@app.route('/')
def root():
    return redirect("/index.html")
@app.route('/lb/<name>/<score>')
def hello_name(name, score):
    with open('data.json', 'r') as f:
        s = json.loads(f.read().replace("u'", "'").replace("'", "\""))
        s.append([name[:10] + (name[10:] and '..'), int(score)])
        print str(sorted(s, key=lambda x: x[1]))
    open('data.json', 'w').write(str(sorted(s, key=lambda x: x[1], reverse=True)))
    return "Updated"
@app.route('/board')
def lb():
    return render_template('lb.html', members=json.loads(open('data.json', 'r').read().replace("u'", "'").replace("'", "\"")))

if __name__ == '__main__':
    app.run()
