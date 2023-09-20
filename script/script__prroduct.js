let dataProduct = [
  {
    nama: "Website muslim produktif",
    desc: "Landing page untuk penjualan buku muslim produktif"
  },
  {
    nama: "Website Berani tidak di sukai",
    desc: "Landing page untuk penjualan buku Berani tidak di sukai"
  },
  {
    nama: "Website Honjouk - Sebuah seni untuk hidup sendiri",
    desc: "Landing page untuk penjualan buku mHonjouk - Sebuah seni untuk hidup sendiri"
  },
  {
    nama: "Website aku seorang introver",
    desc: "Landing page untuk penjualan buku aku seorang introver"
  },
  {
    nama: "Website hidup anti galau di umur 20-an",
    desc: "Landing page untuk penjualan buku hidup anti galau di umur 20-an"
  },
  {
    nama: "Website Blink",
    desc: "Landing page untuk penjualan buku Blink"
  },
  {
    nama: "Website seni hidup minimalis",
    desc: "Landing page untuk penjualan buku seni hidup minimalis"
  }
];

// Mendapatkan id selector dari articles (pastikan id 'product' ada pada elemen HTML yang sesuai)
let articlesContainer = document.getElementById('product');

for (let i = 0; i < dataProduct.length; i++) {
  let article = document.createElement("article");
  let h4 = document.createElement("h4");
  let p = document.createElement("p");
  let link = document.createElement("a");

  // Set atribut dan teks sesuai dengan dataProduct
  h4.textContent = dataProduct[i].nama;
  p.textContent = dataProduct[i].desc;
  link.textContent = "Link demo";
  link.href = "https://esportsku.com/tech/wp-content/uploads/2023/03/Meme-Santai-Dulu-Ga-Sih.jpg"

  // Gabungkan elemen-elemen ke dalam <article> dan <div id="product">
  article.appendChild(h4);
  article.appendChild(p);
  article.appendChild(link);
  articlesContainer.appendChild(article);
}
