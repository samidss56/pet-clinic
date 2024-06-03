// File: /Components/LandingPage/ArticleSection.jsx
import React from 'react';

const ArticleSection = () => {
  const articles = [
    {
      title: "The Importance of Regular Veterinary Check-Ups",
      image: "/images/vet-checkup.jpg",
      description: "Regular veterinary check-ups are crucial for maintaining your pet's health. Early detection of diseases can save your pet's life and reduce treatment costs."
    },
    {
      title: "Nutrition Tips for Your Pets",
      image: "/images/pet-nutrition.jpg",
      description: "Proper nutrition is the cornerstone of a healthy life for your pets. Learn about the best diets for different types of pets and how to ensure they get the nutrients they need."
    },
    {
      title: "Common Health Issues in Pets and How to Prevent Them",
      image: "/images/pet-health.jpg",
      description: "Pets can suffer from a variety of health issues, from dental problems to obesity. Discover preventive measures to keep your pet healthy and happy."
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Articles</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-700">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
