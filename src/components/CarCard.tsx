
import { Button } from "@/components/ui/button";
import { Car } from "@/types/car";
import { Calendar, MapPin, Car as CarIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="car-card bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
      <div className="relative h-48">
        <img 
          src={car.image} 
          alt={`${car.make} ${car.model}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-rental-navy text-white px-2 py-1 text-xs font-semibold rounded">
          ${car.pricePerDay}/day
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-rental-navy mb-1">{car.make} {car.model}</h3>
        <div className="text-sm text-rental-gray mb-3">{car.year} • {car.transmission}</div>
        
        <div className="flex items-center text-sm mb-2">
          <CarIcon className="h-4 w-4 text-rental-gray mr-2" />
          <span>{car.type}</span>
        </div>
        
        <div className="flex items-center text-sm mb-2">
          <MapPin className="h-4 w-4 text-rental-gray mr-2" />
          <span>{car.location}</span>
        </div>
        
        <div className="flex items-center text-sm mb-4">
          <Calendar className="h-4 w-4 text-rental-gray mr-2" />
          <span>Available Now</span>
        </div>
        
        <div className="flex space-x-2">
          <Link to={`/book?carId=${car.id}`} className="flex-1">
            <Button className="w-full bg-rental-navy hover:bg-blue-800">Book Now</Button>
          </Link>
          <Link to={`/cars/${car.id}`} className="flex-1">
            <Button variant="outline" className="w-full border-rental-navy text-rental-navy hover:bg-rental-navy hover:text-white">
              Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
