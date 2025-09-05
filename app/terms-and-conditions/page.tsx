// app/terms/page.tsx
import React from "react";
import Link from "next/link";
import { ShieldCheck, FileText, AlertTriangle, ArrowRight, Heart } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Terms & Conditions | R S Poddar Charitable Trust",
  description:
    "Terms and Conditions for R S Poddar Charitable Trust (www.rspoddar.org) covering website use, services, user responsibilities, communication, IP, and governing law.",
};

const TermsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf7ff] to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-10">
          <div className="rounded-3xl bg-white shadow-sm border p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#453066]/10">
                <ShieldCheck className="h-6 w-6 text-[#453066]" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Terms & Conditions
                </h1>
                <p className="mt-2 text-gray-600">
                  Welcome to R S Poddar Charitable Trust (“we,” “our,” “us”). By accessing our
                  website (<a href="https://www.rspoddar.org" className="underline">www.rspoddar.org</a>)
                  or using our services, you agree to the following Terms and Conditions.
                </p>
                {/* <p className="mt-1 text-sm text-gray-500">Last Updated: 04 September 2025</p> */}
                {/* <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="#website-use"
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
                Please read these Terms carefully. They include important information about
                eligibility, limitations, and your responsibilities when using our services.
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
                { id: "website-use", title: "1. Website Use" },
                { id: "services-provided", title: "2. Services Provided" },
                { id: "user-resp", title: "3. User Responsibilities" },
                { id: "communication", title: "4. Communication Terms" },
                { id: "liability", title: "5. Limitation of Liability" },
                { id: "ip", title: "6. Intellectual Property" },
                { id: "law", title: "7. Governing Law" },
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
          <section id="website-use" className="scroll-mt-24">
            <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">1. Website Use</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>The website is for <strong>informational purposes only.</strong> </li>
                <li>We do not collect personal information through the website.</li>
                <li>
                  We make reasonable efforts to keep the information accurate, but we do not
                  guarantee completeness or availability of content.
                </li>
              </ul>
            </div>
          </section>

          <section id="services-provided" className="scroll-mt-24">
            <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">2. Services Provided</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>
                  We assist the public by providing <strong>Rent-Free Medical Equipment</strong>  and <strong>free hearse
                  (dead body carrying vehicle – “Swarg Rath”) services.</strong>
                </li>
                <li>
                  Service requests must be made via phone, WhatsApp or through our offline rental forms.
                </li>
                <li>Availability of equipment or vehicle is subject to stock and scheduling.</li>
              </ul>
            </div>
          </section>

          <section id="user-resp" className="scroll-mt-24">
            <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">3. User Responsibilities</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>You agree to provide accurate details when requesting services.</li>
                <li>
                  Medical equipment provided on rental must be returned in good condition (normal
                  wear and tear acceptable).
                </li>
                <li>
                  A refundable security deposit will be applicable on medical equipment provided on
                  rent. We take the security deposit to prevent any damage, loss or misuse of equipment.
                </li>
                <li>You agree to return equipment within the agreed time period.</li>
              </ul>
            </div>
          </section>

          <section id="communication" className="scroll-mt-24">
            <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">4. Communication Terms</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>
                  By contacting us via phone or WhatsApp, you consent to receiving service-related
                  communication (including confirmations, reminders and follow-ups).
                </li>
                <li>
                  We may maintain basic records of your requests and communication for operational
                  purposes.
                </li>
                <li>We do not send promotional or marketing messages.</li>
              </ul>
            </div>
          </section>

          <section id="liability" className="scroll-mt-24">
            <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">5. Limitation of Liability</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>Our services are provided free of charge as part of our charitable objectives.</li>
                <li>
                  We are not responsible for:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Any medical outcome from the use of our equipment.</li>
                    <li>Delays, unavailability, or interruptions in services.</li>
                    <li>
                      Any indirect, incidental, or consequential damages arising from use of our services.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          <section id="ip" className="scroll-mt-24">
            <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">6. Intellectual Property</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>
                  All content on our website (text, logos, images) belongs to R S Poddar Charitable
                  Trust unless otherwise stated.
                </li>
                <li>
                  You may not copy, reproduce or use our content without prior written consent.
                </li>
              </ul>
            </div>
          </section>

          <section id="law" className="scroll-mt-24">
            <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">7. Governing Law</h3>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>
                  •	These Terms are governed by the laws of India.
                </li>
                <li>
                  •	Any disputes shall be subject to the jurisdiction of courts in [Insert City/State].
                </li>
              </ul>
            </div>
          </section>

          {/* Small print */}
          {/* <p className="text-xs text-gray-500 text-center">
            © 2025 R S Poddar Charitable Trust. All Rights Reserved.
          </p> */}
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
    </main>
  );
};

export default TermsPage;
