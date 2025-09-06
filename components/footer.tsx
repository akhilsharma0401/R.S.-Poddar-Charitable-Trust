import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className=" px-4 sm:px-6 lg:px-8 py-12">
                {/* Top grid */}
                <div className="grid gap-10 md:grid-cols-4 mb-10">
                    <div>
                        <div className="mb-3">
                            <Image
                                src="/RSPODDARWHITE.png"
                                alt="R. S. Poddar Charitable Trust"
                                width={300}
                                height={80}
                                sizes="(max-width: 640px) 220px, 300px"
                                className="h-auto w-auto"
                                priority
                            />
                        </div>
                        <p className="text-gray-300 mb-4">
                            Standing Beside You in Illness, Crisis, and Loss.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <nav aria-label="Quick links">
                        <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-[#db4637] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-[#db4637] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/funeral-van" className="hover:text-[#db4637] transition-colors">
                                    Funeral Van Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/medical-equipment" className="hover:text-[#db4637] transition-colors">
                                    Medical Equipment
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#db4637] transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Our Services */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Funeral Van Service (Swarg Rath)</li>
                            {/* <li>Dead Body Transportation - 24/7</li> */}
                            <li>Rent-Free Medical Equipment</li>
                            <li>Rent-Free Home Care Equipment</li>
                            <li>24/7 Emergency Support</li>
                            <li>Community Healthcare Services</li>
                        </ul>
                    </div>

                    {/* Brand + Address */}
                    <div>

                        <h3 className="text-lg sm:text-xl font-semibold mb-2">Contact Us</h3>
                        <h4 className="text-md font-semibold">Rajasthan :</h4>
                        <address className="not-italic text-sm text-gray-300 text-justify mb-2">
                            22, Vinayak Tower, Ground Floor, Biswa Nagar, New Sanganer Road,
                            Opp. Metro Pillar No. 75, Jaipur, Rajasthan, India – 302019 <br />
                            Contact – 9251412412 | 7403330888
                        </address>
                        <h4 className="text-md font-semibold">Assam :</h4>
                        <address className="not-italic text-sm text-gray-300 text-justify">
                            Amtola, Opp. Income Tax Office, Barpeta Road, Assam - 781315 <br />
                            Contact – 7002170492 | 9678147862
                        </address>
                    </div>
                </div>

                {/* Legal links */}
                <div className="text-center">
                    <p className="text-gray-400 text-sm">
                        Copyright © 2025 R. S. Poddar Charitable Trust. All Rights Reserved.
                        {" | "}
                        <Link
                            href="/privacy-policy"
                            className="text-gray-400 hover:text-[#d4cee0] transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        {" | "}
                        <Link
                            href="/terms-and-conditions"
                            className="text-gray-400 hover:text-[#d4cee0] transition-colors"
                        >
                            Terms and Conditions
                        </Link>
                    </p>
                </div>

                {/* Divider + Disclaimer */}
                <div className="mt-6 border-t border-gray-700 pt-4">
                    <h2 className="text-center text-base font-semibold mb-2">Disclaimer</h2>
                    <p className="text-gray-400 text-sm text-justify">
                        All rent-free medical equipment provided by R. S. Poddar Charitable Trust
                        are intended solely for temporary use and convenience. Please consult with
                        a licensed doctor or healthcare provider before using any equipment to
                        ensure it is appropriate for your individual medical needs. We do not
                        provide medical advice, diagnosis or treatment and we assume no liability
                        for any misuse, injury or adverse outcome resulting from the use of the
                        equipment. <br />
                        A refundable security deposit will be applicable and returned upon proper
                        and timely return of the equipment in good condition. By accepting and using
                        the equipment, you agree to assume full responsibility for its safe and
                        appropriate use.
                    </p>
                </div>
            </div>
        </footer>
    );
}
