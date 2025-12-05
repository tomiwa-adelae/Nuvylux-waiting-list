import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Skin Analysis",
  description:
    "Experience personalized beauty intelligence with NUVYLUX AI Skin Analysis. Upload a photo to analyze your skin type and get personalized product recommendations.",
};

const features = [
  {
    title: "Skin Type Detection",
    description:
      "Advanced AI analyzes your skin to determine your unique skin type — oily, dry, combination, or sensitive.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Concern Identification",
    description:
      "Identify skin concerns like acne, hyperpigmentation, fine lines, or uneven texture for targeted solutions.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    title: "Product Recommendations",
    description:
      "Get personalized product suggestions based on your unique skin profile and concerns.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Routine Builder",
    description:
      "Build a customized skincare routine with morning and evening recommendations tailored to you.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Upload Your Photo",
    description:
      "Take a clear, well-lit selfie without makeup for the most accurate analysis.",
  },
  {
    step: 2,
    title: "AI Analysis",
    description:
      "Our advanced AI technology analyzes your skin in seconds, identifying your unique characteristics.",
  },
  {
    step: 3,
    title: "Get Your Results",
    description:
      "Receive a detailed report with your skin type, concerns, and personalized recommendations.",
  },
];

export default function AISkinAnalysisPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              NUVYLUX AI
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Smart Skin, Smarter Beauty
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed mb-8">
              Experience personalized beauty intelligence powered by advanced AI
              technology. Upload a photo to analyze your skin type and get
              tailored product recommendations.
            </p>
            <Button size="lg" asChild>
              <Link href="#upload">Try AI Analysis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">
              What Our AI Can Do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powered by cutting-edge machine learning, our skin analysis
              technology provides comprehensive insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card text-center">
                <div className="w-14 h-14 mx-auto mb-6 text-primary">
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
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get your personalized skin analysis in three simple steps.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-serif text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold mb-4">Try It Now</h2>
              <p className="text-muted-foreground text-lg">
                Upload a clear photo of your face to get started with your
                personalized skin analysis.
              </p>
            </div>

            {/* Upload Box */}
            <div className="border-2 border-dashed   p-12 text-center rounded-lg hover:border-[var(--primary)] transition-colors">
              <div className="w-16 h-16 mx-auto mb-6 text-muted-foreground">
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
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-muted-foreground mb-4">
                Drag and drop your photo here, or click to browse
              </p>
              <Button variant="outline">Choose File</Button>
              <p className="text-muted-foreground text-sm mt-4">
                Supported formats: JPG, PNG, HEIC (max 10MB)
              </p>
            </div>

            {/* Coming Soon Notice */}
            <div className="mt-8 p-6 bg-secondary text-center">
              <p className="text-primary font-semibold mb-2">
                Full AI Analysis Coming Soon
              </p>
              <p className="text-muted-foreground text-sm">
                We&apos;re currently in Phase 2 development. Sign up to be
                notified when our AI skin analysis tool launches.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>Notify Me</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-16 bg-[var(--foreground)] text-[var(--background)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Your Privacy Matters
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We take your privacy seriously. Your photos are processed securely
              and are never stored permanently or shared with third parties. All
              analysis is performed using encrypted connections and your data is
              deleted immediately after processing.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 border rounded-md  /30">
                <h3 className="font-serif text-xl mb-3 text-primary">
                  Encrypted
                </h3>
                <p className="text-muted-foreground text-sm">
                  End-to-end encryption for all data transfers
                </p>
              </div>
              <div className="p-6 border rounded-md  /30">
                <h3 className="font-serif text-xl mb-3 text-primary">
                  No Storage
                </h3>
                <p className="text-muted-foreground text-sm">
                  Photos deleted immediately after analysis
                </p>
              </div>
              <div className="p-6 border rounded-md  /30">
                <h3 className="font-serif text-xl mb-3 text-primary">
                  GDPR Compliant
                </h3>
                <p className="text-muted-foreground text-sm">
                  Full compliance with data protection regulations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Want Personalized Recommendations Now?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Connect with our verified beauty professionals for a personalized
            consultation while you wait for our AI tool to launch.
          </p>
          <Button size="lg" asChild>
            <Link href="/marketplace">Find a Professional</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
