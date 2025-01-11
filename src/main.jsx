// React kütüphanesini içe aktarır - React uygulaması oluşturmak için gerekli temel paket
import React from "react";

// ReactDOM kütüphanesini içe aktarır - React bileşenlerini DOM'a render etmek için kullanılır
import ReactDOM from "react-dom/client";

// Ana App bileşenini içe aktarır - uygulamanın ana component'i
import App from "./App.jsx";

// Global CSS stillerini içe aktarır
import "./index.css";

// HTML'deki 'root' ID'li elementi bulup React uygulamasını bu elementin içine render eder
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode, geliştirme aşamasında olası hataları tespit etmek için kullanılır
  <React.StrictMode>
    {/* Ana uygulama bileşenini render eder */}
    <App />
  </React.StrictMode>
);
