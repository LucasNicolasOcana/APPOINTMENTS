export interface AppointmentDTO {
  id: number;
  date: Date;
  time: string;
  userId: number;
  status: "active" | "cancelled";
}
