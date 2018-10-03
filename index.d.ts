declare module 'rxjslog';

declare function log<T>(message: string): (source: T) => T;
