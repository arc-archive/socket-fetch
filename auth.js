(function(w) {
  'use strict';

  /**
   * A base class for auth methods used in the library.
   */
  class FetchAuth {
    constructor(opts) {
      // Login to authorize with
      this.uid = opts.uid;
      // Password to authorize with
      this.passwd = opts.passwd;
      // Aythentication method: basic, ntlm, digest (lowercase)
      this.method = opts.method;
      // Optional domain for authentication.
      this.domain = opts.domain;
      // If true it is a proxt authorization.
      this.proxy = opts.proxy;
    }

    authenticate() {
      return Promise.reject(`Method ${this.method} not implemented.`);
    }
  }

  w.FetchAuth = FetchAuth;
})(window);
