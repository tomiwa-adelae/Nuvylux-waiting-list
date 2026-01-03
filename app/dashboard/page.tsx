"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { FullLoader } from "@/components/Loader";

interface WaitlistEntry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userType: string;
  brandName?: string;
  instagram?: string;
  message?: string;
  createdAt: string;
  updatedAt: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

interface Stats {
  total: number;
  byUserType?: {
    customer: number;
    creator: number;
    brand: number;
    investor: number;
  };
  bySubject?: {
    general: number;
    creator: number;
    partnership: number;
    press: number;
    support: number;
    feedback: number;
  };
  recentSignups?: number;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"waitlist" | "contact">(
    "waitlist"
  );
  const [waitlistData, setWaitlistData] = useState<WaitlistEntry[]>([]);
  const [contactData, setContactData] = useState<ContactMessage[]>([]);
  const [waitlistStats, setWaitlistStats] = useState<Stats>({ total: 0 });
  const [contactStats, setContactStats] = useState<Stats>({ total: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEntry, setSelectedEntry] = useState<
    WaitlistEntry | ContactMessage | null
  >(null);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      // Fetch waitlist data
      const waitlistResponse = await fetch("/api/waitlist");
      if (waitlistResponse.ok) {
        const waitlistJson = await waitlistResponse.json();
        setWaitlistData(waitlistJson.entries);
        setWaitlistStats(waitlistJson.stats);
      }

      // Fetch contact messages
      const contactResponse = await fetch("/api/contact");
      if (contactResponse.ok) {
        const contactJson = await contactResponse.json();
        setContactData(contactJson.messages);
        setContactStats(contactJson.stats);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    await fetch("/api/auth/signout", { method: "POST" });
    router.push("/admin/login");
  };

  const exportToCSV = () => {
    const data = activeTab === "waitlist" ? waitlistData : contactData;
    const headers =
      activeTab === "waitlist"
        ? [
            "First Name",
            "Last Name",
            "Email",
            "Phone",
            "User Type",
            "Brand Name",
            "Instagram",
            "Message",
            "Created At",
          ]
        : ["Name", "Email", "Subject", "Message", "Created At"];

    const csvContent = [
      headers.join(","),
      ...data.map((entry) => {
        if (activeTab === "waitlist") {
          const e = entry as WaitlistEntry;
          return [
            e.firstName,
            e.lastName,
            e.email,
            e.phone,
            e.userType,
            e.brandName || "",
            e.instagram || "",
            e.message || "",
            new Date(e.createdAt).toLocaleString(),
          ]
            .map((field) => `"${field}"`)
            .join(",");
        } else {
          const m = entry as ContactMessage;
          return [
            m.name,
            m.email,
            m.subject,
            m.message,
            new Date(m.createdAt).toLocaleString(),
          ]
            .map((field) => `"${field}"`)
            .join(",");
        }
      }),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${activeTab}-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  const filteredWaitlist = waitlistData.filter(
    (entry) =>
      entry.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.userType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredContact = contactData.filter(
    (message) =>
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getUserTypeColor = (type: string) => {
    const colors = {
      customer: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      creator: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      brand: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      investor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    };
    return (
      colors[type as keyof typeof colors] ||
      "bg-slate-500/10 text-slate-400 border-slate-500/20"
    );
  };

  const getSubjectColor = (subject: string) => {
    const colors = {
      general: "bg-slate-500/10 text-slate-400 border-slate-500/20",
      creator: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      partnership: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      press: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      support: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      feedback: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    };
    return (
      colors[subject as keyof typeof colors] ||
      "bg-slate-500/10 text-slate-400 border-slate-500/20"
    );
  };

  if (isLoading) return <FullLoader />;

  return (
    <div className="py-16">
      <div className="container">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 animate-slide-up">
          <Card className={`text-green-500`}>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs flex items-center justify-between uppercase opacity-70 font-bold">
                Total Signups
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{waitlistStats.total}</p>
            </CardContent>
          </Card>
          <Card className={`text-purple-500`}>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs flex items-center justify-between uppercase opacity-70 font-bold">
                Creators
                <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {waitlistStats.byUserType.brand}
              </p>
            </CardContent>
          </Card>
          <Card className={`text-yellow-500`}>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs flex items-center justify-between uppercase opacity-70 font-bold">
                Brands
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {waitlistStats.byUserType.brand}
              </p>
            </CardContent>
          </Card>
          <Card className={`text-cyan-500`}>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs flex items-center justify-between uppercase opacity-70 font-bold">
                Recent (24h)
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {waitlistStats.recentSignups || 0}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs & Actions */}
        <Tabs defaultValue="waitlist" className="space-y-4">
          <ScrollArea>
            <TabsList className="w-full">
              <TabsTrigger value="waitlist">
                Waitlist ({waitlistStats.total})
              </TabsTrigger>
              <TabsTrigger value="contact">
                Contact ({contactStats.total})
              </TabsTrigger>
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <Input
            className="w-full"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <TabsContent value="waitlist" className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Brand/IG</TableHead>
                  <TableHead>Joined</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredWaitlist.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell className="font-medium">
                      {entry.firstName} {entry.lastName}
                    </TableCell>
                    <TableCell>
                      <a
                        className="hover:underline hover:text-primary"
                        href={`mailto:${entry.email}`}
                      >
                        {entry.email}
                      </a>{" "}
                      -{" "}
                      <a
                        className="hover:underline hover:text-primary"
                        href={`tel:${entry.phone}`}
                      >
                        {entry.phone}
                      </a>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold capitalize border ${getUserTypeColor(
                          entry.userType
                        )}`}
                      >
                        {entry.userType}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{entry.brandName || "—"}</div>
                      <div className="text-xs text-muted-foreground">
                        {entry.instagram || "—"}
                      </div>
                    </TableCell>
                    <TableCell>{formatDate(entry.createdAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {filteredWaitlist.length === 0 && (
              <p className="italic text-sm py-2 w-full  text-center">
                No entries found
              </p>
            )}
          </TabsContent>
          <TabsContent value="contact" className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredContact.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell className="font-medium">{entry.name}</TableCell>
                    <TableCell>
                      <a
                        className="hover:underline hover:text-primary"
                        href={`mailto:${entry.email}`}
                      >
                        {entry.email}
                      </a>{" "}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex capitalize items-center px-3 py-1 rounded-lg text-xs font-semibold border ${getSubjectColor(
                          entry.subject
                        )}`}
                      >
                        {entry.subject}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-sm overflow-x-scroll">
                      {entry.message}
                    </TableCell>
                    <TableCell>{formatDate(entry.createdAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {filteredContact.length === 0 && (
              <p className="italic text-sm py-2 w-full  text-center">
                No message found
              </p>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Detail Modal */}
      {/* {selectedEntry && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedEntry(null)}
        >
          <div
            className="glass-card rounded-2xl max-w-2xl w-full p-6 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                {activeTab === "waitlist"
                  ? "Waitlist Entry Details"
                  : "Contact Message Details"}
              </h3>
              <button
                onClick={() => setSelectedEntry(null)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {activeTab === "waitlist" ? (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        First Name
                      </label>
                      <p className="mt-1 text-white">
                        {(selectedEntry as WaitlistEntry).firstName}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Last Name
                      </label>
                      <p className="mt-1 text-white">
                        {(selectedEntry as WaitlistEntry).lastName}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Email
                    </label>
                    <p className="mt-1 text-white mono">
                      {(selectedEntry as WaitlistEntry).email}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Phone
                    </label>
                    <p className="mt-1 text-white mono">
                      {(selectedEntry as WaitlistEntry).phone}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      User Type
                    </label>
                    <p className="mt-1">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold border ${getUserTypeColor(
                          (selectedEntry as WaitlistEntry).userType
                        )}`}
                      >
                        {(selectedEntry as WaitlistEntry).userType}
                      </span>
                    </p>
                  </div>

                  {(selectedEntry as WaitlistEntry).brandName && (
                    <div>
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Brand Name
                      </label>
                      <p className="mt-1 text-white">
                        {(selectedEntry as WaitlistEntry).brandName}
                      </p>
                    </div>
                  )}

                  {(selectedEntry as WaitlistEntry).instagram && (
                    <div>
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Instagram
                      </label>
                      <p className="mt-1 text-white">
                        {(selectedEntry as WaitlistEntry).instagram}
                      </p>
                    </div>
                  )}

                  {(selectedEntry as WaitlistEntry).message && (
                    <div>
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Message
                      </label>
                      <p className="mt-1 text-slate-300 leading-relaxed">
                        {(selectedEntry as WaitlistEntry).message}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Name
                    </label>
                    <p className="mt-1 text-white">
                      {(selectedEntry as ContactMessage).name}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Email
                    </label>
                    <p className="mt-1 text-white mono">
                      {(selectedEntry as ContactMessage).email}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Subject
                    </label>
                    <p className="mt-1">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold border ${getSubjectColor(
                          (selectedEntry as ContactMessage).subject
                        )}`}
                      >
                        {(selectedEntry as ContactMessage).subject}
                      </span>
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Message
                    </label>
                    <p className="mt-1 text-slate-300 leading-relaxed">
                      {(selectedEntry as ContactMessage).message}
                    </p>
                  </div>
                </>
              )}

              <div className="pt-4 border-t border-slate-800">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Created At
                </label>
                <p className="mt-1 text-slate-300 mono">
                  {new Date(selectedEntry.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
