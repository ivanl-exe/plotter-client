$(document).ready(() => {
    console.log(`v${$().jquery}`)

    $("#img-input-button").on("click", () => {
        eel.loadImage()((inputImage) => {
            updateInputCanvas(inputImage);
            $("input[type=range]").change();
            eel.getImage()((outputImage) => {
                updateOutputCanvas(outputImage);
                $("#edit").children("div").children("input, button").prop("disabled", false);
            });
        });
    });
});