"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, FileUp, Info, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormData {
  fullName: string;
  companyName: string;
  workEmail: string;
  phoneOrWhatsApp: string;
  countryLocation: string;
  productCategory: string;
  hasRecipe: string;
  estimatedQuantity: string;
  packagingRequirement: string;
  projectDescription: string;
  websiteHp: string; // honeypot
}

const initialFormData: FormData = {
  fullName: "",
  companyName: "",
  workEmail: "",
  phoneOrWhatsApp: "",
  countryLocation: "",
  productCategory: "Spice & Masala Blends",
  hasRecipe: "yes",
  estimatedQuantity: "100 - 500 kg / batch",
  packagingRequirement: "",
  projectDescription: "",
  websiteHp: "",
};

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white border border-gold-400/80 p-8 sm:p-12 rounded-sm shadow-card text-center">
        <div className="w-16 h-16 rounded-full bg-gold-50 border border-gold-300 text-gold-600 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mb-3">
          Manufacturing Enquiry Received
        </h3>
        <p className="text-charcoal-700 max-w-lg mx-auto leading-relaxed mb-6 font-sans">
          Thank you for reaching out to Regalia Foods LLP. Our contract manufacturing team has received your blend parameters and will review the specifications under strict confidentiality.
        </p>
        <div className="p-4 bg-warm-100 rounded-sm border border-warm-300 max-w-md mx-auto text-xs text-charcoal-600 mb-8 space-y-1">
          <p className="font-semibold text-navy-900">What happens next?</p>
          <p>1. Our blending technical team conducts preliminary recipe review.</p>
          <p>2. We reach out within 1 business day to discuss batch sizing and trial samples.</p>
        </div>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          size="md"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-warm-300 p-6 sm:p-10 rounded-sm shadow-card space-y-6"
    >
      {/* Honeypot anti-spam field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteHp">Leave this field blank</label>
        <input
          type="text"
          id="websiteHp"
          name="websiteHp"
          value={formData.websiteHp}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-sm flex items-start gap-3 text-red-800 text-sm">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-2.5 text-sm bg-warm-50 border border-warm-300 rounded-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-charcoal-900 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
            Company / Brand Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Heritage Foods Ltd."
            className="w-full px-4 py-2.5 text-sm bg-warm-50 border border-warm-300 rounded-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-charcoal-900 transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="workEmail" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
            Work Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="workEmail"
            name="workEmail"
            required
            value={formData.workEmail}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full px-4 py-2.5 text-sm bg-warm-50 border border-warm-300 rounded-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-charcoal-900 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phoneOrWhatsApp" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
            Phone / WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phoneOrWhatsApp"
            name="phoneOrWhatsApp"
            required
            value={formData.phoneOrWhatsApp}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-2.5 text-sm bg-warm-50 border border-warm-300 rounded-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-charcoal-900 transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Country/Location & Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="countryLocation" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
            Country & City / Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="countryLocation"
            name="countryLocation"
            required
            value={formData.countryLocation}
            onChange={handleChange}
            placeholder="e.g. Mumbai, India / London, UK"
            className="w-full px-4 py-2.5 text-sm bg-warm-50 border border-warm-300 rounded-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-charcoal-900 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="productCategory" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
            Product / Blend Category <span className="text-red-500">*</span>
          </label>
          <select
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-sm bg-warm-50 border border-warm-300 rounded-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-charcoal-900 transition-colors"
          >
            <option value="Spice & Masala Blends">Spice & Masala Blends (Biryani, Nihari, Pav Bhaji, etc.)</option>
            <option value="Dry Sauces & Seasonings">Dry Sauces & Seasonings (Peri-Peri, Dips, Sauces)</option>
            <option value="Meat Rubs & Marinades">Meat Rubs & Marinades</option>
            <option value="Snack & French Fry Seasonings">Snack & French Fry Seasonings</option>
            <option value="Custom Proprietary Blending">Custom Proprietary Blending (Client Recipe)</option>
            <option value="New Product Development">New Product Development / Trial Support</option>
            <option value="Other Dry Blend Application">Other Dry Blend Application</option>
          </select>
        </div>
      </div>

      {/* Row 4: Do you already have a recipe? & Estimated Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-2">
            Do you already have a recipe? <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: "yes", label: "Yes, approved recipe" },
              { value: "in_development", label: "In development" },
              { value: "need_support", label: "Need formulation" },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex flex-col items-center justify-center p-2.5 border rounded-xs cursor-pointer text-center transition-all text-xs font-medium ${
                  formData.hasRecipe === option.value
                    ? "border-navy-800 bg-navy-50 text-navy-900 font-semibold"
                    : "border-warm-300 bg-warm-50 text-charcoal-700 hover:bg-warm-100"
                }`}
              >
                <input
                  type="radio"
                  name="hasRecipe"
                  value={option.value}
                  checked={formData.hasRecipe === option.value}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="estimatedQuantity" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
            Estimated Requirement / Monthly Volume
          </label>
          <select
            id="estimatedQuantity"
            name="estimatedQuantity"
            value={formData.estimatedQuantity}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-sm bg-warm-50 border border-warm-300 rounded-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-charcoal-900 transition-colors"
          >
            <option value="Initial Trial Batch / Pilot Run">Initial Trial Batch / Pilot Run</option>
            <option value="100 - 500 kg / batch">100 - 500 kg / batch</option>
            <option value="500 - 1,000 kg / month">500 - 1,000 kg / month</option>
            <option value="1,000 - 5,000 kg / month">1,000 - 5,000 kg / month</option>
            <option value="5,000+ kg / month">5,000+ kg / month (Commercial Contract)</option>
            <option value="To be determined / Discussing feasibility">To be determined / Discussing feasibility</option>
          </select>
        </div>
      </div>

      {/* Row 5: Packaging Requirement (Optional) */}
      <div>
        <label htmlFor="packagingRequirement" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
          Packaging Requirement <span className="text-charcoal-400 font-normal lowercase">(optional)</span>
        </label>
        <input
          type="text"
          id="packagingRequirement"
          name="packagingRequirement"
          value={formData.packagingRequirement}
          onChange={handleChange}
          placeholder="e.g. 10 kg poly-lined bulk bags, 1 kg food-service pouches, or client-supplied packaging"
          className="w-full px-4 py-2.5 text-sm bg-warm-50 border border-warm-300 rounded-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-charcoal-900 transition-colors"
        />
      </div>

      {/* Row 6: Message / Product Specification */}
      <div>
        <label htmlFor="projectDescription" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
          Message / Product Specification <span className="text-red-500">*</span>
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          required
          rows={4}
          value={formData.projectDescription}
          onChange={handleChange}
          placeholder="Please describe your target flavor profile, key ingredients, particle size requirements, planned commercial launch timeline, or specific questions..."
          className="w-full px-4 py-2.5 text-sm bg-warm-50 border border-warm-300 rounded-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-charcoal-900 transition-colors"
        />
      </div>

      {/* Future-Ready Recipe / Specification Upload Placeholder */}
      <div className="p-4 bg-warm-100/80 rounded-xs border border-dashed border-warm-400 text-xs text-charcoal-600 flex items-start gap-3">
        <FileUp className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-navy-900 block mb-0.5">
            Have a formal technical specification sheet or formulation document?
          </span>
          <p className="text-charcoal-600">
            For security and NDA compliance, proprietary specification files can be shared directly with our technical director upon initial inquiry acknowledgement.
          </p>
        </div>
      </div>

      {/* Privacy & Confidentiality Guarantee */}
      <div className="flex items-center gap-2 text-xs text-charcoal-500">
        <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
        <span>
          All recipe details, volumes, and communications are held in strict commercial confidence under standard NDA practices.
        </span>
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="gold"
          size="lg"
          fullWidth
          disabled={isSubmitting}
          icon={<Send className="w-4 h-4" />}
        >
          {isSubmitting ? "Submitting Manufacturing Enquiry..." : "Submit Manufacturing Request"}
        </Button>
      </div>
    </form>
  );
};
