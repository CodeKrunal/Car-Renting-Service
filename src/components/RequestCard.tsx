
import { Request } from "@/types/request";
import { Button } from "@/components/ui/button";
import { Calendar, Car, Mail, Phone, User } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import { useState } from "react";

interface RequestCardProps {
  request: Request;
  onStatusChange: (id: string, status: string) => void;
}

const RequestCard = ({ request, onStatusChange }: RequestCardProps) => {
  const [loading, setLoading] = useState(false);

  const handleStatusChange = (status: string) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onStatusChange(request.id, status);
      toast.success(`Request ${status === "approved" ? "approved" : "rejected"}`);
      setLoading(false);
    }, 500);
  };

  // Handle formatting and display of car information, accounting for possible null values
  const carInfo = request.car 
    ? `${request.car.make} ${request.car.model} (${request.car.year})`
    : request.carId 
      ? `Car ID: ${request.carId}`
      : "Car information unavailable";

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
      <div className={`px-4 py-2 ${
        request.status === "pending" ? "bg-yellow-100" : 
        request.status === "approved" ? "bg-green-100" : "bg-red-100"
      }`}>
        <span className="font-medium capitalize">{request.status}</span>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-4">
          <User className="h-5 w-5 text-rental-navy mr-2" />
          <h3 className="font-medium text-lg">{request.fullName}</h3>
        </div>
        
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center">
            <Mail className="h-4 w-4 text-rental-gray mr-2" />
            <span>{request.email}</span>
          </div>
          
          <div className="flex items-center">
            <Phone className="h-4 w-4 text-rental-gray mr-2" />
            <span>{request.phone}</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center">
            <Car className="h-4 w-4 text-rental-gray mr-2" />
            <span>{carInfo}</span>
          </div>
          
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-rental-gray mr-2" />
            <span>
              {format(new Date(request.pickupDate), "MMM dd, yyyy")} - {format(new Date(request.returnDate), "MMM dd, yyyy")}
            </span>
          </div>
        </div>

        {request.additionalRequests && (
          <div className="bg-gray-50 p-3 rounded-md mb-4 text-sm">
            <p className="font-medium mb-1">Additional Requests:</p>
            <p className="text-gray-600">{request.additionalRequests}</p>
          </div>
        )}
        
        {request.status === "pending" && (
          <div className="flex space-x-2 mt-4">
            <Button 
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={() => handleStatusChange("approved")}
              disabled={loading}
            >
              Approve
            </Button>
            <Button 
              className="flex-1 bg-red-600 hover:bg-red-700"
              onClick={() => handleStatusChange("rejected")}
              disabled={loading}
            >
              Reject
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestCard;
