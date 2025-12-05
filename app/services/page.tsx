import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore NUVYLUX services for creators, customers, and brands. From visibility tools to AI-driven beauty consultations and partnership opportunities.",
};

const services = {
  creators: [
    {
      title: "Visibility & Growth",
      description:
        "Get discovered by customers looking for your expertise. Build your professional profile and showcase your portfolio.",
    },
    {
      title: "Data & Analytics",
      description:
        "Access insights about your business performance, customer preferences, and growth opportunities.",
    },
    {
      title: "Booking Management",
      description:
        "Streamlined scheduling and appointment management to help you focus on what you do best.",
    },
    {
      title: "Community Access",
      description:
        "Join a network of professionals, access masterclasses, and participate in exclusive events.",
    },
  ],
  customers: [
    {
      title: "Verified Professionals",
      description:
        "Connect with trusted beauty and fashion experts, all vetted and reviewed by our community.",
    },
    {
      title: "AI-Powered Matching",
      description:
        "Get personalized recommendations based on your preferences, skin type, and style goals.",
    },
    {
      title: "Virtual Consultations",
      description:
        "Access expert advice from anywhere with our seamless video consultation platform.",
    },
    {
      title: "Secure Booking",
      description:
        "Book appointments with confidence through our protected payment and scheduling system.",
    },
  ],
  brands: [
    {
      title: "Digital Strategy",
      description:
        "Comprehensive digital marketing strategies tailored for beauty and fashion brands.",
    },
    {
      title: "Content Creation",
      description:
        "High-quality editorial content, photoshoots, and campaign materials that elevate your brand.",
    },
    {
      title: "Influencer Partnerships",
      description:
        "Connect with our network of verified creators and influencers for authentic collaborations.",
    },
    {
      title: "Technology Integration",
      description:
        "Leverage our AI and tech solutions to enhance your customer experience.",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              What We Offer
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Connecting Beauty & Innovation
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Professional offerings for creators, customers, and brands — all
              designed to elevate your experience in the world of beauty and
              fashion.
            </p>
          </div>
        </div>
      </section>

      {/* For Creators */}
      <section id="creators" className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
                For Creators
              </p>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Grow Your Business
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Whether you&apos;re a makeup artist, hairstylist, fashion
                designer, or beauty entrepreneur, NUVYLUX provides the tools and
                platform to showcase your talent and connect with clients.
              </p>
              <Button>
                <Link href="/contact">Become a Creator</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.creators.map((service) => (
                <div key={service.title} className="p-6 border rounded-md  ">
                  <h3 className="font-serif text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Customers */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.customers.map((service) => (
                <div key={service.title} className="p-6 bg-white">
                  <h3 className="font-serif text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
                For Customers
              </p>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Discover Excellence
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Find and book trusted beauty and fashion professionals. From
                personalized AI recommendations to verified reviews, we make it
                easy to discover the perfect expert for your needs.
              </p>
              <Button asChild>
                <Link href="/marketplace">Explore Marketplace</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* For Brands */}
      <section id="brands" className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
                For Brands
              </p>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Elevate Your Presence
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Partner with NUVYLUX to access our creative agency services.
                From digital strategy to content creation and influencer
                partnerships, we help beauty and fashion brands thrive in the
                digital age.
              </p>
              <Button asChild>
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.brands.map((service) => (
                <div key={service.title} className="p-6 border rounded-md">
                  <h3 className="font-serif text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NUVYLUX App */}
      <section className="py-16 bg-[var(--foreground)] text-[var(--background)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              Coming Soon
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              The NUVYLUX App
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Your complete beauty and fashion ecosystem in one place. Book
              services, shop curated products, connect with professionals, and
              access AI-powered beauty tools — all from your phone.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              <div className="p-6 border rounded-md  /30">
                <h3 className="font-serif text-xl mb-3 text-primary">Beauty</h3>
                <p className="text-muted-foreground text-sm">
                  Book makeup artists, hairstylists, nail techs, and
                  estheticians
                </p>
              </div>
              <div className="p-6 border rounded-md  /30">
                <h3 className="font-serif text-xl mb-3 text-primary">
                  Fashion
                </h3>
                <p className="text-muted-foreground text-sm">
                  Browse, rent, or buy curated designer and streetwear fashion
                </p>
              </div>
              <div className="p-6 border rounded-md  /30">
                <h3 className="font-serif text-xl mb-3 text-primary">
                  Skincare
                </h3>
                <p className="text-muted-foreground text-sm">
                  Shop trusted skincare, haircare, and wellness products
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Button variant="outline" size="lg">
                <Link href="/contact">Get Early Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a creator, customer, or brand, there&apos;s a
            place for you in the NUVYLUX ecosystem.
          </p>
          <Button size="lg">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
