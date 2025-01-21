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
    quote:
      "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    photo: "/images/review_profile_photo.png",
    quote:
      "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
  },
  {
    name: "Alex Johnson",
    role: "Designer",
    photo: "/images/review_profile_photo.png",
    quote:
      "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
  },
  {
    name: "James West",
    role: "Dentist",
    photo: "/images/review_profile_photo.png",
    quote:
      "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
  },
  {
    name: "Alex Johnson",
    role: "Worker",
    photo: "/images/review_profile_photo.png",
    quote:
      "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
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
      {/* Breadcrumbs Section */}
      <section className="w-full bg-white px-4 lg:px-20">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-24">
          <Breadcrumbs />
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full bg-white mx-auto py-12 lg:py-24">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 lg:px-[88px] gap-8">
          <h1 className="text-[36px] lg:text-[58px] leading-none font-semibold text-center lg:text-left">
            Posuňte kariéru s <br /> našimi kurzami
          </h1>
          <p className="text-[#736E69] text-center lg:text-left lg:w-[500px]">
            Naša ponuka kurzov je určená pre tých, ktorí chcú získať nové
            zručnosti, zlepšiť svoju kariéru a neustále sa rozvíjať. Bez ohľadu
            na to, či ste začiatočník alebo skúsený odborník, naše kurzy vám
            poskytnú potrebné nástroje na úspech. Získajte certifikát, ktorý
            potvrdí vaše schopnosti a otvorí dvere k novým príležitostiam.
          </p>
        </div>
      </section>

      {/* Kurzy Section */}
      <section className="max-w-[1400px] mx-auto py-8 px-4 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
      <section className="max-w-[1400px] mx-auto flex flex-col lg:flex-row py-16 px-4 lg:px-16 gap-8 lg:gap-12">
        <div className="flex flex-col gap-8 w-full lg:w-2/3">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4">
            <h1 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center lg:text-left">
              Hodnotenia kurzov
            </h1>
            <div className="arrows flex-row gap-4 justify-center hidden md:flex lg:justify-start">
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
            visibleItems={2} // 1 viditeľná položka na mobiloch
          />
        </div>
        <div className="flex justify-center items-center lg:items-end">
          <img
            src="/images/reviewsCitat.png"
            alt="quote"
            className="w-full sm:w-[200px] lg:w-[300px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Kurzy;
