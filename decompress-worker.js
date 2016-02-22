importScripts('../zlib/bin/zlib_and_gzip.min.js');

self.addEventListener('message', function(e) {
  var buffer = e.data.buffer;
  var compression = e.data.compression;
  if (compression.indexOf('gzip') !== -1) {
    var inflate = new Zlib.Gunzip(buffer);
    buffer = inflate.decompress();
  } else if (ce.indexOf('deflate') !== -1) {
    var inflate = new Zlib.Inflate(buffer);
    buffer = inflate.decompress();
  }
  self.postMessage(buffer);
});
