import {interval, throwError, of} from 'rxjs';
import {tap, take, concat, catchError} from 'rxjs/operators';

const obsComplete = interval(500).pipe(take(3));

const obsError = interval(500).pipe(take(3), concat(throwError('error!')));

function log(str) {
  return tap((data, error, complete) =>
      console.log(`➡️ %c${str}`, "color: purple", data),
    (data, error, complete) =>
      console.log(`❌ %c${str}`, "color: purple", data),
    (data, error, complete) =>
      console.log(`✅ %c${str}`, "color: purple"),
  )
}

obsComplete.pipe(log("obsComplete")).subscribe();

obsError.pipe(log("obsError")).pipe(catchError(() => of("catched!"))).subscribe();

