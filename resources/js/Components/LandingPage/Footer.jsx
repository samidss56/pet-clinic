const Footer = () => {
    return (
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0 flex items-center">
              <img src="/AppLogo.png" alt="App Logo" className="w-12 h-12 mr-2" />
              <h1 className="text-lg font-bold">PawanaJiwa</h1>
            </div>
            <div className="flex justify-around mb-6 md:mb-0">
              <div className="mr-8">
                <h3 className="text-gray-600 text-lg font-bold mb-2">Useful links</h3>
                <ul className="text-gray-600 text-base">
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Events</a></li>
                  <li><a href="#">Blogs</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-600 text-lg font-bold mb-2">Main Menu</h3>
                <ul className="text-gray-600 text-base">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Pets</a></li>
                  <li><a href="#">Doctors</a></li>
                  <li><a href="#">Gallery</a></li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-600 text-lg hover:text-red-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 text-lg hover:text-red-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 text-lg hover:text-red-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 text-lg hover:text-red-500">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;