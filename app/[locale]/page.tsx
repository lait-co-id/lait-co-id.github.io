import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import ProjectsSection from '@/components/ProjectsSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

export default async function IndexPage(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;

  const {
    locale
  } = params;

  // Enable static rendering for i18n
  setRequestLocale(locale);

  return (
    <main className="min-h-screen overflow-x-hidden pt-12">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <ProjectsSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
