import "regenerator-runtime/runtime.js";
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

function drawTree(c) {
  c.width = c.clientWidth
  c.height = c.clientHeight

  const l = Math.round(c.clientHeight / 4)
  const as = Math.ceil(c.clientWidth**.6 / 7)
  const sw = Math.ceil(c.clientWidth**.6 / 2)

  draw(c.getContext('2d'), Math.round(c.clientWidth/2), c.clientHeight, l, 0, as, sw)
}


async function onSubmit(e) {
  e.preventDefault();

  // add spinner
  // segment send form subscription

  // fbq('track', 'Subscription');
  // ga('send', 'event', 'Form', 'signup', 'email');

  // get gclid
  // get gclientId

  document.getElementById('loading-form').classList.toggle('hidden')
  document.getElementById('empty-form').classList.toggle('hidden')

  const email = e.target[0].value;

  // get fcid and google ad id info;

  // send to server

  // then popup typeform and ask questions

  // then send question answers to FB/Google?
  // or do that on server?
  // def later, maybe also former.

  // use
  // process.env.SERVER_URL
  // to send data to backend

  // lazy load typeform library only after submitting data

  const {makePopup} = await import('@typeform/embed')
  const formUrl = 'https://form.typeform.com/to/bEzLeP8A'

  const idData = await getAdIds()

  // make qs from idData
  const qs = ''

  const typeform = makePopup(`${formUrl}?${qs}`, {
    mode: 'drawer_right',
    onSubmit: (event) => {

      // send to server to avoid needing hidden fields?
      // track event? "filled survey"?
      // send response id?
      // segement?

      console.log(event)
      typeform.close()
    }
  })

  typeform.open()

  setTimeout(() => {
    document.getElementById('loading-form').classList.toggle('hidden')
    document.getElementById('finished-form').classList.toggle('hidden')
  }, 500)



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
  drawTree(document.querySelector('#tree'))

  const form = document.getElementById('email-form');
  form.addEventListener('submit', onSubmit);
}


export default main
