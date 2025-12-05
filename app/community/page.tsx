import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the NUVYLUX movement. Connect with creators, access masterclasses, and be part of a global community shaping the future of beauty and fashion.",
};

const benefits = [
  {
    title: "Creator Spotlights",
    description:
      "Get featured across our platforms and gain visibility for your work.",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
  {
    title: "Masterclasses",
    description:
      "Learn from industry experts through exclusive workshops and tutorials.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Mentorship",
    description:
      "Connect with experienced professionals for guidance and career advice.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Networking Events",
    description:
      "Attend exclusive online and in-person events to expand your network.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Resources Library",
    description:
      "Access templates, guides, and tools to help grow your business.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Exclusive Discounts",
    description:
      "Get special pricing on products, services, and partner offerings.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const upcomingEvents = [
  {
    title: "Beauty Tech Trends 2026",
    date: "January 15, 2026",
    type: "Masterclass",
    speaker: "Industry Experts Panel",
  },
  {
    title: "Building Your Personal Brand",
    date: "January 22, 2026",
    type: "Workshop",
    speaker: "Hannah Chika Diei",
  },
  {
    title: "NUVYLUX Creator Meetup",
    date: "February 5, 2026",
    type: "Networking",
    speaker: "Lagos, Nigeria",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              NUVYLUX Community
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Join the Movement
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed mb-8">
              Connect with creators, learn from industry experts, and be part of
              a global community shaping the future of beauty, fashion, and
              innovation.
            </p>
            <Button size="lg" asChild>
              <Link href="#join">Apply to Join</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Community Benefits
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to grow, connect, and thrive in the beauty and
              fashion industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card">
                <div className="w-12 h-12 mb-6 text-primary">
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
                      d={benefit.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="py-16 bg-[var(--foreground)] text-[var(--background)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              Spotlight
            </p>
            <h2 className="font-serif text-4xl font-bold mb-4">
              Featured Creators
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet some of the talented professionals in our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border  /30 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--primary)] flex items-center justify-center">
                <span className="font-serif text-2xl text-white">A</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-1">
                Adaeze M.
              </h3>
              <p className="text-primary text-sm mb-3">
                Makeup Artist & Educator
              </p>
              <p className="text-muted-foreground text-sm">
                &quot;NUVYLUX has connected me with clients I never would have
                reached otherwise.&quot;
              </p>
            </div>

            <div className="p-8 border  /30 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--primary)] flex items-center justify-center">
                <span className="font-serif text-2xl text-white">O</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-1">
                Oluwaseun K.
              </h3>
              <p className="text-primary text-sm mb-3">Fashion Designer</p>
              <p className="text-muted-foreground text-sm">
                &quot;The masterclasses have helped me grow both creatively and
                as a business owner.&quot;
              </p>
            </div>

            <div className="p-8 border  /30 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--primary)] flex items-center justify-center">
                <span className="font-serif text-2xl text-white">C</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-1">
                Chioma N.
              </h3>
              <p className="text-primary text-sm mb-3">Skincare Specialist</p>
              <p className="text-muted-foreground text-sm">
                &quot;Being part of this community has been transformative for
                my career.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don&apos;t miss out on our exclusive community events.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border rounded-md  "
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-[var(--primary)] text-white text-xs uppercase tracking-wide mb-2">
                    {event.type}
                  </span>
                  <h3 className="font-serif text-xl font-semibold">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {event.speaker}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-primary font-semibold">{event.date}</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Register
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section id="join" className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold mb-4">
                Apply to Become a Creator
              </h2>
              <p className="text-muted-foreground text-lg">
                Join our community of innovators and start your journey with
                NUVYLUX.
              </p>
            </div>

            <div className="bg-white p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    placeholder="First Name"
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Your Area of Expertise" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="makeup">Makeup Artistry</SelectItem>
                    <SelectItem value="hair">Hair Styling</SelectItem>
                    <SelectItem value="skincare">Skincare</SelectItem>
                    <SelectItem value="fashion">Fashion Design</SelectItem>
                    <SelectItem value="styling">Personal Styling</SelectItem>
                    <SelectItem value="nails">Nail Art</SelectItem>
                    <SelectItem value="photography">Beauty Photography</SelectItem>
                    <SelectItem value="content">Content Creation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Instagram Handle (optional)"
                />
                <Textarea
                  placeholder="Tell us about yourself and why you want to join NUVYLUX..."
                  rows={4}
                  className="resize-none"
                />
                <div className="flex items-start gap-3">
                  <Checkbox id="terms" className="mt-1" />
                  <Label
                    htmlFor="terms"
                    className="text-muted-foreground text-sm font-normal"
                  >
                    I agree to the NUVYLUX Terms of Service and Privacy Policy,
                    and consent to receiving community updates via email.
                  </Label>
                </div>
                <Button className="w-full" size="lg">
                  Submit Application
                </Button>
              </div>
              <p className="text-muted-foreground text-sm mt-6 text-center">
                Applications are reviewed weekly. We&apos;ll be in touch soon!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empowerment Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Empowering the Next Generation
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              NUVYLUX is committed to empowering women and young creators in
              beauty and tech. Through our initiatives, we provide mentorship,
              resources, and opportunities to help you build a successful career
              in the creative industries.
            </p>
            <Button asChild>
              <Link href="/about">Learn About Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
