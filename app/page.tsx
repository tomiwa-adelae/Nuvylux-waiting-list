import { Card, CardContent } from "@/components/ui/card";
import WaitlistForm from "@/components/WaitlistForm";
import Image from "next/image";

const features = [
  {
    title: "AI-Powered Beauty",
    description:
      "Personalized skin analysis and product recommendations using cutting-edge AI technology.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Verified Professionals",
    description:
      "Connect with trusted makeup artists, hairstylists, and beauty experts in your area.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Seamless Booking",
    description:
      "Book appointments, consultations, and services with just a few taps.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Creator Community",
    description:
      "Join a global network of beauty and fashion creators, access masterclasses and grow together.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "5", label: "Divisions" },
  { value: "3", label: "Cities" },
  { value: "2026", label: "Launch Year" },
];

const teamMembers = [
  { name: "Hannah Diei", role: "CEO", photo: "/assets/ceo.jpg" },
  { name: "Ayo Odunayo", role: "CFO", photo: "/assets/cfo.jpg" },
  { name: "", role: "CMO", photo: "/assets/cmo.jpg" },
  { name: "Adaeze Pearl Muoghalu", role: "CCO", photo: "/assets/cco.jpg" },
  { name: "Nkechi Adaosi Agugua", role: "PM", photo: "/assets/pm.jpg" },
  { name: "Esomovie Rita", role: "OM", photo: "/assets/om.jpg" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 gradient-overlay" />

        <div className="px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 mb-6 border border-primary/30 bg-primary/5 rounded-full">
              <span className="text-primary text-sm font-medium">
                Coming Soon — Join the Waitlist
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              NUVYLUX
            </h1>

            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-8">
              The New Light of Luxury
            </p>

            <p className="text-xl md:text-2xl text-muted-foreground-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Redefining beauty, fashion, and innovation for the modern world.
              Where creativity meets technology, and culture inspires evolution.
            </p>

            <a
              href="#waitlist"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Join the Waitlist
              <svg
                className="ml-2 w-4 h-4 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              About NUVYLUX
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The New Light of Luxury
            </h2>
            <p className="text-muted-foreground-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              NUVYLUX is a visionary house redefining beauty, fashion, and
              innovation for the modern world. Born from the belief that true
              luxury begins within, we blend artistry, culture, and technology
              to illuminate a new era of elegance.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground-foreground text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Brand Meaning */}
          <div className="grid md:grid-cols-3 gap-2">
            <div className="text-center p-6 border rounded-md border-border bg-background rounded-md">
              <h3 className="text-xl mb-2 text-primary">Newness</h3>
              <p className="text-muted-foreground-foreground text-sm">
                Innovation, rebirth, forward thinking
              </p>
            </div>
            <div className="text-center p-6 border rounded-md border-border bg-background rounded-md">
              <h3 className="text-xl font-semibold mb-2 text-primary">Light</h3>
              <p className="text-muted-foreground-foreground text-sm">
                Brilliance, creativity, empowerment
              </p>
            </div>
            <div className="text-center p-6 border rounded-md border-border bg-background rounded-md">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Luxury
              </h3>
              <p className="text-muted-foreground-foreground text-sm">
                Refinement, excellence, quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              What&apos;s Coming
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The NUVYLUX Ecosystem
            </h2>
            <p className="text-muted-foreground-foreground text-lg">
              A complete platform connecting beauty, fashion, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-border hover:border-primary/50 transition-colors"
              >
                <CardContent>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate group of professionals dedicated to connecting beauty
              and innovation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                {/* <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-md object-cover mb-4"
                /> */}
                <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                  <Image
                    width={1000}
                    height={1000}
                    src={member.photo || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-16 sm:py-20 lg:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-6 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl leading-relaxed mb-6 italic">
              I created NUVYLUX because I&apos;ve always believed that luxury is
              more than appearance — it&apos;s transformation.
            </blockquote>
            <cite className="not-italic">
              <span className="text-primary font-semibold">
                Hannah Chika Diei
              </span>
              <span className="text-muted-foreground-foreground block mt-1">
                Founder, NUVYLUX
              </span>
            </cite>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
                Be the First
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join the Waitlist
              </h2>
              <p className="text-muted-foreground-foreground text-lg">
                Be among the first to experience NUVYLUX. Get early access,
                exclusive updates, and special launch offers.
              </p>
            </div>

            <Card className="border-border">
              <CardContent className="p-8">
                <WaitlistForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
