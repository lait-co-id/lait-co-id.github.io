'use client';
import React, { useEffect, useState, Suspense } from 'react';
// import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, XCircle, RefreshCw } from 'lucide-react';
// import Link from 'next/link';

function PaymentFailedFallbackContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('id');
  const reason = searchParams.get('reason');
  
  const [attemptedDeepLink, setAttemptedDeepLink] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const deepLinkUrl = `lait://payment-failed?id=${paymentId || ''}`;

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
             <XCircle className="h-12 w-12 text-brand-red relative z-10" />
          </div>
          
          <h1 className="text-3xl font-bold">Payment Failed</h1>
          <p className="text-base text-muted-foreground mb-4">
            {reason || 'Your payment could not be processed.'}
          </p>

          {paymentId && (
            <p className="text-sm text-muted-foreground mb-4 font-mono">
              Transaction ID: {paymentId}
            </p>
          )}

          {(showFallback || true) && (
            <div className="w-full bg-foreground/5 rounded-2xl p-6 mt-4 border border-foreground/10">
              <h3 className="text-lg font-semibold mb-2">Return to App</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Tap below to return to the LAIT app and try again:
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

          <div className="w-full bg-foreground/5 rounded-xl p-6 text-left mb-8 border border-foreground/10">
            <h3 className="font-semibold mb-4">What you can try:</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start">
                <RefreshCw className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>Check if your payment method has sufficient balance</span>
              </li>
              <li className="flex items-start">
                <RefreshCw className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>Try a different payment method</span>
              </li>
              <li className="flex items-start">
                <RefreshCw className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>Contact support if the problem persists</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function PaymentFailedFallback() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <PaymentFailedFallbackContent />
    </Suspense>
  );
}
