import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Shield, Database, Lock, Eye, Trash2, Download,
  CheckCircle, XCircle, MapPin, Bell, Smartphone,
  CreditCard, Users, Server, Key, Mail, RefreshCw,
  Activity, BarChart3, QrCode, AlertCircle, ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

function Section({ number, icon, title, children }: {
  number?: number;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-card-bg border border-border rounded-2xl p-6 md:p-8 hover:border-brand-red/40 transition-colors">
      <div className="flex items-start gap-4 mb-4">
        {number !== undefined && (
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-red text-white text-sm font-bold flex items-center justify-center mt-0.5">
            {number}
          </span>
        )}
        <div className="flex items-center gap-3">
          <span className="text-brand-red">{icon}</span>
          <h2 className="text-lg md:text-xl font-semibold text-foreground">{title}</h2>
        </div>
      </div>
      <div className="ml-0 md:ml-12 text-text-muted leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-red/10 rounded-full text-xs font-medium text-brand-red border border-brand-red/20">
      {children}
    </span>
  );
}

function CheckItem({ green, children }: { green?: boolean; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      {green
        ? <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
        : <XCircle className="w-4 h-4 text-brand-red/60 shrink-0 mt-0.5" />}
      <span className="text-sm">{children}</span>
    </li>
  );
}

export default async function PrivacyPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const isId = locale === 'id';

  const t = {
    title: isId ? 'Kebijakan Privasi' : 'Privacy Policy',
    effectiveDate: isId ? 'Berlaku sejak: 2 Mei 2026' : 'Effective date: May 2, 2026',
    intro: isId
      ? 'LAIT ("kami", "platform kami") menghormati privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda saat Anda menggunakan aplikasi seluler LAIT dan layanan terkait, termasuk fitur tiket terusan, poin reward, wisata, pelacak aktivitas lari, dan manajemen akun.'
      : 'LAIT ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the LAIT mobile application and related services, including travel pass ticketing, reward points, tourism, run activity tracking, and account management features.',
  };

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 pt-32 pb-20 max-w-4xl">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{t.title}</h1>
              <p className="text-text-muted text-sm mt-1">{t.effectiveDate}</p>
            </div>
          </div>
          <p className="text-text-muted leading-relaxed">{t.intro}</p>
        </div>

        <div className="space-y-6">

          {/* 1 — Information we collect */}
          <Section number={1} icon={<Database className="w-5 h-5" />}
            title={isId ? 'Informasi yang Kami Kumpulkan' : 'Information We Collect'}>
            <p className="font-medium text-foreground">{isId ? 'a. Data Akun' : 'a. Account Data'}</p>
            <ul className="space-y-1 ml-2">
              <CheckItem green>{isId ? 'Nama lengkap atau nama tampilan' : 'Full name or display name'}</CheckItem>
              <CheckItem green>{isId ? 'Alamat email (wajib untuk pendaftaran)' : 'Email address (required for registration)'}</CheckItem>
              <CheckItem green>{isId ? 'Nomor telepon (opsional, untuk verifikasi OTP)' : 'Phone number (optional, for OTP verification)'}</CheckItem>
              <CheckItem green>{isId ? 'Foto profil (jika diunggah)' : 'Profile photo (if uploaded)'}</CheckItem>
            </ul>

            <p className="font-medium text-foreground mt-4">{isId ? 'b. Data Tiket & Transaksi' : 'b. Ticketing & Transaction Data'}</p>
            <ul className="space-y-1 ml-2">
              <CheckItem green>{isId ? 'Riwayat pembelian tiket terusan (Harian, Mingguan, Bulanan)' : 'Travel pass purchase history (Daily, Weekly, Monthly)'}</CheckItem>
              <CheckItem green>{isId ? 'Riwayat tiket wisata yang dibeli' : 'Tourist attraction tickets purchased'}</CheckItem>
              <CheckItem green>{isId ? 'Riwayat pemindaian QR Code untuk validasi tiket' : 'QR code scan history for ticket validation'}</CheckItem>
              <CheckItem green>{isId ? 'ID transaksi dan metode pembayaran yang digunakan (QRIS, Virtual Account, Debit, Kartu Kredit)' : 'Transaction IDs and payment method used (QRIS, Virtual Account, Debit, Credit Card)'}</CheckItem>
              <CheckItem green>{isId ? 'Saldo poin reward dan riwayat penggunaan poin' : 'Reward point balance and redemption history'}</CheckItem>
              <CheckItem green>{isId ? 'Kode promo yang digunakan' : 'Promo codes redeemed'}</CheckItem>
            </ul>

            <p className="font-medium text-foreground mt-4">{isId ? 'c. Data Aktivitas & Kebugaran (Lait Run)' : 'c. Activity & Fitness Data (Lait Run)'}</p>
            <ul className="space-y-1 ml-2">
              <CheckItem green>{isId ? 'Jarak tempuh, durasi, kecepatan rata-rata, dan jumlah langkah (pedometer)' : 'Running distance, duration, average pace, and step count (pedometer)'}</CheckItem>
              <CheckItem green>{isId ? 'Rute GPS (termasuk saat aplikasi di latar belakang selama sesi aktif)' : 'GPS route data (including while in background during active sessions)'}</CheckItem>
              <CheckItem green>{isId ? 'Jenis aktivitas fisik (berlari, berjalan, atau berhenti) untuk fitur auto-pause' : 'Physical activity type (running, walking, or stationary) for auto-pause features'}</CheckItem>
              <CheckItem green>{isId ? 'Data verifikasi integritas untuk kompetisi lari virtual' : 'Integrity verification data for virtual running competitions'}</CheckItem>
              <CheckItem green>{isId ? 'Catatan harian (Diary) yang Anda tulis' : 'Personal diary entries you write'}</CheckItem>
              <CheckItem green>{isId ? 'Partisipasi event dan tantangan lari' : 'Event and running challenge participation'}</CheckItem>
            </ul>
            <div className="mt-3 p-3 bg-brand-red/5 border border-brand-red/10 rounded-lg text-sm text-text-muted">
              <strong>{isId ? 'Catatan tentang Izin Aktivitas Fisik:' : 'Note on Physical Activity Permission:'}</strong> {isId 
                ? 'Izin pendeteksi aktivitas (Activity Recognition) bersifat opsional untuk perekaman lari harian guna memberikan analitik lari yang lebih lengkap. Izin ini baru menjadi wajib jika Anda mengikuti event kompetisi lari yang membutuhkan verifikasi integritas anti-kecurangan.'
                : 'Activity Recognition (step and movement detection) permission is completely optional for daily run tracking, used to provide comprehensive analytics. This permission only becomes required when participating in official event competitions that demand strict anti-fraud integrity verification.'}
            </div>

            <p className="font-medium text-foreground mt-4">{isId ? 'd. Data Perangkat & Teknis' : 'd. Device & Technical Data'}</p>
            <ul className="space-y-1 ml-2">
              <CheckItem green>{isId ? 'Jenis perangkat, sistem operasi, dan versi aplikasi' : 'Device type, OS version, and app version'}</CheckItem>
              <CheckItem green>{isId ? 'Token notifikasi push (Firebase Cloud Messaging)' : 'Push notification token (Firebase Cloud Messaging)'}</CheckItem>
              <CheckItem green>{isId ? 'Log crash dan laporan kesalahan (untuk perbaikan aplikasi)' : 'Crash logs and error reports (for app improvement)'}</CheckItem>
              <CheckItem green>{isId ? 'Penggunaan fitur untuk analitik penggunaan (agregat anonim)' : 'Feature usage for product analytics (anonymous aggregate)'}</CheckItem>
            </ul>
          </Section>

          {/* 2 — Data We Do NOT Collect */}
          <Section number={2} icon={<XCircle className="w-5 h-5" />}
            title={isId ? 'Data yang TIDAK Kami Kumpulkan' : 'Data We DO NOT Collect'}>
            <ul className="space-y-1">
              <CheckItem>{isId ? 'Detail lengkap kartu pembayaran (nomor kartu, CVV, PIN)' : 'Full payment card details (card number, CVV, PIN)'}</CheckItem>
              <CheckItem>{isId ? 'Pesan pribadi antar pengguna' : 'Private messages between users'}</CheckItem>
              <CheckItem>{isId ? 'Kontak atau daftar teman dari perangkat Anda' : 'Contacts or friend lists from your device'}</CheckItem>
              <CheckItem>{isId ? 'Data aktivitas Strava yang bersifat privat/tidak dipublikasikan' : 'Private/unpublished Strava activity data'}</CheckItem>
              <CheckItem>{isId ? 'Informasi biometrik' : 'Biometric data'}</CheckItem>
              <CheckItem>{isId ? 'Data lokasi di luar sesi pelacakan aktif yang Anda mulai' : 'Location data outside of active tracking sessions you initiate'}</CheckItem>
            </ul>
          </Section>

          {/* 3 — How We Use Your Data */}
          <Section number={3} icon={<Eye className="w-5 h-5" />}
            title={isId ? 'Bagaimana Kami Menggunakan Data Anda' : 'How We Use Your Data'}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: <QrCode className="w-4 h-4" />, text: isId ? 'Validasi tiket dan pemindaian QR' : 'Ticket validation and QR scanning' },
                { icon: <BarChart3 className="w-4 h-4" />, text: isId ? 'Mengelola saldo & riwayat poin reward' : 'Manage reward point balance & history' },
                { icon: <Activity className="w-4 h-4" />, text: isId ? 'Melacak dan menampilkan aktivitas lari' : 'Track and display run activities' },
                { icon: <Users className="w-4 h-4" />, text: isId ? 'Papan peringkat event & kompetisi' : 'Event leaderboards & competitions' },
                { icon: <Bell className="w-4 h-4" />, text: isId ? 'Notifikasi booking, promo, dan event' : 'Booking, promo, and event notifications' },
                { icon: <MapPin className="w-4 h-4" />, text: isId ? 'Rute transit & panduan wisata' : 'Transit routing & tourism guidance' },
                { icon: <Shield className="w-4 h-4" />, text: isId ? 'Deteksi penipuan dan keamanan akun' : 'Fraud detection and account security' },
                { icon: <RefreshCw className="w-4 h-4" />, text: isId ? 'Peningkatan produk dan fitur baru' : 'Product improvement and new features' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-background rounded-xl p-3 border border-border">
                  <span className="text-brand-red mt-0.5 shrink-0">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 p-3 bg-brand-red/5 border border-brand-red/20 rounded-xl mt-3">
              <AlertCircle className="w-4 h-4 text-brand-red shrink-0" />
              <p className="text-sm font-medium text-foreground">
                {isId ? 'Kami tidak menjual atau menyewakan data pribadi Anda kepada pihak ketiga.' : 'We do not sell or rent your personal data to third parties.'}
              </p>
            </div>
          </Section>

          {/* 4 — Location Data */}
          <Section number={4} icon={<MapPin className="w-5 h-5" />}
            title={isId ? 'Data Lokasi' : 'Location Data'}>
            <p>{isId
              ? 'LAIT meminta akses lokasi hanya ketika Anda secara aktif menggunakan fitur pelacakan lari atau rute transit. Untuk fitur pelacakan lari, kami memerlukan akses lokasi di latar belakang agar rute Anda tetap tercatat dengan akurat saat layar ponsel dimatikan atau saat Anda menggunakan aplikasi lain selama sesi lari berlangsung.'
              : 'LAIT requests location access only when you actively use run tracking or transit routing features. For run tracking, we require background location access to ensure your route is recorded accurately even when your screen is off or you are using other apps during an active session.'}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Tag><MapPin className="w-3 h-3" /> {isId ? 'GPS aktif saat lari' : 'Active GPS during runs'}</Tag>
              <Tag><Smartphone className="w-3 h-3" /> {isId ? 'Lokasi Latar Belakang (Opsional)' : 'Background Location (Optional)'}</Tag>
              <Tag><Activity className="w-3 h-3" /> {isId ? 'Hanya selama sesi aktif' : 'Only during active sessions'}</Tag>
            </div>
          </Section>

          {/* 5 — Third-Party Services */}
          <Section number={5} icon={<Server className="w-5 h-5" />}
            title={isId ? 'Layanan Pihak Ketiga' : 'Third-Party Services'}>
            <p>{isId
              ? 'Kami mengintegrasikan layanan pihak ketiga untuk mengoperasikan platform. Setiap pihak ketiga memiliki kebijakan privasi sendiri:'
              : 'We integrate third-party services to operate the platform. Each third party has its own privacy policy:'}</p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">{isId ? 'Layanan' : 'Service'}</th>
                    <th className="text-left py-2 font-semibold text-foreground">{isId ? 'Tujuan' : 'Purpose'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { service: 'Payment Gateways (QRIS, VA)', purpose: isId ? 'Pemrosesan pembayaran tiket & reward' : 'Ticket & reward payment processing' },
                    { service: 'Strava API', purpose: isId ? 'Sinkronisasi data lari (opsional, dengan izin eksplisit)' : 'Run data sync (optional, with explicit consent)' },
                    { service: 'Firebase (Google)', purpose: isId ? 'Notifikasi push, analitik crash, autentikasi' : 'Push notifications, crash analytics, authentication' },
                    { service: 'Operator Transportasi', purpose: isId ? 'Validasi tiket dan data rute' : 'Ticket validation and route data' },
                    { service: 'Obyek Wisata Partner', purpose: isId ? 'Validasi tiket wisata' : 'Tourist attraction ticket validation' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-4 font-medium text-foreground">{row.service}</td>
                      <td className="py-2 text-text-muted">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* 6 — Data Storage & Retention */}
          <Section number={6} icon={<Server className="w-5 h-5" />}
            title={isId ? 'Penyimpanan & Retensi Data' : 'Data Storage & Retention'}>
            <ul className="space-y-2">
              <CheckItem green>{isId ? 'Data disimpan di server aman dengan enkripsi saat transit (TLS) dan saat penyimpanan.' : 'Data is stored on secure servers with encryption in transit (TLS) and at rest.'}</CheckItem>
              <CheckItem green>{isId ? 'Data akun disimpan selama akun Anda aktif.' : 'Account data is retained while your account is active.'}</CheckItem>
              <CheckItem green>{isId ? 'Data transaksi disimpan selama 5 tahun untuk keperluan akuntansi dan hukum.' : 'Transaction data is kept for 5 years for accounting and legal requirements.'}</CheckItem>
              <CheckItem green>{isId ? 'Data aktivitas lari dan diary disimpan selama Anda menggunakan layanan.' : 'Run activity and diary data is retained as long as you use the service.'}</CheckItem>
              <CheckItem green>{isId ? 'Setelah penghapusan akun, semua data pribadi dihapus dalam 30 hari.' : 'Upon account deletion, all personal data is erased within 30 days.'}</CheckItem>
            </ul>
          </Section>

          {/* 7 — User Rights */}
          <Section number={7} icon={<Key className="w-5 h-5" />}
            title={isId ? 'Hak Anda (GDPR & Hukum Lokal)' : 'Your Rights (GDPR & Local Law)'}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: <Eye className="w-4 h-4" />, label: isId ? 'Akses' : 'Access', desc: isId ? 'Minta salinan data Anda' : 'Request a copy of your data' },
                { icon: <RefreshCw className="w-4 h-4" />, label: isId ? 'Koreksi' : 'Correction', desc: isId ? 'Perbaiki data yang tidak akurat' : 'Fix inaccurate information' },
                { icon: <Trash2 className="w-4 h-4" />, label: isId ? 'Penghapusan' : 'Deletion', desc: isId ? 'Hapus akun & semua data Anda' : 'Delete your account & all data' },
                { icon: <Download className="w-4 h-4" />, label: isId ? 'Ekspor' : 'Export', desc: isId ? 'Unduh data dalam format portabel' : 'Download data in portable format' },
                { icon: <Trash2 className="w-4 h-4" />, label: isId ? 'Keberatan / Hapus' : 'Objection / Delete', desc: isId ? 'Tolak penggunaan atau hapus data tertentu' : 'Object to or delete certain data uses' },
                { icon: <Lock className="w-4 h-4" />, label: isId ? 'Batasan' : 'Restriction', desc: isId ? 'Batasi pemrosesan data Anda' : 'Limit how we process your data' },
              ].map((right, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-background rounded-xl border border-border">
                  <span className="text-brand-red mt-0.5 shrink-0">{right.icon}</span>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{right.label}</p>
                    <p className="text-xs text-text-muted mt-0.5">{right.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <Link href={`/${locale}/privacy/delete-data`} className="flex items-center justify-between p-4 bg-brand-red/5 border border-brand-red/20 rounded-xl hover:bg-brand-red/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-brand-red" />
                  <span className="font-semibold text-sm">{isId ? 'Panduan Hapus Data' : 'Data Deletion Guide'}</span>
                </div>
                <ArrowLeft className="w-4 h-4 text-brand-red rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href={`/${locale}/privacy/delete-account`} className="flex items-center justify-between p-4 bg-brand-red/5 border border-brand-red/20 rounded-xl hover:bg-brand-red/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <Trash2 className="w-5 h-5 text-brand-red" />
                  <span className="font-semibold text-sm">{isId ? 'Panduan Hapus Akun' : 'Account Deletion Guide'}</span>
                </div>
                <ArrowLeft className="w-4 h-4 text-brand-red rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <p className="text-sm mt-6">
              {isId
                ? 'Untuk menggunakan hak Anda, kirimkan email ke '
                : 'To exercise your rights, email us at '}
              <a href="mailto:privacy@lait.co.id" className="text-brand-red font-medium hover:underline">privacy@lait.co.id</a>
              {isId ? ' atau hapus akun/data langsung dari pengaturan aplikasi.' : ' or delete your account/data directly from the app settings.'}
            </p>
          </Section>

          {/* 8 — Data Security */}
          <Section number={8} icon={<Lock className="w-5 h-5" />}
            title={isId ? 'Keamanan Data' : 'Data Security'}>
            <p>{isId
              ? 'Kami menerapkan langkah-langkah teknis dan organisasi yang wajar untuk melindungi data Anda, termasuk:'
              : 'We implement reasonable technical and organizational measures to protect your data, including:'}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['TLS/HTTPS', 'AES-256 Encryption', isId ? 'Kontrol Akses Berbasis Peran' : 'Role-Based Access Control',
                isId ? 'Audit Keamanan Berkala' : 'Periodic Security Audits', isId ? 'Autentikasi Dua Faktor' : 'Two-Factor Authentication'].map((item, i) => (
                <Tag key={i}>{item}</Tag>
              ))}
            </div>
          </Section>

          {/* 9 — Children's Privacy */}
          <Section number={9} icon={<Users className="w-5 h-5" />}
            title={isId ? 'Privasi Anak-Anak' : "Children's Privacy"}>
            <p>{isId
              ? 'Layanan LAIT ditujukan untuk pengguna berusia 13 tahun ke atas. Kami tidak dengan sengaja mengumpulkan data pribadi dari anak-anak di bawah 13 tahun. Jika Anda mengetahui bahwa anak di bawah 13 tahun telah memberikan data kepada kami, silakan hubungi kami untuk penghapusan.'
              : 'LAIT services are intended for users aged 13 and older. We do not knowingly collect personal data from children under 13. If you believe a child under 13 has provided us data, please contact us for removal.'}</p>
          </Section>

          {/* 10 — Push Notifications */}
          <Section number={10} icon={<Bell className="w-5 h-5" />}
            title={isId ? 'Notifikasi Push' : 'Push Notifications'}>
            <p>{isId
              ? 'Dengan izin Anda, kami mengirimkan notifikasi terkait: konfirmasi booking, status tiket, pembaruan event, penawaran promo, dan pengingat aktivitas. Anda dapat menonaktifkan notifikasi kapan saja melalui pengaturan perangkat atau aplikasi.'
              : 'With your permission, we send notifications for: booking confirmations, ticket status updates, event news, promo offers, and activity reminders. You can disable notifications at any time via device or app settings.'}</p>
          </Section>

          {/* 11 — Policy Changes */}
          <Section number={11} icon={<RefreshCw className="w-5 h-5" />}
            title={isId ? 'Perubahan Kebijakan' : 'Policy Changes'}>
            <p>{isId
              ? 'Kami dapat memperbarui Kebijakan Privasi ini secara berkala. Perubahan material akan diumumkan melalui notifikasi dalam aplikasi atau email sebelum berlaku. Tanggal "Berlaku sejak" di bagian atas mencerminkan revisi terbaru.'
              : 'We may periodically update this Privacy Policy. Material changes will be announced via in-app notification or email before taking effect. The "Effective date" at the top reflects the latest revision.'}</p>
          </Section>

          {/* Contact */}
          <section className="bg-brand-red/5 border border-brand-red/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-brand-red" />
              <h2 className="text-lg font-semibold text-foreground">
                {isId ? 'Hubungi Kami' : 'Contact Us'}
              </h2>
            </div>
            <p className="text-text-muted mb-3">
              {isId
                ? 'Untuk pertanyaan tentang kebijakan privasi ini atau untuk menggunakan hak privasi Anda:'
                : 'For questions about this Privacy Policy or to exercise your privacy rights:'}
            </p>
            <div className="space-y-1 text-sm">
              <p><span className="font-medium text-foreground">{isId ? 'Email Privasi' : 'Privacy Email'}:</span>{' '}
                <a href="mailto:privacy@lait.co.id" className="text-brand-red hover:underline">privacy@lait.co.id</a>
              </p>
              <p><span className="font-medium text-foreground">{isId ? 'Email Dukungan' : 'Support Email'}:</span>{' '}
                <a href="mailto:support@lait.co.id" className="text-brand-red hover:underline">support@lait.co.id</a>
              </p>
              <p><span className="font-medium text-foreground">{isId ? 'Kantor' : 'Office'}:</span>{' '}
                Denpasar, Bali, Indonesia</p>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
