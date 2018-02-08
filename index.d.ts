/**
 * @busy-web/utils module
 *
 */

declare module '@busy-web/utils' {
	export class Assert {
		public static funcNumArgs(args: any[], argCount: number, equal: boolean): Assert;
		public static isString(value: any): Assert;
		public static isNumber(value: any): Assert;
		public static isInteger(value: any): Assert;
		public static isBoolean(value: any): Assert;
		public static isArray(value: any): Assert;
		public static isObject(value: any): Assert;
		public static isMoment(value: any): Assert;
		public static isUUID(value: any): Assert;
		public static isModel(value: any): Assert;
		public static test(message: string, test: any): Assert;
		public static throw(message: string): void;
	}

	export class Browser {
		public static type(): string;
		public static version(): string;
		public static osType(): string;
		public static osVersion(): string;
		public static detect(): object;
		public static isBrowserType(browser: string): boolean;
	}

	export class Currency {
		public static codes(): number[];
		public static code(type): number;
		public static country(type): string;
		public static number(type): number;
		public static countries(): string[];
	}

	export class Hash {
		public static sha1(): any;
		public static sha256(): any;
		public static hmacSHA256(): any;
	}

	export function loc(str: string, params?: any[]): string;

	export class LocalStorage {
		public static setProperty(key: string, value: any): LocalStorage;
		public static getProperty(key: string): any;
		public static getWithDefault(key: string, defaultValue?: any): any;
		public static hasValue(key: string): boolean;
		public static remove(key: string): LocalStorage;
	}

	export class Locale {
		public static format(str: string, locale: string): string;
	}

	export class Time {
		public static timezone(timestamp: number): number;
		public static timestamp(timestamp: number): number;
		public static locale(): string;
		public static timeFormat(timestamp: number, formatStr: string): string;
		public static dateFormat(date: object, formatStr: string): string;
		public static now(): object;
		public static utcTimestamp(): number;
		public static date(timestamp: number): object;
		public static isDST(timestamp: number): boolean;
		public static nistTimestamp(): number;
		public static isTrustedTimeType(): boolean;
		public static convertSeconds(seconds: number, toFixed?: number): object;
		public static convertSecondsString(seconds: number, format: number, padHours?: boolean, showSeconds?: boolean, longFormat?: boolean, toFixed?: number): string;
		public static timezoneString(offset: number, isDST: boolean): string;
		public static setHoursFormat(type: number): void;
		public static getHoursFormat(): number;
		public static set(key: string, property: any): Time;
		public static get(key: string): any;
		private hoursFormat: string;
	}
}
