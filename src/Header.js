function Header(props){
  return (
    <header className="App-header">
        <div>
          <h1 className="head1">
            <span className="ora">l</span>
            <span className="yel">i</span>
            <span className="gre">f</span>
            <span className="pink">e</span>
            <span className="ora">s</span>
            <span className="pink">a</span>
            <span className="gre">v</span>
            <span className="yel">e</span>
            <span className="ora">r</span>
          </h1>
          <ul className="nav">
            <li class="nav-item">
              <a className="nav-link active go" href="https://github.com/najuasaad">
                login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link go" href="https://github.com/najuasaad">
                music
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link go" href="https://github.com/najuasaad">
                grocery
              </a>
            </li>
          </ul>
        </div>
      </header>
  )
}

export default Header;