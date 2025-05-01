
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cars } from "@/data/cars";
import CarCard from "@/components/CarCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const Cars = () => {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    priceRange: "all",
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters: typeof filters) => {
    let results = [...cars];
    
    // Apply search filter
    if (currentFilters.search) {
      const searchTerm = currentFilters.search.toLowerCase();
      results = results.filter(
        (car) => 
          car.make.toLowerCase().includes(searchTerm) ||
          car.model.toLowerCase().includes(searchTerm) ||
          `${car.make} ${car.model}`.toLowerCase().includes(searchTerm)
      );
    }
    
    // Apply type filter
    if (currentFilters.type && currentFilters.type !== "all") {
      results = results.filter((car) => car.type === currentFilters.type);
    }
    
    // Apply price filter
    if (currentFilters.priceRange && currentFilters.priceRange !== "all") {
      const [min, max] = currentFilters.priceRange.split("-").map(Number);
      results = results.filter((car) => car.pricePerDay >= min && car.pricePerDay <= max);
    }
    
    setFilteredCars(results);
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      type: "all",
      priceRange: "all",
    });
    setFilteredCars(cars);
  };
  
  // Get unique car types
  const carTypes = Array.from(new Set(cars.map((car) => car.type)));
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-16 flex-grow">
        {/* Page Header */}
        <div className="bg-rental-navy py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white mb-2">Our Car Fleet</h1>
            <p className="text-white/80">
              Browse our selection of quality vehicles for your next journey
            </p>
          </div>
        </div>
        
        {/* Filters and Cars */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
                <h3 className="text-xl font-semibold mb-6 text-rental-navy">Filters</h3>
                
                {/* Search */}
                <div className="mb-6">
                  <Label htmlFor="search" className="block mb-2">Search</Label>
                  <div className="relative">
                    <Input
                      id="search"
                      placeholder="Search cars..."
                      value={filters.search}
                      onChange={(e) => handleFilterChange("search", e.target.value)}
                      className="pl-10"
                    />
                    <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                
                {/* Car Type */}
                <div className="mb-6">
                  <Label htmlFor="type" className="block mb-2">Car Type</Label>
                  <Select
                    value={filters.type}
                    onValueChange={(value) => handleFilterChange("type", value)}
                  >
                    <SelectTrigger id="type" className="w-full">
                      <SelectValue placeholder="Select car type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {carTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <Label htmlFor="price" className="block mb-2">Price Range</Label>
                  <Select
                    value={filters.priceRange}
                    onValueChange={(value) => handleFilterChange("priceRange", value)}
                  >
                    <SelectTrigger id="price" className="w-full">
                      <SelectValue placeholder="Select price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Price</SelectItem>
                      <SelectItem value="0-50">$0 - $50 per day</SelectItem>
                      <SelectItem value="50-100">$50 - $100 per day</SelectItem>
                      <SelectItem value="100-200">$100+ per day</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="w-full border-rental-navy text-rental-navy hover:bg-rental-navy hover:text-white"
                >
                  Reset Filters
                </Button>
              </div>
            </div>
            
            {/* Car Grid */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-rental-gray">
                  Showing {filteredCars.length} of {cars.length} cars
                </p>
              </div>
              
              {filteredCars.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCars.map((car) => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium text-rental-navy mb-2">No cars found</h3>
                  <p className="text-rental-gray mb-6">
                    Try adjusting your filters to find more options
                  </p>
                  <Button onClick={resetFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cars;
