from Traq import app
from flask import render_template


@app.route("/landing")
def landing():
    return render_template('landing_page.html', title='landing page')


@app.route("/home")
def home():
    return render_template('welcome.html', title='welcome')


@app.route("/features")
def features():
    return render_template("last_page.html", title="features")


@app.route("/routes")
def routes():
    return render_template("route.html", title="routes")
