import Footer from "@/components/footer"
import FuneralVanSlider from "@/components/funeral-van-slider"
import { Phone, Clock, MapPin, Heart, Shield } from "lucide-react"

export const metadata = {
  title: "Free Funeral Van Service Jaipur | Swarg Rath 24/7",
  description:
    "Free funeral van & dead body transportation in Jaipur. Swarg Rath shav vahan available 24/7 at no cost, with dignity and care. Call 9251412412 now.",
  openGraph: {
    title: "Free Funeral Van Service Jaipur | Swarg Rath 24/7",
    description:
      "Free funeral van & dead body transportation in Jaipur. Swarg Rath shav vahan available 24/7 at no cost, with dignity and care. Call 9251412412 now.",
    url: "https://www.rspoddar.org/funeral-van",
  },
 
  alternates: {
    canonical: "https://www.rspoddar.org/funeral-van",
  },
}

export default function FuneralVanService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Free Funeral Van Service</h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">Swarg Rath - Providing dignity in difficult times</p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <div className="flex items-center justify-center gap-2 bg-white/20 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>24/7 Available</span>
              </div>
              <a href="tel:+919251412412" className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Emergency: +91 9251412412</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-16">
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">About Our Funeral Van Service</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-5 sm:mb-6 leading-relaxed text-justify">
              <strong>Our Swarg Rath (स्वर्ग रथ)</strong> (Free Dead Body transportation) service has been serving the community of Jaipur since 2020, providing <strong>Free
              Transportation</strong> for the deceased with complete dignity and respect. We understand that losing a loved one
              is one of life's most difficult experiences, and we're here to support families during these challenging
              times.
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-5 sm:mb-6 leading-relaxed text-justify">
              Our service is completely <strong>Free of Charge</strong>  and available <strong>24 hours a day, 7 days a Week</strong>. We believe that
              every person deserves a dignified final journey, regardless of their family's financial situation.
            </p>
            <div className="bg-[#db4637] text-white p-5 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Emergency Contact</h3>
              <p className="text-base sm:text-lg">Call us anytime: <a href="tel:+919251412412" className="underline underline-offset-2">+91 9251412412</a></p>
              <p className="opacity-90">We respond immediately to all requests</p>
            </div>
          </div>
          <div className="relative w-full min-w-0">
            <FuneralVanSlider />
          </div>
        </div>

        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Service Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center p-5 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-sm sm:text-base text-gray-600">Our service is available round the clock, every day of the year</p>
            </div>
            <div className="text-center p-5 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Completely Free</h3>
              <p className="text-sm sm:text-base text-gray-600">No charges whatsoever - our service to the community</p>
            </div>
            <div className="text-center p-5 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Dignified Service</h3>
              <p className="text-sm sm:text-base text-gray-600">Respectful handling with complete dignity and care</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-5 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">How to Request Our Service</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#db4637] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-sm sm:text-base text-gray-600">Contact us immediately at +91 9251412412</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#db4637] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Provide Details</h3>
              <p className="text-sm sm:text-base text-gray-600">Share the pickup location and destination</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#db4637] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">We Arrive</h3>
              <p className="text-sm sm:text-base text-gray-600">Our van will reach you as quickly as possible</p>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Service Coverage</h2>
          <div className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white p-5 sm:p-8 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Jaipur &amp; Surrounding Areas</h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg opacity-90">
              We provide Free Dead Body transportation and Rent-Free Medical Equipment across Rajasthan. For any specific arrangements, please feel Free to contact us.
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
