let dataInput = [
  {
    img: "./images/laravel.svg",
    alt: "Gambar laravel",
    title: "Artikel tentang laravel",
    content: "Ini adalah artikel tentang laravel. Laravel adalah framework PHP yang paling populer saat ini. Laravel dibuat oleh Taylor Otwell pada tahun 2011. Laravel menggunakan konsep MVC (Model View Controller). Laravel memiliki fitur yang lengkap dan mudah untuk dipelajari."
  },
  {
    img: "./images/react.svg",
    alt: "Gambar react",
    title: "Artikel tentang react",
    content: "Ini adalah artikel tentang react. React adalah library JavaScript yang dibuat oleh Facebook. React digunakan untuk membangun antarmuka pengguna (UI) pada aplikasi web. React menggunakan konsep komponen (component) yang memudahkan kita untuk membagi-bagi UI menjadi beberapa bagian"
  },
  {
    img: "./images/vue.svg",
    alt: "Gambar vue",
    title: "Artikel tentang vue",
    content: "Ini adalah artikel tentang vue. Vue adalah framework JavaScript yang dibuat oleh Evan You pada tahun 2014. Vue adalah framework yang ringan dan mudah dipelajari. Vue juga memiliki dokumentasi yang lengkap dan mudah dipahami"
  }
];

let articleContainer = document.getElementById("article");

for (let i = 0; i < dataInput.length; i++) {
  let article = document.createElement("article");
  let img = document.createElement("img");
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");

  // Set atribut dan teks sesuai dengan dataInput
  img.src = dataInput[i].img; // Masukkan sumber gambar jika ada
  img.alt = dataInput[i].alt; // Masukkan teks alternatif gambar jika ada
  h2.textContent = dataInput[i].title;
  p.textContent = dataInput[i].content;

  // Gabungkan elemen-elemen ke dalam <article> dan <div id="container">
  div.appendChild(h2);
  div.appendChild(p);
  article.appendChild(img);
  article.appendChild(div);
  articleContainer.appendChild(article);
}

// Time automatic
let time = new Date();
let year = time.getFullYear();

document.getElementById("time").innerHTML = `&copy; ${year} -   <a href="http://github.com/Syafiq1331" target="_blank" rel="noopener noreferrer">
Syafiqrzf
</a>`;