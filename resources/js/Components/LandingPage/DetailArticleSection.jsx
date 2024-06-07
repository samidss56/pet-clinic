import DetailArticle from '@/Pages/DetailArticle';
import React from 'react';
import ArticleSection from './ArticleSection';
import MoreArticleSection from './MoreArticleSection';

// ArticleCard Component
const ArticleCard = ({ title, description, bannerImgSrc }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="p-4">
        <h1 className="text-5xl font-bold text-black mb-4">{title}</h1>
        <div class="flex justify-between my-4">
        <div className='text-md font-semibold text-black mb-4'>
          <span className='text-gray-400'>Author :</span> Azmi</div>
        <div className='text-md font-semibold text-gray-400 mb-4'>7 Juni 2024</div>
    </div>
        <img src={bannerImgSrc} alt={title} className="w-full h-80 object-cover mb-4" />
        <p className="text-black text-base leading-relaxed whitespace-pre-wrap">{description}</p>
      </div>
    </div>
  );
};

const longDescription = `
# Introduction

Regular veterinary check-ups are vital for maintaining the health and well-being of your pets. These visits allow veterinarians to detect potential health issues early, provide necessary preventive care, and offer guidance on the best practices for your pet's overall health.

# Early Detection of Diseases

One of the primary benefits of regular veterinary check-ups is the early detection of diseases. During these visits, veterinarians perform thorough physical examinations and may conduct diagnostic tests to identify any underlying health conditions that may not yet show obvious symptoms. Early detection often leads to more effective treatments and better outcomes.

# Preventive Care

Preventive care is essential to avoid health problems before they arise. This includes vaccinations, parasite control, and dental care. By staying up-to-date with vaccinations, you can protect your pet from common infectious diseases. Regular parasite control helps prevent infestations of fleas, ticks, and worms, which can cause significant health issues.

# Nutrition and Weight Management

Veterinarians provide valuable advice on nutrition and weight management during check-ups. Proper nutrition is crucial for your pet's health, and vets can recommend the best diet based on your pet's age, breed, and activity level. Maintaining a healthy weight is important to prevent obesity-related issues, such as diabetes and joint problems.

# Dental Health

Dental health is often overlooked, but it's a critical component of your pet's overall health. Regular dental check-ups help prevent periodontal disease, which can lead to serious health complications if left untreated. Vets can perform professional cleanings and guide you on how to care for your pet's teeth at home.

# Parasite Control

Parasite control is an ongoing aspect of pet care. Regular check-ups ensure your pet is protected against parasites like fleas, ticks, and heartworms. Your vet can recommend appropriate preventive measures and treatments to keep these pests at bay.

# Behavioral Advice

Behavioral issues can affect your pet's quality of life and your relationship with them. During check-ups, veterinarians can offer advice on managing and correcting behavioral problems, such as aggression, anxiety, or destructive behavior. Early intervention is key to addressing these issues effectively.

# Age-Specific Needs

Pets have different health needs at various life stages. Regular check-ups allow your vet to tailor their care to your pet's age, whether they're a young puppy or kitten, an adult, or a senior pet. Age-specific screenings and preventive measures can help manage age-related health issues.

# Emergency Preparedness

Discussing emergency preparedness with your vet is crucial. They can provide guidance on what to do in case of a medical emergency, including recognizing signs of distress and having an action plan in place. Being prepared can make a significant difference in critical situations.

# Conclusion

In conclusion, regular veterinary check-ups are a fundamental aspect of responsible pet ownership. They ensure that your pet receives comprehensive care, from disease prevention to behavioral advice. By prioritizing these visits, you can help your pet live a long, healthy, and happy life.
`;

const DetailArticleSection = () => {
  const title = "The Importance of Regular Veterinary Check-Ups";
  const bannerImgSrc = "https://img.freepik.com/free-vector/flat-design-medical-clinic-sale-banner_23-2149641439.jpg";

  return (
    <div className="container mx-auto p-4">
      <ArticleCard title={title} description={longDescription} bannerImgSrc={bannerImgSrc} />
      <MoreArticleSection />
    </div>
  );
};

export default DetailArticleSection;
