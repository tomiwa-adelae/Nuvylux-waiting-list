"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const waitlistSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  userType: z.enum(["customer", "creator", "brand", "investor"], {
    message: "Please select how you'd like to join",
  }),
  brandName: z.string().optional(),
  instagram: z.string().optional(),
  message: z.string().optional(),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      userType: undefined,
      brandName: "",
      instagram: "",
      message: "",
    },
  });

  const userType = form.watch("userType");

  async function onSubmit(data: WaitlistFormValues) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSubmitted(true);
      toast.success("You're on the list!", {
        description: "We'll be in touch soon with exclusive updates.",
      });
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 mx-auto mb-6 rounded-md bg-primary/10 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-primary"
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
        </div>
        <h3 className="text-2xl font-bold mb-2">Welcome to NUVYLUX!</h3>
        <p className="text-muted-foreground-foreground mb-6">
          You&apos;re officially on our exclusive waitlist. We&apos;ll send you
          updates and early access information soon.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false);
            form.reset();
          }}
        >
          Add Another Person
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Hannah" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Diei" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address *</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="hello@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number *</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+234 800 000 0000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="userType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>I want to join as *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select how you'd like to join" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="customer">
                    Customer — I want to discover beauty & fashion services
                  </SelectItem>
                  <SelectItem value="creator">
                    Creator — I&apos;m a beauty/fashion professional
                  </SelectItem>
                  <SelectItem value="brand">
                    Brand — I represent a beauty/fashion brand
                  </SelectItem>
                  <SelectItem value="investor">
                    Investor — I&apos;m interested in partnership opportunities
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {(userType === "creator" || userType === "brand") && (
          <FormField
            control={form.control}
            name="brandName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {userType === "brand" ? "Brand Name" : "Business Name"}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={
                      userType === "brand"
                        ? "Your brand name"
                        : "Your business or stage name"
                    }
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {userType === "brand"
                    ? "The official name of your brand"
                    : "The name you're known by professionally"}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {(userType === "creator" || userType === "brand") && (
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instagram Handle</FormLabel>
                <FormControl>
                  <Input placeholder="@yourhandle" {...field} />
                </FormControl>
                <FormDescription>So we can check out your work</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Anything else you&apos;d like us to know?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about yourself, your expectations, or any questions you have..."
                  className="resize-none"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Joining...
            </>
          ) : (
            "Join the Waitlist"
          )}
        </Button>

        <p className="text-xs text-muted-foreground-foreground text-center">
          By joining, you agree to receive updates about NUVYLUX. We respect
          your privacy and will never share your information.
        </p>
      </form>
    </Form>
  );
}
