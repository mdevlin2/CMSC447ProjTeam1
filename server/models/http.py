# The http response model we can use to send back from an API call
class Response:
    def __init__(self, data):
        self.err = 0
        self.data = data
