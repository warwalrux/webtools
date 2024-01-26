#!/usr/bin/python3
import quart
import time

app = quart.current_app

# Toastmasters Timer
@app.route('/timer', methods=["POST", "GET"])
async def webtimer():
    return await quart.render_template("timer.html")
