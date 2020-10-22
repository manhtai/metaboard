import qs from 'query-string';
import {isHostedProd} from './config';

type Level = 'debug' | 'log' | 'info' | 'warn' | 'error';

type Options = {
  debugModeEnabled?: boolean;
  logUnhandledErrors?: boolean;
  callback?: (level: Level, ...args: any) => void;
};

export class Logger {
  debugModeEnabled: boolean;

  constructor(opts: Options) {
    const {
      debugModeEnabled = false,
      logUnhandledErrors = false,
    } = opts;

    this.debugModeEnabled = !!debugModeEnabled;

    if (logUnhandledErrors) {
      this.listen();
    }
  }

  debug(...args: any) {
    if (!this.debugModeEnabled) {
      return;
    }

    console.debug(...args);
  }

  log(...args: any) {
    if (!this.debugModeEnabled) {
      return;
    }

    console.log(...args);
  }

  info(...args: any) {
    console.info(...args);
  }

  warn(...args: any) {
    console.warn(...args);
  }

  error(...args: any) {
    console.error(...args);
  }

  listen() {
    window.onerror = (msg, url, lineNo, columnNo, error) => {
      const stack = error?.stack || '';
      const line = stack.split('\n')[1]?.trim();
      this.error(msg, line);
    };

    window.addEventListener('unhandledrejection', (event) => {
      const {message, stack} = event.reason;
      const line = stack.split('\n')[1]?.trim();
      this.error(message, line);
    });
  }
}

const {debug = 0} = qs.parse(window?.location?.search || '');
const forceDebugModeEnabled =
  !!Number(debug) || !!Number(process.env.REACT_APP_DEBUG_MODE_ENABLED);


const logger = new Logger({
  debugModeEnabled: !isHostedProd || forceDebugModeEnabled,
  logUnhandledErrors: !isHostedProd || forceDebugModeEnabled,
});

export default logger;
