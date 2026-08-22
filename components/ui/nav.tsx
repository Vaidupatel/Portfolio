"use client";

import { useState, useEffect } from 'react';
import { Logo } from './logo';
import { Button } from './button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className={`sticky top-0 w-full h-[72px] flex items-center transition-all duration-200 z-50 ${
      scrolled 
        ? 'bg-canvas/95 backdrop-blur-md border-b border-hairline shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 flex items-center justify-between">
        <Logo variant="dark" />

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-[15px] font-medium transition-colors duration-150 ${
                  isActive ? 'text-accent font-semibold' : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button variant="primary" href="/contact">Let&apos;s talk</Button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="block md:hidden text-ink-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Links Overlay */}
      {isOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-canvas border-b border-hairline flex flex-col p-6 gap-5 md:hidden z-40 animate-fade-in">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-ink-900 border-b border-hairline pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" href="/contact" onClick={() => setIsOpen(false)} className="w-full mt-2">
            Let&apos;s talk
          </Button>
        </div>
      )}
    </header>
  );
}
