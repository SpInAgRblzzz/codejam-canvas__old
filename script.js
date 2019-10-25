const canvas = document.querySelector('.canvas');

canvas.width = 512;
canvas.height = 512;

const cellSize = 128;

const ctx = canvas.getContext('2d');

const canvas4 = {
  path:
    'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json',
  content: null,
};

const canvas32 = {
  path:
    'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json',
  content: null,
};

const canvasPNG = {
  path: 'data/image.png',
  content: null,
  image: true,
};

function getJSON(object) {
  if (object.content === null) {
    fetch(object.path)
      .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        object.content = data;
      });
  }
}

function getImage(object) {
  object.content = new Image();
  console.log(object.content);
  object.content.src = object.path;
}

function getContent(object) {
  if (object.image) {
    getImage(object);
  } else {
    getJSON(object);
  }
}

const button4 = document.querySelector('.btn4');
const button32 = document.querySelector('.btn32');
const buttonPNG = document.querySelector('.png');

function fillCanvas(object) {
  getContent(object);

  return function() {
    if (!object.image) {
      const scale = 512 / object.content.length;
      for (let row = 0, len = object.content.length; row < len; row++) {
        for (let col = 0, len = object.content.length; col < len; col++) {
          if (object.content.length === 4) {
            ctx.fillStyle = '#' + object.content[row][col];
          }
          if (object.content.length === 32) {
            ctx.fillStyle = `rgba( ${object.content[row][col]})`;
          }
          ctx.fillRect(row * scale, col * scale, scale, scale);
        }
      }
    } else {
      ctx.drawImage(object.content, 0, 0);
    }
  };
}

button4.addEventListener('click', fillCanvas(canvas4));
button32.addEventListener('click', fillCanvas(canvas32));
buttonPNG.addEventListener('click', fillCanvas(canvasPNG));
