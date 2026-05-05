'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, XCircle, Smartphone, RefreshCw, ArrowRight } from 'lucide-react';

function PaymentFailedContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('id');
  const reason = searchParams.get('reason');
  
  const [attemptedDeepLink, setAttemptedDeepLink] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  
  const deepLinkUrl = `lait://payment-failed?id=${paymentId || ''}`;
  
  useEffect(() => {
    // Attempt to open the mobile app via deep link
    if (!attemptedDeepLink) {
      setAttemptedDeepLink(true);
      
      const timeout = setTimeout(() => {
        setShowFallback(true);
      }, 2000);
      
      window.location.href = deepLinkUrl;
      
      return () => clearTimeout(timeout);
    }
  }, [attemptedDeepLink, deepLinkUrl]);
  
  return (
    <div className="max-w-lg w-full text-center">
      {/* Error Icon */}
      <div className="relative inline-block mb-8">
        <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-rose-500/20 rounded-full blur animate-pulse" />
        <div className="relative bg-background rounded-full p-4 shadow-lg border border-red-500/20">
          <XCircle className="h-20 w-20 text-red-500" />
        </div>
      </div>
      
      <h1 className="text-4xl font-bold text-foreground mb-4">
        Payment Failed
      </h1>
      
      <p className="text-lg text-muted-foreground mb-4">
        {reason || 'Your payment could not be processed.'}
      </p>
      
      {paymentId && (
        <p className="text-sm text-muted-foreground mb-8 font-mono bg-foreground/5 py-2 px-4 rounded-lg inline-block border border-foreground/10">
          Transaction ID: {paymentId}
        </p>
      )}
      
      {(showFallback || true) && (
        <div className="bg-foreground/5 rounded-2xl p-6 shadow-xl border border-foreground/10 mb-8">
          <div className="flex items-center justify-center mb-4">
            <Smartphone className="h-8 w-8 text-foreground/70" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">
            Return to App
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Tap below to return to the LAIT app and try again:
          </p>
          
          <a
            href={deepLinkUrl}
            className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors shadow-lg mb-4"
          >
            Open LAIT App
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      )}
      
      {/* Suggestions */}
      <div className="bg-foreground/5 rounded-xl p-6 text-left mb-8 border border-foreground/10">
        <h3 className="font-semibold text-foreground mb-4">What you can try:</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start">
            <RefreshCw className="h-5 w-5 text-foreground/50 mr-3 flex-shrink-0 mt-0.5" />
            <span>Check if your payment method has sufficient balance</span>
          </li>
          <li className="flex items-start">
            <RefreshCw className="h-5 w-5 text-foreground/50 mr-3 flex-shrink-0 mt-0.5" />
            <span>Try a different payment method</span>
          </li>
          <li className="flex items-start">
            <RefreshCw className="h-5 w-5 text-foreground/50 mr-3 flex-shrink-0 mt-0.5" />
            <span>Contact support if the problem persists</span>
          </li>
        </ul>
      </div>
      
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors"
      >
        Go to Home
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}

export default function PaymentFailedPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 mt-16 text-center">
        <Suspense fallback={<div className="animate-pulse flex space-x-4"><div className="rounded-full bg-slate-700 h-10 w-10"></div><div className="flex-1 space-y-6 py-1"><div className="h-2 bg-slate-700 rounded"></div><div className="space-y-3"><div className="grid grid-cols-3 gap-4"><div className="h-2 bg-slate-700 rounded col-span-2"></div><div className="h-2 bg-slate-700 rounded col-span-1"></div></div><div className="h-2 bg-slate-700 rounded"></div></div></div></div>}>
          <PaymentFailedContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
