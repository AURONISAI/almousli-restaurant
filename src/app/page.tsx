import { redirect } from 'next/navigation';

// For Vercel compatibility, let's try a different approach
// Instead of redirecting, we'll let the middleware handle the routing
export default function RootPage() {
  // This will be handled by the middleware
  return null;
}