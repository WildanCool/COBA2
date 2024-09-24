function analisisAngka() {
  for (let a = 1; a <= 20; a++) {
    if (a % 2 == 1) {
      console.log("angka ganjil");
    } else if (a % 4 == 0) {
      console.log("angka genap, bisa dibagi 4");
    } else if (a % 2 == 0) {
      console.log("angka genap");
    }
  }
}

analisisAngka();
