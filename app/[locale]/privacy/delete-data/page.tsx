import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Shield, Database, Lock, Eye, Trash2, Download,
  CheckCircle, XCircle, MapPin, Bell, Smartphone,
  Activity, BarChart3, QrCode, AlertCircle, ArrowLeft, Info
} from 'lucide-react';
import Link from 'next/link';

function Step({ number, title, children }: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold shrink-0 mt-1">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        <div className="text-text-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default async function DeleteDataGuidePage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const isId = locale === 'id';

  const t = {
    title: isId ? 'Panduan Penghapusan Data' : 'Data Deletion Guide',
    subtitle: isId ? 'Pelajari cara menghapus data tertentu dari akun LAIT Anda.' : 'Learn how to remove specific data from your LAIT account.',
    back: isId ? 'Kembali ke Kebijakan Privasi' : 'Back to Privacy Policy',
    intro: isId 
      ? 'LAIT memberikan kontrol penuh atas data Anda. Anda dapat memilih untuk menghapus kategori data tertentu tanpa harus menghapus seluruh akun Anda.'
      : 'LAIT gives you full control over your data. You can choose to delete specific data categories without having to delete your entire account.',
    categoriesTitle: isId ? 'Kategori Data yang Dapat Dihapus' : 'Data Categories You Can Delete',
  };

  const categories = [
    { icon: <Activity className="w-5 h-5" />, label: isId ? 'Data Aktivitas Lari' : 'Run Activity Data', desc: isId ? 'Rute GPS, jarak, durasi, dan statistik lari.' : 'GPS routes, distance, duration, and run statistics.' },
    { icon: <BarChart3 className="w-5 h-5" />, label: isId ? 'Data Leaderboard' : 'Leaderboard Data', desc: isId ? 'Poin XP, level, lencana, dan peringkat.' : 'XP points, level, badges, and rankings.' },
    { icon: <Database className="w-5 h-5" />, label: isId ? 'Diary & Postingan' : 'Diary & Posts', desc: isId ? 'Catatan diary, foto, komentar, dan suka.' : 'Diary entries, photos, comments, and likes.' },
    { icon: <Smartphone className="w-5 h-5" />, label: isId ? 'Data Sinkronisasi' : 'Sync Data', desc: isId ? 'Data dari Strava atau Apple Health.' : 'Data from Strava or Apple Health.' },
    { icon: <MapPin className="w-5 h-5" />, label: isId ? 'Riwayat Lokasi' : 'Location History', desc: isId ? 'Lokasi rumah dan rute favorit.' : 'Home location and favorite routes.' },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 pt-32 pb-20 max-w-3xl">
        <Link href={`/${locale}/privacy`} className="inline-flex items-center gap-2 text-brand-red hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-text-muted text-lg">{t.subtitle}</p>
        </div>

        <div className="bg-brand-red/5 border border-brand-red/20 rounded-2xl p-6 mb-10">
          <div className="flex gap-4 items-start">
            <Info className="w-6 h-6 text-brand-red shrink-0 mt-1" />
            <p className="text-text-muted leading-relaxed">{t.intro}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">{isId ? 'Langkah-langkah Penghapusan' : 'Steps to Delete Data'}</h2>
        <div className="space-y-8 mb-12">
          <Step number={1} title={isId ? 'Buka Aplikasi LAIT' : 'Open LAIT App'}>
            {isId ? 'Masuk ke akun Anda di perangkat seluler.' : 'Log in to your account on your mobile device.'}
          </Step>
          <Step number={2} title={isId ? 'Navigasi ke Pengaturan' : 'Navigate to Settings'}>
            {isId ? 'Buka tab Profil, lalu ketuk ikon Pengaturan (gigi roda) di pojok kanan atas.' : 'Go to the Profile tab, then tap the Settings icon (gear) in the top right corner.'}
          </Step>
          <Step number={3} title={isId ? 'Pilih Privasi & Keamanan' : 'Select Privacy & Security'}>
            {isId ? 'Ketuk pada menu "Privasi" atau "Pengaturan Privasi".' : 'Tap on "Privacy" or "Privacy Settings" menu.'}
          </Step>
          <Step number={4} title={isId ? 'Manajemen Data' : 'Data Management'}>
            {isId ? 'Cari bagian "Manajemen Data" dan ketuk "Hapus Data Saya".' : 'Look for the "Data Management" section and tap "Delete My Data".'}
          </Step>
          <Step number={5} title={isId ? 'Pilih Kategori' : 'Select Categories'}>
            {isId ? 'Pilih kategori data yang ingin Anda hapus dengan mencentang kotak yang tersedia.' : 'Choose the data categories you want to delete by checking the available boxes.'}
          </Step>
          <Step number={6} title={isId ? 'Konfirmasi' : 'Confirm'}>
            {isId ? 'Ketuk tombol "Hapus Data Terpilih". Tindakan ini bersifat permanen dan tidak dapat dibatalkan.' : 'Tap the "Delete Selected Data" button. This action is permanent and cannot be undone.'}
          </Step>
        </div>

        <h2 className="text-2xl font-bold mb-6">{t.categoriesTitle}</h2>
        <div className="grid gap-4 mb-12">
          {categories.map((cat, i) => (
            <div key={i} className="flex gap-4 p-4 border border-border rounded-xl bg-card-bg">
              <div className="text-brand-red mt-1">{cat.icon}</div>
              <div>
                <h4 className="font-semibold text-foreground">{cat.label}</h4>
                <p className="text-sm text-text-muted">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card-bg border border-border rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">{isId ? 'Butuh Bantuan?' : 'Need Help?'}</h2>
          <p className="text-text-muted mb-4">
            {isId 
              ? 'Jika Anda mengalami kesulitan menghapus data melalui aplikasi, Anda dapat menghubungi tim privasi kami melalui email.'
              : 'If you have trouble deleting data through the app, you can contact our privacy team via email.'}
          </p>
          <a href="mailto:privacy@lait.co.id" className="text-brand-red font-bold hover:underline">
            privacy@lait.co.id
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
