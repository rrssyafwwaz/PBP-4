// data nilai siswa
let studentsScore = [
  { name: "Memey", score: 90 },
  { name: "Rudi", score: 80 },
  { name: "Dira", score: 100 },
];

// anggap siswa pertama sebagai nilai tertinggi sementara
let tertinggi = studentsScore[0];

// cek siswa berikutnya, kalau nilainya lebih besar maka gantikan
for (let i = 1; i < studentsScore.length; i++) {
  if (studentsScore[i].score > tertinggi.score) {
    tertinggi = studentsScore[i];
  }
}

// tampilkan nama dan nilai siswa tertinggi
console.log("Nama  : " + tertinggi.name);
console.log("Nilai : " + tertinggi.score);