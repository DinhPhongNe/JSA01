// for (var i = 0 ;i < 4 ;i++ ){
//     console.log("Lặp được " + i + " lần ròi")
// }

//biểu thức 1: var i = 0 thường là câu lệnh để khai báo biến
//biểu thức 2: là điều kiện dừng vòng lặp
//biểu thức 3: là hành động xử lí biến được khai áo ở biểu thứ 1


// viết vòng lặp hiển thị số 1 đến 10
// for (var i = 1; i <= 10; i++){
//     console.log("số "+ i)
// }
// viết chương trình tính tổng từ 0 đến 10
// var sum = 0;
// for (var i = 1; i <= 5; i++){
//     sum = sum + 1;
// }
// console.log("tổng từ 0 đến 10 là: " + sum)


// var danhsanhhocsinh = ["TNhư", "BNhư", "Khang", "Phong", "Văn", "Ngọc", "Thắng"];

// danhsanhhocsinh.push("Đỗ Trần Anh Khoa") //push() là phương thức thêm phần tử vào mảng

// danhsanhhocsinh[6] = "Thắng 1"

// danhsanhhocsinh.splice(6) //index = 5


// for (var i = 0; i < danhsanhhocsinh.length; i++){
//     console.log(danhsanhhocsinh[i]);
// }

// var animals = ["dog", "cat", "chicken"];

// // create
// animals.push("Ân")

// //read
// console.log(animals[1]);

// //update
// animals[2] = "cows"

// //delete
// animals.splice(0, 1)
// console.log(animals);

// var Phong ={
//     age: 13,
//     height: 165,
//     location: "TPHCM"
// }

// // create
// Phong.work ="student";

// //read
// console.log(Phong.location);

// //update
// Phong.location = "Quang Ngai"

// //delete
// delete Phong.location


// console.log(Phong)


var computer = new Object();
computer = {
    os: "MacOs",
    brand: "Apple",
    cpu: "11"
}

console.log(computer)