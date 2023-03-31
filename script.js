// NO 2
let nilaiAwal = 0;

for (let i = 1; i <= 10; i++) {
  nilaiAwal += 2;
  console.log(`Nilai pada pengulangan ke-${i}: ${nilaiAwal}`);
}

// NO 3
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(i + " adalah bilangan genap");
    } else {
      console.log(i + " adalah bilangan ganjil");
    }
  }

  // NO 4
let count = 0;
let repeat = true;

while (repeat) {
  const confirmation = confirm("Apakah Anda mau mengulang?");

  if (confirmation) {
    count++;
  } else {
    repeat = false;
    alert(`Perulangan sudah dilakukan sebanyak ${count} kali`);
  }
}


// NO 5
let answer;

do {
  answer = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");
} while (answer.toLowerCase() !== "impact byte");

alert("Selamat jawaban kamu benar!");