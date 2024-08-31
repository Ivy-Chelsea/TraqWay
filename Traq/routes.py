from Traq import app
from flask import render_template


@app.route("/landing")
def landing():
    return render_template('landing_page.html', title='landing page')