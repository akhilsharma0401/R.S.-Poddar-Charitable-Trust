// app/privacy/page.tsx
import React from "react";
import Link from "next/link";
import { Shield, FileText, AlertTriangle, ArrowRight, Heart } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | R S Poddar Charitable Trust",
  description:
    "Privacy Policy for R S Poddar Charitable Trust (www.rspoddar.org) — explains how we handle personal information in connection with our charitable services.",
};

const PrivacyPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf7ff] to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-10">
          <div className="rounded-3xl bg-white shadow-sm border p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#453066]/10">
                <Shield className="h-6 w-6 text-[#453066]" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Privacy Policy
                </h1>
                <p className="mt-2 text-gray-600">
                  R S Poddar Charitable Trust (“we,” “our,” “us”) is committed to protecting the
                  privacy of individuals who use our services. This Privacy Policy explains how we
                  handle personal information in connection with our charitable activities.
                </p>
                {/* <p className="mt-1 text-sm text-gray-500">Last Updated: 04 September 2025</p> */}
                {/* <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="#info-collect"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#453066] px-4 py-2 text-white hover:opacity-95"
                  >
                    Start Reading <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-[#453066] hover:bg-gray-50"
                  >
                    Back to Home
                  </Link>
                </div> */}
              </div>
            </div>

            {/* Callout */}
            {/* <div className="mt-6 flex items-start gap-3 rounded-2xl border bg-gray-50 p-4">
              <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
              <p className="text-sm text-gray-700">
                Please review this Privacy Policy carefully. It describes the limited data we
                collect and how it is used solely for service delivery.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-4 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-6 rounded-3xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-5 w-5 text-[#453066]" />
              <h2 className="font-semibold">Quick Navigation</h2>
            </div>
            <nav className="space-y-2">
              {[
                { id: "info-collect", title: "1. Information We Collect" },
                { id: "use-info", title: "2. How We Use Your Information" },
                { id: "sharing", title: "3. Sharing of Information" },
                { id: "storage", title: "4. Data Storage & Security" },
                { id: "choices", title: "5. Your Choices" },
                { id: "thirdparty", title: "6. Third-Party Services" },
                { id: "updates", title: "7. Updates to This Policy" },
              ].map((i) => (
                <a
                  key={i.id}
                  href={`#${i.id}`}
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  {i.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <div className="lg:col-span-8 space-y-8">
          <section id="info-collect" className="scroll-mt-24">
            <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">1. Information We Collect</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>
                  <strong>Website:</strong> We do not collect personal information through our
                  website (<a href="https://www.rspoddar.org" className="underline">www.rspoddar.org</a>).
                  The website is informational only.
                </li>
                <li>
                  <strong>Offline/Direct Communication:</strong> : If you contact us via phone, WhatsApp, or fill out our rental request form for medical equipment or hearse (Swarg Rath) services, we may collect limited personal details such as:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Name</li>
                    <li>Contact information (phone number, address)</li>
                    <li>Equipment/service request details</li>
                    <li>Identification details (if required for verification)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          <section id="use-info" className="scroll-mt-24">
            <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">2. How We Use Your Information</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>To process and manage rental requests for medical equipment and hearse services.</li>
                <li>To coordinate delivery, return, and maintenance of the equipment.</li>
                <li>To maintain basic service records required for operational or audit purposes.</li>
              </ul>
              <p className="mt-3 text-gray-700">
                We do <strong>not</strong> use your personal information for marketing or commercial purposes.
              </p>
            </div>
          </section>

          <section id="sharing" className="scroll-mt-24">
            <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">3. Sharing of Information</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>We do not sell, rent or trade your personal information.</li>
                <li>
                  Information may be shared only with:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Internal staff or volunteers who help deliver services.</li>
                    <li>Service providers (e.g., drivers for Swarg Rath) strictly for fulfilling requests.</li>
                  </ul>
                </li>
                <li>
                  We may disclose information if required by law or government authorities.
                </li>
              </ul>
            </div>
          </section>

          <section id="storage" className="scroll-mt-24">
            <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">4. Data Storage & Security</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>Records collected through forms or communication are kept securely in physical or digital form.</li>
                <li>Access is restricted to authorized trustees, staff or volunteers.</li>
                <li>We take reasonable precautions to protect against unauthorized access, alteration or misuse.</li>
              </ul>
            </div>
          </section>

          <section id="choices" className="scroll-mt-24">
            <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">5. Your Choices</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>You may contact us to update or correct your personal information.</li>
                <li>
                  You may request deletion of your records after completion of service, unless retention is legally required.
                </li>
              </ul>
            </div>
          </section>

          <section id="thirdparty" className="scroll-mt-24">
            <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">6. Third-Party Services</h3>
              <p className="mt-3 text-gray-700">
                Our website (<a href="https://www.rspoddar.org" className="underline">www.rspoddar.org</a>) may contain
                links to external websites. We are not responsible for the privacy practices of those websites.
              </p>
            </div>
          </section>

          <section id="updates" className="scroll-mt-24">
            <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">7. Updates to This Policy</h3>
              <p className="mt-3 text-gray-700">
                We may update this Privacy Policy from time to time. Any changes will be posted on our website with a revised effective date.
              </p>
            </div>
          </section>

          
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
    </main>
  );
};

export default PrivacyPage;

