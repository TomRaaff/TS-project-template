import { StageCollections } from "./stageCollection";
import { Vector2d } from "./types";

export class Stage {
    private static canvas: HTMLCanvasElement;
    private static context: CanvasRenderingContext2D;
    private static stageCollections: StageCollections;

    private static lastFrameTime = 0;
    private static framesPerSecond: 60 | 30 | 20 | 15 | 10 = 30;
    private static frameMinTime =
        (1000 / 60) * (60 / Stage.framesPerSecond) - (1000 / 60) * 0.5;

    static init() {
        Stage.canvas = Stage.createCanvas();
        Stage.context = Stage.createContext();
        Stage.stageCollections = new StageCollections();

        Stage.configureCanvas();

        Stage.context.fillStyle = "rgb(32, 0, 0)";
        Stage.context.fillRect(0, 0, Stage.canvas.width, Stage.canvas.height);

        requestAnimationFrame(Stage.update); // start animation: ;
    }

    private static update(time: number) {
        if (time - Stage.lastFrameTime < Stage.frameMinTime) {
            //skip the frame if the call is too early
            requestAnimationFrame(Stage.update);
            return; // return as there is nothing to do
        }
        Stage.draw();
        Stage.lastFrameTime = time; // remember the time of the rendered frame
        // render the frame
        requestAnimationFrame(Stage.update); // get next farme
    }

    private static createCanvas() {
        const canvas = document.getElementById("canvas");

        if (canvas instanceof HTMLCanvasElement) {
            return canvas;
        }

        throw "Canvas not supported by this browser";
    }

    private static createContext() {
        const context = Stage.canvas.getContext("2d");

        if (context) {
            return context;
        }

        throw "No context found";
    }

    private static setCanvasSize(size: Vector2d) {
        Stage.canvas.width = size.x;
        Stage.canvas.height = size.y;
    }

    private static configureCanvas() {
        Stage.setCanvasSize({ x: window.innerWidth, y: window.innerHeight });

        Stage.canvas.addEventListener(
            "click",
            function (ev) {
                console.log({ x: ev.clientX, y: ev.clientY });
            },
            false
        );

        window.addEventListener("resize", function () {
            Stage.setCanvasSize({
                x: window.innerWidth,
                y: window.innerHeight,
            });
        });
    }

    static draw() {
        Stage.stageCollections.getStaticProps().draw();
        Stage.stageCollections.getActors().draw();
    }

    static getStageCollections() {
        return Stage.stageCollections;
    }

    static getCanvas() {
        return Stage.canvas;
    }

    static getContext() {
        return Stage.context;
    }
}
