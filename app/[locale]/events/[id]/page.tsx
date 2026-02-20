'use client';
import React, { useEffect, useState, use } from 'react';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

export default function EventFallback({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const [attemptedDeepLink, setAttemptedDeepLink] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const deepLinkUrl = `lait://events/${unwrappedParams.id}`;

  useEffect(() => {
    if (!attemptedDeepLink) {
      setAttemptedDeepLink(true);
      const timeout = setTimeout(() => setShowFallback(true), 2000);
      window.location.href = deepLinkUrl;
      return () => clearTimeout(timeout);
    }
  }, [attemptedDeepLink, deepLinkUrl]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 mt-16 text-center">
        <div className="max-w-md w-full flex flex-col items-center gap-6">
          <div className="w-24 h-24 bg-brand-red/10 rounded-full flex items-center justify-center mb-4 relative">
             <div className="absolute -inset-2 bg-brand-red/30 rounded-full blur animate-pulse" />
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red relative z-10">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold">Event Details</h1>
          <p className="text-base text-muted-foreground">
            Complete event information, registration, and attendee lists are accessible via the LAIT app.
          </p>

          {(showFallback || true) && (
            <div className="w-full bg-foreground/5 rounded-2xl p-6 mt-4 border border-foreground/10">
              <h3 className="text-lg font-semibold mb-2">Join the Event</h3>
              <p className="text-sm text-muted-foreground mb-6">
                 If the app didn't open automatically, tap the button below to register, buy tickets, and track participation.
              </p>
              
              <a 
                href={deepLinkUrl}
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-brand-red rounded-full hover:bg-brand-red/90 transition-colors shadow-lg"
              >
                Open LAIT App
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
