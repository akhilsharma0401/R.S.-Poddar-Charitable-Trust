import { Heart, Phone, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const medicalEquipment = [
  {
    name: "Hospital Bed",
    description: "Adjustable hospital beds for patient comfort and care",
    slug: "hospital-bed",
    image: "/hospital-bed.png", 
    
  },
  {
    name: "Drip Stand",
    description: "IV stands for intravenous therapy and medication administration",
    slug: "drip-stand",
    image: "/drip-stand.png",
  },
  {
    name: "Nebulizer Machine",
    description: "Respiratory therapy devices for medication delivery via inhalation",
    slug: "nebulizer",
    image: "/nebulizer.png",
  },
  {
    name: "Walking Stick (Single Leg/Four legs)",
    description: "Support canes and walking sticks for mobility assistance",
    slug: "walking-stick",
    image: "/walking-stick.png",
  },
  {
    name: "Walker Folding (With wheels/Without wheels)",
    description: "Folding walkers with and without wheels for mobility support",
    slug: "walker",
    image: "/walker.png",
  },
  {
    name: "Wheel Chair",
    description: "Manual wheelchairs for patient mobility and transportation",
    slug: "wheelchair",
    image: "/wheelchair.png",
  },
  {
    name: "Pulse Oximeter",
    description: "Digital devices to monitor oxygen saturation and pulse rate",
    slug: "pulse-oximeter",
    image: "/pulse-oximeter.png",
  },
  {
    name: "Phlegm Suction Machine",
    description: "Medical suction devices for airway clearance and secretion removal",
    slug: "suction-machine",
    image: "/suction-machine.png",
  },
  {
    name: "Oxygen Concentrator",
    description: "High-quality oxygen concentrators for continuous respiratory support",
    slug: "oxygen-concentrator",
    image: "/oxygen-concentrator.png",
  },
  {
    name: "Patient Monitor",
    description: "Multi-parameter monitors for vital signs tracking",
    slug: "patient-monitor",
    image: "/patient-monitor.png",
  },
  {
    name: "Oxygen Cylinder (10 ltr/47 ltr)",
    description: "Medical grade oxygen cylinders in 10L and 30L capacities",
    slug: "oxygen-cylinder",
    image: "/oxygen-cylinder.png",
  },
  {
    name: "Air Bed",
    description: "Pressure relief air mattresses for bedridden patients",
    slug: "air-bed",
    image: "/air-bed.png",
  },
  {
    name: "Commode Chair",
    description: "Portable toilet chairs for patient convenience and dignity",
    slug: "commode-chair",
    image: "/commode-chair.png",
  },
  {
    name: "Patient Back Rest",
    description: "Adjustable back support for bed-bound patients",
    slug: "patient-back-rest",
    image: "/patient-back-rest.png",
  },
  {
    name: "BiPAP/CPAP Machine",
    description: "Bi-level positive airway pressure machines for sleep apnea and respiratory support",
    slug: "bipap-machine",
    image: "/bipap-machine.png",
  },
  {
    name: "Water Bed",
    description: "Specialized water-filled mattress designed to prevent bedsores and improve patient comfort during long-term care.",
    slug: "water-bed",
    image: "/water-bed.png",
  },
  {
    name: "Crutches",
    description: "Specialized water-filled mattress designed to prevent bedsores and improve patient comfort during long-term care.",
    slug: "Crutches",
    image: "/crutches.png",
  },
]

export default function MedicalEquipmentService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Equipment Rental</h1>
            <p className="text-xl mb-8 opacity-90">Rent-free medical equipment for those in need</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full">
                <Heart className="w-5 h-5" />
                <span>Completely Free</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full">
                <Phone className="w-5 h-5" />
                <span>Contact: +91 9251412412</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Overview */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare Equipment at No Cost</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We provide essential medical equipment on a rent-free basis to families who cannot afford to purchase or
            rent these items. Our goal is to ensure that financial constraints never become a barrier to proper
            healthcare and patient comfort.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Completely Free</h3>
            <p className="text-gray-600">No rental charges or hidden fees</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Equipment</h3>
            <p className="text-gray-600">Well-maintained, sanitized medical devices</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Security Deposit</h3>
            <p className="text-gray-600">Refundable security deposit required for equipment safety</p>
          </div>
        </div>

        {/* Equipment List */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Available Medical Equipment</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {medicalEquipment.map((equipment, index) => (
    <Link
      key={index}
      href={`/equipment/${equipment.slug}`}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group overflow-hidden"
    >
      {/* Equipment Image */}
      <div className="relative w-full h-48">
        <Image
          src={equipment.image} // ✅ make sure your object has an "image" field
          alt={equipment.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#db4637] transition-colors">
            {equipment.name}
          </h3>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#db4637] transition-colors" />
        </div>
        <p className="text-gray-600 mb-4">{equipment.description}</p>
        <div className="flex items-center justify-end">
          <span className="text-[#db4637] font-semibold">View Details</span>
        </div>
      </div>
    </Link>
  ))}
</div>

        </div>

        {/* How to Request */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">How to Request Equipment</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#db4637] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600">Call +91 9251412412 or visit our office</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#db4637] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Specify Needs</h3>
              <p className="text-gray-600">Tell us which equipment you need</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#db4637] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Security Deposit</h3>
              <p className="text-gray-600">Provide refundable security deposit</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#db4637] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Use & Return</h3>
              <p className="text-gray-600">Use as needed, return when done</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Need Medical Equipment?</h2>
            <p className="text-lg mb-6 opacity-90">
              Don't let financial constraints prevent you from getting the medical equipment you need.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#db4637] text-white px-8 py-3 rounded-full hover:bg-[#c23e2f] transition-colors font-semibold"
            >
              Contact Us Today
            </Link>
          </div>
        </div>

      </div>
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
                  alt="R.S. Poddar Charitable Trust"
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
              Copyright © 2025 R.S. Poddar Charitable Trust. All Rights Reserved. | <Link
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
