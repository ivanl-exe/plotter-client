$(document).ready(() => {
    console.log(`v${$().jquery}`)

    $("#img-input-button").on("click", () => {
        eel.loadImage()((image) => {
            uploadImage(image, $("#input-img-canvas").get(0))
            $("#edit").children("div").children("input, button").prop("disabled", false);
        });
    });
});

const uploadImage = ([data, format], canvas) => {
    const image = new Image();
    image.src = `data:image/${format.toLowerCase()};base64,${data}`
    image.onload = () => {
        createImageBitmap(image).then((bitmap) => {
            canvas.width = bitmap.width;
            canvas.height = bitmap.height;
            canvas.getContext("bitmaprenderer").transferFromImageBitmap(bitmap);
        });
    };
}