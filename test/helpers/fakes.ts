import { IConfigCatLogger, LogLevel } from "../../src";

export class FakeLogger implements IConfigCatLogger {
    public messages: [LogLevel, string][] = [];

    constructor (public level = LogLevel.Info) { }

    reset() { this.messages.splice(0); }

    isLogLevelEnabled(logLevel: LogLevel): boolean {
        return this.level >= logLevel;
    }

    log(message: string): void {
        this.info(message);
    }

    debug(message: string): void {
        if (this.isLogLevelEnabled(LogLevel.Debug)) {
            this.messages.push([LogLevel.Debug, message]);
        }
    }

    info(message: string): void {
        if (this.isLogLevelEnabled(LogLevel.Info)) {
            this.messages.push([LogLevel.Info, message]);
        }
    }

    warn(message: string): void {
        if (this.isLogLevelEnabled(LogLevel.Warn)) {
            this.messages.push([LogLevel.Warn, message]);
        }
    }

    error(message: string): void {
        if (this.isLogLevelEnabled(LogLevel.Error)) {
            this.messages.push([LogLevel.Error, message]);
        }
    }
}