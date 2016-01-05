# express-respond-simple

Simple helpers which create an [express](http://expressjs.com/) middleware, which responds `200 OK`, or any other valid
code. Optional response body as a string or object can be supplied.

[![Build Status](https://travis-ci.org/hugojosefson/express-respond-simple.svg?branch=master)](https://travis-ci.org/hugojosefson/express-respond-simple)

## Install

```bash
npm install --save express-respond-simple
```

### Use

```javascript
import express from 'express';
import {respond200, respond402} from 'express-respond-simple';

const app = express();
app.get('/health', respond200({status: 'good'}));
app.get('/empty', respond200()); // Will actually respond '204 No Content' instead of 200 if no body is given
app.get('/paywall', respond402('Please add credits to your account and try again.'));

app.listen(process.env.PORT || 3000);
```

```bash
$ curl --include http://localhost:3000/health
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 17
ETag: W/"11-sn4NhG2LGN3PiYCfMneoRg"
Date: Tue, 05 Jan 2016 01:38:39 GMT
Connection: keep-alive

{"status":"good"}


$ curl --include http://localhost:3000/empty
HTTP/1.1 204 No Content
X-Powered-By: Express
ETag: W/"a-oQDOV50e1MN2H/N8GYi+8w"
Date: Tue, 05 Jan 2016 01:39:45 GMT
Connection: keep-alive


$ curl --include http://localhost:3000/paywall
HTTP/1.1 402 Payment Required
X-Powered-By: Express
Content-Type: text/plain; charset=utf-8
Content-Length: 49
ETag: W/"31-0PQSlh/LwV6MQ515vkAE9w"
Date: Tue, 05 Jan 2016 01:42:43 GMT
Connection: keep-alive

Please add credits to your account and try again.
```

### License

MIT
