# Socket fetch

The HTTP client transport based on [chrome.sockets.tcp] API.

## Getting started
Bower the library
```
bower install socket-fetch
```
And import it into your project using web components.
```html
<link rel="import" href="bower-components/socket-fetch/socket-fetch.html">
```
Now you can use following classes:
* ArcEventTarget
* ArcEventSource
* ArcRequest
* ArcResponse
* SocketFetch

The Arc prefix comes from Advanced Rest Client project.

## usage

Basically you need a resource you want to fetch:
```
var url = 'http://www.google.com';
```
You can set up some headers if you wish.
This implementation will not set any default headers so if you don't do it the request will not contain them.
```
var headers = {
  'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Encoding':'gzip, deflate, sdch',
  'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2652.0 Safari/537.36'
};
```
By default the implementation will use `GET` method and will follow redirects.
```
var init = {
  'method': 'GET',
  'headers': new Headers(headers),
  'redirect': 'follow'
};
```
And finally you just need to fetch the resource:
```
var connection = new SocketFetch(url, opts);
connection.fetch()
.then((response) => {
  if (response.ok) {
    response.text().then((result) => {
      console.log('Fetch result', result);
    })
    .catch((cause) => {
      console.error('Error during fetch', cause);
    });
  }
})
.catch((cause) => {
   console.error('Error during fetch', cause);
});
```

If you want to send data use `body` property in `init` object:
```
var payload = JSON.stringify({
  'test': 'request'
});
var headers = {
  'Content-Type': 'application/json',
  'Content-Length': payload.length
};
var init = {
  'method': 'POST',
  'headers': new Headers(headers),
  'body': payload
};
```
You can send body of type of Blob, BufferSource, FormData, URLSearchParams, or String.

  [chrome.sockets.tcp]: https://developer.chrome.com/apps/sockets_tcp
