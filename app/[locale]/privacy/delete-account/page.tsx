import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Trash2, AlertCircle, ArrowLeft, Mail, Info, LogOut
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

export default async function DeleteAccountGuidePage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const isId = locale === 'id';

  const t = {
    title: isId ? 'Panduan Penghapusan Akun' : 'Account Deletion Guide',
    subtitle: isId ? 'Langkah-langkah untuk menghapus akun LAIT Anda secara permanen.' : 'Steps to permanently delete your LAIT account.',
    back: isId ? 'Kembali ke Kebijakan Privasi' : 'Back to Privacy Policy',
    warning: isId 
      ? 'Penghapusan akun bersifat permanen. Semua data Anda akan dihapus dan tidak dapat dipulihkan.'
      : 'Account deletion is permanent. All your data will be removed and cannot be recovered.',
  };

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

        <div className="bg-brand-red/10 border border-brand-red/30 rounded-2xl p-6 mb-10">
          <div className="flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-brand-red shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-brand-red mb-1">{isId ? 'Peringatan Penting' : 'Important Warning'}</h4>
              <p className="text-foreground leading-relaxed font-medium">{t.warning}</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">{isId ? 'Cara Menghapus Akun' : 'How to Delete Your Account'}</h2>
        
        <div className="space-y-8 mb-12">
          <Step number={1} title={isId ? 'Buka Tab Profil' : 'Open Profile Tab'}>
            {isId ? 'Buka aplikasi LAIT dan ketuk tab "Profil" di menu navigasi bawah.' : 'Open the LAIT app and tap the "Profile" tab in the bottom navigation menu.'}
          </Step>
          <Step number={2} title={isId ? 'Masuk ke Pengaturan' : 'Go to Settings'}>
            {isId ? 'Ketuk ikon gigi roda di pojok kanan atas untuk membuka pengaturan.' : 'Tap the gear icon in the top right corner to open settings.'}
          </Step>
          <Step number={3} title={isId ? 'Pilih Privasi' : 'Select Privacy'}>
            {isId ? 'Ketuk menu "Privasi" untuk melihat pengaturan data Anda.' : 'Tap the "Privacy" menu to view your data settings.'}
          </Step>
          <Step number={4} title={isId ? 'Hapus Akun' : 'Delete Account'}>
            {isId ? 'Gulir ke bawah ke bagian "Manajemen Data" dan ketuk "Hapus Akun".' : 'Scroll down to the "Data Management" section and tap "Delete Account".'}
          </Step>
          <Step number={5} title={isId ? 'Konfirmasi Kata Sandi' : 'Password Confirmation'}>
            {isId ? 'Untuk keamanan, Anda mungkin diminta memasukkan kata sandi Anda atau mengetik teks konfirmasi.' : 'For security, you may be asked to enter your password or type a confirmation text.'}
          </Step>
          <Step number={6} title={isId ? 'Selesai' : 'Finish'}>
            {isId ? 'Ketuk tombol konfirmasi akhir. Anda akan segera keluar dari aplikasi.' : 'Tap the final confirmation button. You will be immediately logged out of the app.'}
          </Step>
        </div>

        <div className="bg-card-bg border border-border rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold mb-4">{isId ? 'Apa yang Terjadi Setelah Penghapusan?' : 'What Happens After Deletion?'}</h3>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <Trash2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <span className="text-text-muted">{isId ? 'Profil dan kredensial akun Anda dihapus secara permanen.' : 'Your profile and account credentials are permanently deleted.'}</span>
            </li>
            <li className="flex gap-3 items-start">
              <Trash2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <span className="text-text-muted">{isId ? 'Semua riwayat aktivitas, lencana, dan XP akan hilang.' : 'All activity history, badges, and XP will be lost.'}</span>
            </li>
            <li className="flex gap-3 items-start">
              <Info className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <span className="text-text-muted">{isId ? 'Catatan transaksi keuangan akan tetap disimpan selama 5 tahun sesuai hukum yang berlaku.' : 'Financial transaction records will be retained for 5 years as required by law.'}</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 bg-card-bg border border-border rounded-2xl p-6">
            <Mail className="w-6 h-6 text-brand-red mb-3" />
            <h4 className="font-bold mb-2">{isId ? 'Hubungi Dukungan' : 'Contact Support'}</h4>
            <p className="text-sm text-text-muted mb-4">{isId ? 'Kesulitan menghapus akun? Hubungi kami.' : 'Trouble deleting? Contact us.'}</p>
            <a href="mailto:support@lait.co.id" className="text-brand-red text-sm font-bold hover:underline">support@lait.co.id</a>
          </div>
          <div className="flex-1 bg-card-bg border border-border rounded-2xl p-6">
            <LogOut className="w-6 h-6 text-brand-red mb-3" />
            <h4 className="font-bold mb-2">{isId ? 'Keluar Saja?' : 'Just Log Out?'}</h4>
            <p className="text-sm text-text-muted mb-4">{isId ? 'Ingin istirahat sejenak? Anda bisa keluar saja.' : 'Need a break? You can just log out.'}</p>
            <span className="text-text-muted text-sm italic">{isId ? 'Bisa dilakukan di tab Profil' : 'Can be done in Profile tab'}</span>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
