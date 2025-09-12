import Footer from "@/components/footer"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About R. S. Poddar Charitable Trust</h1>
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
            R. S. Poddar Charitable Trust is dedicated to serving humanity by providing essential services during the
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
              Founded in 2020, R. S. Poddar Charitable Trust emerged from a simple yet powerful vision: to ensure that no
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
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">KA</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kailash Agarwal</h3>
              <p className="text-[#db4637] font-medium mb-3">Managing Trustee</p>
              <p className="text-gray-600">
                Dedicated to serving the community and ensuring our mission reaches those who need it most.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">SA</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Suresh Agarwal</h3>
              <p className="text-[#db4637] font-medium mb-3"> Managing Trustee</p>
              <p className="text-gray-600">
                Focused on expanding our services and building lasting partnerships within the community.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">NA</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Naveen Agarwal</h3>
              <p className="text-[#db4637] font-medium mb-3">Trustee</p>
              <p className="text-gray-600">
                Committed to community service and ensuring our initiatives create meaningful impact.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">AA</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Aman Agarwal</h3>
              <p className="text-[#db4637] font-medium mb-3">Trustee</p>
              <p className="text-gray-600">
                Working to expand our outreach and foster strong, long-term community relationships.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">SA</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Shubham Agarwal</h3>
              <p className="text-[#db4637] font-medium mb-3">Trustee</p>
              <p className="text-gray-600">
                Passionate about service and ensuring our programs bring support where it’s needed most.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gradient-to-r from-[#453066] to-[#3f4787] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">SA</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Saurabh Agarwal</h3>
              <p className="text-[#db4637] font-medium mb-3">Trustee</p>
              <p className="text-gray-600">
                Dedicated to strengthening our services and creating sustainable community partnerships.
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
      <Footer />
    </div>
  )
}
