from Traq import app
from flask import render_template


@app.route("/landing")
def landing():
    return render_template('landing_page.html', title='landing page')


@app.route("/home")
def home():
    return render_template('welcome.html', title='welcome')
