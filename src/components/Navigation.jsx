import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={styles.link} activeStyle={styles.active}>
        About Me
      </NavLink>
      <NavLink to="/portfolio" style={styles.link} activeStyle={styles.active}>
        Portfolio
      </NavLink>
      <NavLink to="/contact" style={styles.link} activeStyle={styles.active}>
        Contact
      </NavLink>
      <NavLink to="/resume" style={styles.link} activeStyle={styles.active}>
        Resume
      </NavLink>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '10px',
    backgroundColor: '#444',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
  active: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
};

export default Navigation;
