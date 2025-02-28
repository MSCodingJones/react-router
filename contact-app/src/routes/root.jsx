const root = ()=> {
    
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="POST">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/contacts/1`}>Shaquella</a>
              </li>
              <li>
                <a href={`/contacts/2`}>Jamil</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    )
  }

export default root 