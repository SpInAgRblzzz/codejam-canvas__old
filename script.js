const canvas = document.querySelector('.canvas');

canvas.width = 512;
canvas.height = 512;

const cellSize = 128;

const ctx = canvas.getContext('2d');

const canvas4 = {
    path: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json',
    content: null
}

const canvas32 = {
    path: 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json',
    content: null
}


function getJSON(object) {
    if (object.content === null) {
        fetch(object.path)
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                object.content = data;
            })
    }
}

const button4 = document.querySelector('.btn4');
function fillCanvas(object) {
    getJSON(object);
    return function () {
        const scale = 512 / object.content.length;
        for (let row = 0, len = object.content.length; row < len; row++) {
            for (let col = 0, len = object.content.length; col < len; col++) {
                if (object.content.length === 4) {
                    ctx.fillStyle = '#' + object.content[row][col];
                }
                ctx.fillRect(row * scale, col * scale, scale, scale);
            }
        }
    }
}

button4.addEventListener('click', fillCanvas(canvas4))