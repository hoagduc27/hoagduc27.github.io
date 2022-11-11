//js chuyển tab và hover
var tab1 = document.getElementById('tab1');
var tab2 = document.getElementById('tab2');
var tab3 = document.getElementById('tab3');
var li1 = tab1.parentElement;
var li2 = tab2.parentElement;
var li3 = tab3.parentElement;
li1.style.backgroundColor = 'rgb(245, 181, 255)';
li1.style.border = '1px solid blueviolet';
tab1.onclick = function () {
    slideAnh.style.display = 'block';
    gioHang.style.display = 'none';
    dangKy.style.display = 'none';

    li1.style.backgroundColor = 'rgb(245, 181, 255)';
    li1.style.border = '1px solid blueviolet';
    li2.style.backgroundColor = 'white';
    li2.style.border = '0px';
    li3.style.backgroundColor = 'white';
    li3.style.border = '0px';

}

tab2.onclick = function () {
    slideAnh.style.display = 'none';
    gioHang.style.display = 'block';
    dangKy.style.display = 'none';

    li1.style.backgroundColor = 'white';
    li1.style.border = '0px';
    li2.style.backgroundColor = 'rgb(245, 181, 255)';
    li2.style.border = '1px solid blueviolet';
    li3.style.backgroundColor = 'white';
    li3.style.border = '0px';
}

tab3.onclick = function () {
    slideAnh.style.display = 'none';
    gioHang.style.display = 'none';
    dangKy.style.display = 'block';

    li1.style.backgroundColor = 'white';
    li1.style.border = '0px';
    li2.style.backgroundColor = 'white';
    li2.style.border = '0px';
    li3.style.backgroundColor = 'rgb(245, 181, 255)';
    li3.style.border = '1px solid blueviolet';
}


/////slide
var slideAnh = document.getElementById('slideAnh');
var gioHang = document.getElementById('gioHang');
var dangKy = document.getElementById('dangKy');
var index = 1;
var t;
function next() {
    index++;
    if (index > 7) {
        index = 1;
    }
    document.getElementById('slide').src = index + ".jpg";
    document.getElementById('viTri').innerText = index + "/7";
}

function back() {
    index--;
    if (index < 1) {
        index = 7;
    }
    document.getElementById('slide').src = index + ".jpg";
    document.getElementById('viTri').innerText = index + "/7";
}

function first() {
    index = 1;
    document.getElementById('slide').src = index + ".jpg";
    document.getElementById('viTri').innerText = index + "/7";
}

function final() {
    index = 7;
    document.getElementById('slide').src = index + ".jpg";
    document.getElementById('viTri').innerText = index + "/7";
}

function start() {
    t = setInterval(next, 1000);
}
function stop() {
    clearInterval(t);
}



/////js gio hang

//phong to thu nho ảnh
function phongTo(img) {
    // img.style.width = "500px";
    // img.style.height = "300px";
    // img.style.position = "absolute";
    img.style.transform = 'scale(10)';
    img.style.cursor ='pointer';
}
function thuNho(img) {
    // img.style.width = "60px";
    // img.style.height = "20px";
    // img.style.position = "absolute";
    img.style.transform = 'scale(1)';
    img.style.cursor ='';
}

var checkBoxs = document.getElementsByClassName('checkBox');
var soLuongSPs = document.getElementsByClassName('soLuongSP');
var tongGia1SPs = document.getElementsByClassName('tongGia1SP');
var gia1SPs = document.getElementsByClassName('gia1SP');


//tick vào checkBox thì hiện input
function checkCheckBox(i) {
    if (checkBoxs[i].checked) {
        soLuongSPs[i].disabled = false;
    }
    if (checkBoxs[i].checked == false) {
        soLuongSPs[i].disabled = true;
        soLuongSPs[i].value = 0;
        tongGia1SPs[i].innerText = 0;
        tongTien();
    }
}


//tick all
var allCheckBox = document.getElementById('allCheckBox');
function tickAll() {
    if (allCheckBox.checked) {
        for (var i = 0; i < 7; i++) {
            checkBoxs[i].checked = true;
            soLuongSPs[i].disabled = false;
            tongTien();
        }
    }
    if (allCheckBox.checked == false) {
        for (var i = 0; i < 7; i++) {
            checkBoxs[i].checked = false;
            soLuongSPs[i].disabled = true;
            soLuongSPs[i].value = 0;
            tongTien();
        }
    }
}
allCheckBox.onclick = function () {
    tickAll();
}


//tinh tien 1 sp va all sp
var tongTienAllSP = document.getElementById('tongTienAllSP');
var tongAll = 0;

function tongTien() {
    tongAll = 0;
    for (var j = 0; j < 7; j++) {
        var gia1 = Number(gia1SPs[j].innerText);
        var soLuong1 = soLuongSPs[j].value;
        var tong1 = gia1 * soLuong1;
        tongGia1SPs[j].innerText = tong1;
        tongAll += Number(tongGia1SPs[j].innerText);
        tongTienAllSP.innerText = tongAll;
    }
}

for (var i = 0; i < 7; i++) {
    soLuongSPs[i].oninput = function () {
        tongTien();
    }
}


//hiển thị sản phẩm trong tầm giá
var chonGia = document.getElementById('chonGia');
var options = chonGia.getElementsByTagName('option');

chonGia.onchange = function () {
    hienThiSPTrongTamGia();
}
function hienThiSPTrongTamGia() {
    if(chonGia.value == "Dưới 500"){
        for(var i=0;i<7;i++){
            if(Number(gia1SPs[i].innerText) <500){
                
                var tr=gia1SPs[i].parentElement;
                tr.style.display = 'table-row';
            }
            else{
                var tr=gia1SPs[i].parentElement;
                tr.style.display = 'none';
            }
        }
    }   
    
    if(chonGia.value == "500-1000"){
        for(var i=0;i<7;i++){
            if(Number(gia1SPs[i].innerText) >=500 && Number(gia1SPs[i].innerText) <=1000){
                var tr=gia1SPs[i].parentElement;
                tr.style.display = 'table-row';
            }
            else{
                var tr=gia1SPs[i].parentElement;
                tr.style.display = 'none';
            }
        }
    }

    if(chonGia.value == "Trên 1000"){
        for(var i=0;i<7;i++){
            if(Number(gia1SPs[i].innerText) >= 1000){
                var tr=gia1SPs[i].parentElement;
                tr.style.display = 'table-row';
            }
            else{
                var tr=gia1SPs[i].parentElement;
                tr.style.display = 'none';
            }
        }
    }

    if(chonGia.value == "Chọn mức giá"){
        for(var i=0;i<7;i++){
            var tr=gia1SPs[i].parentElement;
            tr.style.display = 'table-row';      
        }
    }
}


/////Dang Ky
//hiện học phí khi chọn khóa học
var khoaHoc=document.getElementById('khoaHoc');
var hocPhi=document.getElementById('hocPhi');

function hienHocPhi(){
    if(khoaHoc.value == 'HTML'){
        hocPhi.value=300;
    }

    if(khoaHoc.value == 'CSS'){
        hocPhi.value=500;
    }

    if(khoaHoc.value == 'JS'){
        hocPhi.value=700;
    }
}

khoaHoc.onchange = function(){
    hienHocPhi();
}

//kiểm tra hợp lệ


var thongBaos = document.getElementsByClassName('thongBao');
document.getElementById('btnDangKy').onclick = function(){
    check();
}



function check(){
    //họ tên
    var hoTen = document.getElementById('hoTen');

    if(hoTen.value== ""){
        thongBaos[0].innerText = 'Họ tên không được để trống';
        thongBaos[0].style.color = 'red';
    }
    else{
        thongBaos[0].innerText = ' ';
    }
    //email
    var email = document.getElementById('email');
    var mauEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
 //   /\S+@\S+\.+\S+/
 //   /^[0-9]{10}$/

 //  /\s+@\s+\.+\s/
 //  /^[0-9]{10}$/


    if(email.value == ""){
        thongBaos[1].innerText = 'Email không được để trống';
        thongBaos[1].style.color = 'red';
    }
    else if(!mauEmail.test(email.value)){
        thongBaos[1].innerText = 'Email không đúng định dạng';
        thongBaos[1].style.color = 'red';
    }
    else{
        thongBaos[1].innerText = '';
    }
    //sdt 
    var sdt=document.getElementById('sdt');
    // var mauSDT=/((09|03|07|08|05)+([0-9]{8})\b)/g;
    var mauSDT=/((0)+([0-9]{8})\b)/g;
    if(sdt.value==""){
        thongBaos[2].innerText = 'Số điện thoại không được để trống';
        thongBaos[2].style.color = 'red';
    }
    else if(!mauSDT.test(sdt.value)){
        thongBaos[2].innerText = 'Số điện thoại không đúng định dạng';
        thongBaos[2].style.color = 'red';
    }
    else{
        thongBaos[2].innerText = '';
    }
    //hình thức học
    var hinhThucHocs = document.getElementsByName('hinhThucHoc');
    if(hinhThucHocs[0].checked == false && hinhThucHocs[1].checked == false){
        thongBaos[3].innerText = 'Phải chọn hình thức học';
        thongBaos[3].style.color = 'red';
    }
    else{
        thongBaos[3].innerText = '';
    }
    
    if(thongBaos[0].innerText == '' && thongBaos[1].innerText == '' && thongBaos[2].innerText == '' && thongBaos[3].innerText == ''){
        alert('Đăng kí thành công');
    }
}



