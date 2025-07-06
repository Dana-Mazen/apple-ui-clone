import Carousel from "../components/Carousel";

const About = () => {
  return (
    <div className="pt-32 px-4 sm:px-8 lg:px-16">
    <div className="pt-24 px-6">
      <Carousel />
      <div className="max-w-3xl mb-20 mx-auto text-center mt-12">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg text-gray-700">
          At Apple, we don't just build products — we craft experiences. Every pixel, every detail, and every interaction is designed with intention. From the first tap to the final glance, we believe innovation should feel effortless. Welcome to the world of Apple — where technology meets humanity.
        </p>
      </div>
    </div></div>
  );
};

export default About;