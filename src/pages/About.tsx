
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Award, Car } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="bg-rental-navy py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white mb-2">About Us</h1>
            <p className="text-white/80">
              Learn about Krunal Car Rental Services and our mission
            </p>
          </div>
        </div>
        
        {/* Company Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-rental-navy">Our Story</h2>
                <p className="text-rental-gray mb-6">
                  Founded in 2010, Krunal Car Rental Services began with a simple mission: to provide reliable, 
                  affordable, and hassle-free car rental services to travelers and locals alike. What started 
                  as a small fleet of just five vehicles has now grown into one of the most trusted car rental 
                  services in the region.
                </p>
                <p className="text-rental-gray mb-6">
                  Our founder, Mr. Krunal Patel, believed that everyone deserves access to quality transportation 
                  without the premium price tag. This belief continues to drive our business today as we expand 
                  our fleet and services while maintaining our commitment to excellent customer service.
                </p>
                <p className="text-rental-gray">
                  Today, we take pride in offering a diverse range of vehicles to meet various needs and preferences, 
                  from compact cars for city exploration to luxurious models for special occasions.
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Car on road" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border border-gray-100 max-w-xs">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-rental-navy mr-4" />
                    <div>
                      <h3 className="font-bold text-lg">5000+</h3>
                      <p className="text-sm text-rental-gray">Happy Customers</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-8 w-8 text-rental-navy mr-4" />
                    <div>
                      <h3 className="font-bold text-lg">100+</h3>
                      <p className="text-sm text-rental-gray">Premium Vehicles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-rental-navy">Our Values</h2>
              <p className="text-lg text-rental-gray max-w-3xl mx-auto">
                At Krunal Car Rental, we are guided by core values that define how we operate and serve our customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-rental-navy/10 p-4 rounded-full inline-block mb-4">
                  <CheckCircle className="h-8 w-8 text-rental-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-rental-navy">Reliability</h3>
                <p className="text-rental-gray">
                  We understand the importance of dependable transportation. Our regularly maintained vehicles 
                  and punctual service ensure you can count on us for your travel needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-rental-navy/10 p-4 rounded-full inline-block mb-4">
                  <Users className="h-8 w-8 text-rental-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-rental-navy">Customer Focus</h3>
                <p className="text-rental-gray">
                  Your satisfaction drives our business. We go above and beyond to understand and meet your 
                  needs with personalized service and flexible options.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-rental-navy/10 p-4 rounded-full inline-block mb-4">
                  <Award className="h-8 w-8 text-rental-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-rental-navy">Quality</h3>
                <p className="text-rental-gray">
                  We never compromise on quality. From our vehicle selection to our customer service, we strive 
                  for excellence in every aspect of our business.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-rental-navy">Our Team</h2>
              <p className="text-lg text-rental-gray max-w-3xl mx-auto">
                Meet the dedicated professionals who make Krunal Car Rental Services exceptional.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="relative mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                    alt="Krunal Patel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-rental-navy mb-1">Krunal Patel</h3>
                <p className="text-sm text-rental-gray">Founder & CEO</p>
              </div>
              
              <div className="text-center">
                <div className="relative mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                    alt="Priya Sharma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-rental-navy mb-1">Priya Sharma</h3>
                <p className="text-sm text-rental-gray">Operations Manager</p>
              </div>
              
              <div className="text-center">
                <div className="relative mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                    alt="Raj Mehta" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-rental-navy mb-1">Raj Mehta</h3>
                <p className="text-sm text-rental-gray">Fleet Manager</p>
              </div>
              
              <div className="text-center">
                <div className="relative mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                    alt="Neha Singh" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-rental-navy mb-1">Neha Singh</h3>
                <p className="text-sm text-rental-gray">Customer Relations</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-rental-navy text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Service?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Krunal Car Rental Services for their transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/cars">
                <Button size="lg" className="bg-white text-rental-navy hover:bg-gray-100">
                  Browse Our Fleet
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
