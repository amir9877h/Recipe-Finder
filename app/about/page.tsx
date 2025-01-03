import CookingImage from "../../assets/images/cooking.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Recipe Finder
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the joy of cooking with our curated collection of recipes
            from around the world
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px]">
            <Image
              src={CookingImage} // Make sure to add an appropriate image
              alt="Cooking"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg object-cover shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              We believe that everyone deserves access to delicious, home-cooked
              meals. Our platform is designed to make cooking accessible,
              enjoyable, and inspiring for both beginners and experienced chefs
              alike.
            </p>
            <p className="text-gray-600">
              With Recipe Finder, you can explore thousands of recipes, save
              your favorites, and discover new cooking techniques that will
              transform your culinary journey.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-amber-500 text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-3">Easy Search</h3>
            <p className="text-gray-600">
              Find the perfect recipe with our powerful search and filtering
              system
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-amber-500 text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-3">Mobile Friendly</h3>
            <p className="text-gray-600">
              Access your favorite recipes anywhere, anytime on any device
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-amber-500 text-4xl mb-4">💾</div>
            <h3 className="text-xl font-semibold mb-3">Save Favorites</h3>
            <p className="text-gray-600">
              Create your personal collection of go-to recipes
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re a passionate team of food lovers, developers, and
            designers working together to bring you the best recipe discovery
            experience possible.
          </p>
        </div>
        <div className="text-center mt-5">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Designed with Love By AmirHossein Jahankheir Amlashi
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
