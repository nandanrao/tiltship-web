

export async function consent(onCancel, onSubmit) {
  return new Promise((resolve, reject) => {

    // const consent = document.getElementById('consent')
    // const form = consent.querySelector('form')
    // const cancel = consent.querySelector('#cancel')

    // const onCancelClick = e => {
    //   e.preventDefault();
    //   consent.classList.toggle('hidden');
    //   cancel.removeEventListener('click', onCancelClick);
    //   resolve(false);
    // }

    // cancel.addEventListener('click', onCancelClick);

    // consent.addEventListener('click', e => {
    //   if (e.target === e.currentTarget) {
    //     onCancelClick(e)
    //   } 
    // }, {once: true})



    // console.log(attachBanner)

    // attachBanner(document.body)
    // cookieconsent.initialise({
    //   container: document.querySelector('body'),
    //   palette:{
    //     popup: {background: "#fff"},
    //     button: {background: "#aa0000"},
    //   },
    //   revokable:true,
    //   onStatusChange: function(status) {
    //     console.log(this.hasConsented() ?
    //                 'enable cookies' : 'disable cookies');
    //   },
    //   law: {
    //     regionalLaw: false,
    //   },
    //   location: true,
    // });

    function onSubmit(e) {
      e.preventDefault();
      const foo = e.target[0].value;
      const bar = e.target[1].value;
      console.log(foo, bar)
      consent.classList.toggle('hidden')
      resolve();
    }

    form.addEventListener('submit', onSubmit);

    consent.classList.toggle('hidden')

    console.log('consent')

    // const cc = new CC({
    //...options,
    // type   : "categories"
    // })

    // console.log(cc)

  

  })
}
