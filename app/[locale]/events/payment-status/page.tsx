'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

function PaymentStatusContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('paymentId');
  const eventId = searchParams.get('eventId');

  const deepLinkUrl = paymentId
    ? `lait://payment/${paymentId}`
    : eventId
    ? `lait://events/${eventId}/payment-status`
    : 'lait://events/payment-status';

  const [attemptedDeepLink, setAttemptedDeepLink] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

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
          <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mb-4 relative">
            <div className="absolute -inset-2 bg-brand-green/30 rounded-full blur animate-pulse" />
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green relative z-10">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
          </div>

          <h1 className="text-3xl font-bold">Payment Status</h1>
          <p className="text-base text-muted-foreground">
            Your secure payment information and event ticket status are managed seamlessly inside the LAIT app.
          </p>

          {paymentId && (
            <div className="w-full bg-foreground/5 rounded-xl px-5 py-3 border border-foreground/10 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Transaction ID</span>
              <span className="font-mono text-xs truncate max-w-[180px]">{paymentId}</span>
            </div>
          )}

          {(showFallback || true) && (
            <div className="w-full bg-foreground/5 rounded-2xl p-6 mt-4 border border-foreground/10">
              <h3 className="text-lg font-semibold mb-2">View Your Payment</h3>
              <p className="text-sm text-muted-foreground mb-6">
                If the app didn't open automatically, tap the button below to check your payment status and access your event ticket.
              </p>

              <a
                href={deepLinkUrl}
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-brand-green rounded-full hover:bg-brand-green/90 active:scale-95 transition-all shadow-lg shadow-brand-green/30"
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

export default function PaymentStatusFallback() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <PaymentStatusContent />
    </Suspense>
  );
}
