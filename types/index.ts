export type JobStatus = 'WISHLIST' | 'APPLIED' | 'SCREENING' | 'INTERVIEW' | 'OFFER' | 'REJECTED';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
