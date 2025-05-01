
import { Request } from "@/types/request";
import { cars } from "./cars";

export const requests: Request[] = [
  {
    id: "1",
    fullName: "John Smith",
    email: "john.smith@example.com",
    phone: "555-123-4567",
    pickupDate: "2025-04-10T10:00:00Z",
    returnDate: "2025-04-15T10:00:00Z",
    pickupLocation: "Airport Terminal",
    status: "pending",
    car: cars[0],
    createdAt: "2025-04-05T14:30:00Z"
  },
  {
    id: "2",
    fullName: "Alice Johnson",
    email: "alice.j@example.com",
    phone: "555-234-5678",
    pickupDate: "2025-04-12T12:00:00Z",
    returnDate: "2025-04-16T18:00:00Z",
    pickupLocation: "Downtown Office",
    additionalRequests: "I need a child seat for a 3-year-old.",
    status: "approved",
    car: cars[1],
    createdAt: "2025-04-06T09:15:00Z"
  },
  {
    id: "3",
    fullName: "Robert Chen",
    email: "robert.c@example.com",
    phone: "555-345-6789",
    pickupDate: "2025-04-15T09:00:00Z",
    returnDate: "2025-04-18T09:00:00Z",
    pickupLocation: "Hotel Pickup",
    status: "pending",
    car: cars[3],
    createdAt: "2025-04-07T16:45:00Z"
  },
  {
    id: "4",
    fullName: "Maria Garcia",
    email: "maria.g@example.com",
    phone: "555-456-7890",
    pickupDate: "2025-04-20T11:00:00Z",
    returnDate: "2025-04-25T16:00:00Z",
    pickupLocation: "Main Office",
    additionalRequests: "Looking for unlimited mileage option.",
    status: "rejected",
    car: cars[2],
    createdAt: "2025-04-08T10:30:00Z"
  }
];
