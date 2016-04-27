<a name="1.0.37"></a>
## [1.0.37](https://github.com/jarrodek/socket-fetch/compare/1.0.36...v1.0.37) (2016-04-27)




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


### Fix

* Fixed redirect issue when location header is a relative url  ([05c04db99010a31e04d8d707085ce12b23793dce](https://github.com/jarrodek/socket-fetch/commit/05c04db99010a31e04d8d707085ce12b23793dce)), closes [#5](https://github.com/jarrodek/socket-fetch/issues/5)



<a name="1.0.21"></a>
## [1.0.21](https://github.com/jarrodek/socket-fetch/compare/1.0.12...v1.0.21) (2016-04-08)


### Fix

* Fixes HEAD tyle of request  ([47f0e3ba5137d31827cbbeb8ac6dd358852573a3](https://github.com/jarrodek/socket-fetch/commit/47f0e3ba5137d31827cbbeb8ac6dd358852573a3)), closes [#4](https://github.com/jarrodek/socket-fetch/issues/4)

### Update

* Changed hows the element recognize the import location ([4986de84ee19524bb28eec5b7cd9556503b38b02](https://github.com/jarrodek/socket-fetch/commit/4986de84ee19524bb28eec5b7cd9556503b38b02))



<a name="1.0.21"></a>
## [1.0.21](https://github.com/jarrodek/socket-fetch/compare/1.0.19...v1.0.21) (2016-04-07)




<a name="1.0.20"></a>
## [1.0.20](https://github.com/jarrodek/socket-fetch/compare/1.0.19...v1.0.20) (2016-04-07)




<a name="1.0.19"></a>
## [1.0.19](https://github.com/jarrodek/socket-fetch/compare/1.0.18...v1.0.19) (2016-04-06)




<a name="1.0.18"></a>
## [1.0.18](https://github.com/jarrodek/socket-fetch/compare/1.0.17...v1.0.18) (2016-04-06)




<a name="1.0.17"></a>
## [1.0.17](https://github.com/jarrodek/socket-fetch/compare/1.0.16...v1.0.17) (2016-04-06)




<a name="1.0.16"></a>
## [1.0.16](https://github.com/jarrodek/socket-fetch/compare/1.0.15...v1.0.16) (2016-04-06)




<a name="1.0.15"></a>
## [1.0.15](https://github.com/jarrodek/socket-fetch/compare/1.0.14...v1.0.15) (2016-04-06)




<a name="1.0.14"></a>
## [1.0.14](https://github.com/jarrodek/socket-fetch/compare/1.0.13...v1.0.14) (2016-04-06)




<a name="1.0.13"></a>
## [1.0.13](https://github.com/jarrodek/socket-fetch/compare/v1.0.10...v1.0.13) (2016-04-06)


### Update

* Changed hows the element recognize the import location ([4986de84ee19524bb28eec5b7cd9556503b38b02](https://github.com/jarrodek/socket-fetch/commit/4986de84ee19524bb28eec5b7cd9556503b38b02))



<a name="1.0.12"></a>
## [1.0.12](https://github.com/jarrodek/socket-fetch/compare/v1.0.11...v1.0.12) (2016-04-05)




