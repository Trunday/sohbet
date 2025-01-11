// React'ın useEffect hook'unu içe aktarır - bileşen yaşam döngüsü işlemleri için kullanılır
import { useEffect } from "react";

// Sohbet bileşenini içe aktarır - mesajlaşma arayüzünü gösterir
import Chat from "./components/chat/Chat";

// Detay bileşenini içe aktarır - seçili sohbetin detaylarını gösterir
import Detail from "./components/detail/Detail";

// Liste bileşenini içe aktarır - sohbet listesini gösterir
import List from "./components/list/List";

// Giriş bileşenini içe aktarır - kullanıcı girişi için kullanılır
import Login from "./components/login/Login";

// Bildirim bileşenini içe aktarır - uygulama bildirimlerini gösterir
import Notification from "./components/notification/Notification";

// Firebase kimlik doğrulama işlevi - kullanıcı oturum durumunu takip eder
import { onAuthStateChanged } from "firebase/auth";

// Firebase yapılandırması - kimlik doğrulama nesnesini içe aktarır
import { auth } from "./lib/firebase";

// Kullanıcı durumu yönetimi için özel hook
import { useUserStore } from "./lib/userStore";

// Sohbet durumu yönetimi için özel hook
import { useChatStore } from "./lib/chatStore";

// Ana uygulama bileşeni
const App = () => {
  // Kullanıcı durumu ve ilgili fonksiyonları çeker
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  
  // Aktif sohbet ID'sini çeker
  const { chatId } = useChatStore();

  // Bileşen yüklendiğinde çalışacak effect - kullanıcı oturum durumunu takip eder
  useEffect(() => {
    // Firebase auth durumu değişikliklerini dinler
    const unSub = onAuthStateChanged(auth, (user) => {
      // Kullanıcı bilgilerini getirir
      fetchUserInfo(user?.uid);
    });

    // Bileşen kaldırıldığında dinleyiciyi temizler
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  // Yükleme durumunda loading mesajı gösterir
  if (isLoading) return <div className="loading">Yükleniyor...</div>;

  // Ana uygulama arayüzünü döndürür
  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          {chatId && <Detail />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
