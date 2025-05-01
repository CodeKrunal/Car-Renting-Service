
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { cars } from "@/data/cars";
import { Car } from "@/types/car";

const Book = () => {
  const [searchParams] = useSearchParams();
  const carId = searchParams.get("carId");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  
  useEffect(() => {
    if (carId) {
      const car = cars.find((c) => c.id === carId);
      if (car) {
        setSelectedCar(car);
      }
    }
  }, [carId]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="bg-rental-navy py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white mb-2">Book a Car</h1>
            <p className="text-white/80">
              Complete the form below to request your rental
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-rental-navy">Rental Request</h2>
              <BookingForm />
            </div>
            
            <div>
              {selectedCar ? (
                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-rental-navy">Selected Vehicle</h2>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                    <img 
                      src={selectedCar.image} 
                      alt={`${selectedCar.make} ${selectedCar.model}`} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{selectedCar.make} {selectedCar.model}</h3>
                      <p className="text-rental-gray mb-4">{selectedCar.year} • {selectedCar.type}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-lg">${selectedCar.pricePerDay}/day</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-8 lg:mt-16 lg:pl-12">
                  <h2 className="text-2xl font-semibold mb-6 text-rental-navy">Booking Information</h2>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <p className="mb-4">
                      Please fill out the form to request your car rental. Our team will review your request and get back to you promptly.
                    </p>
                    <h3 className="font-medium mb-2">What happens after you submit:</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>We'll review your request and check vehicle availability</li>
                      <li>You'll receive a confirmation email with booking details</li>
                      <li>Complete the payment to secure your reservation</li>
                      <li>Pickup your vehicle at the specified location and time</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Book;
