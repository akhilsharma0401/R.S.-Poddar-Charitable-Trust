import Footer from "@/components/footer"
import FuneralVanSlider from "@/components/funeral-van-slider"
import { Phone, Clock, MapPin, Heart, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FuneralVanService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Funeral Van Service</h1>
            <p className="text-xl mb-8 opacity-90">Swarg Rath - Providing dignity in difficult times</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full">
                <Clock className="w-5 h-5" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full">
                <Phone className="w-5 h-5" />
                <span>Emergency: +91 9251412412</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Funeral Van Service</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
              <strong>Our Swarg Rath (स्वर्ग रथ)</strong> (Free Dead Body transportation) service has been serving the community of Jaipur since 2020, providing <strong>Free
              Transportation</strong> for the deceased with complete dignity and respect. We understand that losing a loved one
              is one of life's most difficult experiences, and we're here to support families during these challenging
              times.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
              Our service is completely <strong>Free of Charge</strong>  and available <strong>24 hours a day, 7 days a Week</strong>. We believe that
              every person deserves a dignified final journey, regardless of their family's financial situation.
            </p>
            <div className="bg-[#db4637] text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Emergency Contact</h3>
              <p className="text-lg">Call us anytime: +91 9251412412</p>
              <p className="opacity-90">We respond immediately to all requests</p>
            </div>
          </div>
          <div className="relative">
            <FuneralVanSlider />
          </div>
          {/* <div className="relative">
            <Image
              src="/funeral-van.jpg"
              alt="R.S. Poddar Charitable Trust Funeral Van"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div> */}
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Service Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-gray-600">Our service is available round the clock, every day of the year</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Completely Free</h3>
              <p className="text-gray-600">No charges whatsoever - our service to the community</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dignified Service</h3>
              <p className="text-gray-600">Respectful handling with complete dignity and care</p>
            </div>
          </div>
        </div>

        {/* How to Request */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">How to Request Our Service</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#db4637] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">Contact us immediately at +91 9251412412</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#db4637] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Provide Details</h3>
              <p className="text-gray-600">Share the pickup location and destination</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#db4637] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">We Arrive</h3>
              <p className="text-gray-600">Our van will reach you as quickly as possible</p>
            </div>
          </div>
        </div>

        {/* Coverage Area */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Coverage</h2>
          <div className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white p-8 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <h3 className="text-2xl font-semibold">Jaipur & Surrounding Areas</h3>
            </div>
            <p className="text-lg opacity-90">
              We provide Free Dead Body transportation and Rent-Free Medical Equipment across Rajasthan. For any specific arrangements, please feel Free to contact us.
            </p>
          </div>
        </div>
      </div>

     {/* Footer */}
      <Footer/>
    </div>
  )
}
