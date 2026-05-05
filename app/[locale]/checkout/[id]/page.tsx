import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateMetadata(
  props: Props
): Promise<Metadata> {
  const title = `Complete your Checkout | LAIT`;
  const description = `Complete your booking and transaction securely on the LAIT mobile app.`;
  const ogImageUrl = 'https://lait.co.id/images/lait-default-share.jpg';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImageUrl, width: 1080, height: 1080 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function CheckoutPage(props: Props) {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-8 text-center space-y-6">
        <div className="w-20 h-20 bg-sky-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">Complete Checkout</h1>
          <p className="text-slate-400">
            Please open this link on your mobile device to complete the transaction securely in the LAIT app.
          </p>
        </div>
        
        <div className="pt-6 space-y-3">
          <Link 
            href="/"
            className="block w-full py-3 px-4 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl transition-colors"
          >
            Get the LAIT App
          </Link>
        </div>
      </div>
    </div>
  );
}
