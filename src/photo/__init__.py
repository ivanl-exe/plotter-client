from typing import Union
from util.path import conjoin
from PIL import Image
from custom.filters import *
from io import BytesIO
from base64 import b64encode, b64decode

class Photo:
    def __init__(self, path: Union[tuple, str]) -> None:
        if type(path) == tuple: path = conjoin(*path)
        self.path = path

        with Image.open(self.path) as img:
            self.photo = img 
            self.photo.load()
        self.photo.load()
    
    def apply(self, key, value) -> None:
        filter = eval(key.replace('-', '_'))
        self.photo = filter(self.photo, value)

    def export(self, format: str = 'PNG') -> str:
        io = BytesIO()
        self.photo.save(io, format)
        buffer = io.getvalue()
        data = b64encode(buffer).decode('ascii')
        return data