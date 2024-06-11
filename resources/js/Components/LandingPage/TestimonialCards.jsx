import React from "react";

const TestimonialCards = ({ key, profile, name, content }) => {
    return (
        <div key={key} className="carousel-item">
            <div className="rounded-box w-80 h-52 flex flex-col items-center bg-light-blue space-y-3 p-4">
                <img src={profile} className="rounded-full w-16 h-16" />
                <p className="font-bold text-gray-800">{name}</p>
                <p className="font-medium text-gray-500">{content}</p>
            </div>
        </div>
    );
};

export default TestimonialCards;
