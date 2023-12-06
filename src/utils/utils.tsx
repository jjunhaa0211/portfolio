import { Icons, keyOfIcons } from "../styles/icons";

export const _public = (url: string) => `${process.env.PUBLIC_URL}${url}`;
export const _icon = (icon: keyOfIcons) => `${process.env.PUBLIC_URL}/icon/${Icons[icon]}`;
export const _font = (url: string) => `${process.env.PUBLIC_URL}/fonts/${url}`;
export const range = (end: number) => Array.from(Array(end).keys());
export const key = (key: string, s: any) => `${key}${JSON.stringify(s)}`;
export const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export function getStorageOrDefault<T>(key: string, defValue: T) {
    const value = localStorage.getItem(key);
    if (value == null) return defValue;
    if (typeof defValue == "object") return JSON.parse(value) as T;
    return value as T
}