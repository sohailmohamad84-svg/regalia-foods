"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  Search,
  Download,
  RefreshCw,
  Mail,
  Phone,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronUp,
  FileText,
  Filter,
  LogOut,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

interface Enquiry {
  id: string;
  created_at: string;
  full_name: string;
  company_name: string;
  work_email: string;
  phone_whatsapp: string;
  country_location: string;
  product_category: string;
  has_recipe: string;
  estimated_quantity: string;
  packaging_requirement: string;
  project_description: string;
  status: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [statusUpdating, setStatusUpdating] = useState<string | null>(null);

  // Check saved session password
  useEffect(() => {
    const saved = sessionStorage.getItem("regalia_admin_token");
    if (saved) {
      setPassword(saved);
      setIsAuthenticated(true);
      fetchEnquiries(saved);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/enquiries", {
        headers: { Authorization: `Bearer ${password.trim()}` },
      });

      if (!res.ok) {
        throw new Error("Invalid Admin Password. Please try again.");
      }

      const data = await res.json();
      sessionStorage.setItem("regalia_admin_token", password.trim());
      setIsAuthenticated(true);
      setEnquiries(data.enquiries || []);
    } catch (err: any) {
      setLoginError(err.message || "Failed to log in.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("regalia_admin_token");
    setIsAuthenticated(false);
    setPassword("");
    setEnquiries([]);
  };

  const fetchEnquiries = async (token = password) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/enquiries", {
        headers: { Authorization: `Bearer ${token.trim()}` },
      });
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data.enquiries || []);
      }
    } catch (err) {
      console.error("Failed to refresh enquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    setStatusUpdating(id);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password.trim()}`,
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
        );
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setStatusUpdating(null);
    }
  };

  // Export to CSV function
  const exportToCSV = () => {
    if (enquiries.length === 0) return;

    const headers = [
      "Date",
      "Company Name",
      "Contact Person",
      "Email",
      "Phone / WhatsApp",
      "Location",
      "Category",
      "Recipe Status",
      "Quantity",
      "Packaging",
      "Specification / Message",
      "Status",
    ];

    const rows = filteredEnquiries.map((e) => [
      `"${new Date(e.created_at).toLocaleString()}"`,
      `"${(e.company_name || "").replace(/"/g, '""')}"`,
      `"${(e.full_name || "").replace(/"/g, '""')}"`,
      `"${(e.work_email || "").replace(/"/g, '""')}"`,
      `"${(e.phone_whatsapp || "").replace(/"/g, '""')}"`,
      `"${(e.country_location || "").replace(/"/g, '""')}"`,
      `"${(e.product_category || "").replace(/"/g, '""')}"`,
      `"${(e.has_recipe || "").replace(/"/g, '""')}"`,
      `"${(e.estimated_quantity || "").replace(/"/g, '""')}"`,
      `"${(e.packaging_requirement || "").replace(/"/g, '""')}"`,
      `"${(e.project_description || "").replace(/"/g, '""')}"`,
      `"${e.status || "New"}"`,
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `regalia_manufacturing_enquiries_${new Date().toISOString().split("T")[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered list
  const filteredEnquiries = enquiries.filter((item) => {
    const matchesSearch =
      item.company_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.work_email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone_whatsapp?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.project_description?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || item.product_category === selectedCategory;

    const matchesStatus =
      selectedStatus === "All" || item.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Metrics
  const totalCount = enquiries.length;
  const newCount = enquiries.filter((e) => e.status === "New").length;
  const inProgressCount = enquiries.filter(
    (e) => e.status === "In Review" || e.status === "Sample Dispatched"
  ).length;

  // 1. Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center p-4 pt-24 pb-12">
        <div className="bg-white rounded-sm shadow-2xl p-8 sm:p-10 w-full max-w-md border border-warm-300">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="relative h-14 w-24 mb-3">
              <Image
                src={siteConfig.brand.logoPrimary}
                alt={siteConfig.legalName}
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="font-serif text-2xl font-bold text-navy-950">
              Admin Portal
            </h1>
            <p className="text-xs text-charcoal-500 mt-1">
              Commercial RFQ & Manufacturing Enquiries Desk
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {loginError && (
              <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
              >
                Admin Master Password / PIN
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-2.5 text-sm bg-warm-50 border border-warm-300 rounded-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-charcoal-900"
                />
                <Lock className="w-4 h-4 text-charcoal-400 absolute right-3.5 top-3" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-navy-800 hover:bg-navy-900 text-warm-100 font-semibold text-sm rounded-xs transition-all shadow-subtle flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Access Enquiries"}
            </button>
          </form>

          {/* Recovery / Forgot PIN Helper */}
          <div className="mt-8 pt-6 border-t border-warm-200 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs text-charcoal-500 mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
              <span className="font-semibold text-navy-900">Forgot your password?</span>
            </div>
            <p className="text-[11px] text-charcoal-500 leading-relaxed max-w-xs mx-auto">
              Password is saved in your Vercel Environment Variables as <code className="bg-warm-100 px-1 py-0.5 rounded text-navy-800 font-mono">ADMIN_PASSWORD</code>. You can view or reset it anytime in Vercel Settings.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 2. Authenticated Dashboard Screen
  return (
    <div className="min-h-screen bg-warm-100 pt-28 pb-20 sm:pt-32 sm:pb-24">
      <Container size="full" className="max-w-[1400px]">
        {/* Top Bar */}
        <div className="bg-white border border-warm-300 rounded-sm p-6 mb-8 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-20 shrink-0">
              <Image
                src={siteConfig.brand.logoPrimary}
                alt={siteConfig.legalName}
                fill
                className="object-contain object-left"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl font-bold text-navy-950">
                  Manufacturing RFQ Desk
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                  Supabase Live
                </span>
              </div>
              <p className="text-xs text-charcoal-500 mt-0.5">
                Real-time contract blending enquiries & customer specifications
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchEnquiries()}
              disabled={loading}
              className="px-3.5 py-2 bg-warm-100 hover:bg-warm-200 text-charcoal-700 text-xs font-semibold rounded-xs border border-warm-300 transition-colors inline-flex items-center gap-1.5"
              title="Refresh Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={exportToCSV}
              disabled={enquiries.length === 0}
              className="px-4 py-2 bg-navy-800 hover:bg-navy-900 text-warm-100 text-xs font-semibold rounded-xs transition-colors inline-flex items-center gap-1.5 shadow-xs disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5 text-gold-400" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="p-2 text-charcoal-500 hover:text-red-600 rounded-xs hover:bg-red-50 transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* KPI Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="bg-white border border-warm-300 p-5 rounded-sm shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-500">
              Total Enquiries
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="font-serif text-3xl font-bold text-navy-950">
                {totalCount}
              </span>
              <Building2 className="w-5 h-5 text-navy-300" />
            </div>
          </div>

          <div className="bg-white border border-warm-300 p-5 rounded-sm shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-500">
              New / Action Needed
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="font-serif text-3xl font-bold text-amber-600">
                {newCount}
              </span>
              <Clock className="w-5 h-5 text-amber-400" />
            </div>
          </div>

          <div className="bg-white border border-warm-300 p-5 rounded-sm shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-500">
              In Review / Samples Sent
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="font-serif text-3xl font-bold text-emerald-700">
                {inProgressCount}
              </span>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="bg-white border border-warm-300 rounded-sm p-4 mb-6 shadow-subtle flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by company, client name, email, phone, or blend..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-warm-50 border border-warm-300 rounded-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-charcoal-500 whitespace-nowrap">
              Category:
            </span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 text-xs bg-warm-50 border border-warm-300 rounded-xs text-charcoal-800 focus:bg-white focus:outline-none"
            >
              <option value="All">All Categories</option>
              <option value="Spice & Masala Blends">Spice & Masala Blends</option>
              <option value="Dry Sauces & Seasonings">Dry Sauces & Seasonings</option>
              <option value="Meat Rubs & Marinades">Meat Rubs & Marinades</option>
              <option value="Snack & French Fry Seasonings">Snack Seasonings</option>
              <option value="Custom Proprietary Blending">Custom Proprietary</option>
              <option value="New Product Development">Product Development</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-charcoal-500 whitespace-nowrap">
              Status:
            </span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 text-xs bg-warm-50 border border-warm-300 rounded-xs text-charcoal-800 focus:bg-white focus:outline-none"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="In Review">In Review</option>
              <option value="Sample Dispatched">Sample Dispatched</option>
              <option value="Contract Finalized">Contract Finalized</option>
              <option value="Archived">Archived</option>
            </select>
          </div>
        </div>

        {/* Enquiries List */}
        {filteredEnquiries.length === 0 ? (
          <div className="bg-white border border-warm-300 rounded-sm p-12 text-center text-charcoal-500">
            <FileText className="w-12 h-12 text-charcoal-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-navy-950 mb-1">
              No Enquiries Found
            </h3>
            <p className="text-xs text-charcoal-500 max-w-sm mx-auto">
              {enquiries.length === 0
                ? "No submissions have been received yet. Test by submitting the Request a Quote form on the website!"
                : "No enquiries match your current search or filter criteria."}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEnquiries.map((enquiry) => {
              const isExpanded = expandedId === enquiry.id;
              const dateStr = new Date(enquiry.created_at).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              });

              return (
                <div
                  key={enquiry.id}
                  className="bg-white border border-warm-300 rounded-sm shadow-xs overflow-hidden transition-all duration-200 hover:border-gold-400"
                >
                  {/* Row Summary */}
                  <div className="p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <span className="font-serif text-lg font-bold text-navy-950">
                          {enquiry.company_name}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-gold-50 text-gold-800 border border-gold-300/60">
                          {enquiry.product_category}
                        </span>
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded-xs font-semibold uppercase ${
                            enquiry.status === "New"
                              ? "bg-amber-100 text-amber-800"
                              : enquiry.status === "Sample Dispatched"
                              ? "bg-purple-100 text-purple-800"
                              : enquiry.status === "Contract Finalized"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-warm-200 text-charcoal-700"
                          }`}
                        >
                          {enquiry.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-charcoal-600">
                        <span className="font-medium text-charcoal-900">
                          {enquiry.full_name}
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-charcoal-400" />
                          <span>{dateStr}</span>
                        </span>
                        <span>&bull;</span>
                        <span>{enquiry.country_location}</span>
                        <span>&bull;</span>
                        <span className="font-semibold text-navy-900">
                          Volume: {enquiry.estimated_quantity}
                        </span>
                      </div>
                    </div>

                    {/* Quick Action Buttons & Status Selector */}
                    <div className="flex items-center gap-3 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-warm-200">
                      {/* Direct Email */}
                      <a
                        href={`mailto:${enquiry.work_email}?subject=Regalia Foods Manufacturing Quotation - ${encodeURIComponent(
                          enquiry.company_name
                        )}`}
                        className="p-2 text-charcoal-700 hover:text-navy-900 bg-warm-100 hover:bg-warm-200 rounded-xs border border-warm-300 transition-colors"
                        title={`Send email to ${enquiry.work_email}`}
                      >
                        <Mail className="w-4 h-4 text-gold-600" />
                      </a>

                      {/* Phone / WhatsApp */}
                      <a
                        href={`tel:${enquiry.phone_whatsapp}`}
                        className="p-2 text-charcoal-700 hover:text-navy-900 bg-warm-100 hover:bg-warm-200 rounded-xs border border-warm-300 transition-colors"
                        title={`Call ${enquiry.phone_whatsapp}`}
                      >
                        <Phone className="w-4 h-4 text-navy-700" />
                      </a>

                      {/* Status Dropdown */}
                      <select
                        value={enquiry.status}
                        disabled={statusUpdating === enquiry.id}
                        onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                        className="px-2.5 py-1.5 text-xs bg-warm-50 border border-warm-300 rounded-xs text-charcoal-900 font-medium focus:outline-none focus:ring-1 focus:ring-gold-500"
                      >
                        <option value="New">Status: New</option>
                        <option value="In Review">Status: In Review</option>
                        <option value="Sample Dispatched">Status: Sample Sent</option>
                        <option value="Contract Finalized">Status: Contracted</option>
                        <option value="Archived">Status: Archived</option>
                      </select>

                      {/* Toggle Details */}
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : enquiry.id)}
                        className="px-3 py-1.5 text-xs font-semibold text-navy-800 hover:text-gold-600 bg-warm-100 hover:bg-warm-200 rounded-xs border border-warm-300 inline-flex items-center gap-1 transition-colors"
                      >
                        <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Specification Details */}
                  {isExpanded && (
                    <div className="p-6 bg-warm-50 border-t border-warm-200 space-y-4 text-xs sm:text-sm">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-white rounded-xs border border-warm-200">
                        <div>
                          <span className="block text-[11px] font-bold text-charcoal-500 uppercase">
                            Recipe Status
                          </span>
                          <span className="font-semibold text-navy-950 text-sm">
                            {enquiry.has_recipe === "yes"
                              ? "Approved Proprietary Recipe Ready"
                              : enquiry.has_recipe === "in_development"
                              ? "Recipe In Development"
                              : "Needs Formulation Support"}
                          </span>
                        </div>

                        <div>
                          <span className="block text-[11px] font-bold text-charcoal-500 uppercase">
                            Packaging Requirement
                          </span>
                          <span className="font-semibold text-navy-950 text-sm">
                            {enquiry.packaging_requirement || "Standard bulk / open to recommendation"}
                          </span>
                        </div>

                        <div>
                          <span className="block text-[11px] font-bold text-charcoal-500 uppercase">
                            Direct Contact Channels
                          </span>
                          <div className="space-y-0.5 mt-0.5">
                            <p className="font-medium text-navy-900">{enquiry.work_email}</p>
                            <p className="font-medium text-navy-900">{enquiry.phone_whatsapp}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <span className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
                          Project Specification & Message:
                        </span>
                        <div className="p-4 bg-white rounded-xs border border-warm-200 font-sans text-charcoal-800 leading-relaxed whitespace-pre-wrap">
                          {enquiry.project_description}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
}
