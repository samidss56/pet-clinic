import { useState } from "react";
import Slider from "react-slick";
import Modal from 'react-modal';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "../Icons/Index";

const ArticleSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      title: "The Importance of Regular Veterinary Check-Ups",
      image: "/artikel1.png",
      description: "Regular veterinary check-ups are crucial for maintaining your pet's health. Early detection of diseases can save your pet's life and reduce treatment costs."
    },
    {
      title: "Nutrition Tips for Your Pets",
      image: "/artikel2.png",
      description: "Proper nutrition is the cornerstone of a healthy life for your pets. Learn about the best diets for different types of pets and how to ensure they get the nutrients they need."
    },
    {
      title: "Common Health Issues in Pets and How to Prevent Them",
      image: "/artikel3.png",
      description: "Pets can suffer from a variety of health issues, from dental problems to obesity. Discover preventive measures to keep your pet healthy and happy."
    },
    {
      title: "How to Train Your New Puppy",
      image: "/artikel4.png",
      description: "Training your new puppy is essential for ensuring good behavior and a happy household. Learn effective training techniques and tips to help your puppy learn quickly."
    },
    {
      title: "Understanding Your Pets Body Language",
      image: "/artikel5.png",
      description: "Pets communicate through body language, and understanding these signals can improve your relationship with your pet. Learn the basics of pet body language and what different behaviors mean."
    },
    {
      title: "Seasonal Pet Care Tips",
      image: "/artikel6.png",
      description: "Each season brings unique challenges and needs for pet care. Discover how to adapt your pet care routine for winter, spring, summer, and fall to keep your pet healthy year-round."
    }
  ];

  const openModal = (article) => {
    setSelectedArticle(article);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedArticle(null);
  };

  const PrevArrow = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 transition"
    >
      <ChevronLeft className="h-6 w-6"/>
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 transition"
    >
      <ChevronRight className="h-6 w-6"/>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-semibold text-center mb-8 text-red-600">ARTICLES</h2>
        <Slider {...settings}>
          {articles.map((article, index) => (
            <div key={index} className="p-2">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-between">
                <div>
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-md mb-4" />
                  <h3 className="text-xl font-bold text-black mb-2">{article.title}</h3>
                  <p className="text-gray-900 mb-4">{article.description}</p>
                </div>
                <button 
                  onClick={() => openModal(article)} 
                  className="bg-red-600 text-white py-2 px-4 rounded"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {selectedArticle && (
        <Modal 
          isOpen={modalIsOpen} 
          onRequestClose={closeModal} 
          contentLabel="Article Details"
          className="fixed inset-0 flex items-center justify-center z-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 md:mx-auto p-6 relative">
            <button 
              onClick={closeModal} 
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-black mb-4">{selectedArticle.title}</h2>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-900 mb-4">{selectedArticle.description}</p>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default ArticleSection;
