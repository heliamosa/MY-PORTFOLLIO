import Navigation from './Navigation';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Helia Mosayebian</h1>
      <Navigation />
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#333',
    color: 'white',
    padding: '15px',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontSize: '28px',
  },
};

export default Header;
