import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

import {log} from "rxjslog";

const myObservable = interval(500).pipe(take(3));

myObservable.pipe(log("myObservable"))
  .subscribe();
