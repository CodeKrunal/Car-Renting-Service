
import { Button } from "@/components/ui/button";
import { cars } from "@/data/cars";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { Link } from "react-router-dom";
import { Car, Calendar, CheckCircle } from "lucide-react";

const Index = () => {
  // Show only 3 featured cars on homepage
  const featuredCars = cars.slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 pt-16 h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Journey Begins with Our Premium Cars
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Experience the freedom of the road with our diverse fleet of reliable vehicles at affordable rates.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/cars">
                <Button size="lg" className="bg-rental-red hover:bg-red-700 text-white">
                  Browse Cars
                </Button>
              </Link>
              <Link to="/book">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-rental-navy">
            Why Choose Krunal Car Rental?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-rental-navy/10 p-4 rounded-full mb-4">
                <Car className="h-10 w-10 text-rental-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-rental-navy">Premium Fleet</h3>
              <p className="text-rental-gray">
                Our diverse selection of well-maintained vehicles ensures you'll find the perfect car for any occasion.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-rental-navy/10 p-4 rounded-full mb-4">
                <CheckCircle className="h-10 w-10 text-rental-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-rental-navy">Simple Booking</h3>
              <p className="text-rental-gray">
                Our streamlined booking process makes it quick and easy to reserve your vehicle with just a few clicks.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-rental-navy/10 p-4 rounded-full mb-4">
                <Calendar className="h-10 w-10 text-rental-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-rental-navy">Flexible Rental Periods</h3>
              <p className="text-rental-gray">
                From single-day rentals to extended periods, we offer flexible options to suit your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Cars Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-rental-navy">Featured Vehicles</h2>
            <Link to="/cars">
              <Button variant="outline" className="border-rental-navy text-rental-navy hover:bg-rental-navy hover:text-white">
                View All Cars
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-rental-navy">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "I was amazed by the quality of service. The car was in perfect condition, and the booking process was incredibly smooth. Will definitely use Krunal again!"
              </p>
              <p className="font-semibold">- Michael J.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The customer service was exceptional. When I needed to extend my rental period, they accommodated my request without any hassle. Highly recommend!"
              </p>
              <p className="font-semibold">- Sarah L.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "I've rented from several companies before, but Krunal offers the best value for money. Clean cars, transparent pricing, and friendly staff. Will be back!"
              </p>
              <p className="font-semibold">- David T.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-rental-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Hit the Road?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Reserve your vehicle today and experience the premium service that makes Krunal Car Rental the top choice for travelers.
          </p>
          <Link to="/book">
            <Button size="lg" className="bg-rental-red hover:bg-red-700">
              Book Your Car Now
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
