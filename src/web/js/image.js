const updateInputCanvas = (image) => {
    const canvas = $("#input-img-canvas");
    uploadImage(image, canvas);
}

const updateOutputCanvas = (image) => {
    const canvas = $("#output-img-canvas");
    uploadImage(image, canvas);
}

const uploadImage = ([data, format], canvas) => {
    const image = new Image();
    image.src = `data:image/${format.toLowerCase()};base64,${data}`
    image.onload = () => {
        createImageBitmap(image).then((bitmap) => {
            const item = canvas.parent();
            const innerWidth = item.innerWidth();
            const innerHeight = item.innerHeight();
            const aspect_ratio = bitmap.width / bitmap.height;
            let width = 0;
            let height = 0;
            if(aspect_ratio >= 1) {
                width = innerWidth;
                height = width / aspect_ratio;
            }
            else {
                height = innerHeight;
                width = height * aspect_ratio;
            }
            canvas = canvas.get(0);
            canvas.width = width;
            canvas.height = height;
            canvas.getContext("bitmaprenderer").transferFromImageBitmap(bitmap);
        });
    };
}