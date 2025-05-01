
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestCard from "@/components/RequestCard";
import { Button } from "@/components/ui/button";
import { requests as initialRequests } from "@/data/requests";
import { cars } from "@/data/cars";
import { Request } from "@/types/request";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { toast } from "sonner";

const AdminDashboard = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  // Load requests from localStorage and merge with mock data
  useEffect(() => {
    try {
      setIsLoading(true);
      
      // Get stored requests from localStorage
      const storedRequestsString = localStorage.getItem("carRentalRequests");
      const storedRequests = storedRequestsString ? JSON.parse(storedRequestsString) : [];
      
      // Process stored requests to ensure they have complete car data
      const processedStoredRequests = storedRequests.map((req: Request) => {
        // If the request has carId but no car object, find the car by ID
        if (req.carId && (!req.car || !req.car.id)) {
          const car = cars.find(c => c.id === req.carId);
          return { ...req, car: car || null };
        }
        return req;
      });
      
      // Combine with initial mock data, ensuring no duplicates by ID
      const combinedRequests = [...initialRequests];
      
      // Add stored requests that aren't already in the mock data
      processedStoredRequests.forEach((storedReq: Request) => {
        if (!combinedRequests.some(mockReq => mockReq.id === storedReq.id)) {
          combinedRequests.push(storedReq);
        }
      });
      
      setRequests(combinedRequests);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading requests:", error);
      setRequests(initialRequests);
      setIsLoading(false);
      toast.error("Failed to load all requests. Showing default data.");
    }
  }, []);
  
  // In a real app, we would check for authentication here
  useEffect(() => {
    // This is just a simulation of checking auth status
    const isAuthenticated = sessionStorage.getItem("isAdminAuthenticated");
    
    // For demo purposes, let's just set this when the component mounts
    sessionStorage.setItem("isAdminAuthenticated", "true");
    
    // In a real app, redirect if not authenticated
    // if (!isAuthenticated) {
    //   navigate("/admin");
    // }
  }, [navigate]);
  
  const handleLogout = () => {
    sessionStorage.removeItem("isAdminAuthenticated");
    navigate("/admin");
  };
  
  const handleStatusChange = (id: string, status: string) => {
    const updatedRequests = requests.map((request) => 
      request.id === id ? { ...request, status: status as "pending" | "approved" | "rejected" } : request
    );
    
    setRequests(updatedRequests);
    
    // Update localStorage with the updated requests
    try {
      localStorage.setItem("carRentalRequests", JSON.stringify(updatedRequests));
      toast.success(`Request ${status === "approved" ? "approved" : "rejected"} successfully`);
    } catch (error) {
      console.error("Error saving updated requests:", error);
      toast.error("Failed to save status change.");
    }
  };
  
  const pendingRequests = requests.filter((req) => req.status === "pending");
  const approvedRequests = requests.filter((req) => req.status === "approved");
  const rejectedRequests = requests.filter((req) => req.status === "rejected");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="bg-rental-navy py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">Admin Dashboard</h1>
                <p className="text-white/80">Manage car rental requests and bookings</p>
              </div>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="mt-4 md:mt-0 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <p className="text-lg text-gray-500">Loading requests...</p>
            </div>
          ) : (
            <Tabs defaultValue="pending" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="pending">
                  Pending Requests <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{pendingRequests.length}</span>
                </TabsTrigger>
                <TabsTrigger value="approved">
                  Approved <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{approvedRequests.length}</span>
                </TabsTrigger>
                <TabsTrigger value="rejected">
                  Rejected <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{rejectedRequests.length}</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="pending">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {pendingRequests.length > 0 ? (
                    pendingRequests.map((request) => (
                      <RequestCard 
                        key={request.id} 
                        request={request} 
                        onStatusChange={handleStatusChange}
                      />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-lg text-gray-500">No pending requests found</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="approved">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {approvedRequests.length > 0 ? (
                    approvedRequests.map((request) => (
                      <RequestCard 
                        key={request.id} 
                        request={request} 
                        onStatusChange={handleStatusChange}
                      />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-lg text-gray-500">No approved requests found</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="rejected">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {rejectedRequests.length > 0 ? (
                    rejectedRequests.map((request) => (
                      <RequestCard 
                        key={request.id} 
                        request={request} 
                        onStatusChange={handleStatusChange}
                      />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-lg text-gray-500">No rejected requests found</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          )}

          <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded-md">
            <h3 className="font-medium text-yellow-800 mb-2">Note for Demo Purpose:</h3>
            <p className="text-yellow-700 text-sm">
              This demo uses browser localStorage for data storage. In a real application, 
              requests would be stored in a database accessible from all devices. 
              To see bookings from other devices, the full application would use a backend service.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
