const config = require('./../../../config')

export class Router {
  constructor(Pages, SPA = true) {
    this.Pages = Pages
    this.SPA = SPA

    this.listen()

    this.redirect('home')
  }

  listen() {
    // Listening for Href clicks    
    document.querySelectorAll('[route]').forEach(el => {
      el.addEventListener('click', ev => {
        ev.preventDefault()
        this.redirect(ev.target.getAttribute('route'))
        if (!this.SPA) window.location = config.host + ev.target.getAttribute('route')
      })
    })
  }

  redirect(where) {
    // URL fields
    this.URL = document.location.href.split('/').slice(3)
    if (!this.URL[0] && this.SPA)
      this.URL = String(where).split('/').splice(1)

    // Redirect to home if 404'd
    let redirectHTML

    console.log(this.URL, where)
    if (this.Pages[this.URL[0]])
      redirectHTML = this.Pages[this.URL[0]]
    else redirectHTML = this.Pages.home

    // Creating view and appending it
    const Append = (document.createElement('div').innerHTML = redirectHTML)
    this.View = document.querySelector('#view')
    this.View.innerHTML = Append

    // Executing script tag
    const ScriptTag = this.View.querySelector('script')

    if (ScriptTag) eval(ScriptTag.innerHTML)
  }
}