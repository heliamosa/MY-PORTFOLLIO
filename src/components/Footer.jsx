function Footer() {
    return (
      <footer style={styles.footer}>
        <a href="https://github.com/heliamosa" target="_blank" rel="noopener noreferrer" style={styles.link}>
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
          LinkedIn
        </a>
        <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Stack Overflow
        </a>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      backgroundColor: '#333',
      color: 'white',
      padding: '15px',
      textAlign: 'center',
      marginTop: '30px',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      margin: '0 10px',
    },
  };
  
  export default Footer;
  