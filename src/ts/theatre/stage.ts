import { CanvasConfig } from "./types";

export class Stage {
    private static canvas: HTMLCanvasElement;
    private static context: CanvasRenderingContext2D;

    constructor(canvasConfig: CanvasConfig) {
        Stage.canvas = this.initCanvas();
        Stage.context = this.initContext();

        Stage.configureCanvas(canvasConfig);

        Stage.context.fillStyle = "rgb(128, 0, 0)";
        Stage.context.fillRect(0, 0, Stage.canvas.width, Stage.canvas.height);
    }

    private initCanvas() {
        const canvas = document.getElementById("canvas");

        if (canvas instanceof HTMLCanvasElement) {
            return canvas;
        }

        throw "Canvas not supported by this browser";
    }

    private initContext() {
        const context = Stage.canvas.getContext("2d");

        if (context) {
            return context;
        }

        throw "No context found";
    }

    private static configureCanvas({ size, fullScreen }: CanvasConfig) {
        Stage.canvas.width = fullScreen ? window.innerWidth : size.x;
        Stage.canvas.height = fullScreen ? window.innerHeight : size.y;

        Stage.canvas.addEventListener(
            "click",
            function (ev) {
                console.log({ x: ev.clientX, y: ev.clientY });
            },
            false
        );
    }

    static getCanvas() {
        return Stage.canvas;
    }

    static getContext() {
        return Stage.context;
    }
}
