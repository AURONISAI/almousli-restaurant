import { redirect } from 'next/navigation';

export default function RootNotFound() {
  // Redirect to default locale when accessing root
  redirect('/ar');
}
