import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    title: "New Summer Collection",
    subtitle: "Fresh arrivals just for you",
    img: "https://images.unsplash.com/photo-1520975918319-4e27e4b22792?w=1200"
  },
  {
    id: 2,
    title: "Streetwear Essentials",
    subtitle: "Trendy fits at best prices",
    img: "https://images.unsplash.com/photo-1602810318383-e6b5f98c4c84?w=1200"
  },
  {
    id: 3,
    title: "Classic Denim Jackets",
    subtitle: "Timeless fashion pieces",
    img: "https://images.unsplash.com/photo-1551022370-0a06a6a6249e?w=1200"
  }
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[70vh]">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white">
              <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg mb-4">{slide.subtitle}</p>
              <button className="bg-pink-500 px-6 py-3 rounded-lg shadow hover:bg-violet-600">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
