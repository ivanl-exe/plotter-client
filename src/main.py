import eel
from xdialog import open_file
from client import Client
from PIL import Image

WEB_ROOT = 'web'
WEB_FILENAME = 'index.html'

FORMAT = 'PNG'

@eel.expose
def loadImage() -> tuple[str, str]:
    path = open_file(
        title = "Plotter Client",
        multiple = False
    )
    if path == '': return path
    global client
    client = Client(path)
    return (client.photo.export(FORMAT), FORMAT)

@eel.expose
def editProperties(property: dict) -> None:
    print(property)
    client.declare(property)

@eel.expose
def getImage() -> Image:
    return (client.variation(FORMAT), FORMAT)

if __name__ == '__main__':
    eel.init(WEB_ROOT)
    eel.start(WEB_FILENAME, port = 8000)