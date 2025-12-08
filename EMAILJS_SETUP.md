# EmailJS Kurulum Talimatları

## Adım 1: EmailJS Hesabı Oluştur
1. https://www.emailjs.com/ adresine git
2. Ücretsiz hesap oluştur (aylık 200 email bedava)
3. Email doğrulaması yap

## Adım 2: Email Service Ekle
1. Dashboard'da "Email Services" sekmesine git
2. "Add New Service" tıkla
3. Gmail seç (veya tercih ettiğin provider)
4. Gmail hesabınla bağlan
5. **SERVICE ID**'yi kopyala (örn: `service_abc123`)

## Adım 3: Email Template Oluştur
1. "Email Templates" sekmesine git
2. "Create New Template" tıkla
3. Şu template'i kullan:

```
Yeni İletişim Formu Mesajı - Afney Software House

İsim: {{from_name}}
Email: {{from_email}}
Proje Türü: {{project_type}}

Mesaj:
{{message}}

---
Bu mesaj Afney website iletişim formundan gönderildi.
```

4. **TEMPLATE ID**'yi kopyala (örn: `template_xyz789`)

## Adım 4: Public Key Al
1. Account > API Keys sekmesine git
2. **Public Key**'i kopyala (örn: `user_AbCdEfGhIjKlMnOp`)

## Adım 5: Kodda Güncelle
`src/App.jsx` dosyasında şu satırları bul ve değiştir:

```javascript
// Satır ~155
emailjs.init("YOUR_PUBLIC_KEY");  // Public Key'ini buraya yapıştır

// Satır ~166-168
await emailjs.send(
  "YOUR_SERVICE_ID",      // Service ID buraya
  "YOUR_TEMPLATE_ID",     // Template ID buraya  
  templateParams
);
```

## Test Et!
1. Formu doldur ve gönder
2. Gmail hesabına email gelecek
3. Success toast mesajı göreceksin! 🎉

## Notlar
- Ücretsiz plan: 200 email/ay
- Rate limit: 1 email/saniye
- Test için kendi email'ine gönder

## Sorun Giderme
- Email gelmiyor? Spam klasörünü kontrol et
- Hata alıyorsan console.log kontrol et
- API keys doğru mu kontrol et
