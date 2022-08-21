import { Actor, IStageElement, StaticProp } from "./stageElements";

export class StageCollections {
    private actors: StageCollection<Actor>;
    private staticProps: StageCollection<StaticProp>;

    constructor() {
        this.actors = new StageCollection();
        this.staticProps = new StageCollection();
    }

    getActors() {
        return this.actors;
    }

    getStaticProps() {
        return this.staticProps;
    }
}

export class StageCollection<T extends IStageElement> {
    private elements: Array<T>;

    constructor() {
        this.elements = [];
    }

    add(staticProp: T) {
        this.elements.push(staticProp);
    }

    delete(id: string) {
        const index = this.elements.findIndex(
            (sprite) => sprite.getId() === id
        );

        if (index !== -1) {
            this.elements.splice(index, 1);
        }
    }

    getById(id: string) {
        const element = this.elements.find((element) => element.getId() === id);

        if (element) {
            return element;
        }

        throw `Element not found: <${this}>${id}`;
    }

    draw() {
        for (const element of this.elements) {
            element.getSprite().draw();
        }
    }
}
