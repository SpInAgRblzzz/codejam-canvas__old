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
    fetch(path)
    fetch(object.path)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            console.log(data);
            if (object.content === null) {
                object.content = data;
            }

        })
}