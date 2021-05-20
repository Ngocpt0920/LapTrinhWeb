var KichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
var ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
var Img = ChuyenSlide.getElementsByTagName("img");
var Max = KichThuoc * Img.length;
Max -= KichThuoc;
var Chuyen = 0;
function Next() {
	if (Chuyen < Max) Chuyen += KichThuoc;
	else Chuyen = 0;
	ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
}

function Back() {
	if (Chuyen == 0) Chuyen = Max;
	else Chuyen -= KichThuoc;
	ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
}

setInterval(function () {
	Next();
}, 3000);

function XemThongTin(){
	window.open('thongtin.html');
}

function MuaHang() {
	window.open('dathang.html');
}
function check() {
	if (name.value == "" || email.value == "" || phone.value == "" || address.value == "")
		alert("Vui lòng nhập đầy đủ thông tin");
	else
		alert("Cảm ơn bạn đã đặt hàng");
}

function tinhtien0(obj){
	var thanhtien = document.getElementsByClassName("Phan25");
	var dongia = document.getElementsByClassName("Phan24");
	var soluong = obj.value;
	thanhtien[0].innerHTML = dongia[0].innerHTML * soluong;
}

function tinhtien1(obj){
	var thanhtien = document.getElementsByClassName("Phan25");
	var dongia = document.getElementsByClassName("Phan24");
	var soluong = obj.value;
	thanhtien[1].innerHTML = parseInt(dongia[1].innerHTML.substring(0,6)) * soluong;
}

function tinhtien2(obj){
	var thanhtien = document.getElementsByClassName("Phan25");
	var dongia = document.getElementsByClassName("Phan24");
	var soluong = obj.value;
	thanhtien[2].innerHTML = dongia[2].innerHTML * soluong;
}