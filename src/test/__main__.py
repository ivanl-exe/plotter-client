from photo import Photo
from util.console import contract

PATH = ('test', '/img', '/python-logo-only.png')

if __name__ == '__main__':
    photo = Photo(PATH)
    data = photo.export()
    print(contract(data, 20))