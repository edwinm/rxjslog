import {interval, throwError, of} from 'rxjs';
import {tap, take, concat, catchError} from 'rxjs/operators';

import {log} from "../";

const obsComplete = interval(500).pipe(take(3));

const obsError = interval(500).pipe(take(3), concat(throwError('error!')));



obsComplete.pipe(log("obsComplete")).subscribe();

obsError.pipe(log("obsError")).pipe(catchError(() => of("catched!"))).subscribe();

