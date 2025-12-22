import Size from "./Size";



export function normalizeScale(size: number): number {
    return Size.windowWidth / 375 * size;
}