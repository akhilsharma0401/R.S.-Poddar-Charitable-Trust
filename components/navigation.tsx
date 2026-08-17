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
      <div className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white py-2 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row lg:justify-between lg:items-center text-sm gap-1.5 lg:gap-4">

          {/* Left side (phone + email) */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-1 gap-1.5 order-2 lg:order-1">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="text-[11px] sm:text-sm leading-tight">
                <a href="tel:+919251412412" className="hover:underline">+91 9251412412</a>
                <span className="mx-1">|</span>
                <a href="tel:+917403330888" className="hover:underline">+91 7403330888</a>
              </span>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <a
                href="mailto:info@healthsquare.in"
                className="text-[11px] sm:text-sm leading-tight truncate hover:underline"
              >
                info@healthsquare.in
              </a>
            </div>
          </div>

          {/* Right side tagline */}
          <div className="text-left lg:text-right text-[11px] sm:text-sm leading-tight order-1 lg:order-2">
            <span>Free Funeral Van Service &amp; Medical Equipment Since 2020</span>
          </div>
        </div>
      </div>


      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-3 h-16 sm:h-18 md:h-20">
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
              className="flex items-center shrink-0"
            >
              <Image
                src="/RSPODDAR.png"
                alt="R.S. Poddar Charitable Trust Logo"
                width={200}
                height={70}
                priority
                sizes="(max-width: 480px) 110px, (max-width: 640px) 130px, (max-width: 1024px) 160px, 200px"
                className="object-contain h-auto w-[110px] xs:w-[130px] sm:w-[160px] lg:w-[180px] xl:w-[200px]"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-x-4 xl:gap-x-6">
              <Link href="/" className="whitespace-nowrap text-sm xl:text-base text-gray-700 font-bold hover:text-[#db4637] transition-colors">
                Home
              </Link>
              <Link href="/about" className="whitespace-nowrap text-sm xl:text-base text-gray-700 font-bold hover:text-[#db4637] transition-colors">
                About
              </Link>
              <Link href="/funeral-van" className="whitespace-nowrap text-sm xl:text-base text-gray-700 font-bold hover:text-[#db4637] transition-colors">
                Funeral Van Service
              </Link>
              <Link href="/medical-equipment" className="whitespace-nowrap text-sm xl:text-base text-gray-700 font-bold hover:text-[#db4637] transition-colors">
                Medical Equipment
              </Link>
              {/* <div className="relative group">
                <button className="text-gray-700 hover:text-[#db4637] font-bold transition-colors flex items-center">
                  Rent-free Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      href="/services/funeral-van"
                      className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-50 hover:text-[#db4637]"
                    >
                      Funeral Van Service
                    </Link>
                    <Link
                      href="/services/medical-equipment"
                      className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-50 hover:text-[#db4637]"
                    >
                      Medical Equipment
                    </Link>
                  </div>
                </div>
              </div> */}
              <Link href="/contact" className="whitespace-nowrap text-sm xl:text-base text-gray-700 font-bold hover:text-[#db4637] transition-colors">
                Contact
              </Link>
              <Link
                href="/contact"
                className="whitespace-nowrap bg-[#db4637] text-white text-sm xl:text-base px-4 xl:px-6 py-2 font-bold rounded-full hover:bg-[#c23e2f] transition-colors"
              >
                Get Free Help
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden py-4 border-t max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain"
            >
              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className="block rounded-md px-2 py-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-[#db4637] transition-colors"
                  onClick={() => setIsMenuOpen(false)}  // 👈 closes menu
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="block rounded-md px-2 py-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-[#db4637] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>

                <Link
                  href="/funeral-van"
                  className="block rounded-md px-2 py-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-[#db4637] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Funeral Van Service
                </Link>

                <Link
                  href="/medical-equipment"
                  className="block rounded-md px-2 py-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-[#db4637] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                    Medical Equipment
                </Link>

                {/* Dropdown Button */}
                {/* <button
                  onClick={() => setOpenServices(!openServices)}
                  className="flex items-center gap-2 text-gray-700 hover:text-[#db4637] transition-colors"
                >
                  <span>Rent-free Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-200 ${openServices ? "rotate-180" : ""
                      }`}
                  />
                </button> */}

                {/* Dropdown Links */}
                {/* {openServices && (
                  <div className="flex flex-col space-y-2 pl-4">
                    <Link
                      href="/services/funeral-van"
                      className="block rounded-md px-2 py-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-[#db4637] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Funeral Van Service
                    </Link>
                    <Link
                      href="/services/medical-equipment"
                      className="block rounded-md px-2 py-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-[#db4637] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Medical Equipment
                    </Link>
                  </div>
                )} */}

                <Link
                  href="/contact"
                  className="block rounded-md px-2 py-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-[#db4637] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  href="/contact"
                  className="mt-2 block bg-[#db4637] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c23e2f] transition-colors text-center"
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
