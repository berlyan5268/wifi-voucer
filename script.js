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

    if (validVouchers.includes(voucherInput)) {
        message.style.color = "green";
        message.innerText = "Voucher valid! Anda sekarang terhubung ke internet.";
    } else {
        message.style.color = "red";
        message.innerText = "Kode voucher salah. Silakan coba lagi.";
    }
}
