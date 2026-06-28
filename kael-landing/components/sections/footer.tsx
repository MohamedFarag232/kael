"use client"

import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 glow-text">KAEL</h3>
            <p className="text-muted">
              Performance marketing that scales profitably.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#why-kael" className="text-muted hover:text-primary transition-colors">Why KAEL</a></li>
              <li><a href="#services" className="text-muted hover:text-primary transition-colors">Services</a></li>
              <li><a href="#process" className="text-muted hover:text-primary transition-colors">Process</a></li>
              <li><a href="#results" className="text-muted hover:text-primary transition-colors">Results</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted">
                <Mail size={16} />
                <a href="mailto:hello@kael.com" className="hover:text-primary transition-colors">
                  hello@kael.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-muted">
          <p>&copy; {new Date().getFullYear()} KAEL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
