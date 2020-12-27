import Cookies from 'js-cookie'

function getFbp() {
  return Cookies.get('_fbp')
}

function getFbc() {
  const fbc = new URL(window.location).searchParams.get('fbclid')
  if (fbc) {
    return fbc
  }

  const cookie = Cookies.get('_fbc')
  if (cookie) {
    return cookie.value.split('.')[3]
  }
}

function getGclid() {
  const id = new URL(window.location).searchParams.get('gclid')
  return id
}

function getGclientId() {
  return new Promise((resolve, reject) => {
    ga((tracker) => {
      try {
        var clientId = tracker.get('clientId');
        resolve(clientId);
      } catch (e) {
        reject(e);
      }
    });
  })
}

export function getAdIds() {
  return Promise.all([getFbc(), getFbp(), getGclid(), getGclientId()]).then(([fbc, fbp, gclid, gclientId]) => {
    return { fbc, fbp, gclid, gclientId }
  })
}
