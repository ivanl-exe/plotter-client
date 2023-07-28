from typing import Union
from photo import Photo
from collections import defaultdict
from math import inf
from PIL import Image
from copy import deepcopy

class Client:
    def __init__(self, path: Union[str, tuple]) -> None:
        self.photo = Photo(path)
        self.properties = defaultdict(int)
        self.layers = defaultdict(int)
    
    def order(self, key: str, n: int = inf) -> None:
        self.layers[key] = n
    
    def declare(self, property: dict) -> None:
        for key, value in property.items():
            self.properties[key] = float(value)
    
    def variation(self, format: str) -> Image:
        photo = deepcopy(self.photo)
        for key, _ in sorted(self.layers.items(), key = lambda pair: pair[1]):
            value = self.properties[key]
            photo.edit(key, value)
        return photo.export(format)