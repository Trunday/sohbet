# React Firebase Chat ( `<Sohbet/>` )

Bu proje, React ve Firebase kullanarak gerçek zamanlı bir sohbet uygulaması oluşturmayı amaçlamaktadır. Kullanıcılar, Google hesaplarıyla giriş yaparak birbirleriyle anlık mesajlaşabilirler.

## Özellikler

- Google ile kimlik doğrulama
- Gerçek zamanlı mesajlaşma
- Kullanıcı avatarları
- Mesaj zaman damgaları

## Kurulum

1. Bu depoyu klonlayın:

   ```bash
   git clone https://github.com/Trunday/sohbet.git
   ```
2. Proje dizinine gidin:

   ```bash
   cd sohbet
   ```
3. Gerekli paketleri yükleyin:

   ```bash
   npm install
   ```
4. Firebase yapılandırmanızı ayarlayın:

   - Firebase konsolunda yeni bir proje oluşturun.
   - Authentication bölümünde Google oturum açmayı etkinleştirin.
   - Firestore ve Storage hizmetlerini etkinleştirin.
   - Firebase projenizin yapılandırma ayarlarını alın ve `src/firebaseConfig.js` dosyasına ekleyin:

     ```javascript
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
     };

     export default firebaseConfig;
     ```
5. Uygulamayı başlatın:

   ```bash
   npm run dev
   ```

   Tarayıcınızda `http://localhost:5173` adresine giderek uygulamayı görüntüleyebilirsiniz.

## Kullanım

- Uygulama açıldığında, kullanıcıların Google hesaplarıyla giriş yapmaları istenir.
- Giriş yaptıktan sonra, diğer kullanıcılarla gerçek zamanlı olarak mesajlaşabilirsiniz.
- Mesajlar, kullanıcı avatarları ve zaman damgalarıyla birlikte görüntülenir.

## Katkıda Bulunma

Katkılarınızı memnuniyetle karşılıyoruz! Lütfen katkıda bulunmadan önce aşağıdaki adımları izleyin:

1. Depoyu forklayın.
2. Yeni bir dal oluşturun:

   ```bash
   git checkout -b feature/ozellik-adi
   ```
3. Yaptığınız değişiklikleri ekleyin ve commit edin:

   ```bash
   git commit -m 'Yeni özellik eklendi: ozellik-adi'
   ```
4. Dalınızı uzak depoya gönderin:

   ```bash
   git push origin feature/ozellik-adi
   ```
5. Bir Pull Request oluşturun.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakabilirsiniz.
