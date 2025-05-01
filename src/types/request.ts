
import { Car } from "./car";

export interface Request {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  additionalRequests?: string;
  status: "pending" | "approved" | "rejected";
  car: Car | null;
  carId?: string;
  createdAt: string;
}
