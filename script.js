function login() {
    const voucher = document.getElementById('voucher').value;
    if (voucher) {
        alert(`Kode voucher "${voucher}" berhasil diterima. Anda akan login.`);
        // Kirim data voucher ke server MikroTik melalui HTTP/POST di sini
    } else {
        alert('Silakan masukkan kode voucher Anda.');
    }
}

function checkVoucher() {
    const validVouchers = ["ABC123", "XYZ789", "DEF456"]; // Daftar kode voucher valid
    const voucherInput = document.getElementById("voucher").value;
    const message = document.getElementById("message");
    const connectionInfo = document.getElementById("connection-info");
    const connectedTime = document.getElementById("connected-time");
    const elapsedTime = document.getElementById("elapsed-time");

    if (validVouchers.includes(voucherInput)) {
        message.style.color = "green";
        message.innerText = "Voucher valid! Anda sekarang terhubung ke internet.";
        
        // Catat waktu koneksi
        const now = new Date();
        connectionStartTime = now;
        connectedTime.innerText = now.toLocaleString();

        // Tampilkan durasi berjalan
        connectionInfo.style.display = "block";
        elapsedTimeInterval = setInterval(() => {
            const secondsElapsed = Math.floor((new Date() - connectionStartTime) / 1000);
            elapsedTime.innerText = `${secondsElapsed} detik`;
        }, 1000);
    } else {
        message.style.color = "red";
        message.innerText = "Kode voucher salah. Silakan coba lagi.";
    }
}

function disconnect() {
    const message = document.getElementById("message");
    const connectionInfo = document.getElementById("connection-info");

    // Hentikan timer dan reset tampilan
    clearInterval(elapsedTimeInterval);
    connectionStartTime = null;

    connectionInfo.style.display = "none";
    message.style.color = "orange";
    message.innerText = "Anda telah terputus dari internet.";
}

// Fungsi untuk memastikan posisi elemen tetap responsif di perangkat seluler
window.addEventListener('resize', function() {
    const loginContainer = document.querySelector('.login-container');
    if (window.innerWidth <= 480) {
        loginContainer.style.width = '100%';
        loginContainer.style.margin = '10px';
    } else {
        loginContainer.style.width = '90%';
        loginContainer.style.margin = '50px auto';
    }
});
