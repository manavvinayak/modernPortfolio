"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export function MobileMenu({ activeSection, scrollToSection }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="mobile-menu-container md:hidden">
      <button 
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-slate-800 dark:text-slate-200" />
        ) : (
          <Menu className="h-6 w-6 text-slate-800 dark:text-slate-200" />
        )}
      </button>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transform transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`absolute right-0 top-0 h-screen w-64 bg-white dark:bg-slate-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-200">Menu</h2>
            <button 
              onClick={toggleMenu} 
              className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="h-5 w-5 text-slate-800 dark:text-slate-200" />
            </button>
          </div>
          <div className="py-4">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`w-full text-left px-6 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 ${
                  activeSection === item.toLowerCase() ? "font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white border-l-4 border-slate-800 dark:border-slate-200" : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}