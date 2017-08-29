window.TestBuffers = {};
window.TestBuffers.stringToBuffer = function(string) {
    var encoder = new TextEncoder();
    var encoded = encoder.encode(string);
    return encoded.buffer;
};