(function() {
'use strict';
/*******************************************************************************
 * Copyright 2016 Pawel Psztyc, The ARC team
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 ******************************************************************************/
/* global Response */
/**
 * The {@link ArcResponse} class behaves the same way as JavaScript's Response class
 * but it have additional methods.
 *
 */
class ArcResponse {
  /**
   * The ArcResponse() constructor creates a new {@link ArcResponse} object.
   *
   * @constructor
   * @param {Blob|BufferSource|FormData|URLSearchParams|USVString} body A response body.
   * @param {Object} init (Optional) The same init options as Response object.
   * See https://developer.mozilla.org/en-US/docs/Web/API/Response/Response for more information.
   */
  constructor(body, init) {
    this._status = init.status;

    // not sure why Response object do not accept 1xx status codes... 
    if (init.status >= 100 && init.status < 200) {
      init.status = 200;
    }
    this._response = new Response(body, init);
    if (!(init.redirects instanceof Set)) {
      init.redirects = new Set(init.redirects);
    }
    this.redirects = init.redirects;
    this.stats = init.stats;
    this._headers = init.headers;
  }
  get type() {
    return this._response.type;
  }
  get status() {
    return this._status;
  }
  get statusText() {
    return this._response.statusText;
  }
  get ok() {
    return this._response.ok;
  }
  get headers() {
    return this._headers;
  }
  get bodyUsed() {
    return this._response.bodyUsed;
  }

  clone() {
    return this._response.clone();
  }
  error() {
    return this._response.error();
  }
  redirect() {
    return this._response.redirect();
  }
  arrayBuffer() {
    return this._response.arrayBuffer();
  }
  blob() {
    return this._response.blob();
  }
  formData() {
    return this._response.formData();
  }
  json() {
    return this._response.json();
  }
  text() {
    return this._response.text();
  }
}
window.ArcResponse = ArcResponse;
})();
