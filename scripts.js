// scripts.js

// Giriş ekranı elemanları
const loginButton = document.getElementById("loginButton");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("loginError");
const loginScreen = document.getElementById("loginScreen");
const chatScreen = document.getElementById("chatScreen");
const logoutButton = document.getElementById("logoutButton");

// Sohbet alanı elemanları
const sendButton = document.getElementById("sendButton");
const mesajInput = document.getElementById("mesajInput");
const sohbetKutusu = document.getElementById("sohbetKutusu");

// Kullanıcı bilgileri
const users = {
    "adim": "1234",      // Yönetici
    "yagiz": "toprak", 
    "ertug": "su", 
    "deniz": "havva", 
    "mert": "avatar", 
    "baran": "ateş"
};

// Giriş butonuna tıklama olayını dinle
loginButton.addEventListener("click", function() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Kullanıcı adı ve şifreyi doğrula
    if (users[username] === password) {
        // Giriş başarılı
        loginScreen.style.display = "none";
        chatScreen.style.display = "flex";
        loginError.style.display = "none"; // Hata mesajını kaldır
    } else {
        // Hatalı giriş
        loginError.style.display = "block";
    }
});

// Sohbet mesajını ekle
sendButton.addEventListener("click", function() {
    const mesaj = mesajInput.value.trim();
    
    if (mesaj !== "") {
        const yeniMesaj = document.createElement("div");
        yeniMesaj.classList.add("mesaj");
        yeniMesaj.textContent = `${usernameInput.value.trim()}: ${mesaj}`;
        sohbetKutusu.appendChild(yeniMesaj);
        mesajInput.value = "";
        sohbetKutusu.scrollTop = sohbetKutusu.scrollHeight; // En son mesaja kaydır
    }
});

// Çıkış yap
logoutButton.addEventListener("click", function() {
    loginScreen.style.display = "flex";
    chatScreen.style.display = "none";
    usernameInput.value = "";
    passwordInput.value = "";
    loginError.style.display = "none";
});
