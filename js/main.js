import { getAdIds } from './ads'

function draw(ctx, startX, startY, len, angle, angleShift, startingWidth, idx=0) {
  ctx.beginPath();
  ctx.save();
  ctx.lineWidth = `${startingWidth*(.9**idx)}`
  ctx.strokeStyle = `rgb(${80 + 10*idx}, 180, ${120 + idx*15}, ${.8*(.6**idx)} )`;
  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();

  if (idx === 9) {
    ctx.restore();
    return;
  }

  draw(ctx, 0, -len, len*0.7, -angleShift, angleShift, startingWidth, idx+1);
  draw(ctx, 0, -len, len*0.7, angleShift, angleShift, startingWidth, idx+1);

  ctx.restore();
}

function drawTree(el) {

  const c = document.createElement('canvas')
  c.width = el.clientWidth
  c.height = el.clientHeight
  el.appendChild(c)

  const l = Math.round(el.clientHeight / 4)
  const as = Math.ceil(el.clientWidth**.6 / 7)
  const sw = Math.ceil(el.clientWidth**.6 / 2)

  draw(c.getContext('2d'), Math.round(el.clientWidth/2), el.clientHeight, l, 0, as, sw)
}


function onSubmit(e) {
  // segment send form subscription

  // fbq('track', 'Subscription');
  // ga('send', 'event', 'Form', 'signup', 'email');

  // get gclid
  // get gclientId



  const email = e.target[0].value;

  console.log(email)

  // get fcid and google ad id info;

  // send to server

  // then popup typeform and ask questions

  // then send question answers to FB/Google?
  // or do that on server?
  // def later, maybe also former.

  // use
  // process.env.SERVER_URL
  // to send data to backend

  e.preventDefault();
}


function main() {
  getAdIds()
    .then((vals) => {
      console.log(vals)
    })
    .catch(err => {
      console.log(err)
    })

  // TODO:
  // change element
  // redraw on width change, debounce
  const body = document.querySelector('.content')
  drawTree(body)


  const form = document.getElementById('email-form');
  form.addEventListener('submit', onSubmit);
}


export default main
