import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NUVYLUX - a visionary house redefining beauty, fashion, and innovation for the modern world. Founded by Hannah Chika Diei.",
};

const timeline = [
  {
    phase: "Phase 1",
    title: "Foundation",
    duration: "Year 1-2",
    description:
      "NUVYLUX Agency launches — digital services, branding, content, and campaigns. Building credibility and early revenue.",
  },
  {
    phase: "Phase 2",
    title: "Growth",
    duration: "Year 2-3",
    description:
      "NUVYLUX Academy launches — beauty and innovation masterclasses. Building brand authority and community growth.",
  },
  {
    phase: "Phase 3",
    title: "Expansion",
    duration: "Year 3-5",
    description:
      "NUVYLUX Fashion & BeautyTech — digital fashion, AI beauty tools, smart cosmetics. Brand expansion and global visibility.",
  },
  {
    phase: "Phase 4",
    title: "Innovation Dominance",
    duration: "Year 5+",
    description:
      "NUVYLUX Labs — research, AI development, partnerships, global collaborations. Innovation leadership and investor appeal.",
  },
];

const divisions = [
  {
    name: "NUVYLUX BeautyTech",
    description:
      "Digital platforms & apps connecting users with beauty professionals, virtual consultations, and AI skin analysis.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    name: "NUVYLUX Fashion",
    description:
      "A digital-first fashion brand blending innovation, culture, and design with collections, collaborations, and virtual styling.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "NUVYLUX Academy",
    description:
      "Teaching modern beauty, fashion, and tech with masterclasses, online certifications, and mentorship programs.",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
  },
  {
    name: "NUVYLUX Agency",
    description:
      "Creative agency for beauty/fashion brands offering digital strategy, content creation, and marketing solutions.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    name: "NUVYLUX Labs",
    description:
      "The innovation hub developing digital tools, brand tech solutions, AI models, and research for creative industries.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
];

const brandPillars = [
  {
    title: "Beauty",
    description: "Artistry, elegance, transformation",
    color: "var(--primary)",
  },
  {
    title: "Fashion",
    description: "Identity, creativity, culture",
    color: "var(--primary)",
  },
  {
    title: "Tech",
    description: "Innovation, smart systems, scalability",
    color: "var(--primary)",
  },
  {
    title: "Education",
    description: "Empowerment, growth, mentorship",
    color: "var(--primary)",
  },
  {
    title: "Agency",
    description: "Professionalism, influence, global reach",
    color: "var(--primary)",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              The New Light of Luxury
            </h1>
            <p className="text-muted-foreground-foreground text-xl leading-relaxed">
              NUVYLUX is a visionary house redefining beauty, fashion, and
              innovation for the modern world. This is not just a brand —
              it&apos;s a movement for modern elegance powered by technology and
              purpose.
            </p>
          </div>
        </div>
      </section>

      {/* What We Represent */}
      <section className="py-16">
        <div className="container px-6">
          <div className="text-center mb-8">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              The Foundation
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              What NUVYLUX Represents
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We&apos;re building a powerhouse company that merges beauty,
              fashion, tech, creativity, education, and innovation into one
              ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-2">
            {brandPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 border rounded-md text-center hover:border-primary transition-colors rounded-md"
              >
                <h3 className="font-serif text-xl font-semibold mb-2 text-primary">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To illuminate a new era of beauty and innovation, where
                creativity, technology, and culture merge to redefine modern
                luxury. We envision a world where sophistication and strength
                coexist, where technology amplifies creativity rather than
                replacing it.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To connect creators and customers through technology that
                simplifies discovery, booking, and growth. We exist to remind
                people — especially women and young creators — that the future
                of beauty and fashion will be built by those who dare to dream
                differently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Name Origin Story */}
      <section className="py-16 bg-secondary text-[var(--background)]">
        <div className="container mx-auto px-6">
          <div>
            <div className="text-center mb-4">
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
                The Name
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                How NUVYLUX Was Born
              </h2>
              <p className="text-muted-foreground max-w-4xl mx-auto text-lg mb-8">
                Pronounced{" "}
                <span className="text-primary font-semibold">NEW-vee-luhx</span>
                , our name is a fusion of powerful concepts designed to create
                something unique, sophisticated, and global.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="p-8 border border-border rounded-md">
                <h3 className="font-serif text-2xl mb-4">The Roots</h3>
                <p className="text-muted-foreground mb-4">
                  NUVYLUX combines three powerful concepts:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">NUVY</span>
                    <span>
                      From &quot;new&quot; + &quot;vena&quot; (energy/vein) —
                      innovation, rebirth, creative flow
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">LUX</span>
                    <span>
                      From Latin for &quot;light&quot; and &quot;luxury&quot; —
                      brilliance, refinement, excellence
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-8 border border-border rounded-md">
                <h3 className="font-serif text-2xl mb-4">The Meaning</h3>
                <p className="text-muted-foreground mb-6">
                  Together, NUVYLUX means{" "}
                  <span className="text-primary font-semibold">
                    &quot;The New Light of Luxury&quot;
                  </span>{" "}
                  — representing intelligent beauty and innovation for the
                  modern age.
                </p>
                <p className="text-muted-foreground text-sm">
                  A name that could sit beside Fenty, Dior, or Tesla, but sounds
                  original and powerful — bold, elegant, and easy to remember.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-2 text-center">
              <div className="p-6 border rounded-md border-border rounded-md">
                <h4 className="font-serif text-xl mb-2 text-primary">
                  Newness
                </h4>
                <p className="text-muted-foreground text-sm">
                  Innovation, rebirth, forward thinking
                </p>
              </div>
              <div className="p-6 border rounded-md border-border rounded-md">
                <h4 className="font-serif text-xl mb-2 text-primary">Light</h4>
                <p className="text-muted-foreground text-sm">
                  Brilliance, creativity, empowerment
                </p>
              </div>
              <div className="p-6 border rounded-md border-border rounded-md">
                <h4 className="font-serif text-xl mb-2 text-primary">Luxury</h4>
                <p className="text-muted-foreground text-sm">
                  Refinement, excellence, quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Market Position */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
                Our Position
              </p>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Tech-Driven Luxury with Cultural Depth
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                NUVYLUX occupies a premium segment in the global market. Rooted
                in African brilliance and driven by purpose, we connect with
                audiences worldwide.
              </p>
              <ul className="space-y-4">
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
                    <strong>Global beauty & fashion enthusiasts</strong> seeking
                    authentic luxury
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
                    <strong>Creatives & entrepreneurs</strong> building their
                    brands
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
                    <strong>Luxury consumers</strong> seeking authenticity with
                    innovation
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
                    <strong>Investors</strong> attracted to innovation & culture
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary p-8 lg:p-12 rounded-md">
              <h3 className="font-serif text-2xl font-semibold mb-6">
                What Makes Us Future-Proof
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">01</span> Digital-First DNA
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Perfect for the global online economy and modern consumers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">02</span> Innovation Core
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Built to adapt to trends — AI beauty tools, digital fashion,
                    and beyond.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">03</span> Emotional
                    Foundation
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Connected to identity, empowerment, and creativity — values
                    that don&apos;t expire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The NUVYLUX Empire */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              The Empire
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Five Powerful Arms
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our ecosystem is built on five divisions that work together to
              deliver a complete luxury experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {divisions.map((division) => (
              <div key={division.name} className="card bg-white rounded-md p-6">
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
                      d={division.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {division.name}
                </h3>
                <p className="text-muted-foreground">{division.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              The Founder
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
              Hannah Chika Diei
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I created NUVYLUX because I&apos;ve always believed that luxury
                is more than appearance — it&apos;s transformation.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I saw a world where beauty, fashion, and innovation often walked
                separate paths, and I wanted to merge them — to create something
                that reflects the brilliance of modern Africa and the boundless
                power of new ideas.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                NUVYLUX was born from that vision — a name that means the new
                light of luxury. A movement that redefines what elegance looks
                like in the digital age. A brand that speaks of innovation,
                culture, and purpose.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We exist to remind people, especially women and young creators,
                that sophistication and strength can coexist. That technology
                can amplify creativity, not replace it. That the future of
                beauty and fashion will be built by those who dare to dream
                differently.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Because luxury is not just what you wear. It&apos;s how you
                create, think, and lead. And this is only the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Vision */}
      <section className="py-16 bg-muted text-[var(--background)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              The Vision
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Building a Legacy
            </h2>
            <p className="text-muted-foreground text-lg">
              In 10 years, NUVYLUX will evolve into a global creative house
              bridging luxury, culture, and innovation. That&apos;s legacy-level
              positioning.
            </p>
          </div>

          <div>
            {timeline.map((item, index) => (
              <div
                key={item.phase}
                className="flex gap-8 pb-12 last:pb-0 relative"
              >
                {/* Timeline Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-secondary/30" />
                )}

                {/* Timeline Dot */}
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <span className="text-primary text-sm uppercase tracking-wide">
                    {item.phase} — {item.duration}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Be part of a community that&apos;s redefining beauty, fashion, and
            innovation for the modern world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/community">Join the Community</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
