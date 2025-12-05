import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketplace",
  description:
    "Explore verified beauty and fashion professionals on NUVYLUX Marketplace. Find makeup artists, hairstylists, skincare experts, and more near you.",
};

const categories = [
  {
    name: "Makeup",
    count: "150+ Professionals",
    description: "Bridal, editorial, special events, everyday glam",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    name: "Hair",
    count: "200+ Professionals",
    description: "Styling, braiding, coloring, treatments, extensions",
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    name: "Skincare",
    count: "100+ Professionals",
    description: "Facials, treatments, consultations, product advice",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Styling",
    count: "80+ Professionals",
    description: "Personal styling, wardrobe consulting, image makeovers",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    name: "Nails",
    count: "120+ Professionals",
    description: "Manicures, pedicures, nail art, gel, acrylics",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  },
  {
    name: "Brands",
    count: "50+ Verified",
    description: "Curated beauty and fashion brands you can trust",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

const featuredProfessionals = [
  {
    name: "Amara O.",
    specialty: "Bridal Makeup Artist",
    location: "Lagos",
    rating: 4.9,
    reviews: 127,
  },
  {
    name: "Chidi N.",
    specialty: "Celebrity Hairstylist",
    location: "Abuja",
    rating: 5.0,
    reviews: 89,
  },
  {
    name: "Nneka E.",
    specialty: "Skincare Specialist",
    location: "Port Harcourt",
    rating: 4.8,
    reviews: 64,
  },
  {
    name: "Tunde A.",
    specialty: "Fashion Stylist",
    location: "Lagos",
    rating: 4.9,
    reviews: 112,
  },
];

export default function MarketplacePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              NUVYLUX Marketplace
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Find Your Perfect Match
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed mb-8">
              Explore verified beauty and fashion professionals near you. From
              makeup artists to stylists, find trusted experts for every
              occasion.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="What service are you looking for?"
                  className="flex-1"
                />
                <Input
                  type="text"
                  placeholder="Location"
                  className="sm:w-40"
                />
                <Button>Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Browse Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover professionals and brands across all areas of beauty and
              fashion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="card group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 text-primary shrink-0">
                    <svg
                      className="w-full h-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={category.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-primary text-sm mb-2">
                      {category.count}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Featured Professionals
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Top-rated experts trusted by our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProfessionals.map((pro) => (
              <div key={pro.name} className="bg-white p-6 text-center">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-serif text-2xl text-white">
                    {pro.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-1">
                  {pro.name}
                </h3>
                <p className="text-primary text-sm mb-2">{pro.specialty}</p>
                <p className="text-muted-foreground text-sm mb-3">
                  {pro.location}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">{pro.rating}</span>
                  <span className="text-muted-foreground text-sm">
                    ({pro.reviews} reviews)
                  </span>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  View Profile
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Professionals */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
                For Professionals
              </p>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Join Our Verified Network
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Are you a beauty or fashion professional? Join NUVYLUX to
                connect with clients, grow your business, and be part of a
                community that celebrates excellence.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-muted-foreground">
                    Verified badge to build trust with clients
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-muted-foreground">
                    Booking management and payment processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-muted-foreground">
                    Analytics and insights to grow your business
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-muted-foreground">
                    Access to exclusive events and masterclasses
                  </span>
                </li>
              </ul>
              <Button>
                <Link href="/contact">Apply to Get Verified</Link>
              </Button>
            </div>

            <div className="bg-secondary p-8">
              <h3 className="font-serif text-2xl font-semibold mb-6">
                Quick Application
              </h3>
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Your Specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="makeup">Makeup Artist</SelectItem>
                    <SelectItem value="hair">Hairstylist</SelectItem>
                    <SelectItem value="skincare">Skincare Specialist</SelectItem>
                    <SelectItem value="styling">Fashion Stylist</SelectItem>
                    <SelectItem value="nails">Nail Technician</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Location (City)"
                />
                <Button className="w-full">Submit Application</Button>
              </div>
              <p className="text-muted-foreground text-sm mt-4 text-center">
                We&apos;ll review your application within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--foreground)] text-[var(--background)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Discover?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of customers who have found their perfect beauty and
            fashion professionals through NUVYLUX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Browse Professionals</Button>
            {/* <Button
              href="/ai-skin-analysis"
              variant="outline"
              size="lg"
              className="border-[var(--background)] text-[var(--background)] hover:bg-[var(--background)] hover:text-[var(--foreground)]"
            >
              Try AI Matching
            </Button> */}
          </div>
        </div>
      </section>
    </>
  );
}
