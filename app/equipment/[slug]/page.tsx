import { ArrowLeft, CheckCircle, Phone, Heart, Clock, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const equipmentData = {
  "oxygen-concentrator": {
    name: "Oxygen Concentrator",
    description: "High-quality oxygen concentrators for respiratory support at home",
    fullDescription:
      "Our oxygen concentrators provide a reliable source of concentrated oxygen for patients with respiratory conditions. These medical-grade devices are perfect for home use and can deliver continuous oxygen therapy as prescribed by healthcare professionals.",
    features: [
      "Continuous oxygen flow up to 5-10 LPM",
      "Low noise operation for patient comfort",
      "Built-in alarms for safety monitoring",
      "Energy efficient operation",
      "Easy-to-read digital display",
      "Portable and lightweight design",
    ],
    specifications: {
      "Flow Rate": "1-10 LPM adjustable",
      "Oxygen Concentration": "90-96%",
      "Power Consumption": "350-600W",
      "Noise Level": "< 45 dB",
      Weight: "15-25 kg",
      Dimensions: "58 x 38 x 71 cm",
    },
    usageInstructions: [
      "Ensure proper ventilation around the device",
      "Keep the device away from heat sources and flames",
      "Clean the air filter regularly as instructed",
      "Use only distilled water in the humidifier bottle",
      "Follow prescribed flow rate settings",
      "Contact us immediately if alarms sound",
      "COPD patients",
      "Post-COVID recovery",
      "Respiratory therapy",
      "Home oxygen therapy",
    ],
    idealFor: ["COPD patients", "Post-COVID recovery", "Respiratory therapy", "Home oxygen therapy"],
  },
  "oxygen-cylinder": {
    name: "Oxygen Cylinder",
    description: "Medical grade oxygen cylinders with regulators for emergency and continuous use",
    fullDescription:
      "Our medical oxygen cylinders provide pure oxygen for patients requiring supplemental oxygen therapy. Each cylinder comes with a pressure regulator and flow meter for safe and controlled oxygen delivery.",
    features: [
      "Medical grade pure oxygen (99.5%)",
      "Pressure regulator included",
      "Flow meter for precise control",
      "Safety valve for pressure relief",
      "Portable for emergency use",
      "Various sizes available",
    ],
    specifications: {
      "Oxygen Purity": "99.5%",
      "Cylinder Capacity": "10-40 liters",
      "Working Pressure": "150 bar",
      "Flow Rate": "0.5-15 LPM",
      Weight: "5-25 kg (varies by size)",
      Duration: "2-12 hours (depends on flow rate)",
    },
    usageInstructions: [
      "Handle cylinders carefully to avoid damage",
      "Store in upright position in cool, dry place",
      "Check pressure gauge before use",
      "Use only medical oxygen regulators",
      "Never use oil or grease on fittings",
      "Return empty cylinders for refill",
    ],
    idealFor: ["Emergency oxygen therapy", "Ambulatory patients", "Short-term oxygen needs", "Backup oxygen supply"],
  },
  "hospital-bed": {
    name: "Hospital Bed",
    description: "Adjustable hospital beds for patient comfort and care",
    fullDescription:
      "Our hospital beds are designed to provide maximum comfort and facilitate better patient care. With multiple adjustment options, these beds help patients maintain proper positioning and make caregiving easier for family members.",
    features: [
      "Electric height adjustment",
      "Head and foot elevation controls",
      "Side rails for patient safety",
      "Lockable wheels for mobility",
      "Easy-to-clean surfaces",
      "Comfortable mattress included",
    ],
    specifications: {
      "Bed Length": "200 cm",
      "Bed Width": "90 cm",
      "Height Range": "45-75 cm",
      "Weight Capacity": "150 kg",
      Power: "220V AC",
      Material: "Steel frame with powder coating",
    },
    usageInstructions: [
      "Ensure bed is on level surface before use",
      "Test all controls before patient use",
      "Keep side rails up when patient is unattended",
      "Clean and disinfect regularly",
      "Check wheel locks are engaged when stationary",
      "Report any mechanical issues immediately",
    ],
    idealFor: ["Bedridden patients", "Post-surgery recovery", "Elderly care", "Long-term patient care","Patients with spinal cord injuries","Patients suffering from paralysis","ICU and critical care patients","Orthopedic or trauma recovery cases"],
  },
  wheelchair: {
    name: "Wheelchair",
    description: "Manual and electric wheelchairs for mobility assistance",
    fullDescription:
      "Our wheelchairs provide mobility independence for patients with temporary or permanent mobility challenges. Available in both manual and electric options to suit different needs and preferences.",
    features: [
      "Comfortable padded seating",
      "Adjustable footrests",
      "Easy-grip hand rims",
      "Foldable for transport",
      "Safety brakes",
      "Lightweight aluminum frame",
    ],
    specifications: {
      "Seat Width": "40-50 cm",
      "Seat Depth": "40 cm",
      "Weight Capacity": "100-120 kg",
      "Total Weight": "12-15 kg",
      "Wheel Size": "24 inch rear, 8 inch front",
      "Folded Width": "25 cm",
    },
    usageInstructions: [
      "Check brakes before each use",
      "Ensure footrests are properly positioned",
      "Lock wheels when transferring patient",
      "Avoid steep slopes and uneven surfaces",
      "Regular cleaning and maintenance",
      "Check tire pressure periodically",
    ],
    idealFor: ["Mobility impaired patients", "Post-surgery recovery", "Elderly assistance", "Temporary mobility needs","Patients with fractures, leg injuries, or joint problems","Rehabilitation therapy and recovery programs","Palliative and critical care patients","Community healthcare & transport within hospitals"],
  },
  nebulizer: {
    name: "Nebulizer",
    description: "Respiratory therapy devices for medication delivery",
    fullDescription:
      "Our nebulizers convert liquid medication into a fine mist that can be easily inhaled into the lungs. Essential for patients with asthma, COPD, and other respiratory conditions requiring inhaled medications.",
    features: [
      "Efficient medication delivery",
      "Quiet operation",
      "Easy-to-use controls",
      "Disposable and reusable nebulizer cups",
      "Compact and portable design",
      "Multiple mask sizes included",
    ],
    specifications: {
      "Particle Size": "1-5 microns",
      "Nebulization Rate": "0.2-0.5 ml/min",
      "Medication Capacity": "6 ml",
      Power: "220V AC",
      "Noise Level": "< 60 dB",
      Weight: "1.5 kg",
    },
    usageInstructions: [
      "Use only prescribed medications",
      "Clean nebulizer cup after each use",
      "Replace tubing and masks regularly",
      "Sit upright during treatment",
      "Breathe normally through the mouthpiece",
      "Complete full medication dose",
    ],
    idealFor: ["Asthma patients", "COPD treatment", "Respiratory infections", "Pediatric respiratory care","Respiratory infections","Pediatric respiratory care","Elderly patients with breathing difficulties","Patients with chronic bronchitis"],
  },
  walker: {
    name: "Walker",
    description: "Walking aids for mobility assistance and stability",
    fullDescription:
      "Our walkers provide stable support for patients who need assistance with walking and balance. Available in various styles including standard, wheeled, and folding models to meet different mobility needs.",
    features: [
      "Adjustable height settings",
      "Non-slip rubber tips",
      "Lightweight aluminum construction",
      "Foldable for storage",
      "Comfortable hand grips",
      "Optional wheels available",
    ],
    specifications: {
      "Height Range": "81-96 cm",
      Width: "60 cm",
      Depth: "50 cm",
      "Weight Capacity": "136 kg",
      "Product Weight": "2.5 kg",
      Material: "Aluminum alloy",
    },
    usageInstructions: [
      "Adjust height to proper level",
      "Check all connections before use",
      "Move walker forward, then step into it",
      "Keep walker close to body",
      "Check rubber tips for wear regularly",
      "Use on level surfaces only",
    ],
    idealFor: ["Balance assistance", "Post-surgery recovery", "Elderly mobility support", "Rehabilitation therapy","Rehabilitation therapy","Patients with neurological conditions (Parkinson’s, stroke recovery)","Individuals with arthritis or joint stiffness","Patients with muscle weakness or partial paralysis"],
  },
  "pulse-oximeter": {
    name: "Pulse Oximeter",
    description: "Digital devices to monitor oxygen saturation and pulse rate",
    fullDescription:
      "Our pulse oximeters provide quick and accurate measurements of blood oxygen saturation and pulse rate. Essential for monitoring patients with respiratory conditions or those recovering from illness.",
    features: [
      "Accurate SpO2 and pulse rate measurement",
      "Large digital display",
      "One-button operation",
      "Auto power-off feature",
      "Lightweight and portable",
      "Low battery indicator",
    ],
    specifications: {
      "SpO2 Range": "70-100%",
      "Pulse Rate Range": "30-250 BPM",
      Accuracy: "±2% for SpO2, ±3 BPM for pulse",
      Display: "LED digital display",
      Battery: "2 AAA batteries",
      Weight: "50 grams",
    },
    usageInstructions: [
      "Insert finger fully into sensor",
      "Keep finger still during measurement",
      "Wait for stable reading",
      "Clean sensor after each use",
      "Replace batteries when indicator shows low",
      "Store in protective case",
    ],
    idealFor: ["Home health monitoring", "COVID-19 recovery", "Respiratory condition monitoring", "Fitness tracking","Post-surgical recovery monitoring","Elderly care and routine health checks","ICU and emergency patient monitoring","Travel health monitoring (high altitude use)"],
  },
  "suction-machine": {
    name: "Phlegm Suction Machine",
    description: "Medical suction devices for airway clearance",
    fullDescription:
      "Our medical suction machines help clear airways by removing secretions, blood, or other fluids from the respiratory tract. Essential for patients who cannot clear their airways naturally.",
    features: [
      "Powerful suction capability",
      "Adjustable vacuum pressure",
      "Large collection jar",
      "Quiet operation",
      "Portable design",
      "Easy-to-clean components",
    ],
    specifications: {
      "Max Vacuum": "-80 kPa (-600 mmHg)",
      "Flow Rate": "≥20 L/min",
      "Jar Capacity": "1000 ml",
      "Noise Level": "< 65 dB",
      Power: "220V AC",
      Weight: "4.5 kg",
    },
    usageInstructions: [
      "Check vacuum level before use",
      "Use sterile suction catheters",
      "Empty collection jar regularly",
      "Clean and disinfect after each use",
      "Replace tubing as needed",
      "Monitor patient during suctioning",
    ],
    idealFor: [
      "Tracheostomy care",
      "Post-operative care",
      "Respiratory secretion management",
      "Emergency airway clearance",
      "ICU and critical care units",
      "Patients with chronic respiratory conditions (COPD, ALS, etc.)",
      "Home care for bedridden patients",
    ],
  },
  "air-bed": {
    name: "Air Bed",
    description: "Pressure relief air mattresses for bedridden patients",
    fullDescription:
      "Our air beds provide pressure relief and comfort for bedridden patients, helping prevent pressure sores and improving circulation. The alternating pressure system ensures optimal patient comfort.",
    features: [
      "Alternating pressure system",
      "Adjustable pressure settings",
      "Quiet air pump",
      "Waterproof mattress cover",
      "Easy setup and operation",
      "Pressure relief for comfort",
    ],
    specifications: {
      "Mattress Size": "200 x 90 x 20 cm",
      "Weight Capacity": "150 kg",
      "Pressure Range": "10-40 mmHg",
      "Cycle Time": "6-10 minutes",
      Power: "220V AC",
      "Pump Weight": "2.8 kg",
    },
    usageInstructions: [
      "Place on existing mattress or bed frame",
      "Connect pump and set desired pressure",
      "Check for proper inflation",
      "Monitor patient comfort regularly",
      "Clean with mild disinfectant",
      "Check for air leaks periodically",
    ],
    idealFor: ["Pressure sore prevention", "Long-term bed rest", "Post-surgery recovery", "Elderly patient care"],
  },
  "commode-chair": {
    name: "Commode Chair",
    description: "Portable toilet chairs for patient convenience",
    fullDescription:
      "Our commode chairs provide a convenient toileting solution for patients with mobility limitations. Designed for comfort and hygiene, these chairs can be used bedside or over existing toilets.",
    features: [
      "Removable waste bucket",
      "Padded seat and backrest",
      "Adjustable height",
      "Armrests for support",
      "Non-slip feet",
      "Easy to clean design",
    ],
    specifications: {
      "Seat Height": "45-55 cm (adjustable)",
      "Seat Width": "40 cm",
      "Weight Capacity": "100 kg",
      "Product Weight": "6 kg",
      "Bucket Capacity": "7 liters",
      Material: "Steel frame with plastic components",
    },
    usageInstructions: [
      "Adjust height for patient comfort",
      "Ensure all locks are secure",
      "Empty and clean bucket after each use",
      "Use toilet paper and dispose properly",
      "Disinfect seat and handles regularly",
      "Check stability before each use",
    ],
    idealFor: ["Mobility limited patients", "Post-surgery recovery", "Elderly care", "Bedside convenience"],
  },
  "walking-stick": {
    name: "Walking Stick",
    description: "Support canes and walking sticks for stability",
    fullDescription:
      "Our walking sticks provide additional support and stability for patients with mild mobility issues. Available in various styles including single-point and quad canes for different levels of support needed.",
    features: [
      "Adjustable height",
      "Comfortable grip handle",
      "Non-slip rubber tip",
      "Lightweight construction",
      "Various handle styles",
      "Durable materials",
    ],
    specifications: {
      "Height Range": "70-95 cm",
      "Weight Capacity": "100 kg",
      "Product Weight": "0.5 kg",
      "Handle Material": "Plastic/Wood",
      "Shaft Material": "Aluminum",
      "Tip Diameter": "19 mm",
    },
    usageInstructions: [
      "Adjust to proper height (wrist level)",
      "Hold on opposite side of weak leg",
      "Move cane forward with weak leg",
      "Check rubber tip for wear",
      "Keep cane close to body",
      "Use on level surfaces",
    ],
    idealFor: ["Mild balance issues", "Post-injury recovery", "Elderly support", "Temporary mobility aid","Individuals with partial paralysis or weakness","Post-surgical rehabilitation (hip/knee replacement)","Patients with neurological conditions (Parkinson’s, stroke recovery)","Long-term mobility assistance at home or outdoors"],
  },
  "drip-stand": {
    name: "Drip Stand",
    description: "IV stands for intravenous therapy support",
    fullDescription:
      "Our drip stands provide stable support for IV bags and medical equipment during intravenous therapy. Designed with mobility and stability in mind for both hospital and home use.",
    features: [
      "Adjustable height pole",
      "Multiple hooks for IV bags",
      "Stable 5-wheel base",
      "Easy-roll casters",
      "Stainless steel construction",
      "Compact folding design",
    ],
    specifications: {
      "Height Range": "120-200 cm",
      "Base Diameter": "60 cm",
      "Weight Capacity": "10 kg per hook",
      "Number of Hooks": "4",
      "Product Weight": "3.5 kg",
      Material: "Stainless steel",
    },
    usageInstructions: [
      "Adjust height as needed",
      "Ensure base is stable",
      "Hang IV bags securely on hooks",
      "Lock wheels when stationary",
      "Clean with disinfectant regularly",
      "Check for stability before use",
    ],
    idealFor: ["IV therapy at home", "Medical treatments", "Hospital discharge care", "Medication administration","Dialysis centers","Emergency rooms & ICUs","Post-surgical recovery wards","Nursing homes & elderly care facilities"],
  },
  "orthopedic-belt": {
    name: "Orthopedic Belt",
    description: "Support belts for back and joint problems",
    fullDescription:
      "Our orthopedic belts provide targeted support for back pain, posture correction, and joint stability. Available in various sizes and styles to address different orthopedic needs.",
    features: [
      "Adjustable compression",
      "Breathable materials",
      "Ergonomic design",
      "Easy to wear",
      "Machine washable",
      "Various sizes available",
    ],
    specifications: {
      Sizes: "S, M, L, XL, XXL",
      Material: "Neoprene/Elastic blend",
      "Compression Level": "Adjustable",
      Width: "15-25 cm (varies by type)",
      Color: "Black/Beige",
      Care: "Hand/Machine washable",
    },
    usageInstructions: [
      "Choose correct size for proper fit",
      "Wear over thin clothing",
      "Adjust compression as needed",
      "Remove periodically to allow skin to breathe",
      "Wash regularly with mild detergent",
      "Consult doctor for proper usage duration",
    ],
    idealFor: ["Lower back pain", "Posture support", "Post-surgery support", "Work-related back strain"],
  },
  "patient-back-rest": {
    name: "Patient Back Rest",
    description: "Adjustable back support for bed-bound patients",
    fullDescription:
      "Our patient back rests provide comfortable positioning and support for bed-bound patients. Adjustable angles help patients sit up comfortably for eating, reading, or medical procedures.",
    features: [
      "Multiple angle adjustments",
      "Comfortable padding",
      "Stable base design",
      "Easy-to-clean surface",
      "Lightweight construction",
      "Foldable for storage",
    ],
    specifications: {
      "Adjustment Range": "0-75 degrees",
      Width: "60 cm",
      Height: "70 cm",
      "Weight Capacity": "80 kg",
      "Product Weight": "2.5 kg",
      Material: "Steel frame with foam padding",
    },
    usageInstructions: [
      "Place securely on bed",
      "Adjust angle for patient comfort",
      "Ensure patient is properly positioned",
      "Check stability before use",
      "Clean padding regularly",
      "Store folded when not in use",
    ],
    idealFor: ["Bed-bound patients", "Reading and eating support", "Medical procedures", "Recovery positioning"],
  },
  "patient-monitor": {
    name: "Patient Monitor",
    description: "Multi-parameter monitor for continuous vital signs tracking",
    fullDescription:
      "Our patient monitors provide accurate, real-time tracking of critical vital signs including ECG (3/5-lead), oxygen saturation (SpO₂), non-invasive blood pressure (NIBP), temperature, and pulse rate. Designed for hospitals, ICUs, emergency care, and home monitoring, these devices ensure continuous patient safety and timely medical response.",
    features: [
      "Real-time monitoring of ECG, SpO₂, NIBP, Temp, Pulse",
      "7-inch high-resolution TFT LCD",
      "Configurable alarms with audio/visual alerts",
      "Battery backup up to 4 hours",
      "48-hour trend data storage",
      "USB / LAN / optional Wi-Fi connectivity",
      "Portable and durable ABS body",
    ],
    specifications: {
      "ECG": "3/5-lead monitoring",
      "SpO₂": "Pulse oximetry with plethysmograph",
      "NIBP": "Automatic cuff inflation",
      "Temperature": "Dual probe support",
      "Display": "7-inch TFT LCD",
      "Battery": "Up to 4 hours",
      "Weight": "3.5 kg"
    },
    usageInstructions: [
      "Place monitor on stable surface near patient",
      "Attach ECG leads, SpO₂ probe, and NIBP cuff",
      "Turn on and verify readings",
      "Set alarm thresholds for safety",
      "Calibrate and maintain sensors regularly",
      "Clean probes and cuffs after use",
    ],
    idealFor: ["ICU and hospital patients",
      "Emergency medical care",
      "Post-surgery monitoring",
      "Chronic illness management",
      "Home-care monitoring"],
  },
  "bipap-machine": {
    name: "BiPAP/CPAP Machine",
    description: "Compact BiPAP device for non-invasive breathing support.",
    fullDescription:
      "BiPAP machines deliver two air pressure levels—higher during inhalation (IPAP) and lower during exhalation (EPAP)—to make breathing easier. They help manage sleep apnea, COPD, and other respiratory conditions by maintaining oxygen levels and reducing carbon dioxide buildup.",
    features: [
      "Dual pressure settings (IPAP & EPAP)",
      "Digital display for airflow monitoring",
      "Adjustable therapy modes",
      "Optional humidifier for comfort",
      "Quiet operation",
      "Portable and easy to set up",
      "Built-in safety alarms",
    ],
    specifications: {
      "Modes": "BiPAP with optional ST",
      "Pressure": " 4–30 cmH₂O",
      "Display": "Digital LCD",
      "Humidifier": "Optional integrated unit",
      "Power": "AC with backup option",
      "Weight": "1.5–2.5 kg",
    },
    usageInstructions: [
      "Place on stable surface near bed",
      "Connect tubing and mask securely",
      "Power on and adjust settings as prescribed",
      "Use humidifier with distilled water if enabled",
      "Check comfort and straps during use",
      "Clean mask and tubing regularly",
    ],
    idealFor: ["Sleep apnea patients",
      "COPD and chronic respiratory care",
      "Post-surgery recovery",
      "Home or hospital non-invasive ventilation",
    ]
  },
  "water-bed": {
    name: "Water Bed",
    description: "Specialized water-filled mattress designed to prevent bedsores and improve patient comfort during long-term care.",
    fullDescription:
      "Hospital water beds are designed to reduce pressure points and improve circulation in bedridden patients. They help prevent bedsores, promote comfort, and ensure better care during extended hospital stays.",
    features: [
      "Even weight distribution to prevent pressure sores",
      "Adjustable water level for customized comfort",
      "Durable, puncture-resistant materia",
      "Easy-to-clean waterproof surface",
      "Provides cooling relief for patients",
     
    ],
    specifications: {
      "Bed Length": "200 cm",
      "Bed Width": "90cm",
      "Material": "High-quality PVC with leak-proof design",
      "Capacity": "Suitable for patients up to 150 kg",
      "Design": " Single- or three-chamber water system",
    },
    usageInstructions: [
      "Place the bed on a flat, stable surface before filling",
      "Fill with clean water and adjust level as required",
      "Ensure no sharp objects come in contact with the bed",
      "Regularly check for leaks and maintain water level",
      "Disinfect surface as per hospital hygiene guidelines",
    ],
    idealFor: ["Bedridden patients (short-term & long-term)",
      "Post-surgery recovery cases",
      "Patients with spinal cord injuries",
      "Patients suffering from paralysis",
      "Elderly care & geriatric patients",
      "ICU and critical care patients",
      "Patients with severe burns or skin grafts",
      "Individuals at high risk of bedsores/pressure ulcers",
      "Long-term hospital or home care",
    ]
  },
  "crutches": {
    name: "Crutches",
    description: "Supportive walking aids designed to help patients maintain balance, reduce weight-bearing, and improve mobility during recovery.",
    fullDescription:
      "Crutches are essential mobility aids for patients with temporary or permanent lower-limb injuries or disabilities. They provide stability, reduce pressure on the legs, and allow safe movement while promoting recovery.",
    features: [
      "Lightweight and durable aluminum or steel construction",
      "Adjustable height for patient comfort",
      "Ergonomic hand grips and padded underarms for support",
      "Anti-slip rubber tips for added safety",
      "Easy to carry and use indoors or outdoors",
     
    ],
    specifications: {
      "Height Adjustment": "110–150 cm (varies by model)",
      "Weight Capacity": "Up to 120 kg",
      "Material": "Aluminum/Steel with rubber padding",
      "Grip Type": "Cushioned hand grips for comfort",
      "Design": " Underarm or elbow (forearm) style available",
    },
    usageInstructions: [
      "Adjust crutches to the correct height before use",
      "Place rubber tips firmly on the ground while walking",
      "Keep weight on hands, not underarms, to avoid nerve strain",
      "Move crutches slightly ahead, then step forward with injured leg",
      "Inspect regularly for wear and replace worn-out tips",
    ],
    idealFor: ["Patients with fractures, sprains, or leg injuries",
      "Post-surgery rehabilitation (orthopedic or joint surgeries)",
      "Individuals with temporary mobility loss",
      "Patients with long-term lower-limb disabilities",
      "Elderly patients needing additional balance support",
    ]
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function EquipmentDetailPage({ params }: PageProps) {
  const equipment = equipmentData[params.slug as keyof typeof equipmentData]

  if (!equipment) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#db4637]">
              Home
            </Link>
            <span>/</span>
            <Link href="/services/medical-equipment" className="hover:text-[#db4637]">
              Medical Equipment
            </Link>
            <span>/</span>
            <span className="text-gray-900">{equipment.name}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/services/medical-equipment"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Medical Equipment
          </Link>
          <h1 className="text-4xl font-bold mb-4">{equipment.name}</h1>
          <p className="text-xl opacity-90">{equipment.description}</p>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5" />
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Heart className="w-5 h-5" />
              <span>Free of Charge</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Equipment</h2>
              <p className="text-gray-700 leading-relaxed">{equipment.fullDescription}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {equipment.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(equipment.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">{key}:</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Instructions */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Instructions</h2>
              <div className="space-y-3">
                {equipment.usageInstructions.map((instruction, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#db4637] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{instruction}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal For</h2>
              <div className="flex flex-wrap gap-3">
                {equipment.idealFor.map((use, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white px-4 py-2 rounded-full text-sm"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Request Equipment */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Request This Equipment</h3>
              <p className="text-gray-600 mb-6">This equipment is available free of charge for those in need.</p>
              <div className="space-y-4">
                <a
                  href="tel:+919251412412"
                  className="block w-full bg-[#db4637] text-white text-center py-3 rounded-lg hover:bg-[#c23e2f] transition-colors font-semibold"
                >
                  Request Now
                </a>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Call: +91 9251412412</span>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Availability</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Currently Available</span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Same-day delivery in Jaipur</span>
                </div> */}
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">No rental charges</span>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>

                  <div className="text-yellow-700 text-sm [&>p]:relative [&>p]:pl-4 [&>p]:mb-1
                      [&>p]:before:content-['•'] [&>p]:before:absolute
                      [&>p]:before:left-0 [&>p]:before:top-0">
                    <p><strong>please consult with your healthcare provider before using any medical equipment.</strong></p>
                    <p><strong>refundable security deposit Will Be applicable.</strong></p>
                  </div>
                </div>
              </div>
            </div>


            {/* Contact Info */}
            <div className="bg-gradient-to-r from-[#453066] to-[#3f4787] text-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Need Help?</h3>
              <p className="text-sm opacity-90 mb-4">
                Our team is available to help you with equipment selection and usage guidance.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 9251412412</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>

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

export async function generateStaticParams() {
  return Object.keys(equipmentData).map((slug) => ({
    slug,
  }))
}
