const titlebar = document.getElementById("titlebar");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let image = null;
let image_size = 0;

function size_canvas() {
    canvas.height = window.innerHeight - titlebar.offsetHeight -5;
    canvas.width = window.innerWidth;
}

function create_image(width, height) {
    const MAX = 255; const MIN = 1; const RANGE = MAX-MIN;
    const area = width * height;
    let data = new Uint8ClampedArray(4*area);
    for (let i = 1; i < area*4; i += 4) {
        data[i] = Math.random()*240 + 10;
        data[i+2] = 255;
    }
    image_size = area;
    return new ImageData(data, width, height);
}

function run() {
    size_canvas();
    if ((window.innerHeight-titlebar.offsetHeight) * window.innerWidth > image_size
        || image === null) { image = create_image(canvas.width, canvas.height); }
    ctx.putImageData(image, 0,0,0,0, canvas.width, canvas.height);
    console.log(ctx.getImageData(0, 0, canvas.width, canvas.height).data);
}

addEventListener("resize", run);
addEventListener("load", run);
