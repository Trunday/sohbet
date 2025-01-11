# Sohbet Uygulaması Yapılacaklar Listesi

## 🔥 Yüksek Öncelikli

- [ ] Kullanıcı kimlik doğrulama sistemi
  - [ ] Google ile giriş
  - [ ] Email/şifre ile giriş
  - [ ] Şifremi unuttum fonksiyonu
- [ ] Temel sohbet fonksiyonları
  - [ ] Metin mesajları gönderme
  - [ ] Çevrimiçi durumu gösterimi
  - [ ] Mesaj okundu bildirimi

## 👨‍💻 Geliştirme Görevleri

- [ ] Firebase veritabanı optimizasyonu
- [ ] Performans iyileştirmeleri
- [ ] Kod dokümantasyonu
- [ ] Unit testlerin yazılması
- [ ] Error handling geliştirmeleri

## 🎨 UI/UX İyileştirmeleri

- [ ] Responsive tasarım düzenlemeleri
- [ ] Dark/Light tema desteği
- [ ] Loading animasyonları
- [ ] Bildirim tasarımları

## 📱 Özellikler

- [ ] Dosya paylaşımı
  - [ ] Resim gönderme
  - [ ] Döküman paylaşma
- [ ] Emoji desteği
- [ ] Grup sohbetleri
- [ ] Sesli mesaj desteği

## 🔒 Güvenlik

- [ ] Input validasyonları
- [ ] XSS koruması
- [ ] Rate limiting
- [ ] Veri şifreleme

## 📈 Gelecek Özellikler

- [ ] Video görüşmesi
- [ ] Sesli arama
- [ ] Mesaj çeviri desteği
- [ ] Otomatik yanıt sistemi

## 🐛 Bilinen Hatalar

- [ ] Mesaj gönderirken yaşanan gecikme
- [ ] Çevrimiçi durumu güncellenme sorunu
- [ ] Bildirim gecikmesi
- [ ] Eski mesajları yüklerken yaşanan performans sorunları
- [ ] Resim önizlemelerinin yavaş yüklenmesi
- [ ] Grup sohbetlerinde katılımcı listesi senkronizasyon hatası
- [ ] Bağlantı koptuğunda mesajların tekrar gönderilmemesi
- [ ] Emoji klavyesi açılırken yaşanan donma sorunu
- [ ] Mesaj arama fonksiyonunda gecikme
- [ ] Okunmamış mesaj sayacı senkronizasyon problemi

İlgili Dosyalar:

- `src/components/chat/*`
- `src/lib/firebase.js`
- `src/lib/userStore.js`
- `src/lib/chatStore.js`

## 🧪 Test Sürecinde ...

- [ ] Kullanıcı kendi kendini ekleyemesin.
- [ ] Mobil uyumlu değil.
- [ ] Görsel iyileştirmeler yapılmalı. UI  / UX tekrar gözden geçirmek

## 💡 Copilot Önerileri

### 🔐 Güvenlik İyileştirmeleri

- [ ] `.env` dosyasındaki Firebase kimlik bilgilerinin güvenliği artırılmalı
- [X] `upload.js`'de dosya boyutu ve türü kontrolleri eklenmeli
- [ ] Kullanıcı oturumlarının süresi sınırlandırılmalı
- [ ] Message sanitization eklenmeli (XSS koruması için)
- [ ] Firestore kuralları optimize edilmeli

### 🎨 UI/UX Geliştirmeleri

- [X] Chat penceresinde typing indicator eklenmeli
- [X] `chatList.css`'de scroll davranışı iyileştirilmeli
- [ ] Karanlık/Aydınlık tema desteği için CSS değişkenleri kullanılmalı
- [ ] Responsive tasarım sorunları giderilmeli (özellikle mobil görünümde)
- [ ] Image lazy loading implementasyonu
- [ ] Chat geçmişi için infinite scroll eklenmeli
- [ ] Error state'leri için UI komponentleri

### 🛠 Teknik İyileştirmeler

- [ ] `ChatList.jsx`'teki useEffect hook'u optimize edilmeli
- [ ] `userStore.js` ve `chatStore.js` için TypeScript desteği
- [ ] Firebase bağlantısı için error boundary eklenmeli
- [ ] Performance monitoring araçları entegre edilmeli
- [ ] Image upload için progress bar eklenmeli
- [ ] Service worker ile offline desteği
- [ ] WebSocket bağlantı yönetimi iyileştirilmeli
- [ ] Mesaj gönderimi için retry mekanizması

### 🧪 Test Kapsamı

- [ ] Unit testler için Jest kurulumu
- [ ] Integration testleri için React Testing Library
- [ ] E2E testler için Cypress
- [ ] Firebase emülatör entegrasyonu
- [ ] Performance testleri
- [ ] Accessibility testleri

### 📱 Yeni Özellikler

- [ ] Mesajları yıldızlama/kaydetme
- [ ] Sesli mesaj kaydı
- [ ] Dosya önizleme
- [ ] Grup sohbetleri için rol yönetimi
- [ ] Okunmamış mesaj bildirimleri için push notification
- [ ] Mesaj arama özelliği
- [ ] Kullanıcı profil düzenleme
- [ ] Görüntülü görüşme entegrasyonu

### 📦 Kod Organizasyonu

- [ ] Tekrar eden komponentlerin ortak komponente çekilmesi
- [ ] Custom hook'ların ayrı dosyalara taşınması
- [ ] Firebase işlemleri için service katmanı
- [ ] Sabit değerler için constants dosyası
- [ ] Form validasyonları için utility fonksiyonları
- [ ] Error handling için merkezi yönetim
- [ ] State management optimizasyonu
