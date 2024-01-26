#!/usr/bin/python3
import quart
import ics
import io

app = quart.current_app

# Roundtable Make ICS page
@app.route('/makeICS', methods=["POST", "GET"])
async def makeICS():
    if quart.request.method == "GET":
        return await quart.render_template("makeICS.html")
    if quart.request.method == "POST":
        data = await quart.request.form
        handle = data["event"]
        c = ics.Calendar()
        e = ics.Event()
        for key in data:
            setattr(e, key, data[key])
        c.events.add(e)

        # create a file like object that we can send to the user for download
        file = io.BytesIO()
        file.write("\n".join(c.serialize_iter()).encode('utf-8'))
        file.seek(0)
        # Return the file with the event name as the filename
        return await quart.send_file(file, attachment_filename=f"{handle}.ics", as_attachment=True)


# Roundtable Make QR page
@app.route('/makeQR', methods=["POST", "GET"])
async def makeQR():
    if quart.request.method == "GET":
        return await quart.render_template("makeQR.html")

    if quart.request.method == "POST":
        data = await quart.request.form
        return data
 # do the thing!

# Send Roundtable email

