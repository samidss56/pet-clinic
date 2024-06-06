const ArticleSection = () => {
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
      title: "Understanding Your Pet’s Body Language",
      image: "/artikel5.png",
      description: "Pets communicate through body language, and understanding these signals can improve your relationship with your pet. Learn the basics of pet body language and what different behaviors mean."
    },
    {
      title: "Seasonal Pet Care Tips",
      image: "/artikel6.png",
      description: "Each season brings unique challenges and needs for pet care. Discover how to adapt your pet care routine for winter, spring, summer, and fall to keep your pet healthy year-round."
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-red-600">ARTICLES</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">{article.title}</h3>
              <p className="text-gray-900">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Welcome({ auth }) {
  const user = auth?.user?.name;

  return (
    <Authenticated user={user}>
      <Head title="Welcome" />
      <div className="bg-gray-100">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
          <HeroSection />
          <ServicesSection />
          <MeetOurTeamSection />
          <ArticleSection />
          <TestimonialsSection />
          <GallerySection />
          <AboutUsSection />
          <Footer />
        </div>
      </div>
    </Authenticated>
  );
};
