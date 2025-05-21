import Image from "next/image";
import TopBar from "@/components/TopBar";
import {
  CheckCircle,
  User,
  HandshakeIcon,
  Users,
  BookOpen,
  QuoteIcon,
  Share2,
  ArrowRight,
  Calendar,
  MessageSquare,
} from "lucide-react";

// Define constants for repeated values
const PRIMARY_COLOR = "#14294b";
const SECONDARY_COLOR = "#1a2d5a";
const ACCENT_COLOR = "#e9e5f8";

export default function AboutUsSection() {
  return (
    <>
      <TopBar title="About Us" />
      {/* About Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/assets/landing-page/Student.png"
                  alt="Student with tablet"
                  width={300}
                  height={400}
                  className="object-cover w-full h-full rounded-md"
                />
                <Image
                  src="/assets/landing-page/Students.png"
                  alt="Group of students"
                  width={300}
                  height={400}
                  className="object-cover w-full h-full mt-12 rounded-md"
                />
                {/* Experience Badge */}
                <div className="absolute z-10 -translate-x-1/2 top-1/4 left-1/2">
                  <div
                    className="flex flex-col items-center justify-center w-32 h-32 text-white rounded-full"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                  >
                    <span className="text-3xl font-bold">8+</span>
                    <span className="text-sm leading-tight text-center">
                      Years of <br /> Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <span
                className="text-sm font-medium tracking-wider uppercase"
                style={{ color: PRIMARY_COLOR }}
              >
                About Us
              </span>
              <h2
                className="text-3xl font-bold md:text-4xl leading-tight"
                style={{ color: PRIMARY_COLOR }}
              >
                Benefit From Our Online Application Form
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
                <div>
                  <h3
                    className="mb-2 font-bold"
                    style={{ color: PRIMARY_COLOR }}
                  >
                    Our Mission
                  </h3>
                  <p className="text-sm text-gray-600">
                    Suspendisse ultrice gravida dictum fusce placerat ultricies
                    integer quis auctor elit sed vulputate mi sit.
                  </p>
                </div>
                <div>
                  <h3
                    className="mb-2 font-bold"
                    style={{ color: PRIMARY_COLOR }}
                  >
                    Our Vision
                  </h3>
                  <p className="text-sm text-gray-600">
                    Suspendisse ultrice gravida dictum fusce placerat ultricies
                    integer quis auctor elit sed vulputate mi sit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container py-16 px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 rounded-md bg-[#e9e5f8]">
                <p
                  className="text-sm font-medium"
                  style={{ color: SECONDARY_COLOR }}
                >
                  Why Choose Us
                </p>
              </span>
              <div className="flex justify-end mr-16">
                <svg
                  width="80"
                  height="20"
                  viewBox="0 0 80 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M0 10C5 5 10 15 15 10C20 5 25 15 30 10C35 5 40 15 45 10C50 5 55 15 60 10C65 5 70 15 75 10C80 5 85 15 90 10"
                    stroke="#8B83BA"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h2
                className="relative text-3xl font-bold md:text-4xl leading-tight"
                style={{ color: SECONDARY_COLOR }}
              >
                Creating A Community Of <br /> Life Long Learners
                <span
                  className="absolute w-[180px] h-[2px] rounded -bottom-1 left-[100px]"
                  style={{ backgroundColor: SECONDARY_COLOR }}
                ></span>
                <span style={{ color: SECONDARY_COLOR }}>.</span>
              </h2>
              <p className="max-w-xl text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
                {[
                  {
                    title: "World Class Colleges",
                    description:
                      "Gravida dictum fusce placerat ultricies integer",
                  },
                  {
                    title: "Easy Learning",
                    description:
                      "Gravida dictum fusce placerat ultricies integer",
                  },
                  {
                    title: "Flexible",
                    description:
                      "Gravida dictum fusce placerat ultricies integer",
                  },
                  {
                    title: "Affordable Price",
                    description:
                      "Gravida dictum fusce placerat ultricies integer",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-md"
                    style={{ backgroundColor: ACCENT_COLOR }}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        className="w-5 h-5 mt-0.5"
                        style={{ color: SECONDARY_COLOR }}
                      />
                      <h3
                        className="font-semibold"
                        style={{ color: SECONDARY_COLOR }}
                      >
                        {feature.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 ml-8">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image with Dot Pattern */}
          <div className="relative w-full md:w-1/2">
            <div className="absolute z-0 -top-8 -right-8 w-full h-full">
              <div className="grid grid-cols-10 gap-4">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
                ))}
              </div>
            </div>
            <Image
              src="/assets/landing-page/LifeLongLearners.png"
              alt="Students in computer lab"
              width={500}
              height={600}
              className="relative z-10 object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="py-12 md:py-24 flex items-center justify-center p-4">
        <div
          className="w-full max-w-6xl py-8 px-6 rounded-full md:px-12"
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            {[
              {
                icon: User,
                value: "3K+",
                label: "Successfully Trained",
              },
              {
                icon: HandshakeIcon,
                value: "15K+",
                label: "Classes Completed",
              },
              {
                icon: Users,
                value: "97K+",
                label: "Satisfaction Rate",
                extra: (
                  <span className="absolute -top-1 -right-1 text-[#152042]">
                    ★
                  </span>
                ),
              },
              {
                icon: BookOpen,
                value: "102K+",
                label: "Students Community",
              },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 p-3 bg-white rounded-full">
                  <div className="relative">
                    <stat.icon className="w-7 h-7 text-[#152042]" />
                    {stat.extra}
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-white">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#f5f3fa] relative overflow-hidden">
        {/* Book Background */}
        <div className="absolute inset-0 z-0 flex items-end justify-center opacity-10 pb-20">
          <svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform scale-125"
          >
            {/* Book cover */}
            <path
              d="M150 150H450V450H150V150Z"
              fill="#1a2d5a"
              stroke="#1a2d5a"
              strokeWidth="8"
            />

            {/* Book pages */}
            <path
              d="M150 150C120 160 100 170 100 200V500C100 530 120 540 150 550H450C480 540 500 530 500 500V200C500 170 480 160 450 150H150Z"
              fill="#f8f8f8"
              stroke="#1a2d5a"
              strokeWidth="4"
            />

            {/* Book spine */}
            <path d="M150 150V550" stroke="#1a2d5a" strokeWidth="8" />

            {/* Book lines */}
            <path
              d="M200 200H400"
              stroke="#1a2d5a"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M200 230H400"
              stroke="#1a2d5a"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M200 260H400"
              stroke="#1a2d5a"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M200 290H400"
              stroke="#1a2d5a"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M200 320H400"
              stroke="#1a2d5a"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M200 350H400"
              stroke="#1a2d5a"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M200 380H400"
              stroke="#1a2d5a"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M200 410H400"
              stroke="#1a2d5a"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Book title */}
            <path d="M250 180H350" stroke="#ffffff" strokeWidth="4" />

            {/* Book bookmark */}
            <path
              d="M400 150V200L420 180L440 200V150"
              fill="#e9e5f8"
              stroke="#1a2d5a"
              strokeWidth="2"
            />
          </svg>
        </div>

        <section className="container mx-auto py-20 px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-[#e9e5f8] rounded-md mb-6">
              <p className="text-sm font-medium text-[#1a2d5a]">TESTIMONIAL</p>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2d5a] leading-tight mb-12">
              Creating A Community Of <br />
              Life Long Learners.
            </h2>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="relative">
                <div className="absolute -left-4 top-0 text-gray-300 opacity-50">
                  <QuoteIcon size={60} />
                </div>
                <div className="rounded-lg border-2 border-gray-300 p-6 relative backdrop-blur-sm bg-white/5">
                  <p className="text-gray-700 mb-6">
                    "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Orci nulla
                    pellentesque dignissim enim. Amet consectetur adipiscing"
                  </p>
                  <div>
                    <h4 className="font-bold text-[#1a2d5a]">Kathy Sullivan</h4>
                    <p className="text-gray-600 text-sm">CEO at ordian it</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="relative">
                <div className="absolute -left-4 top-0 text-gray-300 opacity-50">
                  <QuoteIcon size={60} />
                </div>
                <div className="rounded-lg border-2 border-gray-300 p-6 relative backdrop-blur-sm bg-white/5">
                  <p className="text-gray-700 mb-6">
                    "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Orci nulla
                    pellentesque dignissim enim. Amet consectetur adipiscing"
                  </p>
                  <div>
                    <h4 className="font-bold text-[#1a2d5a]">Elsie Stroud</h4>
                    <p className="text-gray-600 text-sm">CEO at Edwards</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="relative">
                <div className="absolute -left-4 top-0 text-gray-300 opacity-50">
                  <QuoteIcon size={60} />
                </div>
                <div className="rounded-lg border-2 border-gray-300 p-6 relative backdrop-blur-sm bg-white/5">
                  <p className="text-gray-700 mb-6">
                    "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Orci nulla
                    pellentesque dignissim enim. Amet consectetur adipiscing"
                  </p>
                  <div>
                    <h4 className="font-bold text-[#1a2d5a]">Kathy Sullivan</h4>
                    <p className="text-gray-600 text-sm">CEO at ordian it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left side content */}
            <div className="w-full lg:w-1/3 space-y-6">
              <div className="inline-block px-4 py-2 bg-[#e9e5f8] rounded-md">
                <p className="text-sm font-medium text-[#1a2d5a]">OUR TEAM</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2d5a] leading-tight">
                Meet Our Expert
                <br />
                Team
              </h2>

              <p className="text-gray-600 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
                laboris..
              </p>

              <div>
                <button className="flex items-center gap-2 bg-[#1a2d5a] text-white px-6 py-3 rounded-full hover:bg-[#2a3d6a] transition-colors">
                  <span>Contact Us</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right side team grid */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Team Member 1 */}
                <div className="relative rounded-lg overflow-hidden border border-gray-200">
                  <div className="absolute top-3 right-3 bg-[#1a2d5a] text-white p-2 rounded-full z-10">
                    <Share2 size={16} />
                  </div>
                  <div className="h-80 relative">
                    <Image
                      src="/placeholder.svg?height=320&width=280"
                      alt="Zufan Elias"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-[#1a2d5a] uppercase">
                        ZUFAN ELIAS
                      </h3>
                      <p className="text-gray-600 text-sm">UNIX Designer</p>
                    </div>
                    <div className="bg-[#f0f0f0] p-2 rounded-full">
                      <ArrowRight size={16} className="text-[#1a2d5a]" />
                    </div>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="relative rounded-lg overflow-hidden border border-gray-200">
                  <div className="absolute top-3 right-3 bg-[#1a2d5a] text-white p-2 rounded-full z-10">
                    <Share2 size={16} />
                  </div>
                  <div className="h-80 relative">
                    <Image
                      src="/placeholder.svg?height=320&width=280"
                      alt="Nebiyu Daniel"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-[#1a2d5a] uppercase">
                        NEBIYU DANIEL
                      </h3>
                      <p className="text-gray-600 text-sm">
                        CEO And Fullstack Developer
                      </p>
                    </div>
                    <div className="bg-[#f0f0f0] p-2 rounded-full">
                      <ArrowRight size={16} className="text-[#1a2d5a]" />
                    </div>
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className="relative rounded-lg overflow-hidden border border-gray-200">
                  <div className="absolute top-3 right-3 bg-[#1a2d5a] text-white p-2 rounded-full z-10">
                    <Share2 size={16} />
                  </div>
                  <div className="h-80 relative">
                    <Image
                      src="/placeholder.svg?height=320&width=280"
                      alt="Tamerat Misba"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-[#1a2d5a] uppercase">
                        TAMERAT MISBA
                      </h3>
                      <p className="text-gray-600 text-sm">
                        CEO And Back-End Developer
                      </p>
                    </div>
                    <div className="bg-[#f0f0f0] p-2 rounded-full">
                      <ArrowRight size={16} className="text-[#1a2d5a]" />
                    </div>
                  </div>
                </div>

                {/* Team Member 4 */}
                <div className="relative rounded-lg overflow-hidden border border-gray-200">
                  <div className="absolute top-3 right-3 bg-[#1a2d5a] text-white p-2 rounded-full z-10">
                    <Share2 size={16} />
                  </div>
                  <div className="h-80 relative">
                    <Image
                      src="/placeholder.svg?height=320&width=280"
                      alt="Natneal Teshome"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-[#1a2d5a] uppercase">
                        NATNEAL TESHOME
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Fullstack Developer
                      </p>
                    </div>
                    <div className="bg-[#f0f0f0] p-2 rounded-full">
                      <ArrowRight size={16} className="text-[#1a2d5a]" />
                    </div>
                  </div>
                </div>

                {/* Team Member 5 */}
                <div className="relative rounded-lg overflow-hidden border border-gray-200">
                  <div className="absolute top-3 right-3 bg-[#1a2d5a] text-white p-2 rounded-full z-10">
                    <Share2 size={16} />
                  </div>
                  <div className="h-80 relative">
                    <Image
                      src="/placeholder.svg?height=320&width=280"
                      alt="Abel Mulubirhan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-[#1a2d5a] uppercase">
                        ABEL MULUBIRHAN
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Front-End Developer
                      </p>
                    </div>
                    <div className="bg-[#f0f0f0] p-2 rounded-full">
                      <ArrowRight size={16} className="text-[#1a2d5a]" />
                    </div>
                  </div>
                </div>

                {/* Team Member 6 */}
                <div className="relative rounded-lg overflow-hidden border border-gray-200">
                  <div className="absolute top-3 right-3 bg-[#1a2d5a] text-white p-2 rounded-full z-10">
                    <Share2 size={16} />
                  </div>
                  <div className="h-80 relative">
                    <Image
                      src="/placeholder.svg?height=320&width=280"
                      alt="Haileyesus Abrham"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-[#1a2d5a] uppercase">
                        HAILEYESUS ABRHAM
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Back-End Developer
                      </p>
                    </div>
                    <div className="bg-[#f0f0f0] p-2 rounded-full">
                      <ArrowRight size={16} className="text-[#1a2d5a]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="inline-block px-4 py-2 bg-[#e9e5f8] rounded-md mb-4">
                  <p className="text-sm font-medium">BLOG POST</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a2d5a]">
                  Most Popular Post.
                </h2>
              </div>
              <button className="flex items-center gap-2 bg-[#1a2d5a] text-white px-6 py-3 rounded-full hover:bg-[#2a3d6a] transition-colors">
                <span>All Blog Post</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Blog Post 1 */}
              <div className="bg-[#f5f5f5] rounded-lg overflow-hidden">
                <div className="h-56 relative">
                  <Image
                    src="/placeholder.svg?height=224&width=384"
                    alt="University Gate"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-6 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">14 June 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare size={16} />
                      <span className="text-sm">Comment (06)</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2d5a] mb-4">
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat
                  </h3>
                  <button className="flex items-center gap-2 bg-[#1a2d5a] text-white px-6 py-3 rounded-full hover:bg-[#2a3d6a] transition-colors">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-[#f5f5f5] rounded-lg overflow-hidden">
                <div className="h-56 relative">
                  <Image
                    src="/placeholder.svg?height=224&width=384"
                    alt="Students in Classroom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-6 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">21 April 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare size={16} />
                      <span className="text-sm">Comment (06)</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2d5a] mb-4">
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat
                  </h3>
                  <button className="flex items-center gap-2 bg-[#1a2d5a] text-white px-6 py-3 rounded-full hover:bg-[#2a3d6a] transition-colors">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="bg-[#f5f5f5] rounded-lg overflow-hidden">
                <div className="h-56 relative">
                  <Image
                    src="/placeholder.svg?height=224&width=384"
                    alt="Graduation Ceremony"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-6 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">14 June 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare size={16} />
                      <span className="text-sm">Comment (06)</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2d5a] mb-4">
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat
                  </h3>
                  <button className="flex items-center gap-2 bg-[#1a2d5a] text-white px-6 py-3 rounded-full hover:bg-[#2a3d6a] transition-colors">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
