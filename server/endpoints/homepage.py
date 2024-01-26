#!/usr/bin/python3

import quart
app = quart.current_app

@app.route('/')
async def homepage():
    return await quart.render_template("homepage.html")
