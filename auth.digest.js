(function(w) {
  'use strict';
  /* global FetchAuth */
  /**
   * A base class for auth methods used in the library.
   */
  class DigestAuth extends FetchAuth {

    constructor(opts) {
      super(opts);
    }
  }

  w.DigestAuth = DigestAuth;
})(window);
