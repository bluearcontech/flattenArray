
function flatten(input) {
    var i, placeHolder = [input], lastIndex = [-1], out = [];

    while (placeHolder.length) {
        input = placeHolder.pop();
        i = lastIndex.pop() + 1;
        for (; i < input.length; ++i) {
            if (Array.isArray(input[i]) && input[i] !=undefined) {
                placeHolder.push(input);
                lastIndex.push(i);
                input = input[i];
                i = -1;
            } else if(input[i] != undefined) {
                out.push(input[i]);
            }
        }
    }
    return out;
}

module.exports = flatten;
