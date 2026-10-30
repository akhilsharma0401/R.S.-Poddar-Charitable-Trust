import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Phone, Mail, MapPin, Truck, Stethoscope, ArrowRight, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export const metadata = {
  alternates: {
    canonical: "https://www.rspoddar.org",
  },
}

export default function Home() {
  const medicalEquipment = [
    "Hospital Bed",
    "Drip Stand",
    "Nebulizer Machine",
    "Walking Stick (Single Leg/Four legs)",
    "Walker Folding (with/without Wheels)",
    "Wheel Chair",
    "Pulse Oximeter",
    "Suction Machine",
    "Oxygen Concentrator",
    "Patient Monitor",
    "Oxygen Cylinder (10 ltr/30 ltr)",
    "Air Bed",
    "Commode Chair",
    "Patient Back Rest",
    "BiPAP Machine",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#453066] to-[#3f4787] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Heart className="h-10 w-10 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance">
            Rent-Free Dead Body Transportation Service & Rent-Free Medical Equipment
          </h1>

          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-yellow-200 leading-snug">
            (स्वर्ग रथ – निःशुल्क शव यात्रा सेवा | निःशुल्क चिकित्सीय उपकरण)
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-yellow-200">
            R. S. Poddar Charitable Trust
          </h2>
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90">
            Standing Beside You in Illness, Crisis, and Loss.
          </p>
          <p className="text-sm sm:text-lg mb-6 sm:mb-8 opacity-80">Jaipur, Rajasthan • Since 2020</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-[#db4637] hover:bg-[#c23e2f] text-white px-6 sm:px-8 py-3">
                Get Support Now
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto whitespace-normal border-white text-white hover:bg-white hover:text-[#453066] bg-transparent"
              >
                Learn More About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}

      <section className="relative isolate overflow-hidden bg-gray-50 py-14 sm:py-16 lg:py-20">
        {/* Soft background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-100" />

        {/* Decorative blobs (scaled for small screens) */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-[#db4637]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-[#3f4787]/10 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="text-center font-extrabold leading-tight text-gray-900 text-[clamp(1.75rem,4.5vw,3.25rem)]">
            Serving Humanity with{" "}
            <span className="bg-gradient-to-r from-[#db4637] to-[#3f4787] bg-clip-text text-transparent">
              Dignity, Compassion & Care
            </span>
          </h2>
          <p className="mt-2 text-center text-[clamp(0.95rem,1.8vw,1.25rem)] text-gray-600">
            Jaipur, Rajasthan
          </p>

          {/* Sub-heading */}
          <p className="mt-6 text-center font-semibold text-[#db4637] text-[clamp(1.05rem,2.5vw,1.375rem)]">
            Free Dead Body Transportation & Rent-Free Medical Equipment
          </p>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg transition-shadow hover:shadow-2xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="shrink-0 grid place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#db4637]/10 text-xl sm:text-2xl">
                  🚐
                </div>
                <h3 className="text-[clamp(1rem,2.4vw,1.25rem)] font-bold text-gray-900">
                  Funeral & Transportation
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-[clamp(0.95rem,2vw,1.05rem)]">
                Since 2020, we have provided <strong>Free Funeral Van Service (Swarg Rath)</strong> and{" "}
                <strong>Dead Body Transportation</strong> with dignity and care for families in need.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg transition-shadow hover:shadow-2xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="shrink-0 grid place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3f4787]/10 text-xl sm:text-2xl">
                  🏥
                </div>
                <h3 className="text-[clamp(1rem,2.4vw,1.25rem)] font-bold text-gray-900">
                  Rent-Free Medical Equipment
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-[clamp(0.95rem,2vw,1.05rem)]">
                We offer <strong>hospital beds</strong>, <strong>oxygen cylinders</strong>,{" "}
                <strong>wheelchairs</strong>, <strong>walkers</strong> and more — all completely{" "}
                <strong>Rent-Free</strong> to ease both financial and emotional burdens.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-10 sm:mt-12 text-center">
            <Link href="/about">
              <Button className="inline-flex items-center rounded-xl px-6 sm:px-8 py-3 sm:py-4 font-medium text-white shadow-md transition-all bg-gradient-to-r from-[#453066] to-[#3f4787] hover:from-[#3f4787] hover:to-[#db4637] text-[clamp(0.95rem,1.8vw,1rem)]">
                Read Our Full Story
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-balance">
              Funeral Van Service & Medical Equipment in Jaipur
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Funeral Service */}
            <Card className="border-2 border-[#db4637]/20 hover:border-[#db4637]/40 transition-colors group">
              <CardHeader>
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center">
                    <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl leading-snug">
                    Free Funeral Van Service - Dead Body Transportation
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-5 text-justify">
                  We provide <strong>Funeral Van Service</strong> and{" "}
                  <strong>Dead Body Transportation Services (Swarg Rath)</strong> across Jaipur at no charge. Our{" "}
                  service van is available 24x7 to support grieving families with dignity and respect.
                </p>
                <div className="space-y-4 items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>24/7 Service</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>No Cost Transportation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Heart className="w-4 h-4" />
                    <span>No rental charges</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Truck className="w-4 h-4" />
                    <span> Van service </span>
                  </div>
                </div>
                <Link href="/funeral-van" className="block">
                  <Button className="w-full bg-[#db4637] hover:bg-[#c23e2f] text-white group-hover:shadow-lg transition-all">
                    Get Funeral Van Service
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Medical Equipment */}
            <Card className="border-2 border-[#453066]/20 hover:border-[#453066]/40 transition-colors group">
              <CardHeader>
                <div className="flex items-start sm:items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center">
                    <Stethoscope className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl leading-snug">Rent-Free Medical Equipment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-justify mb-4">
                  Essential <strong>Medical Equipments</strong>  available
                  at no cost for patient care:
                </p>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-4 gap-y-2 text-sm mb-5">
                  {medicalEquipment.slice(0, 10).map((equipment, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 mt-1.5 shrink-0 bg-[#453066] rounded-full"></div>
                      <span className="font-medium">{equipment}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>
                    more medical equipment items available</strong>
                </p>
                <Link href="/medical-equipment" className="block">
                  <Button className="w-full bg-gradient-to-r from-[#453066] to-[#3f4787] text-white hover:opacity-90 group-hover:shadow-lg transition-all">
                    Get Medical Equipment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        {/* layered gradient background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_10%_0%,rgba(219,70,55,0.12),transparent_60%),radial-gradient(60%_50%_at_100%_100%,rgba(63,71,135,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/40 to-white"></div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          {/* headline */}
          <h2 className="bg-gradient-to-r from-[#453066] via-[#3f4787] to-[#db4637] bg-clip-text text-2xl sm:text-3xl font-extrabold text-transparent md:text-4xl">
            Dignity In Action
          </h2>

          {/* divider with glow */}
          <div className="mx-auto mt-4 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#db4637] via-[#3f4787] to-[#453066] shadow-[0_0_28px_2px_rgba(219,70,55,0.25)]"></div>

          {/* copy */}
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-700">
            To build a compassionate society where no one suffers alone — ensuring dignity, care, and support through
            free healthcare and end-of-life assistance for all.
          </p>

          {/* feature chips with gradient border + glass card */}
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {/* chip 1 */}
            <li className="rounded-2xl bg-gradient-to-tr from-[#db4637] via-[#3f4787] to-[#453066] p-[1px]">
              <div className="flex items-center gap-3 rounded-2xl bg-white/85 p-4 backdrop-blur ring-1 ring-black/5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#db4637] to-[#3f4787] text-white text-lg">
                  🚑
                </span>
                <span className="font-semibold text-gray-900">Free Funeral Van</span>
              </div>
            </li>

            {/* chip 2 */}
            <li className="rounded-2xl bg-gradient-to-tr from-[#db4637] via-[#3f4787] to-[#453066] p-[1px]">
              <div className="flex items-center gap-3 rounded-2xl bg-white/85 p-4 backdrop-blur ring-1 ring-black/5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#db4637] to-[#3f4787] text-white text-lg">
                  🛏️
                </span>
                <span className="font-semibold text-gray-900">Rent-free Equipment</span>
              </div>
            </li>

            {/* chip 3 */}
            <li className="rounded-2xl bg-gradient-to-tr from-[#db4637] via-[#3f4787] to-[#453066] p-[1px]">
              <div className="flex items-center gap-3 rounded-2xl bg-white/85 p-4 backdrop-blur ring-1 ring-black/5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#db4637] to-[#3f4787] text-white text-lg">
                  🤝
                </span>
                <span className="font-semibold text-gray-900">Respect & Care</span>
              </div>
            </li>
          </ul>
        </div>
      </section>



      {/* Trustees Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">Our Leadership</h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl sm:text-2xl font-bold">KA</span>
                </div>
                <CardTitle className="text-lg sm:text-xl">Kailash Agarwal</CardTitle>
                <CardDescription className="text-[#db4637] font-medium">Managing Trustee</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl sm:text-2xl font-bold">SA</span>
                </div>
                <CardTitle className="text-lg sm:text-xl">Suresh Agarwal</CardTitle>
                <CardDescription className="text-[#db4637] font-medium">Managing Trustee</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl sm:text-2xl font-bold">NA</span>
                </div>
                <CardTitle className="text-lg sm:text-xl">Naveen Agarwal</CardTitle>
                <CardDescription className="text-[#db4637] font-medium">Trustee</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="px-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl sm:text-2xl font-bold">AA</span>
                </div>
                <CardTitle className="text-lg sm:text-xl">Aman Agarwal</CardTitle>
                <CardDescription className="text-[#db4637] font-medium">Trustee</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl sm:text-2xl font-bold">SA</span>
                </div>
                <CardTitle className="text-lg sm:text-xl">Shubham Agarwal</CardTitle>
                <CardDescription className="text-[#db4637] font-medium">Trustee</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl sm:text-2xl font-bold">SA</span>
                </div>
                <CardTitle className="text-lg sm:text-xl">Saurabh Agarwal</CardTitle>
                <CardDescription className="text-[#db4637] font-medium">Trustee</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#db4637] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance">
            Need Funeral Van Service or Medical Equipment?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Our <strong>funeral service</strong> and <strong>Rent free medical equipment</strong> are available 24/7 in Jaipur at
            no charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <Link href="/funeral-van" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto whitespace-normal bg-white text-[#db4637] hover:bg-gray-100">
                Call for Funeral Van Service
              </Button>
            </Link>
            <Link href="/medical-equipment" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto whitespace-normal border-white text-white hover:bg-white hover:text-[#db4637] bg-transparent"
              >
                Request Medical Equipment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 text-balance">
            Contact Us for Funeral Van Service & Medical Equipment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Address</h3>
              <a href="https://shorturl.at/hMhWf" className="text-gray-600">Google Link</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Phone</h3>
              <a href="tel:+919251412412" className="text-gray-600 hover:text-[#db4637] break-words">+91 9251412412</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:info@healthsquare.in" className="text-gray-600 hover:text-[#db4637] break-words">info@healthsquare.in</a>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/contact">
              <Button className="bg-[#db4637] hover:bg-[#c23e2f] text-white px-8 py-3">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
