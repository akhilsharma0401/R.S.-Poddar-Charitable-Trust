"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openServices, setOpenServices] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white py-2 px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm gap-2 md:gap-0">

          {/* Left side (phone + email) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-2 order-2 md:order-1">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-xs sm:text-sm">
                +91 9251412412 | +91 7403330888
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-xs sm:text-sm">info@healthsquare.in</span>
            </div>
          </div>

          {/* Right side (hidden on small, shown below sm) */}
          <div className="text-left md:text-right text-xs sm:text-sm order-1 md:order-2">
            <span>Free Funeral Van Service & Medical Equipment Since 2020</span>
          </div>
        </div>
      </div>


      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            {/* <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">RS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">R.S. Poddar Charitable Trust</h1>
                <p className="text-sm text-gray-600">Free Funeral & Medical Services</p>
              </div>
            </Link> */}
            <Link
              href="/"
              aria-label="R.S. Poddar Charitable Trust — Home"
              className="flex items-center"
            >
              <Image
                src="/RSPODDAR.png"
                alt="R.S. Poddar Charitable Trust Logo"
                width={160}
                height={56}
                priority
                sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
                className="object-contain h-auto w-[120px] sm:w-[140px] md:w-[200px]"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#db4637] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#db4637] transition-colors">
                About
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-[#db4637] transition-colors flex items-center">
                  Rent-free Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      href="/services/funeral-van"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#db4637]"
                    >
                      Funeral Van Service
                    </Link>
                    <Link
                      href="/services/medical-equipment"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#db4637]"
                    >
                      Medical Equipment
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="text-gray-700 hover:text-[#db4637] transition-colors">
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-[#db4637] text-white px-6 py-2 rounded-full hover:bg-[#c23e2f] transition-colors"
              >
                Get Free Help
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-[#db4637] transition-colors"
                  onClick={() => setIsMenuOpen(false)}  // 👈 closes menu
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-gray-700 hover:text-[#db4637] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>

                {/* Dropdown Button */}
                <button
                  onClick={() => setOpenServices(!openServices)}
                  className="flex items-center gap-2 text-gray-700 hover:text-[#db4637] transition-colors"
                >
                  <span>Rent-free Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-200 ${openServices ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Dropdown Links */}
                {openServices && (
                  <div className="flex flex-col space-y-2 pl-4">
                    <Link
                      href="/services/funeral-van"
                      className="text-gray-700 hover:text-[#db4637] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Funeral Van Service
                    </Link>
                    <Link
                      href="/services/medical-equipment"
                      className="text-gray-700 hover:text-[#db4637] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Medical Equipment
                    </Link>
                  </div>
                )}

                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-[#db4637] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  href="/contact"
                  className="bg-[#db4637] text-white px-6 py-2 rounded-full hover:bg-[#c23e2f] transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Free Help
                </Link>
              </div>
            </div>
          )}

        </div>
      </nav>
    </>
  )
}
