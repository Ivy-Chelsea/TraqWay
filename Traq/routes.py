from Traq import app
from flask import render_template
from Traq.data import saccos


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
    return render_template("sacco.html", title="saccos", saccos=saccos)


@app.route("/reviews")
def reviews():
    return render_template("alert.html", title="reviews", saccos=saccos)


@app.route("/stages")
def kenyan():
    return render_template("kenya_stages_map.html", title="stage locations")
