<script> 
  import src from 'url:../img/loading.svg'
  let state = 'empty'
  let email = null
  let cookies = true
  let emailConsent = true

  const handleCancel = e => {
    if (e.target === e.currentTarget) {
      e.preventDefault()
      state = 'empty'
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    state = 'consent'
  }

  const handleConsent = (e) => {
    console.log('consent!')
    e.preventDefault()

    console.log(email)
    console.log(cookies)
    console.log(emailConsent)

    if (cookies) {
      // fbq('consent', true)
      // googles?? 
    }
    // console.log(e.target)

    import('@typeform/embed').then(({makePopup}) => {
      const formUrl = 'https://form.typeform.com/to/bEzLeP8A'  
      const qs = ''

      const typeform = makePopup(`${formUrl}?${qs}`, {
        mode: 'drawer_right',
        onSubmit: (event) => {

          // send to server to avoid needing hidden fields?
          // track event? "filled survey"?
          // send response id?
          // segement?
          
          typeform.close()
          state = 'finished'
        },
        onClose: () => {
          state = 'finished'
        }
      })

      typeform.open()

    })
    

    // const idData = await getAdIds()

  }

  // const src = 'img/loading.svg'

</script>

<h2> Join us </h2>
<div class="form-area">

  {#if state === 'empty'}
    <div id="empty-form">
      <p> Sign up to our email list and we'll send you news about the project, such as when we launch!</p>
      <form id="email-form" on:submit={handleSubmit} action="">
        <input bind:value={email} type="email" required="true" placeholder="Email" name="email" />
        <button>Submit</button>
      </form>
    </div>
  {/if}

  {#if state !== 'empty' && state !== 'finished'}
    <div id="loading-form">
      <img src={src}>
    </div>
  {/if}

  {#if state === 'finished'}
    <div id="finished-form">
      <p> Thank you. We will be in touch soon. </p>
    </div>
  {/if}

</div>

{#if state === 'consent'}
  <div id="consent" on:click={handleCancel}>
    <div>
      <form on:submit={handleConsent}>
        <p> We're using advertising to tell people about the idea. If you give us consent to use cookie info, we can do a better job recruiting more people. </p>

        <div class="option">
          <input bind:checked={cookies} id="cookie-consent" type="checkbox">
          <label for="cookie-consent"> I agree. Use cookies to store and access personal data on my device. </label>
        </div>

        <div class="actions">
          <button on:click={handleCancel} id="cancel" type="button">cancel</button>
          <button>submit</button>
        </div>
      </form>
    </div>    
  </div>
{/if}
