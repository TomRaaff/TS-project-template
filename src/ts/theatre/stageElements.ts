import { Sprite } from "./sprite";
import { v4 as uuidv4 } from "uuid";
import { Vector2d, ZERO_VECTOR2D } from "./types";

export interface IStageElement {
    getId(): string;
    getSprite(): Sprite;
}

interface StageElementProps {
    size?: Vector2d;
    position?: Vector2d;
    velocity?: Vector2d;
    color?: string;
}

class StageElement implements IStageElement {
    protected id: string;
    protected sprite: Sprite;

    constructor({ size, position, velocity, color }: StageElementProps) {
        this.id = uuidv4();
        this.sprite = new Sprite({
            size,
            position,
            velocity,
            color,
        });
    }

    getId() {
        return this.id;
    }

    getSprite(): Sprite {
        return this.sprite;
    }
}

export class Actor extends StageElement {
    constructor({
        size = { x: 48, y: 48 },
        position = ZERO_VECTOR2D,
        velocity = ZERO_VECTOR2D,
        color = "blue",
    }: StageElementProps) {
        super({ size, position, velocity, color });
    }
}

export class StaticProp extends StageElement {
    constructor({
        size = { x: 48, y: 48 },
        position = ZERO_VECTOR2D,
        velocity = ZERO_VECTOR2D,
        color = "green",
    }: StageElementProps) {
        super({ size, position, velocity, color });
    }
}
