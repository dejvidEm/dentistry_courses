import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../ui/Breadcrumbs";
import CourseCard from "../ui/CourseCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ResponsiveSlider from "../ui/Slider";
import Testimonial from "../ui/ReviewCard";

const kurzyData = [
  {
    id: "1",
    name: "Kurz 1",
    image: "images/home_img_sec2.png",
    description:
      "Toto je popis kurzu v ktorom je opisane to co sa na kurze naucite a co sa na nom dozviete, pre podrobnejsie info si rozkliknite tento kurz a zistite co sa v nom vsetko naucite, ale ajtak sa musite prihlasit aby ste to zistili",
    date: "2025-01-20",
    duration: "2 hours",
    capacity: "30",
  },
  {
    id: "2",
    name: "Kurz 2",
    image: "images/home_img_sec2.png",
    description:
      "Toto je popis kurzu v ktorom je opisane to co sa na kurze naucite a co sa na nom dozviete, pre podrobnejsie info si rozkliknite tento kurz a zistite co sa v nom vsetko naucite, ale ajtak sa musite prihlasit aby ste to zistili",
    date: "2025-01-25",
    duration: "3 hours",
    capacity: "25",
  },
  {
    id: "3",
    name: "Kurz 3",
    image: "images/home_img_sec2.png",
    description:
      "Toto je popis kurzu v ktorom je opisane to co sa na kurze naucite a co sa na nom dozviete, pre podrobnejsie info si rozkliknite tento kurz a zistite co sa v nom vsetko naucite, ale ajtak sa musite prihlasit aby ste to zistili",
    date: "2025-02-01",
    duration: "4 hours",
    capacity: "20",
  },
  {
    id: "4",
    name: "Kurz 4",
    image: "images/home_img_sec2.png",
    description:
      "Toto je popis kurzu v ktorom je opisane to co sa na kurze naucite a co sa na nom dozviete, pre podrobnejsie info si rozkliknite tento kurz a zistite co sa v nom vsetko naucite, ale ajtak sa musite prihlasit aby ste to zistili",
    date: "2025-02-01",
    duration: "4 hours",
    capacity: "20",
  },
];

const reviews = [
  {
    name: "John Doe",
    role: "Software Engineer",
    photo: "/images/review_profile_photo.png",
    quote: "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    photo: "/images/review_profile_photo.png",
    quote: "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
  },
  {
    name: "Alex Johnson",
    role: "Designer",
    photo: "/images/review_profile_photo.png",
    quote: "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
  },
  {
    name: "James West",
    role: "Dentist",
    photo: "/images/review_profile_photo.png",
    quote: "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
  },
  {
    name: "Alex Johnson",
    role: "Worker",
    photo: "/images/review_profile_photo.png",
    quote: "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
  },
  // Add more testimonials as needed
];

const Kurzy: React.FC = () => {
  // Referencie pre oba slidery
    const reviewsSliderRef = useRef<{
      handleNext: () => void;
      handlePrev: () => void;
    } | null>(null);
  
    // Funkcie na ovládanie review slideru
    const handleReviewsPrev = () => reviewsSliderRef.current?.handlePrev();
    const handleReviewsNext = () => reviewsSliderRef.current?.handleNext();

  return (
    <div className="bg-[#F3F3F1]">
      <section className="w-full bg-white px-20">
        <Breadcrumbs />
      </section>

      {/* Hero Section */}
      <section className="w-full bg-white mx-auto py-24">
        <div className="flex flex-row justify-between px-20">
          <h1 className="text-5xl">
            Posuňte kariéru s <br /> našimi kurzami
          </h1>
          <p className="w-[500px]">
            Naša ponuka kurzov je určená pre tých, ktorí chcú získať nové
            zručnosti, zlepšiť svoju kariéru a neustále sa rozvíjať. Bez ohľadu
            na to, či ste začiatočník alebo skúsený odborník, naše kurzy vám
            poskytnú potrebné nástroje na úspech. Získajte certifikát, ktorý
            potvrdí vaše schopnosti a otvorí dvere k novým príležitostiam.
          </p>
        </div>
      </section>

      {/* Kurzy Section */}
      <section className="max-w-[1400px] mx-auto py-8 px-8 lg:px-16">
        <div className="mx-auto grid grid-cols-3 gap-8">
          {kurzyData.map((kurz) => (
            <Link to={`/kurzy/${kurz.id}`} key={kurz.id}>
              <CourseCard
                image={kurz.image}
                title={kurz.name}
                description={kurz.description}
                date={kurz.date}
                duration={kurz.duration}
                capacity={kurz.capacity}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Hodnotenia kurzov */}
      <section className="max-w-[1400px] mx-auto reviews flex flex-col lg:flex-row py-16 px-8 lg:px-16 gap-8 lg:gap-12">
        <div className="flex flex-col gap-8 w-full lg:w-2/3">
          <div className="flex flex-col lg:flex-col justify-between items-start lg:items-start gap-4">
            <h1 className="text-gray-800 text-2xl lg:text-3xl font-bold">
              Hodnotenia kurzov
            </h1>
            <div className="arrows flex flex-row gap-4">
              <div
                className="bg-white rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition"
                onClick={handleReviewsPrev}
              >
                <FaArrowLeft />
              </div>
              <div
                className="bg-white rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition"
                onClick={handleReviewsNext}
              >
                <FaArrowRight />
              </div>
            </div>
          </div>

          {/* Slider s hodnoteniami */}
          <ResponsiveSlider
            ref={reviewsSliderRef}
            items={reviews.map((review, index) => (
              <Testimonial
                key={index}
                name={review.name}
                role={review.role}
                photo={review.photo}
                quote={review.quote}
              />
            ))}
            visibleItems={2} // Napr. 2 viditeľné položky na desktopoch
          />
        </div>
        <div className="flex justify-center items-start lg:items-end">
          <img
            src="/images/reviewsCitat.png"
            alt="quote"
            className="w-[200px] lg:w-[300px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Kurzy;
