# rxjslog

Log RxJS events nicely to the console.

RxJSLog works in both the browser as in Node.js environments.

## Install

```sh
npm install rxjslog
```


## Example code

```javascript
import {log} from "rxjslog";

const obsComplete = interval(500).pipe(take(3));

obsComplete.pipe(log("obsComplete")).subscribe();

```
## License

RxJSLog is written by Edwin Martin and is published under the MIT license.
