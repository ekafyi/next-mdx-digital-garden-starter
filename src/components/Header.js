import Link from 'next/link'

const Nav = ({ children }) => (
  <nav
    style={{
      height: '70px',
      display: 'flex',
      alignItems: 'center'
    }}
  >
    {children}
  </nav>
)

const Header = props =>
  <Nav>
    <Link href='/'>
      <a>Home</a>
    </Link>
    <Link href='/about'>
      <a>About</a>
    </Link>
  </Nav>

export default Header
