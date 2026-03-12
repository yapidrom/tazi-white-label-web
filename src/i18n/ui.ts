export const languages = {
  tr: 'Türkçe',
  en: 'English',
} as const;

export const defaultLang = 'tr' as const;

export const ui = {
  tr: {
    // Navbar
    'nav.home': 'Ana Sayfa',
    'nav.howItWorks': 'Nasıl Çalışır',
    'nav.gallery': 'Galeri',
    'nav.pricing': 'Fiyatlar',
    'nav.map': 'Harita',
    'nav.faq': 'SSS',
    'nav.contact': 'İletişim',
    'nav.download': 'Uygulamayı İndir',
    'nav.legal': 'Yasal',

    // Hero
    'hero.title': 'Şehrinizde Akıllı Mikromobilite',
    'hero.subtitle':
      'Merbis ile çevre dostu, hızlı ve ekonomik ulaşım. E-scooter ve e-bisikletlerle şehri keşfedin.',
    'hero.cta': 'Uygulamayı İndir',
    'hero.learnMore': 'Nasıl Çalışır?',

    // How It Works
    'how.title': 'Nasıl Çalışır?',
    'how.subtitle': 'Sadece 4 adımda yolculuğunuza başlayın',
    'how.step1.title': 'Uygulamayı İndir',
    'how.step1.desc': 'App Store veya Google Play\'den Merbis uygulamasını indirin ve kayıt olun.',
    'how.step2.title': 'Aracı Bul',
    'how.step2.desc': 'Harita üzerinden size en yakın e-scooter veya e-bisikleti bulun.',
    'how.step3.title': 'QR ile Başlat',
    'how.step3.desc': 'Araç üzerindeki QR kodu tarayarak yolculuğunuzu başlatın.',
    'how.step4.title': 'Park Et & Kilitle',
    'how.step4.desc': 'Yolculuğunuz bittiğinde aracı uygun alana park edin ve kilitleyin.',

    // Gallery
    'gallery.title': 'Galeri',
    'gallery.subtitle': 'Modern ve güvenli mikromobilite araçlarımızı keşfedin',

    // Pricing
    'pricing.title': 'Fiyatlar',
    'pricing.subtitle': 'Şeffaf ve uygun fiyatlarla ulaşım',
    'pricing.unlock': 'Kilit Açma',
    'pricing.perMin': '/ dakika',
    'pricing.scooter': 'E-Scooter',
    'pricing.bike': 'E-Bisiklet',
    'pricing.daily': 'Günlük Paket',
    'pricing.monthly': 'Aylık Paket',
    'pricing.dailyDesc': 'Sınırsız kilit açma + 90 dk sürüş',
    'pricing.monthlyDesc': 'Sınırsız kilit açma + 300 dk sürüş',
    'pricing.popular': 'Popüler',

    // Map
    'map.title': 'Araç Konumları',
    'map.subtitle': 'Haritada yakınındaki araçları gör',

    // App Download
    'app.title': 'Merbis Uygulamasını İndir',
    'app.subtitle': 'iOS ve Android için ücretsiz. Hemen başlayın!',
    'app.appStore': 'App Store\'dan İndir',
    'app.playStore': 'Google Play\'den İndir',

    // FAQ
    'faq.title': 'Sıkça Sorulan Sorular',
    'faq.subtitle': 'En çok merak edilen 3 soru',
    'faq.q1': 'Merbis nasıl kullanılır?',
    'faq.a1':
      'Uygulamayı indirdikten sonra kayıt olun, haritadan aracınızı seçin ve QR kodu tarayarak yolculuğunuza başlayın. Yolculuk sonunda aracı belirlenen park alanına bırakmanız yeterli.',
    'faq.q2': 'Ehliyet gerekli mi?',
    'faq.a2':
      'E-scooter kullanımı için ehliyet gerekmemektedir ancak 15 yaşından büyük olmanız gerekmektedir. Tüm kullanıcıların trafik kurallarına uyması zorunludur.',
    'faq.q3': 'Ödeme nasıl yapılır?',
    'faq.a3':
      'Uygulama içinden kredi kartı veya banka kartınızı ekleyerek ödeme yapabilirsiniz. Yolculuk sonunda ücret otomatik olarak tahsil edilir.',
    'faq.q4': 'Araçları nerelere park edebilirim?',
    'faq.a4':
      'Araçları yalnızca uygulama üzerinde belirtilen park alanlarına bırakabilirsiniz. Yasak bölgelere park edilmesi durumunda ek ücret uygulanabilir.',
    'faq.q5': 'Yolculuk sırasında arıza olursa ne yapmalıyım?',
    'faq.a5':
      'Uygulama içindeki "Sorun Bildir" butonunu kullanarak arızayı bildirebilirsiniz. Yolculuğunuz otomatik olarak sonlandırılır ve ücret iadesi yapılır.',
    'faq.q6': 'Hız sınırı nedir?',
    'faq.a6':
      'E-scooterlar maksimum 25 km/s hıza ulaşabilir. Yaya bölgelerinde ve kalabalık alanlarda hız otomatik olarak düşürülür.',
    'faq.q7': 'Birden fazla kişi aynı aracı kullanabilir mi?',
    'faq.a7':
      'Hayır, her araç tek kişilik kullanım için tasarlanmıştır. Güvenliğiniz için araçlara ikinci yolcu alınmamalıdır.',
    'faq.showMore': 'Tüm Soruları Gör',
    'faq.showLess': 'Daha Az Göster',

    // Contact
    'contact.title': 'İletişim',
    'contact.subtitle': 'Bize ulaşın',
    'contact.address': 'Adres',
    'contact.addressVal': 'Belediye Binası, Cumhuriyet Cad. No:1, Merkez',
    'contact.phone': 'Telefon',
    'contact.phoneVal': '0 (312) 000 00 00',
    'contact.email': 'E-posta',
    'contact.emailVal': 'merbis@belediye.gov.tr',
    'contact.hours': 'Çalışma Saatleri',
    'contact.hoursVal': 'Hafta içi: 08:00 - 18:00',

    // Legal
    'legal.title': 'Yasal',
    'legal.deleteAccount': 'Hesap Silme',
    'legal.terms': 'Kullanım Sözleşmesi',
    'legal.privacy': 'Gizlilik Politikası',
    'legal.kvkk': 'KVKK Aydınlatma Metni',

    // Delete Account Modal
    'delete.title': 'Hesap Silme Talebi',
    'delete.desc': 'Hesabınızı kalıcı olarak silmek için lütfen telefon numaranızı girin. Size bir doğrulama kodu göndereceğiz.',
    'delete.phone': 'Telefon Numarası',
    'delete.phonePlaceholder': '05XX XXX XX XX',
    'delete.sendOtp': 'Doğrulama Kodu Gönder',
    'delete.otpTitle': 'Doğrulama Kodu',
    'delete.otpDesc': 'Telefonunuza gönderilen 6 haneli kodu girin.',
    'delete.otpPlaceholder': '------',
    'delete.confirm': 'Hesabı Sil',
    'delete.cancel': 'İptal',
    'delete.back': 'Geri',
    'delete.successTitle': 'Hesap Silindi',
    'delete.successMsg': 'Hesabınız başarıyla silindi. Tüm verileriniz 30 gün içinde kalıcı olarak kaldırılacaktır.',
    'delete.failTitle': 'İşlem Başarısız',
    'delete.failMsg': 'Hesap silme işlemi gerçekleştirilemedi. Lütfen daha sonra tekrar deneyin.',
    'delete.testSuccess': 'Başarılı Test',
    'delete.testFail': 'Başarısız Test',
    'delete.close': 'Kapat',
    'delete.phoneError': 'Lütfen geçerli bir 10 haneli telefon numarası girin.',
    'delete.confirmClose': 'Çıkmak istediğinize emin misiniz? Tüm işlemi baştan yapmanız gerekecektir.',

    // Terms Modal
    'terms.title': 'Kullanım Sözleşmesi',
    'terms.content': `<h3>1. Genel Hükümler</h3>
<p>İşbu Kullanım Sözleşmesi ("Sözleşme"), Merbis mikromobilite hizmetlerinin kullanımına ilişkin şart ve koşulları düzenlemektedir. Hizmetlerimizi kullanarak bu sözleşmenin tüm hükümlerini kabul etmiş sayılırsınız.</p>

<h3>2. Hizmet Tanımı</h3>
<p>Merbis, belediye bünyesinde faaliyet gösteren bir mikromobilite hizmetidir. Kullanıcılara e-scooter ve e-bisiklet kiralama imkanı sunmaktadır. Hizmet, mobil uygulama üzerinden erişilebilir olup 7/24 aktiftir.</p>

<h3>3. Kullanıcı Yükümlülükleri</h3>
<p>Kullanıcılar; trafik kurallarına uymakla, araçları sadece belirlenen park alanlarına bırakmakla, araçlara kasıtlı olarak zarar vermemekle ve 15 yaşından büyük olmakla yükümlüdür. Araçların birden fazla kişi tarafından aynı anda kullanılması yasaktır.</p>

<h3>4. Ücretlendirme</h3>
<p>Hizmet kullanım ücretleri uygulama içinde belirtilmektedir. Kilit açma ücreti ve dakika başı ücret uygulanır. Kullanıcı, yolculuk başlangıcında belirtilen tarifeyi kabul etmiş sayılır. Ödemeler kayıtlı kredi/banka kartından otomatik olarak tahsil edilir.</p>

<h3>5. Sorumluluk Sınırları</h3>
<p>Merbis, araçların kullanımı sırasında oluşabilecek kişisel yaralanma veya maddi hasarlardan sorumlu tutulamaz. Kullanıcılar kendi güvenlikleri için kask takmaları önerilir. Araç arızası durumunda uygulama üzerinden bildirim yapılmalıdır.</p>

<h3>6. Hesap Güvenliği</h3>
<p>Kullanıcılar hesap bilgilerinin gizliliğinden sorumludur. Hesap bilgilerinin üçüncü şahıslarla paylaşılması durumunda doğacak zararlardan Merbis sorumlu tutulamaz.</p>

<h3>7. Sözleşme Değişiklikleri</h3>
<p>Merbis, işbu sözleşmede değişiklik yapma hakkını saklı tutar. Değişiklikler uygulama üzerinden bildirilir ve yayınlandığı tarihte yürürlüğe girer.</p>`,

    // KVKK Modal
    'kvkk.title': 'KVKK Aydınlatma Metni',
    'kvkk.content': `<h3>1. Veri Sorumlusu</h3>
<p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, kişisel verileriniz veri sorumlusu sıfatıyla Merbis Belediye Mikromobilite Hizmetleri tarafından işlenmektedir.</p>

<h3>2. İşlenen Kişisel Veriler</h3>
<p>Hizmetlerimiz kapsamında aşağıdaki kişisel verileriniz işlenmektedir: Ad-soyad, telefon numarası, e-posta adresi, konum bilgisi, ödeme bilgileri, yolculuk geçmişi ve uygulama kullanım verileri.</p>

<h3>3. Kişisel Verilerin İşlenme Amaçları</h3>
<p>Kişisel verileriniz; hizmet sunumu, kimlik doğrulama, ödeme işlemleri, müşteri iletişimi, yasal yükümlülüklerin yerine getirilmesi, hizmet kalitesinin artırılması ve istatistiksel analiz amaçlarıyla işlenmektedir.</p>

<h3>4. Kişisel Verilerin Aktarımı</h3>
<p>Kişisel verileriniz; yasal zorunluluklar dahilinde yetkili kamu kurum ve kuruluşlarına, ödeme işlemleri için anlaşmalı finansal kuruluşlara ve hizmet alınan iş ortaklarına aktarılabilmektedir.</p>

<h3>5. Kişisel Veri Saklama Süresi</h3>
<p>Kişisel verileriniz, işleme amaçlarının gerektirdiği süre boyunca ve yasal saklama süreleri dahilinde muhafaza edilmektedir. Hesap silme talebinde bulunulması halinde verileriniz 30 gün içinde silinir.</p>

<h3>6. Veri Sahibinin Hakları</h3>
<p>KVKK'nın 11. maddesi gereğince; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme, yurtiçinde veya yurtdışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme ve silinmesini veya yok edilmesini isteme haklarına sahipsiniz.</p>

<h3>7. Başvuru Yöntemi</h3>
<p>Haklarınıza ilişkin taleplerinizi merbis@belediye.gov.tr adresine veya uygulama içi destek kanalından iletebilirsiniz.</p>`,

    // Footer
    'footer.rights': '© 2026 Merbis. Tüm hakları saklıdır.',
    'footer.municipality': 'Bir belediye mikromobilite hizmetidir.',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.howItWorks': 'How It Works',
    'nav.gallery': 'Gallery',
    'nav.pricing': 'Pricing',
    'nav.map': 'Map',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.download': 'Download App',
    'nav.legal': 'Legal',

    // Hero
    'hero.title': 'Smart Micromobility in Your City',
    'hero.subtitle':
      'Eco-friendly, fast, and affordable transport with Merbis. Explore the city with e-scooters and e-bikes.',
    'hero.cta': 'Download App',
    'hero.learnMore': 'How It Works?',

    // How It Works
    'how.title': 'How It Works?',
    'how.subtitle': 'Start your journey in just 4 steps',
    'how.step1.title': 'Download the App',
    'how.step1.desc': 'Download Merbis from App Store or Google Play and sign up.',
    'how.step2.title': 'Find a Vehicle',
    'how.step2.desc': 'Find the nearest e-scooter or e-bike on the map.',
    'how.step3.title': 'Scan & Ride',
    'how.step3.desc': 'Scan the QR code on the vehicle to start your ride.',
    'how.step4.title': 'Park & Lock',
    'how.step4.desc': 'When done, park the vehicle in a designated area and lock it.',

    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Discover our modern and safe micromobility vehicles',

    // Pricing
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Transparent and affordable transportation',
    'pricing.unlock': 'Unlock Fee',
    'pricing.perMin': '/ minute',
    'pricing.scooter': 'E-Scooter',
    'pricing.bike': 'E-Bike',
    'pricing.daily': 'Daily Pass',
    'pricing.monthly': 'Monthly Pass',
    'pricing.dailyDesc': 'Unlimited unlocks + 90 min ride',
    'pricing.monthlyDesc': 'Unlimited unlocks + 300 min ride',
    'pricing.popular': 'Popular',

    // Map
    'map.title': 'Vehicle Locations',
    'map.subtitle': 'See vehicles near you on the map',

    // App Download
    'app.title': 'Download Merbis App',
    'app.subtitle': 'Free for iOS and Android. Get started now!',
    'app.appStore': 'Download on App Store',
    'app.playStore': 'Get it on Google Play',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Top 3 most asked questions',
    'faq.q1': 'How do I use Merbis?',
    'faq.a1':
      'After downloading the app, sign up, select your vehicle on the map, and scan the QR code to start riding. When done, just park in a designated area.',
    'faq.q2': 'Do I need a license?',
    'faq.a2':
      'No license is required for e-scooters, but you must be over 15 years old. All users must follow traffic rules.',
    'faq.q3': 'How do I pay?',
    'faq.a3':
      'Add your credit or debit card in the app. The fare is automatically charged at the end of your ride.',
    'faq.q4': 'Where can I park the vehicles?',
    'faq.a4':
      'You can only park vehicles in designated areas shown on the app map. Parking in restricted zones may result in additional charges.',
    'faq.q5': 'What if the vehicle breaks down during my ride?',
    'faq.a5':
      'Use the "Report Issue" button in the app to report the problem. Your ride will be automatically ended and you will receive a refund.',
    'faq.q6': 'What is the speed limit?',
    'faq.a6':
      'E-scooters can reach a maximum speed of 25 km/h. Speed is automatically reduced in pedestrian zones and crowded areas.',
    'faq.q7': 'Can multiple people use the same vehicle?',
    'faq.a7':
      'No, each vehicle is designed for single-rider use only. For your safety, do not carry a second passenger.',
    'faq.showMore': 'Show All Questions',
    'faq.showLess': 'Show Less',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch',
    'contact.address': 'Address',
    'contact.addressVal': 'Municipality Building, Cumhuriyet Ave. No:1, Center',
    'contact.phone': 'Phone',
    'contact.phoneVal': '+90 (312) 000 00 00',
    'contact.email': 'Email',
    'contact.emailVal': 'merbis@belediye.gov.tr',
    'contact.hours': 'Working Hours',
    'contact.hoursVal': 'Weekdays: 08:00 - 18:00',

    // Legal
    'legal.title': 'Legal',
    'legal.deleteAccount': 'Delete Account',
    'legal.terms': 'Terms of Service',
    'legal.privacy': 'Privacy Policy',
    'legal.kvkk': 'Data Protection Notice',

    // Delete Account Modal
    'delete.title': 'Account Deletion Request',
    'delete.desc': 'To permanently delete your account, please enter your phone number. We will send you a verification code.',
    'delete.phone': 'Phone Number',
    'delete.phonePlaceholder': '+90 5XX XXX XX XX',
    'delete.sendOtp': 'Send Verification Code',
    'delete.otpTitle': 'Verification Code',
    'delete.otpDesc': 'Enter the 6-digit code sent to your phone.',
    'delete.otpPlaceholder': '------',
    'delete.confirm': 'Delete Account',
    'delete.cancel': 'Cancel',
    'delete.back': 'Back',
    'delete.successTitle': 'Account Deleted',
    'delete.successMsg': 'Your account has been successfully deleted. All your data will be permanently removed within 30 days.',
    'delete.failTitle': 'Operation Failed',
    'delete.failMsg': 'Account deletion could not be completed. Please try again later.',
    'delete.testSuccess': 'Test Success',
    'delete.testFail': 'Test Fail',
    'delete.close': 'Close',
    'delete.phoneError': 'Please enter a valid 10-digit phone number.',
    'delete.confirmClose': 'Are you sure you want to exit? You will need to start the entire process over.',

    // Terms Modal
    'terms.title': 'Terms of Service',
    'terms.content': `<h3>1. General Provisions</h3>
<p>These Terms of Service ("Agreement") govern the terms and conditions for the use of Merbis micromobility services. By using our services, you agree to all provisions of this agreement.</p>

<h3>2. Service Description</h3>
<p>Merbis is a micromobility service operated under the municipality. It offers users the ability to rent e-scooters and e-bikes. The service is accessible via the mobile application and operates 24/7.</p>

<h3>3. User Obligations</h3>
<p>Users are required to comply with traffic regulations, park vehicles only in designated areas, not intentionally damage vehicles, and be over 15 years of age. Multiple persons using a single vehicle simultaneously is prohibited.</p>

<h3>4. Pricing</h3>
<p>Service usage fees are specified within the application. An unlock fee and per-minute charge apply. The user is deemed to have accepted the tariff indicated at the start of the journey. Payments are automatically charged to the registered credit/debit card.</p>

<h3>5. Limitation of Liability</h3>
<p>Merbis cannot be held responsible for personal injuries or material damages that may occur during the use of vehicles. Users are advised to wear helmets for their own safety. In case of vehicle malfunction, a report should be submitted through the application.</p>

<h3>6. Account Security</h3>
<p>Users are responsible for the confidentiality of their account information. Merbis cannot be held liable for damages arising from the sharing of account information with third parties.</p>

<h3>7. Agreement Modifications</h3>
<p>Merbis reserves the right to modify this agreement. Changes will be notified through the application and will take effect on the date of publication.</p>`,

    // KVKK Modal
    'kvkk.title': 'Data Protection Notice',
    'kvkk.content': `<h3>1. Data Controller</h3>
<p>Within the scope of the Personal Data Protection Law No. 6698 ("KVKK"), your personal data is processed by Merbis Municipality Micromobility Services as the data controller.</p>

<h3>2. Personal Data Processed</h3>
<p>The following personal data is processed within the scope of our services: Name, phone number, email address, location data, payment information, trip history, and application usage data.</p>

<h3>3. Purposes of Processing</h3>
<p>Your personal data is processed for the purposes of service delivery, identity verification, payment processing, customer communication, fulfillment of legal obligations, improvement of service quality, and statistical analysis.</p>

<h3>4. Transfer of Personal Data</h3>
<p>Your personal data may be transferred to authorized public institutions and organizations within legal requirements, contracted financial institutions for payment transactions, and business partners from whom services are received.</p>

<h3>5. Data Retention Period</h3>
<p>Your personal data is retained for the duration required by processing purposes and within legal retention periods. In the event of an account deletion request, your data will be deleted within 30 days.</p>

<h3>6. Rights of the Data Subject</h3>
<p>Pursuant to Article 11 of KVKK, you have the right to learn whether your personal data is processed, request information if it has been processed, learn the purpose of processing and whether it is used in accordance with its purpose, know the third parties to whom it is transferred domestically or abroad, request correction if it is incomplete or incorrectly processed, and request its deletion or destruction.</p>

<h3>7. Application Method</h3>
<p>You can submit your requests regarding your rights to merbis@belediye.gov.tr or through the in-app support channel.</p>`,

    // Footer
    'footer.rights': '© 2026 Merbis. All rights reserved.',
    'footer.municipality': 'A municipality micromobility service.',
  },
} as const;
