import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">We're here to help you 24/7</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
                  <p className="text-gray-700 mb-1">+91 9251412412</p>
                  <p className="text-sm text-gray-600">Available 24/7 for funeral van service</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-700 mb-1">info@healthsquare.in</p>
                  <p className="text-sm text-gray-600">For general inquiries and equipment requests</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700 mb-1">22, Ground Floor, Biswa Nagar, New Sanganer Road, Opp. Metro Pillar No. 75, Jaipur, Rajasthan, India – 302019</p>
                  <p className="text-sm text-gray-600">Serving Jaipur and surrounding areas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Hours</h3>
                  <p className="text-gray-700 mb-1">24/7 Emergency Services</p>
                  <p className="text-sm text-gray-600">Funeral van available anytime</p>
                  {/* <p className="text-gray-700 mb-1">9:00 AM - 6:00 PM</p> */}
                  <p className="text-sm text-gray-600">Medical equipment requests</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="space-y-6">
            <Card className="border-2 border-[#db4637]/20">
              <CardHeader>
                <CardTitle className="text-xl text-[#db4637]">Funeral Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Need immediate funeral van service? Call us right away. Our Swarg Rath service is available 24/7.
                </p>
                <a href="tel:+919251412412" className="mb-2">

                <Button className="w-full bg-[#db4637] hover:bg-[#c23e2f] text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: +91 9251412412
                </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#453066]/20">
              <CardHeader>
                <CardTitle className="text-xl text-[#453066]">Medical Equipment Request</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Need medical equipment? Contact us to check availability and arrange delivery.
                </p>
                <div className="space-y-2">

                <div className="space-y-2 gap-2">
                  <a href="tel:+919251412412" className="mb-2">
                    <Button variant="outline"
                      className="w-full border-[#453066] text-[#453066] hover:bg-[#453066] hover:text-white bg-transparent">
                      <Phone className="w-4 h-4 mr-2" />
                      +91 9251412412
                    </Button>
                  </a>
                </div>
                <div className="space-y-2 gap-2">
                  <a href="tel:+917403330888" className="mb-2">
                    <Button variant="outline"
                      className="w-full border-[#453066] text-[#453066] hover:bg-[#453066] hover:text-white bg-transparent">
                      <Phone className="w-4 h-4 mr-2" />
                      +91 7403330888
                    </Button>
                  </a>
                </div>
                
                <div className="space-y-2 gap-2">
                  <a href="mailto:info@healthsquare.in">
                    <Button
                      variant="outline"
                      className="w-full border-[#453066] text-[#453066] hover:bg-[#453066] hover:text-white bg-transparent"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us

                    </Button>
                  </a>
                </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  Our Promise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">
                  All our services are completely free of charge. We're here to support you during difficult times with
                  dignity and compassion.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  )
}
