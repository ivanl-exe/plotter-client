from PIL import Image
from math import floor, ceil, inf
from util.math import safe_division

RANGE = 100 - 0
HIGH = 255

def __threshold__(n: int, value: float) -> int:
    threshold = floor(value / RANGE * HIGH)
    if n >= threshold: return HIGH
    return 0

def threshold(image: Image, value: float) -> Image:
    image = Image.eval(image, lambda n: __threshold__(n, value))
    image = image.convert('1')
    return image

def __exponential_multiplier__(n: int, value: float) -> int:
    if value == 0: return n
    r = floor((value ** (1 / HIGH)) ** n / value * HIGH)
    if r < 0 or r > 255: print(r)
    return floor((value ** (1 / HIGH)) ** n / value * HIGH)

def exponential_multiplier(image: Image, value: float) -> Image:
    image = Image.eval(image, lambda n: __exponential_multiplier__(n, value))
    return image

def __sieve__() -> int:
    pass

def sieve(image: Image, value: float) -> Image:
    return image