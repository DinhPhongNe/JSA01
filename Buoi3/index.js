// Bai 1: ve tam giac can 
const H = 5;
for(let i = 1; i <= H; i++){
    for(var k = H; k > i;k--){
        document.write("&nbsp;&nbsp;");
    }
    for(let j = 1;j <= i * 2 - 1; j++){
        document.write("1");
    }
    document.writeln("<br />");
}


//----------------------------------------------
// Bai 2: loc phan tu myArr
// bai nay chiu roi thay oi:( 


//----------------------------------------------
// bai 3: ke cau chuyen dung alert

alert("Bạn đang được crush hỏi ăn gì chưa");
var DaAn = prompt("Mày ăn gì chưa?");
while (DaAn === "" || DaAn == null) { //bỏ trống nếu chưa ăn, yes nếu đã ăn
    alert("chưa ăn gì á?")
    var doan = prompt("thế muốn ăn gì?")
    alert(doan + "? có vẻ ngon đêý nổ địa chỉ tao ship qua cho ");
    var daan = prompt("còn gì nữa không?")
    while (daan === "" || daan == null){
        alert("ok") // tới đây thì nó lag gòi nên tạo trang mới i:3
    }
} 

alert("ăn rồi à?");
var kem = prompt("ăn cà lem không?")
while (DaAn === "" || DaAn == null) {
    alert("không ăn à? thì thoi:)))")
} // tới đây là hết 

// em hog biết làm lưu trữ câu trl thầy oi, cố gắng mấy lần gòi hog được:(


