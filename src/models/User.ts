
export interface User {
  id: number;
  name: string;
  phone: string;
  address: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  dateOfBirth: string; // ISO date string (YYYY-MM-DD)
  role: 'PATIENT' | 'DOCTOR' | 'ADMIN';
}