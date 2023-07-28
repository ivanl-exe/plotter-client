const RANGE = [0, 100];

$(document).ready(() => {
    const getChange = (key, value, order) => {
        eel.editOrder({[key]: order})(() => {
            eel.editProperties({[key]: value})(() => {
                eel.getImage()((image) => updateOutputCanvas(image));
            });
        });
    }

    const listener = (container, [min, max], order) => {    
        const id = container.attr("id");
        const children = container.children();
        
        const layer = children.filter(".layer");
        const input = layer.children("input");
        input.attr({
            "min": 1,
            "max": availableLayers - 1,
            "value": order
        })
        
        children.prop("disabled", true);
        const inputs = children.filter("input");
        for(const selector of inputs) {
            const child = $(selector);
    
            child.attr({
                "min": min,
                "max": max,
                "value": min
            });
    
            child.on("change input", () => {
                const value = child.val();
                const siblings = child.siblings();
                siblings.val(value);

                getChange(id, value, order);
            });
        }
    
        const reset = children.filter("button");
        reset.on("click", () => {
            const defaultValue = min;
            inputs.val(min);
    
            getChange(id, defaultValue, order);
        })
        order--;
    }
        
    const children = $("#edit").children().filter("div");
    const availableLayers = children.length;
    let order = availableLayers;
    for(const selector of children) {
        const child = $(selector);
        listener(child, RANGE, order);
        order--;
    }
});