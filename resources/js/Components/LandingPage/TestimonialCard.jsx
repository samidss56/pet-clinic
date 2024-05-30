const TestimonialCard = ({ text, author, imgSrc }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="p-4">
          <p className="text-lg italic text-black mb-4">{text}</p>
          <p className="text-black mb-4 font-bold">- {author}</p>
          <img src={imgSrc} alt={author} className="mx-auto w-24 h-24 rounded-full" />
        </div>
      </div>
    );
  };

  export default TestimonialCard;