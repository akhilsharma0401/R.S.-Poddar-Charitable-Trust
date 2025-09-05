import { Heart, Users, Award, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About R S Poddar Charitable Trust</h1>
            <p className="text-xl opacity-90">Serving humanity with dignity since 2020</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            R S Poddar Charitable Trust is dedicated to serving humanity by providing essential services during the
            most challenging times in people's lives. We believe that compassion and dignity should never be compromised
            due to financial constraints.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Compassion</h3>
            <p className="text-gray-600">Serving with empathy and understanding</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="text-gray-600">Building stronger, supportive communities</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Dignity</h3>
            <p className="text-gray-600">Maintaining respect in all our services</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Purpose</h3>
            <p className="text-gray-600">Focused on meaningful impact</p>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6 text-justify">
              Founded in 2020, R S Poddar Charitable Trust emerged from a simple yet powerful vision: to ensure that no
              family in Jaipur faces additional hardship during their most difficult moments due to financial
              constraints.
            </p>
            <p className="mb-6 text-justify">
              Our journey began when we witnessed families struggling to afford basic necessities during medical
              emergencies and bereavement. This inspired us to create a support system that would provide essential
              services free of charge, allowing families to focus on what truly matters during these challenging times.
            </p>
            <p className="mb-6 text-justify">
              Today, we are proud to offer two core services: free funeral van transportation (Swarg Rath) and rent-free
              medical equipment lending. These services have touched hundreds of lives and continue to grow through the
              support of our community and volunteers.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">KA</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kailash Agarwal</h3>
              <p className="text-[#db4637] font-medium mb-3">Trustee</p>
              <p className="text-gray-600">
                Dedicated to community service and ensuring our mission reaches those who need it most.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">SA</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Suresh Agarwal</h3>
              <p className="text-[#db4637] font-medium mb-3">Trustee</p>
              <p className="text-gray-600">
                Committed to expanding our services and building lasting partnerships within the community.
              </p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto ">
            To build a compassionate society where essential healthcare services and dignified support are accessible to
            all, regardless of economic status, creating a community where no one faces their darkest hours alone.
          </p>
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
