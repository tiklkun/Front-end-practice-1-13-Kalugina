function Accumulator(res, new_item, add_button, subtract_button) {
    this.res = res;
    this.new_item = new_item;
    this.add_button = add_button;
    this.subtract_button = subtract_button;

    this.add_button.onclick = function () {
        if (new_item.value === "") {
            return;
        }

        let item = parseInt(res.textContent) + parseInt(new_item.value);
        res.textContent = item;
    };

    this.subtract_button.onclick = function () {
        let item = parseInt(res.textContent) - parseInt(new_item.value);
        res.textContent = item;
    };
}

let accumulator = new Accumulator(
    document.getElementById('res'),
    document.getElementById('item'),
    document.getElementById('add'),
    document.getElementById('subtract')
);
