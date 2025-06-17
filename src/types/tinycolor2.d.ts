declare module 'tinycolor2' {
  export interface ColorInput {
    r?: number;
    g?: number;
    b?: number;
    a?: number;
    h?: number;
    s?: number;
    l?: number;
    v?: number;
    hex?: string;
    string?: string;
  }

  export interface TinyColorInstance {
    isValid(): boolean;
    toHex(): string;
    toHexString(): string;
    toRgb(): { r: number; g: number; b: number; a: number };
    toRgbString(): string;
    toHsl(): { h: number; s: number; l: number; a: number };
    toHslString(): string;
    toString(format?: string): string;
    getAlpha(): number;
    setAlpha(alpha: number): TinyColorInstance;
    lighten(amount?: number): TinyColorInstance;
    darken(amount?: number): TinyColorInstance;
    brighten(amount?: number): TinyColorInstance;
    saturate(amount?: number): TinyColorInstance;
    desaturate(amount?: number): TinyColorInstance;
    greyscale(): TinyColorInstance;
    spin(amount: number): TinyColorInstance;
    clone(): TinyColorInstance;
    getBrightness(): number;
    isLight(): boolean;
    isDark(): boolean;
  }

  export interface TinyColorFactory {
    (color?: string | ColorInput): TinyColorInstance;
    new (color?: string | ColorInput): TinyColorInstance;
    mix(color1: string, color2: string, amount?: number): TinyColorInstance;
    equals(color1: string, color2: string): boolean;
    readability(color1: string, color2: string): number;
    mostReadable(baseColor: string, colorList: string[], options?: any): TinyColorInstance;
    fromRatio(ratio: ColorInput): TinyColorInstance;
  }

  const tinycolor: TinyColorFactory;
  export default tinycolor;
}
