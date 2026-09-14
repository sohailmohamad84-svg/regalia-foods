import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-warm-100 py-28">
      <Container size="sm" className="text-center">
        <span className="font-serif text-6xl sm:text-7xl font-bold text-navy-200 block mb-4">
          404
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 max-w-md mx-auto mb-8 font-sans">
          The manufacturing specification or page you requested does not exist or has been moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" icon={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Support
          </Button>
        </div>
      </Container>
    </div>
  );
}
