from Traq import app
from flask import render_template


@app.route("/landing")
def landing():
    return render_template('landing_page.html', title='landing page')


@app.route("/home")
def home():
    return render_template('welcome.html', title='welcome')


@app.route("/contact")
def contact():
    return render_template("last_page.html", title="contact us")


@app.route("/routes")
def routes():
    return render_template("route.html", title="routes")


@app.route("/sacco")
def sacco():
    return render_template("sacco.html", title="saccos")
