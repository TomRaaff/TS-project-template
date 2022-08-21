export interface Vector2d {
    x: number;
    y: number;
}

export const ZERO_VECTOR2D: Vector2d = { x: 0, y: 0 };

export interface CanvasConfig {
    size: Vector2d;
    fullScreen: boolean;
}
