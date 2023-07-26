from typing import Union
from photo import Photo
from collections import defaultdict
from PIL import Image
from copy import deepcopy

class Client:
    def __init__(self, path: Union[str, tuple]) -> None:
        self.photo = Photo(path)
        self.properties = defaultdict(lambda: int(0))
    
    def declare(self, property: dict) -> None:
        for key, value in property.items():
            property[key] = value
    
    def variation(self, format: str) -> Image:
        photo = deepcopy(self.photo)
        for key, value in self.properties.items():
            photo.edit(key, value)
        return photo.export(format)