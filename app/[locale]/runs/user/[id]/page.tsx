'use client';
import React, { useEffect, useState, use } from 'react';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

export default function UserProfileFallback({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const [attemptedDeepLink, setAttemptedDeepLink] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const deepLinkUrl = `lait://runs/user/${unwrappedParams.id}`;

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
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold">Runner Profile</h1>
          <p className="text-base text-muted-foreground">
            This runner's full profile, activity history, and achievements are available exclusively on the LAIT mobile app.
          </p>

          {(showFallback || true) && (
            <div className="w-full bg-foreground/5 rounded-2xl p-6 mt-4 border border-foreground/10">
              <h3 className="text-lg font-semibold mb-2">Want to see more?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                If the app didn't open automatically, tap the button below to view profiles, track runs, and join exciting events.
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
