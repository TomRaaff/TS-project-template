import { Stage } from "./theatre/stage";
import { Actor } from "./theatre/stageElements";

(function () {
    console.log("main.ts loaded");
    Stage.init();
    const actors = Stage.getStageCollections().getActors();

    const quadSize = 50;

    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            actors.add(
                new Actor({
                    size: { x: quadSize - 2, y: quadSize - 2 },
                    position: { x: x * quadSize, y: y * quadSize },
                })
            );
        }
    }
})();
