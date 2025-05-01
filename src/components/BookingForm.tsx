
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { cars } from "@/data/cars";

const EMAIL_DOMAIN_WHITELIST = ['gmail.com', 'yahoo.com', 'outlook.com'];
const PHONE_COUNTRY_CODE = '+91'; // Indian country code

const formSchema = z.object({
  fullName: z.string()
    .min(3, { message: "Full name must be at least 3 characters." })
    .max(50, { message: "Full name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z\s]+$/, { message: "Full name can only contain letters and spaces." }),
  email: z.string()
    .email({ message: "Please enter a valid email address." })
    .refine(
      (email) => EMAIL_DOMAIN_WHITELIST.some((domain) => email.endsWith(domain)),
      { message: "Please use a valid email domain." }
    ),
  phone: z.string()
    .regex(/^\d{10}$/, { message: "Phone number must be 10 digits." }),
  pickupDate: z.date({
    required_error: "Pickup date is required.",
  }),
  returnDate: z.date({
    required_error: "Return date is required.",
  }),
  pickupLocation: z.string()
    .min(10, { message: "Pickup location must be detailed." })
    .max(100, { message: "Pickup location is too long." }),
  additionalRequests: z.string().optional(),
}).refine(data => data.returnDate > data.pickupDate, {
  message: "Return date must be after pickup date.",
  path: ["returnDate"],
});

const BookingForm = () => {
  const [searchParams] = useSearchParams();
  const carId = searchParams.get("carId");
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      pickupLocation: "",
      additionalRequests: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const selectedCar = carId ? cars.find(car => car.id === carId) : null;
    
    const newRequest = {
      id: uuidv4(),
      fullName: values.fullName,
      email: values.email,
      phone: `${PHONE_COUNTRY_CODE}${values.phone}`,
      pickupDate: values.pickupDate.toISOString(),
      returnDate: values.returnDate.toISOString(),
      pickupLocation: values.pickupLocation,
      additionalRequests: values.additionalRequests,
      status: "pending",
      car: selectedCar || null,
      carId: carId || undefined,
      createdAt: new Date().toISOString(),
      source: window.location.origin // Track booking source
    };
    
    try {
      const existingRequestsString = localStorage.getItem("carRentalRequests");
      const existingRequests = existingRequestsString ? JSON.parse(existingRequestsString) : [];
      
      // Prevent duplicate bookings within 24 hours
      const recentBookings = existingRequests.filter(
        (req: any) => new Date(req.createdAt) > new Date(Date.now() - 24 * 60 * 60 * 1000)
      );

      if (recentBookings.length >= 3) {
        toast.error("Too many booking requests. Please try again later.");
        return;
      }
      
      const updatedRequests = [...existingRequests, newRequest];
      
      localStorage.setItem("carRentalRequests", JSON.stringify(updatedRequests));
      
      console.log("Booking request saved:", newRequest);
      
      toast.success("Booking request submitted successfully!");
      navigate("/booking-confirmation");
    } catch (error) {
      console.error("Error saving booking request:", error);
      toast.error("Failed to save booking request. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Krunalmer5127@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="9157063570" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="pickupDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Pickup Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Select date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="returnDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Return Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Select date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => 
                        date < new Date() || 
                        (form.getValues().pickupDate && date < form.getValues().pickupDate)
                      }
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="pickupLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pickup Location</FormLabel>
              <FormControl>
                <Input placeholder="Amardham society, punagam, surat, Gujarat" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="additionalRequests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Requests (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Any special requests or requirements?" 
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full bg-rental-navy hover:bg-blue-800 text-lg py-6">
          Submit Booking Request
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
