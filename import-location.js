(function() {
  /* global SocketFetchOptions */
  if (this.currentImport && this.currentImport.URL) {
    var url = this.currentImport.URL;
    var path = url.substr(url.indexOf('/', url.indexOf('/') + 2)).replace('socket-fetch.html','');
    path += '%s';
    SocketFetchOptions.importUrl = path;
  }
}).call(window);
