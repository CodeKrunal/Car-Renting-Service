
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const BookingConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-50 p-8 flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-green-700 mb-2">Booking Request Successful!</h1>
              <p className="text-green-600 text-lg">
                Your car rental request has been submitted.
              </p>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-rental-navy">What happens next?</h2>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-rental-navy text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
                    <span>Our team will review your booking request.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-rental-navy text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
                    <span>You will receive a confirmation email with the booking details.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-rental-navy text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
                    <span>Once confirmed, you can pick up your vehicle at the specified location and time.</span>
                  </li>
                </ol>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <p className="mb-2">If you have any questions or need to modify your booking:</p>
                <p className="font-semibold">Call us: 555-123-4567</p>
                <p className="font-semibold">Email: bookings@Krunalcars.com</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline" className="w-full sm:w-auto border-rental-navy text-rental-navy hover:bg-rental-navy hover:text-white">
                    Return to Home
                  </Button>
                </Link>
                <Link to="/cars">
                  <Button className="w-full sm:w-auto bg-rental-navy hover:bg-blue-800">
                    Browse More Cars
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

export default BookingConfirmation;
