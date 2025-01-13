import { Facebook, Twitter, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zeotap</h3>
            <p>Unleashing the full potential of your customer data</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Solutions</a></li>
              <li><a href="#" className="hover:text-blue-300">Platform</a></li>
              <li><a href="#" className="hover:text-blue-300">Resources</a></li>
              <li><a href="#" className="hover:text-blue-300">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p>Email: info@zeotap.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><Facebook /></a>
              <a href="#" className="hover:text-blue-300"><Twitter /></a>
              <a href="#" className="hover:text-blue-300"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800">
          <div className="flex flex-wrap justify-between items-center">
            <p>&copy; 2024 Zeotap All Rights Reserved</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-blue-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

