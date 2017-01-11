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
            <img src='http://lowbird.com/data/images/2013/01/excitebike.gif' alt='excite bike rider' />
          </div>
          <section>
            <aside>
              <ul>
                <li><a href='https://www.youtube.com/watch?v=oHg5SJYRHA0' data-hover='Sucker'>Floppy Disks</a></li>
                <li><a href='https://www.youtube.com/watch?v=hhb3LqLtTBM' data-hover='It&rsquo;s Dangerous to Go Alone'>Power Glove</a></li>
                <li><a href='https://www.youtube.com/watch?v=H0HPbGz915I' data-hover='Is it the Shoooes?'>Mars Blackmon</a></li>
                <li><a href='http://www.bing.com/videos/search?q=Earl+Weaver+Baseball+YouTube&&view=detail&mid=BABAF1D4CF87021D0C32BABAF1D4CF87021D0C32&FORM=VRDGAR' data-hover='RUN DOT EXE'>Tandy 1000</a></li>
              </ul>
            </aside>
            <div>
              <img src='http://www.infendo.com/wp-content/uploads/2011/11/NES-zelda-gold-cartridge.png' alt='gold zelda cartridge' />
            </div>
          </section>
          <footer>
            <p>
              &copy; 2016. Miguel Malcolm. 'Where we're going <span>&hearts;</span> we don't need roads'
            </p>
            <img src='http://media.moddb.com/cache/images/mods/1/14/13387/thumb_620x2000/delorean.1.png' alt='delorean image' />
          </footer>
        </main>
      </div>
    )
  }
}

export default App
