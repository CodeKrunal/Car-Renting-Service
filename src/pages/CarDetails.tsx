
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cars } from "@/data/cars";
import { Car as CarIcon, Calendar, MapPin, Users, Fuel, CheckCircle2 } from "lucide-react";

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);
  
  if (!car) {
    return (
      <div>
        <Navbar />
        <div className="pt-24 pb-12 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Car Not Found</h1>
          <p className="mb-8">The car you're looking for doesn't exist or has been removed.</p>
          <Link to="/cars">
            <Button>Back to Cars</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="bg-rental-navy py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{car.make} {car.model}</h1>
                <p className="text-white/80">{car.year} • {car.type}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-white text-rental-navy px-4 py-2 rounded-lg font-semibold text-lg">
                  ${car.pricePerDay}/day
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Car Image */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={car.image} 
                  alt={`${car.make} ${car.model}`} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Car Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-rental-navy">Description</h2>
                <p className="text-rental-gray">{car.description}</p>
              </div>
              
              {/* Car Specifications */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-rental-navy">Specifications</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="flex items-center">
                    <CarIcon className="h-5 w-5 text-rental-navy mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Type</p>
                      <p className="font-medium">{car.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-rental-navy mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Year</p>
                      <p className="font-medium">{car.year}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-rental-navy mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{car.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-rental-navy mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Seats</p>
                      <p className="font-medium">{car.seats}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <CarIcon className="h-5 w-5 text-rental-navy mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Transmission</p>
                      <p className="font-medium">{car.transmission}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Fuel className="h-5 w-5 text-rental-navy mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Fuel Type</p>
                      <p className="font-medium">{car.fuelType}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Car Features */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-rental-navy">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-rental-navy mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4 text-rental-navy">Book This Car</h3>
                
                <div className="border-t border-b border-gray-200 py-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-rental-gray">Daily Rate:</span>
                    <span className="font-medium">${car.pricePerDay}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-rental-gray mb-4">
                    Reserve this {car.make} {car.model} today and enjoy a premium driving experience. Quick and easy booking process.
                  </p>
                  
                  <ul className="mb-6">
                    <li className="flex items-center mb-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Free cancellation up to 24h before pickup</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">No hidden fees</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">24/7 customer support</span>
                    </li>
                  </ul>
                </div>
                
                <Link to={`/book?carId=${car.id}`}>
                  <Button className="w-full bg-rental-navy hover:bg-blue-800 py-6">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CarDetails;
