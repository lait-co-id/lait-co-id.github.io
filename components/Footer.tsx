'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { MessageCircle, Instagram, Twitter, Music2 } from 'lucide-react'; // Music2 acts as a stand-in for TikTok

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer id="contact" className="bg-[#111827] text-[#d1d5db] pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href="#hero" className="inline-block">
              <Image 
                src="/images/icon-text-white.png" 
                alt="LAIT Logo" 
                width={120} 
                height={40} 
                className="h-10 w-auto" 
              />
            </Link>
            <p className="text-[#9ca3af] leading-relaxed max-w-sm">
              {t('desc')}
            </p>
            
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="WhatsApp" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1f2933] hover:bg-brand-red text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/lait_pass/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1f2933] hover:bg-brand-red text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1f2933] hover:bg-brand-red text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="TikTok" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1f2933] hover:bg-brand-red text-white transition-colors">
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-1 hidden lg:block" />

          {/* Quick Links (Placeholder structure mirroring original) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg mb-2">Company</h3>
            <Link href="#about" className="text-[#9ca3af] hover:text-white transition-colors">About Us</Link>
            <Link href="#project" className="text-[#9ca3af] hover:text-white transition-colors">Projects</Link>
            <Link href="#contact" className="text-[#9ca3af] hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Contact (Placeholder) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg mb-2">Legal</h3>
            <Link href="/privacy" className="text-[#9ca3af] hover:text-white transition-colors">{t('privacy')}</Link>
            <Link href="/terms" className="text-[#9ca3af] hover:text-white transition-colors">{t('terms')}</Link>
            <Link href="/support" className="text-[#9ca3af] hover:text-white transition-colors">Support</Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1f2933] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#9ca3af]">
            {t('rights')}
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-[#9ca3af] hover:text-white transition-colors">{t('privacy')}</Link>
            <Link href="/terms" className="text-[#9ca3af] hover:text-white transition-colors">{t('terms')}</Link>
            <Link href="#contact" className="text-[#9ca3af] hover:text-white transition-colors">{t('contactUs')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
