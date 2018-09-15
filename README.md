# rxjslog

Log RxJS events nicely to the console.

RxJSLog works in both the browser as in Node.js environments.

## Install

```sh
npm install rxjslog
```


## Example code

```javascript
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

import {log} from "rxjslog";

const myObservable = interval(500).pipe(take(3));

myObservable.pipe(log("myObservable"))
    .subscribe();
```

## Example output

![Example output of RxJSLog](https://raw.githubusercontent.com/edwinm/rxjslog/master/example/example-output.png)

## Configuration

You can configure the icons and colors used.

For the `next`, `error` and complete `complete` log messages,
you can set the `icon` and `color`.

To stay compatible with Node.js log messages, use only one of these colors:
black, red, green, yellow, blue, magenta, cyan and white.

Example:
```
import {logConfig} from "rxjslog";

logConfig({ error: { icon: "❗", color: "red" } });
```

## License

RxJSLog is written by Edwin Martin and is published under the MIT license.
