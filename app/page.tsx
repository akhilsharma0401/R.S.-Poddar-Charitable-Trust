import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Phone, Mail, MapPin, Truck, Stethoscope, ArrowRight, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
      <section className="relative bg-gradient-to-br from-[#453066] to-[#3f4787] py-20 px-4 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Heart className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Free Funeral Van Service & Rent-Free Medical Equipment
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-200">R S Poddar Charitable Trust</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Standing Beside You in Illness, Crisis, and Loss.
          </p>
          <p className="text-lg mb-8 opacity-80">Jaipur, Rajasthan • Since 2020</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#db4637] hover:bg-[#c23e2f] text-white px-8 py-3">
                Get Support Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#453066] bg-transparent"
              >
                Learn More About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Serving Humanity with Dignity, Compassion & Care
            Jaipur
          </h2>
          {/* <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl font-semibold text-[#db4637] text-center mb-8">
              Dead Body Transportation & Medical Equipment Rental in Jaipur, Rajasthan
            </p>
            <p>
              Since 2020, <em>R.S. Poddar Charitable Trust</em> has been helping families in Jaipur by offering{" "}
              <strong>Free Funeral Van Service in Jaipur</strong>, reliable <strong>Dead Body Transportation (Swarg Rath)</strong>{" "}
              Services and clean, safe, <strong>Rent-Free Medical Equipment in Jaipur, for Home Care.</strong>
            </p>
            <p>
              We provide essential <strong>Medical Equipment Rental</strong> items like comfortable hospital beds,
              portable oxygen cylinders, easy-to-use wheelchairs, strong walkers, and more — all at{" "}
              <strong>Rent Free</strong>. Our <strong>Funeral Service</strong> and{" "}
              <strong>Medical Equipment on Rent</strong> program aims to support people during difficult times by easing
              both emotional stress and financial pressure. We are here to stand beside every family with respect,
              comfort, and meaningful support when it matters most.
            </p>
          </div> */}

          <div className="text-lg text-gray-700 leading-relaxed space-y-6 px-4">
            {/* Heading */}
            <p className="text-xl font-semibold text-[#db4637] text-center mb-8">
              Dead Body Transportation & Medical Equipment Rental in Jaipur, Rajasthan
            </p>

            {/* Paragraphs */}
            <p className="text-justify">
              Since 2020, R S Poddar Charitable Trust has been helping families in Jaipur by offering{" "}
              <strong>Free Funeral Van Service in Jaipur</strong>, reliable <strong>Dead Body Transportation (Swarg Rath)</strong>{" "}
              Services and clean, safe, <strong>Rent-Free Medical Equipment in Jaipur, for Home Care.</strong>
            </p>

            <p className="text-justify">
              We provide essential <strong>Medical Equipment Rental</strong> items like comfortable hospital beds,
              portable oxygen cylinders, easy-to-use wheelchairs, strong walkers, and more — all at{" "}
              <strong>Rent Free</strong>. Our <strong>Funeral Service</strong> and{" "}
              <strong>Medical Equipment on Rent</strong> program aims to support people during difficult times by easing
              both emotional stress and financial pressure. We are here to stand beside every family with respect,
              comfort, and meaningful support when it matters most.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link href="/about">
              <Button className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white hover:opacity-90">
                Read Our Full Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Funeral Van Service & Medical Equipment in Jaipur
            </h2>
            {/* <p className="text-xl font-semibold text-[#db4637]">
              Dead Body Transportation & Medical Equipment Rental Services
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Funeral Service */}
            <Card className="border-2 border-[#db4637]/20 hover:border-[#db4637]/40 transition-colors group">
              <CardHeader>
                <div className="flex items-center gap-3 ">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Free Funeral Van Service - Dead Body Transportation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-5 text-justify">
                  We provide <strong>Funeral Van Service</strong> and{" "}
                  <strong>Dead Body Transportation Services (Swarg Rath)</strong> across Jaipur at no charge. Our{" "}
                  service van is available 24x7 to support grieving families with dignity and respect.
                </p>
                {/* <div className="mb-6">
                  <Image
                    src="/funeral-van.png"
                    alt="Funeral van service"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div> */}
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
                <Link href="/services/funeral-van">
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Rent-Free Medical Equipment  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-justify mb-4">
                  Essential <strong>Medical Equipment Rental</strong>  available
                  at no cost for patient care:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm mb-6">
                  {medicalEquipment.slice(0, 8).map((equipment, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#453066] rounded-full"></div>
                      <span className="font-medium">{equipment}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>
                    {/* + {medicalEquipment.length - 8}  */}
                    more medical equipment items available</strong>
                </p>
                <Link href="/services/medical-equipment">
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
      <section className="relative overflow-hidden py-20">
        {/* layered gradient background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_10%_0%,rgba(219,70,55,0.12),transparent_60%),radial-gradient(60%_50%_at_100%_100%,rgba(63,71,135,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/40 to-white"></div>

        <div className="relative mx-auto max-w-5xl px-4 text-center">
          {/* headline */}
          <h2 className="bg-gradient-to-r from-[#453066] via-[#3f4787] to-[#db4637] bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
            Dignity In Action
          </h2>

          {/* divider with glow */}
          <div className="mx-auto mt-4 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#db4637] via-[#3f4787] to-[#453066] shadow-[0_0_28px_2px_rgba(219,70,55,0.25)]"></div>

          {/* copy */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">KA</span>
                </div>
                <CardTitle className="text-xl">Kailash Agarwal</CardTitle>
                <CardDescription className="text-[#db4637] font-medium">Trustee</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">SA</span>
                </div>
                <CardTitle className="text-xl">Suresh Agarwal</CardTitle>
                <CardDescription className="text-[#db4637] font-medium">Trustee</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#db4637] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Funeral Van Service or Medical Equipment?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our <strong>funeral service</strong> and <strong>Rent free medical equipment</strong> are available 24/7 in Jaipur at
            no charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/funeral-van">
              <Button size="lg" variant="secondary" className="bg-white text-[#db4637] hover:bg-gray-100">
                Call for Funeral Van Service
              </Button>
            </Link>
            <Link href="/services/medical-equipment">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#db4637] bg-transparent"
              >
                Request Medical Equipment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Contact Us for Funeral Van Service & Medical Equipment
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600 text-justify">22, Ground Floor, Biswa Nagar, New Sanganer Road, Opp. Metro Pillar No. 75, Jaipur, Rajasthan, India – 302019</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91 9251412412</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@healthsquare.in</p>
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
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block hover:text-[#db4637] transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block hover:text-[#db4637] transition-colors">
                  About Us
                </Link>
                <Link href="/services/funeral-van" className="block hover:text-[#db4637] transition-colors">
                  Funeral Van Service
                </Link>
                <Link href="/services/medical-equipment" className="block hover:text-[#db4637] transition-colors">
                  Medical Equipment
                </Link>
                <Link href="/contact" className="block hover:text-[#db4637] transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <div className="space-y-2">
                <p className="text-gray-300">Funeral Van Service (Swarg Rath)</p>
                {/* <p className="text-gray-300">Dead Body Transportation - 24/7</p> */}
                <p className="text-gray-300">Rent-Free Medical Equipment</p>
                <p className="text-gray-300">Rent Free Home Care Equipment</p>
                <p className="text-gray-300">24/7 Emergency Support</p>
                <p className="text-gray-300">Community Healthcare Services</p>
              </div>
            </div>
            <div>
              {/* <h3 className="text-xl font-bold mb-4">R.S. Poddar Charitable Trust</h3> */}
              <div>
                <Image
                  src="/RSPODDARWHITE.png"
                  alt="R S Poddar Charitable Trust"
                  width={300}
                  height={80}
                  className="mb-1"
                />
              </div>
              <p className="text-gray-300 mb-4 ml-2">
                Standing Beside You in Illness, Crisis, and Loss.
              </p>
              {/* <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-[#db4637]" />
                <span className="text-sm">Compassionate services for every family in need</span>
              </div> */}
            </div>
          </div>
          <div className=" text-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 R S Poddar Charitable Trust. All Rights Reserved. | <Link
                href="/privacy-policy"
                className="text-gray-400  hover:text-[#d4cee0] transition-colors"
              >
                Privacy Policy
              </Link> |{" "}
              <Link
                href="/terms-and-conditions"
                className="text-gray-400  hover:text-[#d4cee0] transition-colors"
              >
                Terms and Conditions
              </Link>
            </p>
          </div>
          <div className="border-t border-gray-700 pt-4 text-center mt-4">
            <h2 className="mb-2">Disclaimer</h2>
            <p className="text-gray-400 text-sm text-justify">
              All rent-free medical equipment provided by R. S. Poddar Charitable Trust are intended solely for temporary use and convenience. Please consult with a licensed doctor or healthcare provider before using any equipment to ensure it is appropriate for your individual medical needs. We do not provide medical advice, diagnosis or treatment and we assume no liability for any misuse, injury or adverse outcome resulting from the use of the equipment. <br />
              A refundable security deposit will be applicable and returned upon proper and timely return of the equipment in good condition. By accepting and using the equipment, you agree to assume full responsibility for its safe and appropriate use.
            </p>

          </div>
        </div>
      </footer>
    </div>
  )
}
