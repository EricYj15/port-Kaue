const Footer = () => {
    return (
      <footer className="bg-blue-600 text-white text-center p-4 mt-auto">
        <p>© 2024 Higor Kauan</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/higor-kauan" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/higor-kauan" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  