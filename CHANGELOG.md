<a name="1.0.58"></a>
## [1.0.58](https://github.com/jarrodek/socket-fetch/compare/1.0.57...v1.0.58) (2016-05-10)




<a name="1.0.57"></a>
## [1.0.57](https://github.com/jarrodek/socket-fetch/compare/1.0.56...v1.0.57) (2016-05-10)


### Fix

* Changed string conversion to array buffer and back to support URF-16 strings   ([e6c9ca9a4c97af090205504636b5cf0a96805dda](https://github.com/jarrodek/socket-fetch/commit/e6c9ca9a4c97af090205504636b5cf0a96805dda)), closes [#12](https://github.com/jarrodek/socket-fetch/issues/12)



<a name="1.0.56"></a>
## [1.0.56](https://github.com/jarrodek/socket-fetch/compare/1.0.55...v1.0.56) (2016-05-06)


### Fix

* Refactoring to avoid name collisions ([d9869017fa0c179c5055c277029229d7400c037c](https://github.com/jarrodek/socket-fetch/commit/d9869017fa0c179c5055c277029229d7400c037c))



<a name="1.0.55"></a>
## [1.0.55](https://github.com/jarrodek/socket-fetch/compare/1.0.54...v1.0.55) (2016-05-06)


### Fix

* fixes and auth object when setting up basic auth object from URL params ([d5ada7928e8ed94258811911dffa859d011fd3a2](https://github.com/jarrodek/socket-fetch/commit/d5ada7928e8ed94258811911dffa859d011fd3a2))



<a name="1.0.54"></a>
## [1.0.54](https://github.com/jarrodek/socket-fetch/compare/1.0.53...v1.0.54) (2016-05-06)




<a name="1.0.53"></a>
## [1.0.53](https://github.com/jarrodek/socket-fetch/compare/1.0.39...v1.0.53) (2016-05-06)


### Breaking

* Added digest and NTLM authentication. It changes how the requests are made. See code for more details ([04d0296a88deb56c7eb122e0e212371dd7879a0f](https://github.com/jarrodek/socket-fetch/commit/04d0296a88deb56c7eb122e0e212371dd7879a0f))

### Docs

* added source info for DigestAuth class ([f93e5c65401c7f87511ac70574d4b103c6062cde](https://github.com/jarrodek/socket-fetch/commit/f93e5c65401c7f87511ac70574d4b103c6062cde))

### Fix

* Fixed issues with wrong conditions ([abae5ee6b4e34a10a9c77aae455ca1e50bf4d993](https://github.com/jarrodek/socket-fetch/commit/abae5ee6b4e34a10a9c77aae455ca1e50bf4d993))
* Fixes this._request.headers.set usage ([12b85a20a0b9a99347354eb313604377bb492b9e](https://github.com/jarrodek/socket-fetch/commit/12b85a20a0b9a99347354eb313604377bb492b9e))
* Fixes URLs with username and passwords ([c39bf177b96ed0017e12f8ab65b54899815cfee3](https://github.com/jarrodek/socket-fetch/commit/c39bf177b96ed0017e12f8ab65b54899815cfee3))
* issues with auth response status ([53221c92c68de5b9daf802d272a72b0ab4861ef7](https://github.com/jarrodek/socket-fetch/commit/53221c92c68de5b9daf802d272a72b0ab4861ef7))
* issues with digest authentication ([0dd8032a2f1b0659bef11e703a4f4f3b35469436](https://github.com/jarrodek/socket-fetch/commit/0dd8032a2f1b0659bef11e703a4f4f3b35469436))
* Name colision  ([2aaf16e6770df6e089562f51ae3e685f2c560b44](https://github.com/jarrodek/socket-fetch/commit/2aaf16e6770df6e089562f51ae3e685f2c560b44))

### Update

* added  property to all reported responses ([64c832db12a3ca9634ba542901fd9f277d1712f7](https://github.com/jarrodek/socket-fetch/commit/64c832db12a3ca9634ba542901fd9f277d1712f7))
* added  property to all reported responses ([38452b90cebdee3fafef35d8250d869ecb58678c](https://github.com/jarrodek/socket-fetch/commit/38452b90cebdee3fafef35d8250d869ecb58678c))
* Added cookie behavior during redirection. Cookies are now included into redirect server if match domain and path ([1e4b7040cc2a140eb30c4875acfd5b000220392f](https://github.com/jarrodek/socket-fetch/commit/1e4b7040cc2a140eb30c4875acfd5b000220392f))
* Added requestUrl for the response that has been redirected. ([86c08d9d97260bb27fb3c0905e614558da90bd60](https://github.com/jarrodek/socket-fetch/commit/86c08d9d97260bb27fb3c0905e614558da90bd60))
* When redirects are available, the library will not throw error anymore, instead it returns errored response object with the redirect information. ([35cd88cbc35d4c9876c995c8470675bd8c5a338a](https://github.com/jarrodek/socket-fetch/commit/35cd88cbc35d4c9876c995c8470675bd8c5a338a))



<a name="1.0.52"></a>
## [1.0.52](https://github.com/jarrodek/socket-fetch/compare/1.0.51...v1.0.52) (2016-05-05)


### Fix

* Fixes this._request.headers.set usage ([12b85a20a0b9a99347354eb313604377bb492b9e](https://github.com/jarrodek/socket-fetch/commit/12b85a20a0b9a99347354eb313604377bb492b9e))



<a name="1.0.51"></a>
## [1.0.51](https://github.com/jarrodek/socket-fetch/compare/1.0.50...v1.0.51) (2016-05-05)


### Fix

* Name colision  ([2aaf16e6770df6e089562f51ae3e685f2c560b44](https://github.com/jarrodek/socket-fetch/commit/2aaf16e6770df6e089562f51ae3e685f2c560b44))



<a name="1.0.50"></a>
## [1.0.50](https://github.com/jarrodek/socket-fetch/compare/1.0.49...v1.0.50) (2016-05-05)


### Fix

* issues with auth response status ([53221c92c68de5b9daf802d272a72b0ab4861ef7](https://github.com/jarrodek/socket-fetch/commit/53221c92c68de5b9daf802d272a72b0ab4861ef7))



<a name="1.0.49"></a>
## [1.0.49](https://github.com/jarrodek/socket-fetch/compare/1.0.48...v1.0.49) (2016-05-05)


### Fix

* issues with digest authentication ([0dd8032a2f1b0659bef11e703a4f4f3b35469436](https://github.com/jarrodek/socket-fetch/commit/0dd8032a2f1b0659bef11e703a4f4f3b35469436))



<a name="1.0.48"></a>
## [1.0.48](https://github.com/jarrodek/socket-fetch/compare/1.0.47...v1.0.48) (2016-05-05)


### Breaking

* Added digest and NTLM authentication. It changes how the requests are made. See code for more details ([04d0296a88deb56c7eb122e0e212371dd7879a0f](https://github.com/jarrodek/socket-fetch/commit/04d0296a88deb56c7eb122e0e212371dd7879a0f))



<a name="1.0.47"></a>
## [1.0.47](https://github.com/jarrodek/socket-fetch/compare/1.0.46...v1.0.47) (2016-04-29)


### Fix

* Fixed issues with wrong conditions ([abae5ee6b4e34a10a9c77aae455ca1e50bf4d993](https://github.com/jarrodek/socket-fetch/commit/abae5ee6b4e34a10a9c77aae455ca1e50bf4d993))



<a name="1.0.46"></a>
## [1.0.46](https://github.com/jarrodek/socket-fetch/compare/1.0.45...v1.0.46) (2016-04-28)


### Update

* added  property to all reported responses ([64c832db12a3ca9634ba542901fd9f277d1712f7](https://github.com/jarrodek/socket-fetch/commit/64c832db12a3ca9634ba542901fd9f277d1712f7))



<a name="1.0.45"></a>
## [1.0.45](https://github.com/jarrodek/socket-fetch/compare/1.0.44...v1.0.45) (2016-04-28)


### Update

* added  property to all reported responses ([38452b90cebdee3fafef35d8250d869ecb58678c](https://github.com/jarrodek/socket-fetch/commit/38452b90cebdee3fafef35d8250d869ecb58678c))



<a name="1.0.44"></a>
## [1.0.44](https://github.com/jarrodek/socket-fetch/compare/1.0.43...v1.0.44) (2016-04-28)




<a name="1.0.43"></a>
## [1.0.43](https://github.com/jarrodek/socket-fetch/compare/1.0.38...v1.0.43) (2016-04-28)


### Update

* When redirects are available, the library will not throw error anymore, instead it returns errored response object with the redirect information. ([35cd88cbc35d4c9876c995c8470675bd8c5a338a](https://github.com/jarrodek/socket-fetch/commit/35cd88cbc35d4c9876c995c8470675bd8c5a338a))



<a name="1.0.39"></a>
## [1.0.39](https://github.com/jarrodek/socket-fetch/compare/1.0.38...v1.0.39) (2016-04-27)

<a name="1.0.38"></a>
## [1.0.38](https://github.com/jarrodek/socket-fetch/compare/1.0.37...v1.0.38) (2016-04-25)


### Update

* Added requestUrl for the response that has been redirected. ([86c08d9d97260bb27fb3c0905e614558da90bd60](https://github.com/jarrodek/socket-fetch/commit/86c08d9d97260bb27fb3c0905e614558da90bd60))



<a name="1.0.37"></a>
## [1.0.37](https://github.com/jarrodek/socket-fetch/compare/1.0.31...v1.0.37) (2016-04-25)


### Fix

* error on custom HTTP method ([f0446b9a08a9ede657b755ba5d22340f4a959848](https://github.com/jarrodek/socket-fetch/commit/f0446b9a08a9ede657b755ba5d22340f4a959848))
* The host header will now will contain port value if not a default one to comply with thte spec.  ([fd042cb9ef77a3519a2198a6970b80eb0dbd4c71](https://github.com/jarrodek/socket-fetch/commit/fd042cb9ef77a3519a2198a6970b80eb0dbd4c71)), closes [#8](https://github.com/jarrodek/socket-fetch/issues/8)

### Update

* Added cookie behavior during redirection. Cookies are now included into redirect server if match domain and path ([1e4b7040cc2a140eb30c4875acfd5b000220392f](https://github.com/jarrodek/socket-fetch/commit/1e4b7040cc2a140eb30c4875acfd5b000220392f))


<a name="1.0.36"></a>
## [1.0.36](https://github.com/jarrodek/socket-fetch/compare/1.0.35...v1.0.36) (2016-04-24)


### Fix

* error on custom HTTP method ([f0446b9a08a9ede657b755ba5d22340f4a959848](https://github.com/jarrodek/socket-fetch/commit/f0446b9a08a9ede657b755ba5d22340f4a959848))



<a name="1.0.35"></a>
## [1.0.35](https://github.com/jarrodek/socket-fetch/compare/1.0.34...v1.0.35) (2016-04-24)




<a name="1.0.34"></a>
## [1.0.34](https://github.com/jarrodek/socket-fetch/compare/1.0.33...v1.0.34) (2016-04-23)




<a name="1.0.33"></a>
## [1.0.33](https://github.com/jarrodek/socket-fetch/compare/1.0.32...v1.0.33) (2016-04-23)




<a name="1.0.32"></a>
## [1.0.32](https://github.com/jarrodek/socket-fetch/compare/1.0.29...v1.0.32) (2016-04-23)


### Fix

* Added null check before constructing the Response object. Also added reference to the original response ([a383fbc1f94e70db26dd631ff475aa4c2f50ae97](https://github.com/jarrodek/socket-fetch/commit/a383fbc1f94e70db26dd631ff475aa4c2f50ae97))
* The host header will now will contain port value if not a default one to comply with thte spec.  ([fd042cb9ef77a3519a2198a6970b80eb0dbd4c71](https://github.com/jarrodek/socket-fetch/commit/fd042cb9ef77a3519a2198a6970b80eb0dbd4c71)), closes [#8](https://github.com/jarrodek/socket-fetch/issues/8)

### Fixes

* response status >= 100 and status < 200 ([c084c66c65e0af427f4fc4acd52bc551fdbcd9d1](https://github.com/jarrodek/socket-fetch/commit/c084c66c65e0af427f4fc4acd52bc551fdbcd9d1))



<a name="1.0.31"></a>
## [1.0.31](https://github.com/jarrodek/socket-fetch/compare/1.0.30...v1.0.31) (2016-04-21)


### Fix

* Added null check before constructing the Response object. Also added reference to the original response ([a383fbc1f94e70db26dd631ff475aa4c2f50ae97](https://github.com/jarrodek/socket-fetch/commit/a383fbc1f94e70db26dd631ff475aa4c2f50ae97))



<a name="1.0.30"></a>
## [1.0.30](https://github.com/jarrodek/socket-fetch/compare/1.0.25...v1.0.30) (2016-04-15)


### Fix

* Fixes an issue when the response do not contain response payload  ([e29b94b243bc64c6ed936f01d855215f47159f2a](https://github.com/jarrodek/socket-fetch/commit/e29b94b243bc64c6ed936f01d855215f47159f2a)), closes [#6](https://github.com/jarrodek/socket-fetch/issues/6)

### Fixed

* An issue when the messageSent was initialized in wrong block ([87ae946909aca857667894adf4812d1f61837dc9](https://github.com/jarrodek/socket-fetch/commit/87ae946909aca857667894adf4812d1f61837dc9))
* Now the library will follow redirection only when the status code is 301, 307 or 308 ([1c1b680ede0929ff00f7e9b265a3ab854a8bbed7](https://github.com/jarrodek/socket-fetch/commit/1c1b680ede0929ff00f7e9b265a3ab854a8bbed7))

### Fixes

* response status >= 100 and status < 200 ([c084c66c65e0af427f4fc4acd52bc551fdbcd9d1](https://github.com/jarrodek/socket-fetch/commit/c084c66c65e0af427f4fc4acd52bc551fdbcd9d1))

### Update

* Added  property to ArcRequest object that is a string representation of a message sent to server ([022e4b6090a0b758dc85ba50ec2bbebc061998be](https://github.com/jarrodek/socket-fetch/commit/022e4b6090a0b758dc85ba50ec2bbebc061998be))



<a name="1.0.29"></a>
## [1.0.29](https://github.com/jarrodek/socket-fetch/compare/1.0.28...v1.0.29) (2016-04-14)


### Fix

* Fixes an issue when the response do not contain response payload  ([e29b94b243bc64c6ed936f01d855215f47159f2a](https://github.com/jarrodek/socket-fetch/commit/e29b94b243bc64c6ed936f01d855215f47159f2a)), closes [#6](https://github.com/jarrodek/socket-fetch/issues/6)



<a name="1.0.28"></a>
## [1.0.28](https://github.com/jarrodek/socket-fetch/compare/1.0.27...v1.0.28) (2016-04-12)


### Fixed

* Now the library will follow redirection only when the status code is 301, 307 or 308 ([1c1b680ede0929ff00f7e9b265a3ab854a8bbed7](https://github.com/jarrodek/socket-fetch/commit/1c1b680ede0929ff00f7e9b265a3ab854a8bbed7))



<a name="1.0.27"></a>
## [1.0.27](https://github.com/jarrodek/socket-fetch/compare/1.0.26...v1.0.27) (2016-04-12)


### Fixed

* An issue when the messageSent was initialized in wrong block ([87ae946909aca857667894adf4812d1f61837dc9](https://github.com/jarrodek/socket-fetch/commit/87ae946909aca857667894adf4812d1f61837dc9))



<a name="1.0.26"></a>
## [1.0.26](https://github.com/jarrodek/socket-fetch/compare/1.0.19...v1.0.26) (2016-04-12)


### Fix

* fixed invalid variable name in the decompression worker ([cc92a54417f8046c6e17b0f3f9346a745c028523](https://github.com/jarrodek/socket-fetch/commit/cc92a54417f8046c6e17b0f3f9346a745c028523))
* Fixed redirect issue when location header is a relative url  ([05c04db99010a31e04d8d707085ce12b23793dce](https://github.com/jarrodek/socket-fetch/commit/05c04db99010a31e04d8d707085ce12b23793dce)), closes [#5](https://github.com/jarrodek/socket-fetch/issues/5)
* Fixes HEAD tyle of request  ([47f0e3ba5137d31827cbbeb8ac6dd358852573a3](https://github.com/jarrodek/socket-fetch/commit/47f0e3ba5137d31827cbbeb8ac6dd358852573a3)), closes [#4](https://github.com/jarrodek/socket-fetch/issues/4)

### Update

* Added  property to ArcRequest object that is a string representation of a message sent to server ([022e4b6090a0b758dc85ba50ec2bbebc061998be](https://github.com/jarrodek/socket-fetch/commit/022e4b6090a0b758dc85ba50ec2bbebc061998be))



<a name="1.0.25"></a>
## [1.0.25](https://github.com/jarrodek/socket-fetch/compare/1.0.21...v1.0.25) (2016-04-11)


### Fix

* fixed invalid variable name in the decompression worker ([cc92a54417f8046c6e17b0f3f9346a745c028523](https://github.com/jarrodek/socket-fetch/commit/cc92a54417f8046c6e17b0f3f9346a745c028523))
* Fixed redirect issue when location header is a relative url  ([05c04db99010a31e04d8d707085ce12b23793dce](https://github.com/jarrodek/socket-fetch/commit/05c04db99010a31e04d8d707085ce12b23793dce)), closes [#5](https://github.com/jarrodek/socket-fetch/issues/5)



<a name="1.0.24"></a>
## [1.0.24](https://github.com/jarrodek/socket-fetch/compare/1.0.21...v1.0.24) (2016-04-08)


### Fix

* Fixed redirect issue when location header is a relative url  ([05c04db99010a31e04d8d707085ce12b23793dce](https://github.com/jarrodek/socket-fetch/commit/05c04db99010a31e04d8d707085ce12b23793dce)), closes [#5](https://github.com/jarrodek/socket-fetch/issues/5)



<a name="1.0.23"></a>
## [1.0.23](https://github.com/jarrodek/socket-fetch/compare/1.0.21...v1.0.23) (2016-04-08)


### Fi