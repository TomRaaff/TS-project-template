import { Stage } from "./stage";
import { Vector2d, ZERO_VECTOR2D } from "./types";
import { v4 as uuidv4 } from "uuid";

interface SpriteProps {
    size?: Vector2d;
    position?: Vector2d;
    velocity?: Vector2d;
    color?: string;
    children?: Array<ISprite>;
}

export interface ISprite {
    id: string;
    size: Vector2d;
    position: Vector2d;
    velocity: Vector2d;
    color: string;
    children: Array<ISprite>;
    draw(): void;
    onClick(point: Vector2d, callback: () => void): void;
}

export class Sprite implements ISprite {
    id: string;
    size: Vector2d;
    position: Vector2d;
    velocity: Vector2d;
    color: string;
    children: Array<ISprite>;

    constructor({
        size = { x: 50, y: 50 },
        position = ZERO_VECTOR2D,
        velocity = ZERO_VECTOR2D,
        color = "white",
        children = [],
    }: SpriteProps) {
        this.id = uuidv4();
        this.size = size;
        this.position = position;
        this.velocity = velocity;
        this.color = color;
        this.children = children;
    }

    onClick(point: Vector2d, callback: () => void): void {
        if (Stage.getContext().isPointInPath(point.x, point.y)) {
            callback();
        }
    }

    draw() {
        Stage.getContext().fillStyle = this.color;
        Stage.getContext().fillRect(
            this.position.x,
            this.position.y,
            this.size.x,
            this.size.y
        );
    }
}
