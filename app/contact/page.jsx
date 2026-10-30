import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"

export const metadata = {
    title: "Contact RS Poddar Trust | Funeral Van & Medical Help Jaipur",
  description:
    "Contact R. S. Poddar Charitable Trust for free funeral van or medical equipment in Jaipur & Assam. Call 9251412412. 24/7 support.",
  openGraph: {
    title: "Contact RS Poddar Trust | Funeral Van & Medical Help Jaipur",
    description:
      "Contact R. S. Poddar Charitable Trust for free funeral van or medical equipment in Jaipur & Assam. Call 9251412412. 24/7 support.",
    url: "https://www.rspoddar.org/contact",
  },
  alternates: {
    canonical: "https://www.rspoddar.org/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Contact Us</h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90">We're here to help you 24/7</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Contact</h3>
                  <a href="tel:+919251412412" className="block text-gray-700 mb-1 hover:text-[#db4637]">+91 9251412412</a>
                  <p className="text-sm text-gray-600">Available 24/7 for funeral van service</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:info@healthsquare.in" className="block break-words text-gray-700 mb-1 hover:text-[#db4637]">info@healthsquare.in</a>
                  <p className="text-sm text-gray-600">For general inquiries and equipment requests</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-1 text-pretty">22, Ground Floor, Biswa Nagar, New Sanganer Road, Opp. Metro Pillar No. 75, Jaipur, Rajasthan, India – 302019</p>
                  <p className="text-sm text-gray-600">Serving Jaipur and surrounding areas</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Service Hours</h3>
                  <p className="text-gray-700 mb-1">24/7 Emergency Services</p>
                  <p className="text-sm text-gray-600">Funeral van available anytime</p>
                  <p className="text-sm text-gray-600">Medical equipment requests</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 sm:space-y-6">
            <Card className="border-2 border-[#db4637]/20">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-[#db4637]">Funeral Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  Need immediate funeral van service? Call us right away. Our Swarg Rath service is available 24/7.
                </p>
                <Button asChild className="mb-2 w-full whitespace-normal bg-[#db4637] hover:bg-[#c23e2f] text-white">
                  <a href="tel:+919251412412">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: +91 9251412412
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#453066]/20">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-[#453066]">Medical Equipment Request</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  Need medical equipment? Contact us to check availability and arrange delivery.
                </p>
                <div className="space-y-2">

                <div className="space-y-2 gap-2">
                  <Button asChild variant="outline" className="mb-2 w-full whitespace-normal border-[#453066] text-[#453066] hover:bg-[#453066] hover:text-white bg-transparent">
                    <a href="tel:+919251412412">
                      <Phone className="w-4 h-4 mr-2" />
                      +91 9251412412
                    </a>
                  </Button>
                </div>
                <div className="space-y-2 gap-2">
                  <Button asChild variant="outline" className="mb-2 w-full whitespace-normal border-[#453066] text-[#453066] hover:bg-[#453066] hover:text-white bg-transparent">
                    <a href="tel:+917403330888">
                      <Phone className="w-4 h-4 mr-2" />
                      +91 7403330888
                    </a>
                  </Button>
                </div>
                
                <div className="space-y-2 gap-2">
                  <Button asChild variant="outline" className="w-full whitespace-normal border-[#453066] text-[#453066] hover:bg-[#453066] hover:text-white bg-transparent">
                    <a href="mailto:info@healthsquare.in">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </a>
                  </Button>
                </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
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
      <Footer/>
    </div>
  )
}
