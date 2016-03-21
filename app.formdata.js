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
class ArcFormDataEntry {
  constructor(name, blob, filename) {
    this.name = name;
    this.isString = (typeof blob === 'string');
    this.isFile = !this.isString;
    this.value = this.isString ? blob : undefined;
    this.blob = this.isFile ? blob : undefined;
    this.filename = filename;
  }

  _encodeString(input) {
    if (!input) {
      return '';
    }
  }
}
/**
 * {@link ArcFormData} class behaves the same way as FormData class
 *
 */
class ArcFormData {
  constructor() {
    this.entries = new Set();
  }
  append(name, value, filename) {
    this.entries.add(new ArcFormDataEntry(name, value, filename));
  }

  encodeMultiPartFormData() {

  }
}
})();
