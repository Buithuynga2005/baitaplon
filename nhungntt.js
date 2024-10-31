document.getElementById('form_social_network').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi
    const facebook = document.getElementById('facebook').value; // Lấy link facebook được nhập
    if (!facebook.includes('facebook.com') & facebook != '') { // Nếu link facebook có dữ liệu mà không bao gồm cụm facebook.com thì thông báo lỗi
        alert('Link facebook của bạn bị sai rồi!');
    }
    const insta = document.getElementById('insta').value; // Lấy link instagram được nhập
    if (!inputValue.includes('insta.com') & insta != '') {// Nếu link instagram có dữ liệu mà không bao gồm cụm instagram.com thì thông báo lỗi
        alert('Link instagram của bạn bị sai rồi!');
    }
    const tiktok = document.getElementById('tiktok').value; // Lấy link tiktok được nhập
    if (!inputValue.includes('tiktok.com') & tiktok != '') {// Nếu link tiktok có dữ liệu mà không bao gồm cụm tiktok.com thì thông báo lỗi
        alert('Link tiktok của bạn bị sai rồi!');
    }
});