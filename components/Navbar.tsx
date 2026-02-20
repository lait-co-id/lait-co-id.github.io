'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sun, Moon, Menu, X, Check } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const t = useTranslations('Nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { theme, resolvedTheme, setTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { href: '#hero', label: t('home') },
    { href: '#project', label: t('project') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.1)] py-3' 
          : 'bg-background/80 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="#hero" className="relative z-50 flex items-center gap-3">
          {mounted && resolvedTheme === 'dark' ? (
            <Image src="/images/icon-text-white.png" alt="LAIT Logo" width={120} height={30} className="h-7 w-auto" priority />
          ) : (
            <Image src="/images/icon-text.png" alt="LAIT Logo" width={120} height={30} className="h-7 w-auto" priority />
          )}
        </Link>

        {/* DESKTOP LINKS (Centered) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-base-dark-2 hover:text-base-dark font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-3 relative z-50">
          
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-base-light bg-base-light/50 hover:bg-base-light-gray/50 transition-colors text-sm font-semibold text-base-dark"
            >
              <span className="font-bold text-brand-red">{locale === 'en' ? 'US' : 'ID'}</span>
              <span>{locale.toUpperCase()}</span>
              <motion.div animate={{ rotate: langOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-background rounded-xl shadow-xl border border-border overflow-hidden origin-top-right"
                >
                  <button
                    onClick={() => switchLocale('en')}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-bg-secondary transition-colors",
                      locale === 'en' && "bg-bg-secondary"
                    )}
                  >
                    <div>
                      <div className="font-semibold text-foreground">English</div>
                      <div className="text-xs text-text-muted">EN</div>
                    </div>
                    {locale === 'en' && <Check className="w-4 h-4 text-brand-red" />}
                  </button>
                  <button
                    onClick={() => switchLocale('id')}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-bg-secondary transition-colors",
                      locale === 'id' && "bg-bg-secondary"
                    )}
                  >
                    <div>
                      <div className="font-semibold text-foreground">Bahasa</div>
                      <div className="text-xs text-text-muted">ID</div>
                    </div>
                    {locale === 'id' && <Check className="w-4 h-4 text-brand-red" />}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-base-light bg-base-light/50 hover:bg-base-light-gray/50 transition-colors text-foreground"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={resolvedTheme}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {resolvedTheme === 'dark' ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="w-5 h-5 opacity-0" />
            )}
          </button>
        </div>

        {/* MOBILE BURGER */}
        <button
          className="md:hidden p-2 text-foreground z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-brand-red transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="w-full h-px bg-border my-2" />
              
              <div className="flex items-center gap-4 w-full justify-center">
                <button
                  onClick={() => switchLocale(locale === 'en' ? 'id' : 'en')}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-secondary text-foreground font-semibold"
                >
                  <span className="text-brand-red">{locale === 'en' ? 'US' : 'ID'}</span>
                  <span>{locale.toUpperCase()}</span>
                </button>
                
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-xl bg-bg-secondary text-foreground"
                >
                  {mounted && resolvedTheme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
