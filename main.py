#!/usr/bin/python3

import quart

app = quart.Quart(__name__)

if __name__ == "__main__":
    @app.before_serving
    async def start():
        async with app.app_context():
            from server import endpoints

    app.run()
