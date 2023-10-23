// import Example from "./scripts/example";
import Bucket from "./scripts/bucket.js";
import Game from "./scripts/game.js";
// const audioContext = new audioContext();

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = (window.innerWidth);
    canvas.height = (window.innerHeight);
    let audioCtx = '';
    document.addEventListener("click", () => {
        audioCtx = new AudioContext();
        let game = new Game(canvas, ctx, audioCtx);
        game.run();
    })

    // let game = new Game(canvas, ctx, audioCtx);
    // game.run();
})