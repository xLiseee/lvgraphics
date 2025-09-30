import { Metadata } from 'next';
import ErrorMain from '@/pages/error/error-main'
 
export const metadata: Metadata = {
  title: "404 Not Found",
};

export default function NotFound() {
  return (
    <ErrorMain/>
  )
}