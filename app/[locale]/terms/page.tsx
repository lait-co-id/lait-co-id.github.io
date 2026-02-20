import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  FileText, UserCheck, Ticket, AlertTriangle, ShieldAlert,
  RefreshCw, QrCode, Gift, Scale, Globe, Mail, XCircle, CheckCircle,
  Activity, CreditCard, Bell, Lock
} from 'lucide-react';

function Section({ number, icon, title, children }: {
  number: number;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-card-bg border border-border rounded-2xl p-6 md:p-8 hover:border-brand-red/40 transition-colors">
      <div className="flex items-start gap-4 mb-4">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-red text-white text-sm font-bold flex items-center justify-center mt-0.5">
          {number}
        </span>
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

function Bullet({ green, children }: { green?: boolean; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      {green
        ? <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
        : <XCircle className="w-4 h-4 text-brand-red/60 shrink-0 mt-0.5" />}
      <span className="text-sm">{children}</span>
    </li>
  );
}

export default async function TermsPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const id = locale === 'id';

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 pt-32 pb-20 max-w-4xl">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {id ? 'Syarat & Ketentuan Layanan' : 'Terms of Service'}
              </h1>
              <p className="text-text-muted text-sm mt-1">
                {id ? 'Berlaku sejak: 20 Februari 2026' : 'Effective date: February 20, 2026'}
              </p>
            </div>
          </div>
          <p className="text-text-muted leading-relaxed">
            {id
              ? 'Selamat datang di LAIT. Dengan mengunduh, menginstal, atau menggunakan aplikasi LAIT ("Aplikasi"), Anda menyetujui Syarat dan Ketentuan ini. Jika Anda tidak setuju, harap hentikan penggunaan Aplikasi.'
              : 'Welcome to LAIT. By downloading, installing, or using the LAIT application ("App"), you agree to these Terms of Service. If you disagree, please discontinue use of the App.'}
          </p>
        </div>

        <div className="space-y-6">

          {/* 1 — Acceptance */}
          <Section number={1} icon={<UserCheck className="w-5 h-5" />}
            title={id ? 'Penerimaan Syarat' : 'Acceptance of Terms'}>
            <p>{id
              ? 'Dengan membuat akun atau menggunakan layanan LAIT, Anda menyatakan bahwa Anda telah berusia minimal 13 tahun, memiliki kapasitas hukum untuk menyetujui kontrak ini, dan setuju untuk mematuhi semua syarat yang berlaku.'
              : 'By creating an account or using LAIT services, you confirm that you are at least 13 years old, have legal capacity to enter this agreement, and agree to comply with all applicable terms.'}</p>
          </Section>

          {/* 2 — Account */}
          <Section number={2} icon={<ShieldAlert className="w-5 h-5" />}
            title={id ? 'Akun Pengguna' : 'User Account'}>
            <ul className="space-y-1">
              <Bullet green>{id ? 'Anda bertanggung jawab atas kerahasiaan kata sandi dan keamanan akun Anda.' : 'You are responsible for the confidentiality of your password and account security.'}</Bullet>
              <Bullet green>{id ? 'Anda wajib memberikan informasi yang akurat dan terkini saat mendaftar.' : 'You must provide accurate and up-to-date information during registration.'}</Bullet>
              <Bullet green>{id ? 'Anda harus segera memberitahu kami jika terjadi akses tidak sah ke akun Anda.' : 'You must promptly notify us of any unauthorized access to your account.'}</Bullet>
              <Bullet>{id ? 'Dilarang membuat lebih dari satu akun untuk satu individu.' : 'Creating more than one account per individual is prohibited.'}</Bullet>
              <Bullet>{id ? 'Dilarang membagikan akses akun kepada orang lain.' : 'Sharing account access with others is prohibited.'}</Bullet>
            </ul>
          </Section>

          {/* 3 — Ticketing */}
          <Section number={3} icon={<Ticket className="w-5 h-5" />}
            title={id ? 'Tiket & Layanan Perjalanan' : 'Ticketing & Travel Services'}>
            <p className="font-medium text-foreground">{id ? 'Tiket Terusan Transportasi' : 'Transport Travel Pass'}</p>
            <ul className="space-y-1">
              <Bullet green>{id ? 'Tiket Harian, Mingguan, dan Bulanan tersedia sesuai ketentuan operator transportasi.' : 'Daily, Weekly, and Monthly passes are available subject to transport operator terms.'}</Bullet>
              <Bullet green>{id ? 'Tiket yang telah dibeli tidak dapat dikembalikan kecuali terdapat gangguan layanan dari pihak operator.' : 'Purchased tickets are non-refundable unless there is a service disruption from the operator.'}</Bullet>
              <Bullet green>{id ? 'Masa berlaku tiket sesuai dengan tipe yang dipilih dan dimulai dari waktu pembelian.' : 'Ticket validity corresponds to the chosen type, starting from purchase time.'}</Bullet>
            </ul>

            <p className="font-medium text-foreground mt-4">{id ? 'Tiket Objek Wisata' : 'Tourist Attraction Tickets'}</p>
            <ul className="space-y-1">
              <Bullet green>{id ? 'Tiket wisata berlaku pada tanggal dan sesi yang dipilih saat pembelian.' : 'Tourist tickets are valid for the date and session selected at purchase.'}</Bullet>
              <Bullet green>{id ? 'Harga dan ketersediaan destinasi wisata dapat berubah berdasarkan kebijakan mitra.' : 'Prices and availability of tourist destinations may change based on partner policies.'}</Bullet>
              <Bullet>{id ? 'Tiket tidak dapat dipindahtangankan ke orang lain.' : 'Tickets are non-transferable to another person.'}</Bullet>
            </ul>

            <p className="font-medium text-foreground mt-4">{id ? 'Pemindaian QR Code' : 'QR Code Scanning'}</p>
            <ul className="space-y-1">
              <Bullet green>{id ? 'Kode QR bersifat unik per tiket dan hanya dapat digunakan sekali.' : 'QR codes are unique per ticket and can only be used once.'}</Bullet>
              <Bullet>{id ? 'Dilarang mereproduksi, mendistribusikan, atau memanipulasi kode QR tiket.' : 'Reproducing, distributing, or manipulating ticket QR codes is prohibited.'}</Bullet>
            </ul>
          </Section>

          {/* 4 — Reward Points */}
          <Section number={4} icon={<Gift className="w-5 h-5" />}
            title={id ? 'Poin Reward' : 'Reward Points'}>
            <ul className="space-y-1">
              <Bullet green>{id ? 'Poin diperoleh dari setiap pembelian tiket transportasi dan pemindaian tiket.' : 'Points are earned from every transport ticket purchase and ticket scan.'}</Bullet>
              <Bullet green>{id ? 'Poin dapat ditukar sebagai diskon tiket wisata atau manfaat lain yang tersedia di aplikasi.' : 'Points can be redeemed as discounts on tourist tickets or other available benefits in the app.'}</Bullet>
              <Bullet green>{id ? 'Poin tetap berlaku selama Anda aktif menggunakan aplikasi.' : 'Points remain valid as long as you actively use the application.'}</Bullet>
              <Bullet>{id ? 'Poin tidak dapat diuangkan atau dipindahtangankan antar akun.' : 'Points cannot be cashed out or transferred between accounts.'}</Bullet>
              <Bullet>{id ? 'LAIT berhak menyesuaikan nilai tukar poin dengan pemberitahuan sebelumnya.' : 'LAIT may adjust point redemption rates with prior notice.'}</Bullet>
              <Bullet>{id ? 'Poin akan hangus jika akun tidak aktif selama lebih dari 12 bulan.' : 'Points expire if the account is inactive for more than 12 months.'}</Bullet>
            </ul>
          </Section>

          {/* 5 — Run Activity (Lait Run) */}
          <Section number={5} icon={<Activity className="w-5 h-5" />}
            title={id ? 'Fitur Pelacak Aktivitas (Lait Run)' : 'Activity Tracker Features (Lait Run)'}>
            <ul className="space-y-1">
              <Bullet green>{id ? 'Fitur pelacak lari memerlukan izin GPS aktif yang dapat Anda berikan atau cabut kapan saja.' : 'The run tracker requires active GPS permission, which you can grant or revoke at any time.'}</Bullet>
              <Bullet green>{id ? 'Data aktivitas lari disimpan di akun Anda dan dapat dihapus kapan saja melalui pengaturan.' : 'Run activity data is stored in your account and can be deleted at any time via settings.'}</Bullet>
              <Bullet green>{id ? 'Catatan harian (Diary) hanya dapat dilihat oleh Anda, kecuali Anda memilih untuk membagikannya.' : 'Diary entries are only visible to you, unless you choose to share them.'}</Bullet>
              <Bullet green>{id ? 'Anda dapat menghubungkan akun Strava untuk sinkronisasi aktivitas; izin ini dapat dicabut kapan saja.' : 'You may connect your Strava account for activity sync; this permission can be revoked at any time.'}</Bullet>
              <Bullet>{id ? 'Anda tidak boleh memanipulasi atau memalsukan data aktivitas untuk meraih keuntungan dalam event.' : 'You must not manipulate or falsify activity data for competitive advantage in events.'}</Bullet>
            </ul>
          </Section>

          {/* 6 — Payment */}
          <Section number={6} icon={<CreditCard className="w-5 h-5" />}
            title={id ? 'Pembayaran' : 'Payments'}>
            <p>{id
              ? 'LAIT mendukung berbagai metode pembayaran: QRIS, Virtual Account, Kartu Debit, dan Kartu Kredit. Pembayaran diproses oleh gateway pembayaran pihak ketiga yang bersertifikat PCI-DSS.'
              : 'LAIT supports multiple payment methods: QRIS, Virtual Account, Debit Card, and Credit Card. Payments are processed by PCI-DSS certified third-party payment gateways.'}</p>
            <ul className="space-y-1 mt-2">
              <Bullet green>{id ? 'LAIT tidak menyimpan detail kartu pembayaran lengkap Anda.' : 'LAIT does not store your full payment card details.'}</Bullet>
              <Bullet green>{id ? 'Harga ditampilkan dalam Rupiah Indonesia (IDR).' : 'Prices are displayed in Indonesian Rupiah (IDR).'}</Bullet>
              <Bullet green>{id ? 'Konfirmasi pembayaran dikirimkan melalui notifikasi aplikasi dan/atau email.' : 'Payment confirmations are sent via app notification and/or email.'}</Bullet>
              <Bullet>{id ? 'Transaksi yang berhasil tidak dapat dibatalkan unilateral.' : 'Completed transactions cannot be unilaterally reversed.'}</Bullet>
            </ul>
          </Section>

          {/* 7 — Prohibited Conduct */}
          <Section number={7} icon={<AlertTriangle className="w-5 h-5" />}
            title={id ? 'Tindakan yang Dilarang' : 'Prohibited Conduct'}>
            <ul className="space-y-1">
              <Bullet>{id ? 'Melakukan penipuan atau transaksi curang' : 'Engaging in fraud or fraudulent transactions'}</Bullet>
              <Bullet>{id ? 'Memanipulasi data aktivitas GPS atau lari' : 'Manipulating GPS or run activity data'}</Bullet>
              <Bullet>{id ? 'Menduplikasi, memodifikasi, atau mendistribusikan kode QR tiket' : 'Duplicating, modifying, or distributing ticket QR codes'}</Bullet>
              <Bullet>{id ? 'Menggunakan bot, skrip otomatis, atau alat otomasi pada aplikasi' : 'Using bots, automated scripts, or automation tools on the app'}</Bullet>
              <Bullet>{id ? 'Mengakses atau mencoba mengakses data pengguna lain tanpa izin' : 'Accessing or attempting to access other users\' data without permission'}</Bullet>
              <Bullet>{id ? 'Menyebarkan konten yang melanggar hukum, menyinggung, atau berbahaya' : 'Distributing unlawful, offensive, or harmful content'}</Bullet>
              <Bullet>{id ? 'Melakukan reverse engineering pada aplikasi' : 'Reverse engineering the application'}</Bullet>
              <Bullet>{id ? 'Menggunakan layanan untuk tujuan komersial tanpa izin tertulis' : 'Using the service for commercial purposes without written consent'}</Bullet>
            </ul>
          </Section>

          {/* 8 — Notifications */}
          <Section number={8} icon={<Bell className="w-5 h-5" />}
            title={id ? 'Notifikasi' : 'Notifications'}>
            <p>{id
              ? 'Dengan mengizinkan notifikasi, Anda menyetujui untuk menerima pesan terkait layanan seperti konfirmasi booking, pembaruan tiket, informasi event, dan penawaran promo. Anda dapat mengelola preferensi notifikasi kapan saja melalui pengaturan aplikasi atau perangkat Anda.'
              : 'By enabling notifications, you consent to receive service-related messages such as booking confirmations, ticket updates, event information, and promotional offers. You can manage notification preferences at any time through app or device settings.'}</p>
          </Section>

          {/* 9 — Intellectual Property */}
          <Section number={9} icon={<Lock className="w-5 h-5" />}
            title={id ? 'Kekayaan Intelektual' : 'Intellectual Property'}>
            <p>{id
              ? 'Semua konten, desain, logo, merek dagang, dan kode perangkat lunak di aplikasi LAIT adalah milik eksklusif PT LAIT dan/atau mitra lisensinya. Anda tidak diperkenankan menggunakan, mereproduksi, atau mendistribusikan aset tersebut tanpa izin tertulis.'
              : 'All content, design, logos, trademarks, and software code in the LAIT app are the exclusive property of PT LAIT and/or its licensors. You may not use, reproduce, or distribute these assets without written permission.'}</p>
          </Section>

          {/* 10 — Limitation of Liability */}
          <Section number={10} icon={<Scale className="w-5 h-5" />}
            title={id ? 'Batasan Tanggung Jawab' : 'Limitation of Liability'}>
            <p>{id
              ? 'LAIT disediakan "sebagaimana adanya." Kami tidak menjamin ketersediaan layanan tanpa gangguan atau bebas kesalahan. Sejauh diizinkan hukum, tanggung jawab kami terbatas pada nilai transaksi yang dipersengketakan. Kami tidak bertanggung jawab atas:'
              : 'LAIT is provided "as is." We do not guarantee uninterrupted or error-free service availability. To the extent permitted by law, our liability is limited to the value of the disputed transaction. We are not liable for:'}</p>
            <ul className="space-y-1 mt-2">
              <Bullet>{id ? 'Keterlambatan atau pembatalan layanan transportasi oleh operator' : 'Transportation service delays or cancellations by operators'}</Bullet>
              <Bullet>{id ? 'Gangguan layanan pihak ketiga (gateway pembayaran, Strava, FCM)' : 'Third-party service disruptions (payment gateways, Strava, FCM)'}</Bullet>
              <Bullet>{id ? 'Kerugian yang timbul akibat penggunaan akun yang tidak sah oleh pihak lain' : 'Losses arising from unauthorized use of your account by others'}</Bullet>
              <Bullet>{id ? 'Kehilangan data akibat force majeure atau kejadian di luar kendali kami' : 'Data loss due to force majeure or events beyond our control'}</Bullet>
            </ul>
          </Section>

          {/* 11 — Governing Law */}
          <Section number={11} icon={<Globe className="w-5 h-5" />}
            title={id ? 'Hukum yang Berlaku' : 'Governing Law'}>
            <p>{id
              ? 'Syarat dan Ketentuan ini diatur oleh dan ditafsirkan berdasarkan hukum Republik Indonesia. Setiap sengketa yang timbul akan diselesaikan melalui mediasi terlebih dahulu, dan jika tidak berhasil, melalui Pengadilan Negeri yang berwenang di Indonesia.'
              : 'These Terms are governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes will first be resolved through mediation, and if unsuccessful, through the competent District Court in Indonesia.'}</p>
          </Section>

          {/* 12 — Termination */}
          <Section number={12} icon={<XCircle className="w-5 h-5" />}
            title={id ? 'Penghentian Layanan' : 'Termination'}>
            <ul className="space-y-1">
              <Bullet green>{id ? 'Anda dapat menghapus akun kapan saja melalui pengaturan aplikasi.' : 'You may delete your account at any time via app settings.'}</Bullet>
              <Bullet green>{id ? 'LAIT berhak menangguhkan atau mengakhiri akun yang melanggar syarat ini tanpa pemberitahuan sebelumnya.' : 'LAIT may suspend or terminate accounts violating these terms without prior notice.'}</Bullet>
              <Bullet>{id ? 'Poin reward dan tiket yang belum digunakan akan hangus saat akun dihapus atau dinonaktifkan.' : 'Unused reward points and tickets expire upon account deletion or deactivation.'}</Bullet>
            </ul>
          </Section>

          {/* 13 — Changes */}
          <Section number={13} icon={<RefreshCw className="w-5 h-5" />}
            title={id ? 'Perubahan Syarat' : 'Changes to Terms'}>
            <p>{id
              ? 'Kami berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan material akan diberitahukan melalui notifikasi aplikasi atau email minimal 7 hari sebelum berlaku. Penggunaan berkelanjutan setelah tanggal efektif dianggap sebagai penerimaan perubahan tersebut.'
              : 'We reserve the right to modify these Terms at any time. Material changes will be notified via in-app notification or email at least 7 days before taking effect. Continued use after the effective date constitutes acceptance of the changes.'}</p>
          </Section>

          {/* Contact */}
          <section className="bg-brand-red/5 border border-brand-red/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-brand-red" />
              <h2 className="text-lg font-semibold text-foreground">
                {id ? 'Hubungi Kami' : 'Contact Us'}
              </h2>
            </div>
            <p className="text-text-muted mb-3">
              {id
                ? 'Pertanyaan tentang Syarat & Ketentuan ini:'
                : 'Questions about these Terms of Service:'}
            </p>
            <div className="space-y-1 text-sm">
              <p><span className="font-medium text-foreground">{id ? 'Email Hukum' : 'Legal Email'}:</span>{' '}
                <a href="mailto:legal@lait.co.id" className="text-brand-red hover:underline">legal@lait.co.id</a>
              </p>
              <p><span className="font-medium text-foreground">{id ? 'Email Dukungan' : 'Support Email'}:</span>{' '}
                <a href="mailto:support@lait.co.id" className="text-brand-red hover:underline">support@lait.co.id</a>
              </p>
              <p><span className="font-medium text-foreground">{id ? 'Kantor' : 'Office'}:</span>{' '}Denpasar, Bali, Indonesia</p>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
