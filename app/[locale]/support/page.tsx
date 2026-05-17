import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  HelpCircle, Mail, Zap, Shield, FileText, Globe, AlertTriangle, Users, Activity,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

export default async function SupportPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const isId = locale === 'id';

  const faqItems = [
    {
      category: 'general',
      question: isId ? 'Apa itu LAIT?' : 'What is LAIT?',
      answer: isId
        ? 'LAIT adalah aplikasi mobile yang menyediakan tiket transportasi terusan, tiket wisata, pelacakan aktivitas lari, poin reward, dan akses ke berbagai event dan challenge.'
        : 'LAIT is a mobile application providing travel pass tickets, tourist attraction tickets, run activity tracking, reward points, and access to various events and challenges.'
    },
    {
      category: 'general',
      question: isId ? 'Bagaimana cara mendaftar di LAIT?' : 'How do I register for LAIT?',
      answer: isId
        ? 'Unduh aplikasi LAIT dari App Store atau Google Play, buka aplikasi, dan klik "Daftar". Masukkan email Anda, buat password yang kuat, dan verifikasi email Anda untuk menyelesaikan pendaftaran.'
        : 'Download LAIT from the App Store or Google Play, open the app, and click "Sign Up". Enter your email, create a strong password, and verify your email to complete registration.'
    },
    {
      category: 'general',
      question: isId ? 'Apakah LAIT gratis digunakan?' : 'Is LAIT free to use?',
      answer: isId
        ? 'LAIT gratis untuk diunduh dan untuk fitur dasar seperti pelacakan lari dan manajemen akun. Biaya hanya berlaku saat Anda membeli tiket transportasi, tiket wisata, atau berpartisipasi dalam event berbayar.'
        : 'LAIT is free to download and use for basic features like run tracking and account management. Charges only apply when you purchase transport tickets, tourist tickets, or participate in paid events.'
    },
    {
      category: 'tickets',
      question: isId ? 'Bagaimana cara membeli tiket di LAIT?' : 'How do I purchase tickets on LAIT?',
      answer: isId
        ? 'Buka aplikasi LAIT, navigasi ke bagian Tiket, pilih jenis tiket (Harian, Mingguan, Bulanan, atau Wisata), pilih tanggal/periode, dan lakukan pembayaran melalui metode yang tersedia seperti QRIS, Virtual Account, atau Kartu Debit/Kredit.'
        : 'Open LAIT, navigate to the Tickets section, select ticket type (Daily, Weekly, Monthly, or Tourist), choose your date/period, and pay using available methods like QRIS, Virtual Account, or Debit/Credit Card.'
    },
    {
      category: 'tickets',
      question: isId ? 'Bisakah saya membatalkan tiket yang sudah dibeli?' : 'Can I cancel a purchased ticket?',
      answer: isId
        ? 'Tiket yang sudah dibeli umumnya tidak dapat dibatalkan atau dikembalikan. Namun, jika terjadi gangguan layanan dari operator transportasi, Anda mungkin berhak mendapat pengembalian dana. Hubungi dukungan kami untuk membahas kasus spesifik Anda.'
        : 'Purchased tickets generally cannot be cancelled or refunded. However, if there is a service disruption from the transport operator, you may be eligible for a refund. Contact our support team to discuss your specific case.'
    },
    {
      category: 'tickets',
      question: isId ? 'Bagaimana cara memindai QR code tiket?' : 'How do I scan the ticket QR code?',
      answer: isId
        ? 'Buka tiket Anda di aplikasi LAIT, temukan kode QR, dan arahkan ke scanner yang tersedia di stasiun transportasi atau pintu masuk objek wisata. Kode QR akan berubah status menjadi "Tervalidasi" setelah pemindaian berhasil.'
        : 'Open your ticket in LAIT, find the QR code, and point it to the scanner available at transportation stations or tourist attraction entrances. The QR code status will change to "Validated" after successful scanning.'
    },
    {
      category: 'tickets',
      question: isId ? 'Berapa lama tiket berlaku?' : 'How long are tickets valid?',
      answer: isId
        ? 'Masa berlaku tiket tergantung jenis yang Anda pilih: Tiket Harian berlaku 24 jam, Mingguan berlaku 7 hari, Bulanan berlaku 30 hari. Tiket wisata berlaku pada tanggal dan jam yang dipilih saat pembelian. Cek email konfirmasi Anda untuk detail lengkap.'
        : 'Ticket validity depends on the type you choose: Daily tickets valid for 24 hours, Weekly for 7 days, Monthly for 30 days. Tourist tickets are valid on the selected date and time of purchase. Check your confirmation email for full details.'
    },
    {
      category: 'account',
      question: isId ? 'Bagaimana cara mengganti password saya?' : 'How do I change my password?',
      answer: isId
        ? 'Buka aplikasi LAIT, masuk ke Pengaturan > Keamanan > Ubah Password. Masukkan password lama Anda, lalu password baru dua kali. Pastikan password Anda kuat dan unik.'
        : 'Open LAIT, go to Settings > Security > Change Password. Enter your old password, then your new password twice. Make sure your password is strong and unique.'
    },
    {
      category: 'account',
      question: isId ? 'Bagaimana cara menghapus akun saya?' : 'How do I delete my account?',
      answer: isId
        ? 'Buka Pengaturan > Privasi > Hapus Akun. Ikuti instruksi untuk mengonfirmasi permintaan penghapusan. Semua data pribadi Anda akan dihapus secara permanen dalam waktu 30 hari.'
        : 'Open Settings > Privacy > Delete Account. Follow the instructions to confirm deletion request. All your personal data will be permanently deleted within 30 days.'
    },
    {
      category: 'account',
      question: isId ? 'Apakah data saya aman di LAIT?' : 'Is my data safe on LAIT?',
      answer: isId
        ? 'Ya, kami menggunakan enkripsi tingkat bank dan mematuhi standar keamanan internasional. Data pembayaran Anda diproses oleh gateway pihak ketiga bersertifikat PCI-DSS. Lihat Kebijakan Privasi kami untuk detail lengkap.'
        : 'Yes, we use bank-level encryption and comply with international security standards. Your payment data is processed by PCI-DSS certified third-party gateways. See our Privacy Policy for full details.'
    },
    {
      category: 'rewards',
      question: isId ? 'Bagaimana cara mendapatkan poin reward?' : 'How do I earn reward points?',
      answer: isId
        ? 'Anda mendapatkan poin reward setiap kali membeli tiket transportasi atau memindai tiket. Semakin sering Anda menggunakan LAIT, semakin banyak poin yang Anda kumpulkan. Cek saldo poin Anda di halaman profil.'
        : 'You earn reward points every time you purchase a transport ticket or scan a ticket. The more you use LAIT, the more points you accumulate. Check your points balance on your profile page.'
    },
    {
      category: 'rewards',
      question: isId ? 'Bagaimana cara menukar poin reward saya?' : 'How do I redeem my reward points?',
      answer: isId
        ? 'Buka aplikasi, navigasi ke Reward, pilih diskon atau benefit yang ingin Anda tukar, dan klik "Tukar". Poin Anda akan langsung dikurangi dan benefit akan diterapkan ke akun Anda.'
        : 'Open the app, navigate to Rewards, select the discount or benefit you want to redeem, and click "Redeem". Your points will be deducted and the benefit applied to your account.'
    },
    {
      category: 'technical',
      question: isId ? 'Mengapa aplikasi LAIT tidak responsif?' : 'Why is the LAIT app not responding?',
      answer: isId
        ? 'Coba tutup aplikasi sepenuhnya dan buka kembali. Pastikan Anda memiliki koneksi internet yang stabil. Jika masalah berlanjut, hapus cache aplikasi atau perbarui ke versi terbaru dari App Store/Google Play.'
        : 'Try closing the app completely and reopening it. Ensure you have a stable internet connection. If the issue persists, clear the app cache or update to the latest version from App Store/Google Play.'
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 pt-32 pb-20 max-w-5xl">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {isId ? 'Pusat Bantuan' : 'Support Center'}
              </h1>
              <p className="text-text-muted text-sm mt-1">
                {isId ? 'Kami siap membantu Anda' : 'We\'re here to help'}
              </p>
            </div>
          </div>
          <p className="text-text-muted leading-relaxed">
            {isId
              ? 'Temukan jawaban cepat untuk pertanyaan umum tentang LAIT. Jika Anda tidak menemukan jawaban yang Anda cari, hubungi tim dukungan kami.'
              : 'Find quick answers to common questions about LAIT. If you can\'t find what you\'re looking for, contact our support team.'}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: isId ? 'Respons Cepat' : 'Fast Response', value: '24h' },
            { label: isId ? 'Kepuasan' : 'Satisfaction', value: '98%' },
            { label: isId ? 'Soal Terjawab' : 'Issues Resolved', value: '500+' },
            { label: isId ? 'Dukungan 24/7' : '24/7 Support', value: '✓' },
          ].map((stat, i) => (
            <div key={i} className="bg-card-bg border border-border rounded-xl p-4 text-center hover:border-brand-red/40 transition-colors">
              <div className="text-2xl font-bold text-brand-red mb-1">{stat.value}</div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {isId ? 'Pertanyaan yang Sering Diajukan' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const categoryIcons: Record<string, React.ReactNode> = {
                general: <HelpCircle className="w-4 h-4" />,
                tickets: <FileText className="w-4 h-4" />,
                account: <Users className="w-4 h-4" />,
                rewards: <Activity className="w-4 h-4" />,
                technical: <Zap className="w-4 h-4" />,
              };

              const categoryColors: Record<string, string> = {
                general: 'bg-brand-red/10 text-brand-red',
                tickets: 'bg-blue-500/10 text-blue-600',
                account: 'bg-green-500/10 text-green-600',
                rewards: 'bg-yellow-500/10 text-yellow-600',
                technical: 'bg-purple-500/10 text-purple-600',
              };

              return (
                <div key={idx} className="bg-card-bg border border-border rounded-2xl overflow-hidden hover:border-brand-red/40 transition-colors">
                  <div className="px-6 py-5">
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`p-2 rounded-lg ${categoryColors[item.category] || categoryColors.general}`}>
                        {categoryIcons[item.category] || categoryIcons.general}
                      </div>
                      <h3 className="font-semibold text-foreground flex-1">{item.question}</h3>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed ml-12">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Contact Card */}
          <div className="bg-card-bg border border-border rounded-2xl p-8 hover:border-brand-red/40 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-red/10 rounded-xl">
                <Mail className="w-6 h-6 text-brand-red" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                {isId ? 'Hubungi Kami' : 'Contact Us'}
              </h2>
            </div>
            <p className="text-text-muted mb-4 text-sm">
              {isId
                ? 'Tidak menemukan jawaban? Tim dukungan kami siap membantu.'
                : 'Can\'t find the answer? Our support team is ready to help.'}
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-text-muted text-sm mb-1">{isId ? 'Email' : 'Email'}</p>
                <a href="mailto:support@lait.co.id" className="text-brand-red hover:underline font-medium text-sm">
                  support@lait.co.id
                </a>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-1">{isId ? 'Waktu Respons' : 'Response Time'}</p>
                <p className="text-foreground text-sm">{isId ? '1-2 hari kerja' : '1-2 business days'}</p>
              </div>
            </div>
          </div>

          {/* Data & Security Card */}
          <div className="bg-brand-red/5 border border-brand-red/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-red/10 rounded-xl">
                <Shield className="w-6 h-6 text-brand-red" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                {isId ? 'Data & Keamanan' : 'Data & Security'}
              </h2>
            </div>
            <p className="text-text-muted mb-4 text-sm">
              {isId
                ? 'Anda memiliki kontrol penuh atas informasi Anda.'
                : 'You have full control over your information.'}
            </p>
            <div className="space-y-3">
              {[
                isId ? 'Minta penghapusan akun via email' : 'Request account deletion via email',
                isId ? 'Ekspor data Anda kapan saja' : 'Export your data anytime',
                isId ? 'Enkripsi tingkat bank' : 'Bank-level encryption',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-muted">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {isId ? 'Sumber Daya Lainnya' : 'More Resources'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: isId ? 'Syarat & Ketentuan' : 'Terms of Service',
                link: `/${locale}/terms`,
                desc: isId ? 'Baca aturan platform kami' : 'Read our platform rules'
              },
              {
                icon: Shield,
                title: isId ? 'Kebijakan Privasi' : 'Privacy Policy',
                link: `/${locale}/privacy`,
                desc: isId ? 'Pelajari perlindungan data' : 'Learn about data protection'
              },
              {
                icon: Globe,
                title: isId ? 'Tentang LAIT' : 'About LAIT',
                link: `/${locale}`,
                desc: isId ? 'Kembali ke halaman utama' : 'Back to home page'
              },
            ].map((resource, i) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={i}
                  href={resource.link}
                  className="bg-card-bg border border-border rounded-2xl p-6 hover:border-brand-red/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-text-muted text-sm">{resource.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Alert */}
        <div className="bg-brand-red/5 border border-brand-red/20 rounded-2xl p-6 text-center">
          <AlertTriangle className="w-6 h-6 text-brand-red mx-auto mb-3" />
          <p className="text-foreground font-medium mb-2">
            {isId ? 'Ada masalah keamanan?' : 'Security concern?'}
          </p>
          <p className="text-text-muted text-sm">
            {isId
              ? 'Jangan bagikan password atau informasi sensitif Anda. Hubungi kami segera jika Anda mencurigai aktivitas tidak sah.'
              : 'Never share your password or sensitive information. Contact us immediately if you suspect unauthorized activity.'}
          </p>
        </div>

      </div>
      <Footer />
    </main>
  );
}
