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
    'faq.subtitle': 'En çok merak edilen sorular',
    'faq.q1': 'Bisiklet kiraladım ama kilit açılmadı, ne yapmalıyım?',
    'faq.a1': 'Uygulamanın bize ulaşın bölümünde yer alan Canlı destek hattı ile iletişime geçerek veya Acil Arıza kaydı bırakarak durumu bildirmelisiniz. Müşteri temsilcilerimiz oluşturduğunuz arıza kaydından inceleme sağlayarak yaşadığınız sorunu en kısa zamanda giderecektir. Bu süre içerisinde oluşan kaybınız iade edilir. Uygulamada sayfa yenilemeniz yapılan değişiklikleri takip edebilmeniz için önemlidir.',
    'faq.q2': 'Bisikleti kurallara uygun park etmezsem ne olur?',
    'faq.a2': 'Bisikleti belirtilen alan içinde, boşta kilitli bırakılmayacak şekilde ve teknik kullanım kurallarına uygun park etmeniz gerekmektedir. Belirtilen kurallar dışında oluşan park sebebiyle kullanıcıya ceza uygulanmaktadır.',
    'faq.q3': 'Bisikleti kilitledim, nasıl fotoğraf çekmeliyim?',
    'faq.a3': 'Bisikleti bağlı olduğu noktanın güvenliğini görselde gösterecek uzaklık veya yakınlıkta, bisikletin tümünü fotoğraf karesine alacak şekilde, bulanık olmayan net bir fotoğraf çekmelisiniz. Hatalı fotoğraf olması durumunda cezai işlem uygulanacaktır.',
    'faq.q4': 'Bisikleti kiraladım ancak daha sonra arızası olduğunu tespit ettim, ne yapmalıyım?',
    'faq.a4': 'Mümkünse alan içinde güvenli bir bölgede durmanızı, müşteri hizmetlerine bize ulaşın bölümünden Acil Arıza kaydı bırakarak arızayı bildirmenizi öneririz. Kontrol aşamasındaki süreyi geçmediyseniz ücret iade edilecektir ancak kontrol aşamasındaki süreyi geçmeniz halinde bisiklet sürüşü kapatılana kadar olan kullanım hesabınıza yansıyacaktır.',
    'faq.q5': 'Bisikleti kiraladım, bendeyken arıza/kaza oldu ne yapmalıyım?',
    'faq.a5': 'Bize ulaşın bölümünden Acil Arıza kaydı bırakarak durumu bildirmelisiniz. İlgili parçanın onarılması veya yenilenmesi sonucu oluşan tutarla ilgili bilgilendirileceksiniz. Acil bir durum mevcutsa 112\'yi arayıp yardım isteyin.',
    'faq.q6': 'Hangi durumlarda ceza uygulanır?',
    'faq.a6': 'Yanlış Park (Sözleşmede belirtilen park kurallarına uymamak), Yanlış Fotoğraf (Sözleşmede belirlenen fotoğraf kurallarına uymamak), Usulsüz Kullanım (Bisiklete birden fazla kişinin binmesi), Hasar (Bisiklete verilmiş hasar): Bisikletin ekipmanlarına verilen hasar durumuna göre ceza kesilmektedir.',
    'faq.q7': 'Bisikleti kiraladım, halat kilidini nereye yerleştireceğim?',
    'faq.a7': 'Kiralama işlemi yapıldıktan sonra halat kilidini selenin altındaki yuvaya yerleştiriniz.',
    'faq.q8': 'Bisiklete iki veya daha fazla kişi binebilir miyiz?',
    'faq.a8': 'Bisiklet tek kişiliktir. İki veya daha fazla kişi tarafından kullanımı yasaktır. İkili binme durumu teknik ekipler tarafından fark edilir ve hesabınıza cezai işlem uygulanır.',
    'faq.q9': 'Bisikleti kimler kullanabilir?',
    'faq.a9': 'Bisikleti +15 yaş üzeri ve sağlık durumu elverişli tüm bireyler kullanabilir.',
    'faq.q10': 'Bisikleti toplu taşıma aracıyla veya özel aracımla bir bölgeden farklı bölgeye götürebilir miyim?',
    'faq.a10': 'Bisikleti toplu taşıma araçlarına ya da özel araçlara koymak yasaktır.',
    'faq.q11': 'Bisiklet ile her noktada ve yolda ulaşım sağlanabilir mi?',
    'faq.a11': 'Bisiklet belirlenen alan içerisinde kullanılabilir. Anayol, çevreyolu, otoban vb. bölgelerde sürmek yasaktır. Sorumluluk ve oluşan her türlü maddi ve manevi hasar kişinin kendi sorumluluğundadır.',
    'faq.q12': 'Bisiklet kullanım alanı dışında kullanılmasında sakınca var mı?',
    'faq.a12': 'Bisikletin uygulama haritasında belirtilen kullanım alanlarının dışında kullanılması ve bu alanlara park edilmesi, bırakılması yasaktır. Cezai işlem uygulanır.',
    'faq.q13': 'Bisiklet bendeyken çalınması durumunda ne olur?',
    'faq.a13': 'Acil arıza kaydı sekmesinden çalıntı bilgisini en kısa sürede bize bildirmelisiniz. Ekiplerimizin bisikleti bulma zamanına kadar geçen süre hesabınıza işleyecektir.',
    'faq.q14': 'Kredi Kartı ile Kiralama Nedir?',
    'faq.a14': 'Kullanıcı sisteme Masterpass özellikli kredi kartını tanımlayarak kullanım sağlamaktadır. Kullanım miktarı hesaplanarak toplamı ücret kesilir, kartta oluşan yetersiz limit durumunda kalan ücret hesabınıza eksi bakiye olarak borç kaydedilir, eksi bakiye ödenmeden tekrar kullanım yapılamaz.',
    'faq.q15': 'Masterpass üzerinden onay kodu alamıyorum, ne yapmalıyım?',
    'faq.a15': 'www.masterpassturkiye.com adresine girerek Masterpass hesabınızın hangi telefon numarası ile eşleştiğini görebilirsiniz. Gerekli düzenlemeleri yaptıktan sonra OTP kodu belirlediğiniz telefon numarasına gelecektir.',
    'faq.q16': 'Acil arıza kaydı bıraktım, şimdi ne yapmalıyım?',
    'faq.a16': 'Acil arıza kaydı bıraktıktan sonra müşteri hizmetlerini aramanıza gerek yoktur. Sıraya alınan arıza kayıtlarını kontrol eden temsilcilerimiz aldığınız hatayı sürüş geçmişinizden inceleyerek gerekli işlemi sağlayacaklardır. Süre kaybından dolayı endişe etmeyiniz. Gereken sürede arıza kaydı bırakmanız iadenizin sağlanması için kontrol sürecinde önemli olacaktır. Yapılan işlemleri görebilmeniz için sık sık sayfa yenilemenizi öneririz.',
    'faq.q17': 'Bisikleti kilitledim, sürüş kapatamıyorum ne yapmalıyım?',
    'faq.a17': 'Uygulamanın bize ulaşın bölümünde yer alan Acil Arıza Kaydı seçeneğinden durumu bildirmelisiniz. Acil arıza kaydı bildirminiz veya herhangi bir kanaldan bizlerle iletişiminiz olmadan bisikletin yanından ayrılmanız durumunda, bisiklet konumu sabit olsa dahi sürüşünüz açık kalmaya devam edeceği için teknik ekibimizin müdahalesi sonucu oluşan tutar hesabınıza eklenir. Acil arıza kaydı bildirmeniz sonrası sürüş geçmişiniz incelenerek, fazladan işleyen süre/para kaybınız iade edilir. Uygulamada sayfa yenilemeniz yapılan değişiklikleri takip edebilmeniz için önemlidir.',
    'faq.q18': 'Bisikletin şarjı bitti, ne yapabilirim?',
    'faq.a18': 'Bisikleti uygulamada harita üzerinde görülebilen güvenli alanlara park edip kilitleyin. Müşteri hizmetlerine acil arıza kaydı üzerinden bilgi verin ve sürüşünüzün sonlandırılmasını isteyin.',
    'faq.q19': 'Bisikleti kilitledim, sürüşü sonlandıramıyorum ödeme alınamadı ne yapmalıyım?',
    'faq.a19': 'Kredi kartınızda kullandığınız dakika kadar limit yok ise kredi kartınızın kullanılabilir limitini arttırmanız gerekir.',
    'faq.q20': 'Bisikleti teslim ettikten sonra kredi kartımdan fazla ücret kesildi, ne yapmalıyım?',
    'faq.a20': 'Müşteri hizmetlerin acil arıza kaydı oluşturun. İnceleme sonrası fazla çekilen tutar tarafınıza iade yapılacaktır.',
    'faq.q21': 'Bisikleti kiraladım, halat kilidi açılmadı ne yapmalıyım?',
    'faq.a21': 'Kilidi tekrar manuel olarak kapattıktan sonra uygulama üzerinden tekrar kilit aç komutu göndererek halat kilidini açabilirsiniz.',
    'faq.q22': 'Harita sayfasında bulunan alan renkleri ne anlama geliyor?',
    'faq.a22': 'Harita sayfasında sarı renk ile gösterilen alanlar bisikletleri sürebileceğin ve park edebileceğin alanlardır. Sürüş yaparken haritada şu renkleri de görebilirsin: Sarı — Güvenli Sürüş bölgesi, Turuncu — Güvenli Park bölgesi, Siyah — Yasaklı alan.',
    'faq.q23': 'Bir hesaptan birden fazla bisiklet kiralayabilir miyim?',
    'faq.a23': 'Bir hesaptan sadece bir tane bisiklet kiralanabilir.',
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
    'legal.terms': 'Kullanıcı Sözleşme',
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
    'terms.title': 'Kullanıcı Sözleşme',
    'terms.content': `<h2 style="text-align:center;margin-bottom:0.25em;">MERSİN BÜYÜKŞEHİR BELEDİYESİ</h2>
<h3 style="text-align:center;margin-top:0;">AKILLI BİSİKLET SİSTEMİ (MERBİS)<br/>KULLANICI VE HİZMET SÖZLEŞMESİ</h3>

<h3>MADDE 1: TARAFLAR</h3>
<p><strong>1.1. Hizmet Sağlayıcı (İDARE):</strong></p>
<p>Unvan: Mersin Büyükşehir Belediye Başkanlığı<br/>
Adres: Kültür Mah. İsmet İnönü Bulvarı No:158 Akdeniz/Mersin<br/>
Vergi Kimlik No: Uray Vergi Dairesi 6180006446<br/>
İletişim: 185 / 903241850000<br/>
E-posta: teksin.mersin@mersin.bel.tr</p>
<p>(İşbu sözleşmede kısaca "İDARE" veya "BELEDİYE" olarak anılacaktır.)</p>

<p><strong>1.2. Kullanıcı (ÜYE):</strong></p>
<p>MERBİS mobil uygulamasını indiren, üyelik formunu dolduran, işbu sözleşmeyi elektronik ortamda onaylayan ve hizmetten yararlanan gerçek kişi. (İşbu sözleşmede kısaca "KULLANICI" veya "ÜYE" olarak anılacaktır.)</p>

<h3>MADDE 2: SÖZLEŞMENİN KONUSU VE HUKUKİ NİTELİĞİ</h3>
<p><strong>2.1.</strong> İşbu sözleşmenin konusu; mülkiyeti İDARE'ye ait olan akıllı bisikletlerin, mobil uygulama üzerinden kiralanması, kullanılması, ücretlendirilmesi ve iade edilmesine ilişkin usul ve esasların belirlenmesidir.</p>
<p><strong>2.2.</strong> Taraflar arasındaki hukuki ilişki; 6098 sayılı Türk Borçlar Kanunu'nun 299. maddesi ve devamında düzenlenen "Kira Sözleşmesi" ile 6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında "Mesafeli Sözleşme" niteliğindedir. Hizmetin kamu tüzel kişisi tarafından sunulması, sözleşmenin özel hukuk karakterini değiştirmez; ancak ücret tarifeleri ve hizmet alanları 5216 sayılı Büyükşehir Belediyesi Kanunu uyarınca Mersin Büyükşehir Belediye Meclisi Kararı ile belirlenir.</p>

<h3>MADDE 3: TANIMLAR</h3>
<p>İşbu sözleşmede geçen;</p>
<ul>
<li><strong>Sistem (MERBİS):</strong> İDARE tarafından kurulan, işletilen veya 5393 sayılı Kanun kapsamında yetkilendirilen iştirakler tarafından yönetilen; bisikletlerin, istasyonların, kilit ünitelerinin, mobil uygulamanın ve sunucu altyapısının bütününü ifade eder.</li>
<li><strong>Tarife:</strong> Mersin Büyükşehir Belediye Meclisi Kararı ile belirlenen ve uygulama içinde ilan edilen kiralama ücretlerini (açılış ücreti, dakika/saat bazlı tarife, abonelik paketleri).</li>
<li><strong>Akıllı Bisiklet (Araç):</strong> Üzerinde GPS takip cihazı, elektronik kilit sistemi ve QR kod okuyucu bulunan, İDARE tarafından kiralamaya sunulan motorsuz taşıtı.</li>
<li><strong>Hizmet Alanı (Geo-Fence):</strong> Mobil uygulama haritasında sınırları çizilen ve bisikletin kullanımına izin verilen coğrafi bölgeyi.</li>
<li><strong>Sanal İstasyon / Park Alanı:</strong> Bisikletin kiralamasının sonlandırılabileceği, uygulama üzerinde "P" ikonu ile gösterilen fiziksel veya sanal coğrafi alanları.</li>
<li><strong>Provizyon (Ön Blokaj):</strong> Kiralama başlangıcında, olası kullanım ücretleri ve hizmet ihlal bedellerini teminat altına almak amacıyla, KULLANICI'nın kredi/banka kartından belirli bir tutarın banka nezdinde geçici olarak bloke edilmesini ifade eder.</li>
<li><strong>Hizmet İhlali Bedeli:</strong> Sözleşme hükümlerine aykırılık, hatalı park, hizmet alanı dışına çıkış veya hasar durumlarında; İDARE'nin katlanmak zorunda kaldığı operasyonel maliyetlerin (araç, personel, yakıt, yedek parça vb.) tazmini amacıyla KULLANICI'dan tahsil edilen, cezai şart niteliğinde olmayan tazminat ve hizmet bedelini ifade eder.</li>
</ul>

<h3>MADDE 4: ÜYELİK ŞARTLARI VE HESAP GÜVENLİĞİ</h3>
<p><strong>4.1. Ehliyet:</strong> KULLANICI, işbu sözleşmeyi onaylamakla 18 yaşını doldurduğunu ve sözleşme yapma ehliyetine sahip olduğunu beyan eder. 16–18 yaş aralığındaki kişilerin kullanımı, ancak yasal veli/vasileri tarafından onaylanan "Aile Üyeliği" kapsamında mümkündür. Bu durumda tüm mali ve hukuki sorumluluk veliye aittir.</p>
<p><strong>4.2. Doğrulama:</strong> Üyelik aktivasyonu için GSM numarası doğrulaması (SMS/OTP) zorunludur. İDARE, gerekli gördüğü hallerde T.C. Kimlik Numarası doğrulaması talep edebilir. İDARE, sistem güvenliğini sağlamak amacıyla KULLANICI'dan kredi kartı ile 1 TL'lik sembolik provizyon işlemi (3D Secure) talep ederek kimlik teyidi yapma hakkını saklı tutar.</p>
<p><strong>4.3. Hesap Güvenliği:</strong> KULLANICI, şifresinin ve hesabının güvenliğinden bizzat sorumludur. KULLANICI, üyeliğini veya kiraladığı Bisikleti üçüncü kişilere devredemez, kullandıramaz. Hesabın yetkisiz kişilerce kullanılması sonucu doğacak trafik cezaları, hasar bedelleri ve üçüncü kişilere verilen zararlardan, KULLANICI hesap sahibi sıfatıyla müteselsilen sorumludur.</p>

<h3>MADDE 5: KULLANIM VE SÜRÜŞ KURALLARI (BASİRETLİ KULLANICI YÜKÜMLÜLÜĞÜ)</h3>
<p><strong>5.1. Sürüş Öncesi Kontrol ve Teslim Alma:</strong> KULLANICI, bisikleti teslim almadan (kilidi açmadan) önce gözle kontrol etmekle yükümlüdür. Güvenli bir sürüş için teslim öncesinde aşağıdaki kontrollerin yapılması zorunludur:</p>
<ul>
<li>Lastiklerin havası kontrol edilmeli,</li>
<li>Frenler sıkılarak tutukluk yapıp yapmadığı test edilmeli,</li>
<li>Zilin, aydınlatma sisteminin çalışıp çalışmadığı test edilmeli,</li>
<li>Gövde bütünlüğü gözle kontrol edilmelidir.</li>
</ul>
<p>Hasarlı, eksik parçalı veya sürüş güvenliğine uygun olmayan bisikletler kiralanmamalı ve uygulama üzerinden "Sorun Bildir" butonu ile İDARE'ye bildirilmelidir. Sürüş başladıktan sonra bildirilen fiziksel hasarlardan (kaza hariç) KULLANICI sorumlu tutulacaktır.</p>
<p><strong>5.2. Trafik Mevzuatı:</strong> Bisiklet, 2918 sayılı Karayolları Trafik Kanunu'na tabi bir taşıttır. KULLANICI, trafik kurallarına uymak, varsa bisiklet yolunu kullanmak, yoksa yolun sağ şeridini kullanmak zorundadır. Kaldırımda sürüş yasaktır. Kask ve koruyucu ekipman kullanımı KULLANICI'nın şahsi sorumluluğundadır.</p>
<p><strong>5.3. Yasaklı Haller:</strong></p>
<ul>
<li>Bisiklet ile akrobasi yapmak, yarışmak, tehlikeli manevralar yapmak.</li>
<li>Ticari yük veya yolcu taşımak (Bisiklet üzerindeki sepet sadece 5 kg'a kadar hafif şahsi eşyalar içindir, insan veya evcil hayvan taşınamaz).</li>
<li>Bisikleti 3. kişilere kullandırmak.</li>
<li>Alkol veya uyuşturucu madde etkisinde sürüş yapmak.</li>
<li>Bisikleti Hizmet Alanı sınırları dışına çıkarmak.</li>
<li>Bisikletin parçalarını sökmek, değiştirmek, boyamak veya üzerindeki karekod/etiketleri tahrip etmek.</li>
<li>Bisikleti toplu taşıma araçlarına (izin verilen entegre modlar hariç) sokmak.</li>
</ul>
<p>Bu ihlaller, sözleşmenin haklı nedenle feshi sebebidir.</p>

<h3>MADDE 6: KİRALAMA SÜRECİ, İADE VE PARK</h3>
<p><strong>6.1. Başlangıç:</strong> Kiralama, mobil uygulama üzerinden QR kodun okutulması ve kilidin açılması ile başlar.</p>
<p><strong>6.2. Bitiş ve İade:</strong> KULLANICI, kiraladığı Bisikleti yalnızca MERBİS istasyonlarındaki boş park ünitelerine (dock) kilitleyerek veya İDARE tarafından Uygulama haritasında yeşil alan olarak işaretlenen "Sanal Park Alanları"na (Geo-fencing) bırakarak iade etmek zorundadır. Kiralama, bisikletin İDARE tarafından belirlenen istasyonlara veya sanal park alanlarına getirilmesi, fiziksel kilidin (varsa) kilitlenmesi ve uygulama üzerinden "Kiralama Sona Erdi" onayının alınması ile sona erer. Bisikletin kilidinin fiziksel olarak kilitlendiğinden ve Uygulama üzerinden "Kiralama Sona Erdi" bildiriminin alındığından KULLANICI sorumludur.</p>
<p><strong>6.3. Hatalı Park:</strong> Bisikletin istasyon veya izin verilen park alanları dışına; yaya geçişini engelleyecek, özel mülk girişini kapatacak veya trafiği tehlikeye atacak şekilde bırakılması "Hatalı Park" olarak kabul edilir. Bu durumda, kiralama süresi devam edebilir veya İDARE tarafından sonlandırıldığında "Hizmet İhlali Bedeli" tahsil edilir. Ayrıca, Bisikletin İDARE ekipleri tarafından toplanması gerektiğinde, operasyonel taşıma masrafları "Hizmet İhlali Bedeli" olarak KULLANICI'ya yansıtılır.</p>
<p><strong>6.4. Azami Süre ve Kayıp Varsayımı:</strong> Bir Bisikletin kesintisiz kiralama süresi en fazla 24 saattir. Bu sürenin aşılması ve İDARE'ye makul bir gerekçe ile (kaza, arıza vb.) bilgi verilmemesi durumunda, Bisikletin "Çalıntı/Kayıp" olduğu varsayılır. İDARE, Bisikletin rayiç bedelini tahsil etme ve KULLANICI hakkında TCK m. 155 (Güveni Kötüye Kullanma) veya m. 141 (Hırsızlık) kapsamında suç duyurusunda bulunma hakkına sahiptir.</p>

<h3>MADDE 7: ÜCRETLENDİRME, ÖDEME VE PROVİZYON</h3>
<p><strong>7.1. Tarife:</strong> Kiralama ücretleri (açılış ücreti, dakika/saat bazlı tarife, abonelik paketleri), Mersin Büyükşehir Belediye Meclisi Kararı ile belirlenen ve uygulama içinde ilan edilen tarifeye göre hesaplanır. İDARE, tarifede değişiklik yapma hakkını saklı tutar; değişiklikler yeni başlatılacak kiralamalar için geçerlidir. KULLANICI, kiralama anında geçerli olan tarifeyi kabul etmiş sayılır.</p>
<p><strong>7.2. Ücretlendirme ve Ödeme Koşulları:</strong></p>
<ul>
<li>KULLANICI, sisteme geçerli bir kredi kartı veya banka kartı (Mastercard) tanımlamak zorundadır.</li>
<li>17/10/2025 tarihli ve 732 sayılı Mersin Büyükşehir Belediyesi Meclis Kararı ile bisiklet kiralama tarifesi belirlenmiş olup; bisiklet kullanım ücreti ilk yarım saat için 50,00 TL, 1 (bir) saat için 100,00 TL olarak uygulanacaktır.</li>
</ul>
<p><strong>7.3. Tahsilat Yetkisi:</strong> KULLANICI, işbu sözleşmeden doğan kullanım ücretlerini, hizmet ihlal bedellerini ve tazminatları, sisteme tanımladığı ödeme aracından tahsil etmesi konusunda İDARE'ye gayrikabili rücu yetki verdiğini kabul eder.</p>

<h3>MADDE 8: SORUMLULUK, HASAR, HİZMET İHLAL BEDELLERİ VE İTİRAZ</h3>
<p><strong>8.1. Kusur Sorumluluğu:</strong> KULLANICI, Bisikletin zilyetliğini devraldığı andan iade anına kadar, kendi kusuru, ihmali veya tedbirsizliği ile Bisiklete, kendisine, üçüncü kişilere, hayvanlara veya kamu malına verdiği her türlü zarardan TBK genel hükümleri (Haksız Fiil) çerçevesinde sınırsız ve müteselsilen sorumludur. İDARE'nin, KULLANICI'nın kusuru nedeniyle üçüncü kişilere tazminat ödemek zorunda kalması halinde, ödenen bedel tüm ferileri (faiz, yargılama gideri, avukatlık ücreti) ile birlikte KULLANICI'ya rücu edilir.</p>
<p><strong>8.2. Hasar Bildirimi, Kaza:</strong> Kullanım sırasında meydana gelen her türlü hasar, gecikmeksizin bildirilmelidir. Kullanıcı kusurundan kaynaklanan hasarlarda onarım bedeli, yedek parça ve işçilik giderleri kullanıcıdan tahsil edilir. Kaza anında öncelikle 112 Acil Çağrı Merkezi aranmalıdır.</p>
<p><strong>8.3. Çalınma ve Kayıp:</strong> Bisikletin KULLANICI'nın gözetimindeyken (kiralama süresi içinde) çalınması halinde, KULLANICI derhal Çağrı Merkezi'ne bilgi vermek ve en yakın karakola başvurmakla ve tutanak tutturmakla yükümlüdür. KULLANICI'nın Bisikleti kilitlemeden bırakması veya anahtarı üzerinde unutması gibi ağır ihmal hallerinde, Bisikletin güncel rayiç bedeli KULLANICI'dan tazmin edilir.</p>
<p><strong>8.4. Hizmet İhlali Bedeli:</strong> KULLANICI, aşağıdaki durumların birer sözleşme ihlali olduğunu ve bu ihlallerin İDARE açısından ek operasyonel maliyetler doğurduğunu kabul eder. Taraflar, aşağıdaki bedellerin "Hizmet İhlal Bedeli" olduğunu, "idari para cezası" olmadığını, sözleşmeye aykırılık nedeniyle oluşan "Hizmet Maliyeti" ve "Gider Tazmini" (TBK m. 179) olduğunu kabul ve taahhüt ederler:</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0;">
<thead><tr style="background:#f1f5f9;"><th style="border:1px solid #cbd5e1;padding:10px;text-align:left;">İhlal Türü</th><th style="border:1px solid #cbd5e1;padding:10px;text-align:left;">Uygulanacak Yaptırım / Bedel Niteliği</th></tr></thead>
<tbody>
<tr><td style="border:1px solid #cbd5e1;padding:10px;font-weight:600;">Hizmet Alanı Dışı Terk</td><td style="border:1px solid #cbd5e1;padding:10px;">Bisikletin hizmet haritası dışına çıkarılması ve orada terk edilmesi halinde; aracın bulunması, araca ulaşım ve geri getirilmesi için oluşan yakıt ve personel giderine karşılık Lojistik Toplama Bedeli.</td></tr>
<tr><td style="border:1px solid #cbd5e1;padding:10px;font-weight:600;">Hatalı Park</td><td style="border:1px solid #cbd5e1;padding:10px;">Bisikletin yasaklı alana, yaya yoluna veya istasyon dışına (izinsiz bölgeye) bırakılması halinde Operasyonel Düzenleme Bedeli.</td></tr>
<tr><td style="border:1px solid #cbd5e1;padding:10px;font-weight:600;">Hasar Verme</td><td style="border:1px solid #cbd5e1;padding:10px;">Kullanıcı kusuru ile bisikletin kırılması, boyanması, parçalanması halinde; parça maliyeti + işçilik ücreti tutarında Onarım Bedeli.</td></tr>
<tr><td style="border:1px solid #cbd5e1;padding:10px;font-weight:600;">Kayıp / Çalıntı</td><td style="border:1px solid #cbd5e1;padding:10px;">Bisikletin kilitsiz bırakılması veya gözetim yükümlülüğünün ihlali sonucu çalınması halinde; bisikletin güncel Rayiç Bedeli.</td></tr>
</tbody></table>
<p><em>Not: Yukarıdaki bedeller, İDARE'nin fiili zararını aşmamak kaydıyla her yıl yeniden değerleme oranında veya Mersin Büyükşehir Belediye Meclisi Kararıyla güncellenebilir.</em></p>
<p><strong>8.5. İdarenin Sorumsuzluğu:</strong> İDARE; teknik arızalar, GPS/GSM şebeke kopuklukları, siber saldırılar, banka sistemlerinden kaynaklı ödeme hataları veya mücbir sebeplerden (doğal afet, salgın, yasal kısıtlamalar) kaynaklı hizmet kesintilerinden sorumlu değildir. KULLANICI'nın trafik kurallarını ihlali, kasksız sürüşü veya kendi fiziksel yetersizliği sonucu uğrayacağı bedeni zararlardan İDARE sorumlu tutulamaz.</p>
<p><strong>8.6. İtiraz Hakkı:</strong> KULLANICI, kendisine yansıtılan ek bedel veya tazminatlara karşı, bildirimin yapıldığı tarihten itibaren 7 (yedi) iş günü içinde Uygulama üzerindeki "İtiraz Et" modülü veya İdare'nin belirlediği iletişim kanalları üzerinden itiraz edebilir. İtirazlar, İdare tarafından sistem kayıtları incelenerek karara bağlanır ve sonuç KULLANICI'ya bildirilir.</p>

<h3>MADDE 9: İDARENİN ÖZEL YETKİLERİ VE KORUYUCU HÜKÜMLER</h3>
<p><strong>9.1. Tek Taraflı Düzenleme ve Değişiklik Yetkisi:</strong> Hizmetin bir kamu hizmeti olması ve mevzuatın değişken yapısı sebebiyle; İDARE, kamu yararı, mevzuat değişiklikleri veya operasyonel gereklilikler doğrultusunda işbu Sözleşme'yi, ücret tarifesini, Hizmet Alanı sınırlarını ve kullanım koşullarını tek taraflı olarak değiştirme yetkisine sahiptir. Değişiklikler Uygulama veya web sitesi üzerinden yayınlandığı tarihte yürürlüğe girer. KULLANICI, hizmeti kullanmaya devam etmekle bu değişiklikleri kabul etmiş sayılır.</p>
<p><strong>9.2. İştiraklere ve Üçüncü Kişilere Devir Yetkisi:</strong> İDARE, işbu Sözleşme kapsamındaki hak ve yetkilerini, işletme hakkını, sistemin yönetimini veya alacaklarını; 5393 sayılı Belediye Kanunu'nun 67. maddesi ve ilgili mevzuat çerçevesinde sermayesinin yarısından fazlasına sahip olduğu iştiraklerine veya yasal ihale süreçleri sonucunda yetkilendirilen üçüncü kişi işletmecilere devredebilir. KULLANICI, işbu Sözleşme'yi onaylayarak bu devir işlemine şimdiden gayrikabili rücu muvafakat ettiğini, devir halinde muhatabın ve veri sorumlusunun devralan tüzel kişilik olacağını kabul eder.</p>
<p><strong>9.3. Kaynak Kod, Fikri Mülkiyet ve Tersine Mühendislik Yasağı:</strong> KULLANICI, MERBİS mobil uygulamasının, web sitesinin ve Bisikletler üzerindeki elektronik donanımın (IoT cihazları, kilit modülleri) yazılımını, kaynak kodlarını, arayüz tasarımlarını kopyalayamaz, değiştiremez, parçalara ayıramaz, çoğaltamaz, satamaz. KULLANICI, Uygulama üzerinde tersine mühendislik (reverse engineering), dekompilasyon (decompilation) veya benzeri işlemler yapmayacağını taahhüt eder. 5846 sayılı Fikir ve Sanat Eserleri Kanunu kapsamındaki bu ihlallerde İDARE'nin tüm maddi/manevi tazminat hakları ve TCK kapsamındaki şikayet hakları saklıdır.</p>
<p><strong>9.4. Tebligat ve İletişim:</strong> KULLANICI'nın üyelik aşamasında bildirdiği e-posta adresi ve mobil telefon numarası, yasal tebligat adresi kabul edilir. İDARE tarafından bu kanallara yapılan bildirimler (SMS, E-posta, Push Notification), KULLANICI'ya ulaştığı an itibariyle hukuki sonuç doğurur. İletişim bilgilerindeki değişikliği İDARE'ye (Uygulama üzerinden) bildirmeyen KULLANICI, eski adresine yapılan bildirimlerin geçerli olacağını kabul eder.</p>

<h3>MADDE 10: KİŞİSEL VERİLERİN KORUNMASI (KVKK)</h3>
<p>İDARE, KULLANICI'ya ait kişisel verileri (kimlik, iletişim, lokasyon verisi, sürüş güzergahı, ödeme logları), 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili mevzuat çerçevesinde; kamu hizmetinin ifası, işlem güvenliğinin sağlanması, yasal yükümlülüklerin yerine getirilmesi ve istatistiksel analiz amaçlarıyla işler. Veri işleme şartları, amaçları ve KULLANICI hakları, Uygulama içinde yer alan "Aydınlatma Metni"nde detaylandırılmıştır. KULLANICI, Sözleşme'yi onaylayarak Aydınlatma Metni'ni okuduğunu ve anladığını beyan eder. KULLANICI, bisikletin güvenliği için sürüş boyunca GPS konum takibi yapıldığını bildiğini kabul eder.</p>

<h3>MADDE 11: CAYMA HAKKI İSTİSNASI</h3>
<p>İşbu sözleşme konusu hizmet, 27.11.2014 tarihli Mesafeli Sözleşmeler Yönetmeliği'nin 15. maddesinin (ğ) bendi uyarınca; "belirli bir tarihte veya dönemde yapılması gereken, konaklama, eşya taşıma, araba kiralama... ve eğlence veya dinlenme amacıyla yapılan boş zamanın değerlendirilmesine ilişkin sözleşmeler" kapsamında yer aldığından, CAYMA HAKKI İSTİSNASI kapsamındadır. KULLANICI, kiralama işlemini başlattıktan (kilit açıldıktan) sonra hizmeti kullanmaktan vazgeçse dahi ücret iadesi talep edemez.</p>

<h3>MADDE 12: SORUMLULUK REJİMİ</h3>
<p><strong>12.1. İdarenin Sorumluluğu:</strong> İDARE, hizmetin sürekliliğini sağlamak için basiretli bir tacir gibi davranmakla yükümlüdür. Ancak İDARE; GPS sinyal kayıpları, GSM şebeke kesintileri, siber saldırılar veya mücbir sebeplerden kaynaklanan hizmet aksamalarından sorumlu tutulamaz. İDARE, bisikletlerin periyodik bakımlarından sorumludur.</p>
<p><strong>12.2. Kullanıcının Sorumluluğu:</strong> KULLANICI, sürüş esnasında kendisine, üçüncü kişilere veya kamu mallarına vereceği her türlü zarardan Türk Borçlar Kanununun haksız fiil hükümleri uyarınca bizzat sorumludur. İDARE'ye bu sebeple bir tazminat yükletilmesi halinde, ödenen bedel ferileriyle birlikte KULLANICI'ya rücu edilir.</p>

<h3>MADDE 13: DELİL SÖZLEŞMESİ VE DİJİTAL KAYITLAR</h3>
<p>Taraflar, işbu sözleşmeden doğabilecek uyuşmazlıklarda; İDARE'nin veritabanı kayıtlarının, sunucu loglarının, GPS (Konum) geçmişi verilerinin, ödeme sistemi kayıtlarının ve uygulama içi bildirim loglarının, 6100 sayılı Hukuk Muhakemeleri Kanunu'nun 193. maddesi uyarınca kesin ve münhasır delil niteliğinde olduğunu kabul, beyan ve taahhüt ederler. KULLANICI, bu kayıtların usulüne uygun tutulduğunu peşinen kabul eder.</p>

<h3>MADDE 14: FESİH</h3>
<p>KULLANICI'nın işbu Sözleşme hükümlerini ihlal etmesi, çalıntı veya hileli ödeme aracı kullanması veya sistem güvenliğini tehdit etmesi durumunda İdare, KULLANICI'nın üyeliğini tek taraflı olarak askıya alma veya süresiz olarak feshetme hakkına sahiptir.</p>

<h3>MADDE 15: YÜRÜRLÜK VE UYUŞMAZLIK ÇÖZÜMÜ</h3>
<p>İşbu sözleşme, KULLANICI tarafından dijital ortamda onaylandığı anda yürürlüğe girer. İşbu sözleşmenin uygulanmasından doğacak uyuşmazlıklarda Türk Hukuku uygulanır ve Mersin Mahkemeleri ile İcra Daireleri yetkilidir.</p>`,

    // KVKK Modal
    'kvkk.title': 'KVKK Aydınlatma Metni',
    'kvkk.content': `<h2 style="text-align:center;margin-bottom:0.75em;">AYDINLATMA METNİ</h2>
<p>6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 10. maddesi uyarınca, veri sorumlusu; veri işleme amacını, aktarılabilecek kişi ve kurumları, toplama yöntemini ve hukuki sebebini ilgili kişiye bildirmek zorundadır. Mersin Büyükşehir Belediyesi olarak kişisel verilerinizle ilgili aşağıdaki bilgileri sunmaktayız:</p>

<ul>
<li><strong>Veri Sorumlusu:</strong> Mersin Büyükşehir Belediye Başkanlığı<br/>
Adres: Kültür Mah. İsmet İnönü Bulvarı No:158, Akdeniz/Mersin<br/>
Telefon: 185 / 903241850000<br/>
E-posta: teksin.mersin@mersin.bel.tr<br/>
Kişisel verileriniz, bu kurumumuz tarafından mevzuat kapsamında işlenmektedir.</li>

<li><strong>İşlenen Veriler ve Amaçları:</strong> Kişisel verileriniz, uygulamaya kayıt işlemleri ve üyelik takibi için; bisiklet kiralama hizmetinin sunulması ve ödeme süreçlerinin yürütülmesi için; hizmetin güvenli şekilde işletilmesi ve kötüye kullanımın önlenmesi için; yasal zorunlulukların yerine getirilmesi (örneğin faturalama, bildirimler) için işlenebilir. Bu amaçlar dışındaki kullanımlar için açık rızanız alınır. Sizlere bisiklet kiralama hizmeti sunabilmek için aşağıdaki verilerinizi işliyoruz:
<ul>
<li><strong>Kimlik ve İletişim:</strong> Ad, soyad, telefon, e-posta (Üyelik ve doğrulama için).</li>
<li><strong>Lokasyon (GPS):</strong> Bisikletin anlık konumu, sürüş rotası, park yeri (Hizmetin ifası, ücretlendirme ve kamu malı olan bisikletin çalınmaya karşı korunması için). <strong>Dikkat:</strong> Konum verisi işlenmesi, hizmetin doğası gereği zorunludur.</li>
<li><strong>Finansal:</strong> Kredi kartı bilgileri (Ödeme altyapısı sağlayıcısı tarafından maskelenmiş olarak tutulur).</li>
</ul></li>

<li><strong>Veri Paylaşılabilecek Kişi ve Kurumlar:</strong> Kişisel verileriniz, hizmet sunumunun gerektirdiği hallerde; ödeme ve bankacılık hizmet sağlayıcıları, bulut bilişim hizmeti sağlayıcıları, teknik servis ve bakım firmaları gibi üçüncü taraf kuruluşlarla paylaşılabilir. Ayrıca, kanun gereği yetkili kamu kurumları ile veri paylaşımı yapılabilir.</li>

<li><strong>Veri Toplama Yöntemi ve Hukuki Sebep:</strong> Verileriniz uygulama kullanımı sırasında sistematik olarak toplanmakta veya üyelik aşamasında elde edilmektedir. Hukuki dayanak olarak sözleşmenin ifası (madde 5/1-a), ilgili kişinin açık rızası (örneğin pazarlama için) ve kanunen öngörülen yükümlülüklerimiz gösterilebilir. Ayrıca belediyemizin meşru menfaati (örneğin dolandırıcılık önleme) de veri işleme sebeplerinden biridir.</li>

<li><strong>İlgili Kişinin Hakları:</strong> KVKK'nın 11. maddesine göre, kişisel verilerinizin işlenip işlenmediğini öğrenme; işlenmişse bilgi talep etme; işlenme amacını ve bu amaca uygun kullanılıp kullanılmadığını öğrenme; yurt içinde veya dışına aktarılmışsa aktarım yapılan üçüncü kişileri bilme; eksik veya hatalı işlenen verilerin düzeltilmesini isteme; işlenme sebeplerine uygun işlenmiyorsa silinmesini veya yok edilmesini isteme; otomatik sistemde işleniyorsa bunun üçüncü kişiye aktarılması durumunda bildirimde bulunma haklarına sahipsiniz. Bu haklarınızı kullanmak için Mersin Büyükşehir Belediyesi'ne yazılı başvuru yapabilirsiniz.</li>
</ul>`,

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
    'faq.subtitle': 'Most asked questions',
    'faq.q1': 'I rented a bike but the lock didn\'t open, what should I do?',
    'faq.a1': 'You should contact us via Live Support or leave an Emergency Fault report in the Contact Us section. Our representatives will review your report and resolve the issue as soon as possible. Your loss during this period will be refunded.',
    'faq.q2': 'What happens if I don\'t park the bike properly?',
    'faq.a2': 'You must park the bike within the designated area, not left locked idle, and in accordance with technical usage rules. Penalties apply for parking violations.',
    'faq.q3': 'How should I take a photo after locking the bike?',
    'faq.a3': 'Take a clear, non-blurry photo showing the full bike and its security at the docking point. Penalties apply for incorrect photos.',
    'faq.q4': 'I rented a bike but later found it was faulty, what should I do?',
    'faq.a4': 'If possible, stop in a safe area and submit an Emergency Fault report. If within the inspection period, fees will be refunded; otherwise usage until the ride is closed will be charged.',
    'faq.q5': 'The bike broke down or I had an accident while using it, what should I do?',
    'faq.a5': 'Submit an Emergency Fault report. You will be informed about repair/replacement costs. In case of emergency, call 112.',
    'faq.q6': 'In which cases are penalties applied?',
    'faq.a6': 'Wrong Parking, Wrong Photo, Unauthorized Use (multiple riders), Damage (penalties based on equipment damage).',
    'faq.q7': 'Where do I place the cable lock after renting?',
    'faq.a7': 'After renting, place the cable lock in the slot under the seat.',
    'faq.q8': 'Can two or more people ride the same bike?',
    'faq.a8': 'The bike is for single use only. Multiple riders are prohibited and will result in penalties.',
    'faq.q9': 'Who can use the bikes?',
    'faq.a9': 'Anyone aged 15+ in suitable health condition can use the bikes.',
    'faq.q10': 'Can I transport the bike via public or private vehicle?',
    'faq.a10': 'Placing bikes on public or private vehicles is prohibited.',
    'faq.q11': 'Can I ride the bike anywhere?',
    'faq.a11': 'Bikes can only be used within designated areas. Riding on highways and motorways is prohibited. All liability rests with the user.',
    'faq.q12': 'Is there a problem using the bike outside the usage area?',
    'faq.a12': 'Using or parking bikes outside designated areas shown on the app map is prohibited. Penalties apply.',
    'faq.q13': 'What happens if the bike is stolen while I have it?',
    'faq.a13': 'Report the theft via Emergency Fault report immediately. Usage time until the bike is found will be charged to your account.',
    'faq.q14': 'What is Credit Card Rental?',
    'faq.a14': 'Users register a Masterpass-enabled credit card. Usage is calculated and charged; insufficient balance becomes negative balance that must be paid before further use.',
    'faq.q15': 'I can\'t receive a Masterpass verification code, what should I do?',
    'faq.a15': 'Visit www.masterpassturkiye.com to check which phone number is linked to your Masterpass account and make necessary changes.',
    'faq.q16': 'I submitted an emergency fault report, what now?',
    'faq.a16': 'No need to call customer service. Our representatives will review your ride history and process accordingly. We recommend refreshing the page frequently to see updates.',
    'faq.q17': 'I locked the bike but can\'t end the ride, what should I do?',
    'faq.a17': 'Submit an Emergency Fault report. If you leave without reporting, charges will continue. After reporting, your ride history will be reviewed and excess charges refunded.',
    'faq.q18': 'The bike ran out of battery, what can I do?',
    'faq.a18': 'Park and lock the bike in a safe area visible on the map. Submit an emergency fault report and request ride termination.',
    'faq.q19': 'I locked the bike but payment failed and I can\'t end the ride, what should I do?',
    'faq.a19': 'You need to increase your credit card\'s available limit.',
    'faq.q20': 'I was overcharged after returning the bike, what should I do?',
    'faq.a20': 'Create an emergency fault report. After review, the overcharged amount will be refunded.',
    'faq.q21': 'I rented a bike but the cable lock won\'t open, what should I do?',
    'faq.a21': 'Manually close the lock again, then send the unlock command again through the app.',
    'faq.q22': 'What do the area colors on the map mean?',
    'faq.a22': 'Yellow — Safe riding zone, Orange — Safe parking zone, Black — Restricted area.',
    'faq.q23': 'Can I rent more than one bike from a single account?',
    'faq.a23': 'Only one bike can be rented per account.',
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
