import React, { Component } from 'react'

class App extends Component {

  render () {
    return (
      <div>
        <main>
          <div>
            <h1>80's Babies</h1>
          </div>
          <header>
            <div>
              <img src='http://cdn.wikimg.net/strategywiki/images/thumb/d/d3/MT_Punch-Out_mike_tyson.png/200px-MT_Punch-Out_mike_tyson.png' alt='mike tyson profile image' />
            </div>
          </header>
          <div className='biker'>
            <img src='http://im2.ezgif.com/tmp/ezgif.com-0e9e57df62.gif' alt='excite bike rider' />
          </div>
          <section>
            <ul>
              <li>Image here</li>
              <li>Some copy here</li>
              <li>Another image</li>
              <li>More copy</li>
              <li>Last image</li>
              <li>Yet more copy</li>
            </ul>
          </section>
          <footer>
            <p>
              &copy; 2016. Miguel Malcolm. Where we're going &hearts; we don't need roads
            </p>
            <img src='http://media.moddb.com/cache/images/mods/1/14/13387/thumb_620x2000/delorean.1.png' alt='delorean image' />
          </footer>
        </main>
      </div>
    )
  }
}

export default App
