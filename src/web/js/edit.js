const RANGE = [0, 100];

$(document).ready(() => {
    const children = $("#edit").children().filter("div");
    for(const selector of children) {
        const child = $(selector);
        dualListener(child, RANGE);
    } 
});

const dualListener = (container, [min, max]) => {
    const mid = (max - min) / 2 + min;

    const id = container.attr("id");
    const children = container.children();
    children.prop("disabled", true);
    const inputs = children.filter("input");
    for(const selector of inputs) {
        const child = $(selector);

        child.attr({
            "min": min,
            "max": max,
            "value": mid
        });

        child.on("change input", () => {
            const value = child.val();
            const siblings = child.siblings();
            siblings.val(value);

            getChange(id, value);
        });
    }

    const reset = children.filter("button");
    reset.on("click", () => {
        const defaultValue = mid;
        inputs.val(mid);

        getChange(id, defaultValue);
    })
}

const getChange = (key, value) => {
    eel.editProperties({[key]: value})(() => {
        eel.getImage()((image) => uploadImage(image, $("#output-img-canvas").get(0)))
    });
}