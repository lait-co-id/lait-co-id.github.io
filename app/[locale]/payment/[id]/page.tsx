'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, Smartphone, CheckCircle, Clock, CreditCard, ArrowRight } from 'lucide-react';

function PaymentInstructionContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const paymentId = params?.id as string;
  const eventId = searchParams.get('eventId');
  const status = searchParams.get('status');

  const deepLinkUrl = `lait://payment/${paymentId}`;
  const [attemptedDeepLink, setAttemptedDeepLink] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [countdown, setCountdown] = useState(3);

  // Auto-attempt deep link on load
  useEffect(() => {
    if (!attemptedDeepLink) {
      setAttemptedDeepLink(true);
      window.location.href = deepLinkUrl;
      const timeout = setTimeout(() => setShowFallback(true), 2000);
      return () => clearTimeout(timeout);
    }
  }, [attemptedDeepLink, deepLinkUrl]);

  // Countdown before showing full content
  useEffect(() => {
    if (countdown <= 0) return;
    const t = setInterval(() => setCountdown(c => c - 1), 1000);
    return () => clearInterval(t);
  }, [countdown]);

  const isPaid = status === 'PAID' || status === 'COMPLETED';
  const isFailed = status === 'FAILED' || status === 'EXPIRED';

  const statusColor = isPaid ? 'text-brand-green' : isFailed ? 'text-red-500' : 'text-amber-500';
  const statusBg = isPaid ? 'bg-brand-green/10' : isFailed ? 'bg-red-500/10' : 'bg-amber-500/10';
  const statusGlow = isPaid ? 'bg-brand-green/30' : isFailed ? 'bg-red-500/30' : 'bg-amber-500/30';

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 mt-16">
        <div className="max-w-md w-full flex flex-col items-center gap-6 text-center">

          {/* Status icon */}
          <div className={`w-24 h-24 ${statusBg} rounded-full flex items-center justify-center mb-2 relative`}>
            <div className={`absolute -inset-2 ${statusGlow} rounded-full blur animate-pulse`} />
            {isPaid ? (
              <CheckCircle className={`h-12 w-12 ${statusColor} relative z-10`} />
            ) : isFailed ? (
              <CreditCard className={`h-12 w-12 ${statusColor} relative z-10`} />
            ) : (
              <Clock className={`h-12 w-12 ${statusColor} relative z-10`} />
            )}
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold">
            {isPaid ? 'Payment Confirmed' : isFailed ? 'Payment Unsuccessful' : 'Complete Your Payment'}
          </h1>
          <p className="text-base text-muted-foreground">
            {isPaid
              ? "You're all set! Open the LAIT app to view your event ticket and start tracking."
              : isFailed
              ? 'Your payment could not be processed. Please return to the app to try again.'
              : 'Your payment is pending. Open the LAIT app to complete or check your payment status.'}
          </p>

          {/* Payment ID reference */}
          {paymentId && (
            <div className="w-full bg-foreground/5 rounded-xl px-5 py-3 border border-foreground/10 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Payment ID</span>
              <span className="font-mono text-xs truncate max-w-[180px]">{paymentId}</span>
            </div>
          )}

          {/* Primary CTA */}
          <div className="w-full bg-foreground/5 rounded-2xl p-6 border border-foreground/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-green/15 rounded-full flex items-center justify-center flex-shrink-0">
                <Smartphone className="h-5 w-5 text-brand-green" />
              </div>
              <div className="text-left">
                <h3 className="text-base font-semibold">Open in LAIT App</h3>
                <p className="text-xs text-muted-foreground">Continue your payment journey in the app</p>
              </div>
            </div>

            <a
              href={deepLinkUrl}
              className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-brand-green rounded-full hover:bg-brand-green/90 active:scale-95 transition-all shadow-lg shadow-brand-green/30"
            >
              Open LAIT App
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Step-by-step instructions */}
          {!isPaid && (
            <div className="w-full bg-foreground/5 rounded-2xl p-6 border border-foreground/10 text-left">
              <h3 className="font-semibold mb-4 text-center">How to complete your payment</h3>
              <ol className="space-y-4">
                {[
                  { icon: Smartphone, text: 'Tap "Open LAIT App" above to launch the app directly on your payment screen.' },
                  { icon: CreditCard, text: 'Choose your preferred payment method — virtual account, QRIS, or e-wallet.' },
                  { icon: CheckCircle, text: 'Complete the transaction and receive your event ticket instantly.' },
                  { icon: ArrowRight, text: 'Return to the event details to view your ticket and join the race.' },
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 bg-brand-green/10 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-brand-green">{i + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* App not installed fallback */}
          {showFallback && (
            <p className="text-xs text-muted-foreground">
              Don't have the app?{' '}
              <a
                href="https://apps.apple.com/app/lait"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                iOS
              </a>
              {' / '}
              <a
                href="https://play.google.com/store/apps/details?id=com.lait.mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Android
              </a>
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function PaymentInstructionPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <PaymentInstructionContent />
    </Suspense>
  );
}
