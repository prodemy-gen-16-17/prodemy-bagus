# Border Radius HTML

## 1 `border-radius`

- Digunakan untuk membuat lengkungan pada elemen HTML.
- Bisa digunakan pada `<div>`, gambar, atau elemen lainnya.
- Keempat sisi elemen dapat dilengkungkan.
- Untuk melengkung keempat sisi elemen secara seragam, cukup satu baris kode.
- Untuk membuat bentuk bulat, cukup gunakan persentase (misalnya, 50%) untuk border radius.
- contoh

    ```css
    #box {
        height:100px;
        width:100px;
        background: blue;
        border-radius: 0.6rem;
    }

    #circle {
        height:100px;
        width:100px;
        background: yellow;
        border-radius: 50%;
    }
    ```

## 2 `box-shadow`

- adalah Box Shadow atau Bayangan Elemen
- Parameter Box Shadow:
  - Horizontal (kiri-kanan).
  - Vertical (atas-bawah).
  - Tingkat blurnya.
  - Tingkat nyebarnya.
  - Warna bayangan.
- contoh

    ```css
    #box2 {
        height:100px;
        width:100px;
        background: blue;
        border-radius: 0.6rem;

        box-shadow: 5px 20px 15px 5px black;
    }
    ```

## 3 `box-sizing` dan vendor prefix

- `box-sizing`:

  - adalah cara untuk mengatur lebar elemen, termasuk padding dan border.

  - Secara default (`box-sizing: content-box`), lebar elemen = nilai width + padding + border.

  - Dengan `box-sizing: border-box`, lebar elemen = nilai width.

    Padding + border akan `mengurangi` ruang dari dalam elemen, bukan menambahkan ruang dari luar.

- Vendor Prefix untuk Browser:
  
  membantu beberapa property CSS untuk mendukung browser yang belum mendukung property tersebut seperti
  - WebKit (untuk Safari dan Chrome),
  - Moz (untuk Firefox)
  - MS (untuk Internet Explorer)
  - dan O (untuk Opera).
- contoh

    ```css
    #box4 {
        height:100px;
        width:100px;
        background: blue;

        border: 5px solid black;
        padding: 0.6rem;
        box-sizing: border-box;

        /** vendor prefix */
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
    }

    #box5 {
        height:100px;
        width:100px;
        background: green;
    }
    ```

## 4 `text-shadow`

- adalah cara untuk memberikan bayangan pada teks atau tulisan.
- parameter:
  - Arah horizontal (contoh: 5 pixel).
  - Arah vertikal (contoh: 10 pixel).
  - Tingkat blur atau radius (contoh: 10 pixel).
  - Warna bayangan (contoh: abu-abu).
- contoh

    ```css
    #text-shadow {
        text-shadow: 0.6rem 0.6rem 5px grey;
    }
    ```

## 5 `word-wrap`, `text-overflow`, dan `text-overflow`

- `word-wrap`:
  - adalah cara untuk mengatur tampilan teks saat lebarnya tidak mencukupi.
  - Dengan nilai:
    - `break-word`

    memungkinkan kata-kata untuk memulai baris baru saat lebarnya mencapai batas tertentu.
- `overflow`:
  - mengatasi konten yang terlalu panjang untuk area yang tersedia.
  - Dalam CSS3, kita bisa atur `overflow-x` (horizontal) atau `overflow-y` (vertikal) secara terpisah
  - Dengan nilai:
    - `hidden`

      dapat digunakan untuk menyembunyikan kontent yang melebihi batas lebar tertentu.
    - `scroll`

      memungkinkan pengguna untuk menggulir kontent yang terlalu panjang.
- `text-overflow`:
  - mengatur tampilan teks yang overflow.
  - Dengan nilai:
    - `ellipsis`

      menampilkan titik-titik (...) untuk menunjukkan bahwa ada teks yang tidak terlihat.
- contoh

    ```css
    #div-overflow {
        width: 50px;
        overflow: scroll;

        text-overflow: ellipsis;
        word-wrap: break-word;
    }
    ```

## 6 **2D Transformations** di CSS3

memungkinkan penggunaan CSS untuk mengubah objek pada halaman web

Untuk mendukung berbagai browser, perlu menambahkan vendor prefixes

### `translate`

- Property `transform: translate(x, y)` digunakan untuk memindahkan objek.
- Dapat mengatur posisi objek secara horizontal (x) dan vertikal (y).
- contoh

    ```css
    #div-translate {
        width: 50px;
        height: 50px;
        background: red;

        transform: translate(50px, 50px);
    }
    ```

### `rotate`

- Property `transform: rotate(deg)` digunakan untuk memutar objek sebesar `deg` derajat.
- Nilai `deg` dapat positif (putaran searah jarum jam) atau negatif (putaran berlawanan arah jarum jam).

- contoh

    ```css
    #div-rotate {
        width: 50px;
        height: 50px;
        background: blue;

        transform: rotate(-30deg);
    }

    #div-rotate1 {
        width: 50px;
        height: 50px;
        background: blue;

        transform: rotate(30deg);
    }
    ```

### `scale`

- Property `scale(size)` digunakan untuk mengubah ukuran objek.
- Dapat mengatur scaling baik pada sumbu horizontal (x) maupun vertikal (y) atau keduanya sekaligus.
- contoh

    ```css
    #div-scale {
        width: 50px;
        height: 50px;
        background: red;

        transform: scale(1.5, 0.5);
    }
    ```

### `skew`

- Property `skew(deg)` digunakan untuk mengubah sisi-sisi objek dengan derajat tertentu.
- `skewX(deg)` merujuk pada perubahan sisi horizontal (x) objek dengan nilai derajat.
- `skewY(deg)` merujuk pada perubahan sisi vertikal (y) objek dengan nilai derajat.
- `skew(Xdeg,Ydeg)` merujuk pada perubahan sisi horizontal (x) dan sisi vertikal (y) objek dengan nilai derajat.
- contoh

    ```css
    #div-scale {
        width: 50px;
        height: 50px;
        background: red;

        transform: skew(10deg, 10deg);
    }
    ```

## 8 `transition`

adalah properti CSS yang digunakan untuk membuat perubahan elemen HTML menjadi lebih halus dan terlihat lebih baik saat berinteraksi dengan mouse, seperti hover.

selalu tentukan properti `transition-duration`, jika tidak, durasinya adalah 0 detik, dan transisi tidak akan berpengaruh.

- singkatan untuk:
  - `transition-property`

    menentukan nama properti CSS yang digunakan untuk efek transisi (efek transisi akan dimulai ketika properti CSS yang ditentukan berubah).

    sering digunakan bersamaan dengan pseudo-class `hover` untuk mengatur perubahan elemen saat kursor mouse berada di atasnya.

    Dalam contoh, `width` dan `background color` diubah

  - `transition-duration`

    durasi efek transisi dalam detik atai milidetik
  - `transition-timing-function`

    menentukan kurva kecepatan efek transisi.

    seperti:
    - `ease`
    - `linear`
    - `ease-in`
    - `ease-out`
    - `ease-in-out`
    - dan teman-temannya di [w3shcools](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.php)

  - `transition-delay`

    delay ketika efek transisi mulai

- bisa dipakai lgsg dengan format `transition: css-property durasi timing-function delay;`

- contoh

    ```css
    div {
        width: 50px;
        height: 50px;
        background: blue;
        transition: width 1s, background 1s;
    }

    #div1:hover {
        width: 200px;
    }

    #div2:hover {
        transition-delay: 1s;
        background: red;
    }

    #div3, #div4 {
       transition: height 1s;
    }

    #div3:hover {
        transition-timing-function: ease-in-out;
        height: 120px;
    }

    #div4:hover {
        transition-timing-function: ease-out;
        height: 120px;
    }
    ```

## 9 **3D Transformations** di CSS3

### `perspective`

- digunakan untuk memberikan perspektif pada elemen yang diposisikan 3D.

- menentukan seberapa jauh objek dari pengguna.

  Jadi, Semakin kecil nilai perspektifnya, semakin jauh objek 3D akan terlihat.

- Saat mendefinisikan properti perspektif untuk suatu elemen, child element-lah yang mendapatkan tampilan perspektif, BUKAN elemen itu sendiri.

- Property `perspective-origin`:
  - menentukan dari posisi perspektif pengguna melihat elemen posisi 3D pada sumbu X dan Y.
  - nilai defaultnya adalah `perspective-origin: 50% 50%;`.

- contoh

    ```css
    div {
        width: 50px;
        height: 50px;
    }

    #div1 {
        perspective: 100px;
        perspective-origin: 50% 50%;
    }

    #div2 {        
        background: blue;
    }

    #div3 {
        perspective: 100px;
        perspective-origin: 60% 10%;
    }

    #div4 {
        background: red;
    }
    ```

## 19 `resize` dan `opacity`

- `resize`:
  - menentukan apakah (dan bagaimana) suatu elemen dapat di-resize oleh pengguna.

  - tidak berlaku untuk elemen `inline` (sebaris) atau elemen `block` (blok) yang `overflow: visible;`.

  - Jadi, pastikan overflow disetel ke `scroll`, `auto`, atau `hidden`.

- `opacity`:
  - mengatur tingkat `opacity` (transparansi) suatu elemen.
  - dimana 1 tidak transparan sama sekali, 0.5 adalah 50% tembus pandang, dan 0 benar-benar transparan.

- contoh

    ```css
    div {
        width: 150px;
        height: 150px;
        background: yellow;
        overflow: hidden;

        resize: both;
        opacity: 0.4;
    }

    img {
        opacity: 0.5;
        transition: opacity 2s;
    }

    img:hover {
        opacity: 1;
    }
    ```

## 20 `@font-face` dan google font

- `@font-face`

  digunakan untuk mendeklarasikan jenis font yang akan digunakan dalam desain web.

  dengan ini tidak perlu lagi menggunakan salah satu font yang "aman untuk web".

  Property penting `@font-face`:
  - `font-family`
  
    digunakan untuk memberi nama pada font yang dideklarasikan.
  - `src`
  
    mengacu pada sumber font, baik berupa file di folder yang sama atau URL eksternal.

  Setelah deklarasi `@font-face`, font tersebut dapat digunakan di seluruh CSS dengan memanggil `font-family` yang telah ditentukan.

- Google Fonts

  adalah layanan yang menyediakan berbagai jenis font secara gratis untuk digunakan dalam desain web.
  
  bisa mengunjungi <google.com/fonts> untuk menelusuri dan memilih font yang diinginkan.

  Untuk menggunakan Google Font, tambahkan link yang diberikan oleh Google Fonts ke dalam bagian `<head>` dari dokumen HTML.
  
  Di CSS, untuk mengaplikasikan font tersebut pada elemen tertentu, gunakan property `font-family` dengan nama font yang sesuai.
  
  Pastikan ada koneksi internet saat mengakses situs web yang menggunakan Google Font karena font tersebut diambil dari sumber eksternal.

- contoh

    ```css
    @font-face {
        font-family: nama-font;
        src: url(sansation_light.woff);
    }

    div {
        width: 150px;
        height: 150px;
        background: yellow;
        overflow: hidden;
        resize: both;
        opacity: 0.4;

        font-family: nama-font;
    }
    ```

## 21 pseudo classes

digunakan untuk mendefinisikan keadaan khusus suatu elemen.

- Misalnya:

  - Memberi gaya pada elemen saat pengguna mengarahkan mouse ke elemen tersebut
  - Gaya tautan yang dikunjungi dan belum dikunjungi berbeda
  - Memberi gaya pada elemen saat mendapat fokus

- Pseudo Classes:Pseudo classes adalah cara pemilihan elemen di CSS dengan menggunakan notasi titik dua (::).Pseudo classes memungkinkan pemilihan elemen berdasarkan karakteristik khusus, seperti urutan (first child, last child) atau keberadaan (only child).
- Pseudo classes adalah cara pemilihan elemen di CSS dengan menggunakan notasi titik dua (::).
- Pseudo classes memungkinkan pemilihan elemen berdasarkan karakteristik khusus, seperti urutan (first child, last child) atau keberadaan (only child).
- :not() Pseudo Class::not() digunakan untuk memilih semua elemen kecuali elemen yang dijelaskan di dalamnya.Contoh: body:not(h1) akan memilih semua elemen dalam body kecuali elemen h1.
- :not() digunakan untuk memilih semua elemen kecuali elemen yang dijelaskan di dalamnya.
- Contoh: body:not(h1) akan memilih semua elemen dalam body kecuali elemen h1.
- :first-child Pseudo Class::first-child memilih elemen yang merupakan anak pertama dari elemen pembungkusnya.Contoh: p:first-child akan memilih elemen paragraf pertama di dalam elemen pembungkusnya.
- :first-child memilih elemen yang merupakan anak pertama dari elemen pembungkusnya.
- Contoh: p:first-child akan memilih elemen paragraf pertama di dalam elemen pembungkusnya.
- :last-child Pseudo Class::last-child memilih elemen yang merupakan anak terakhir dari elemen pembungkusnya.Contoh: p:last-child akan memilih elemen paragraf terakhir di dalam elemen pembungkusnya.
- :last-child memilih elemen yang merupakan anak terakhir dari elemen pembungkusnya.
- Contoh: p:last-child akan memilih elemen paragraf terakhir di dalam elemen pembungkusnya.
- :only-child Pseudo Class::only-child memilih elemen yang merupakan satu-satunya anak dari elemen pembungkusnya.Contoh: p:only-child akan memilih elemen paragraf yang satu-satunya anak di dalam elemen pembungkusnya.
- :only-child memilih elemen yang merupakan satu-satunya anak dari elemen pembungkusnya.
- Contoh: p:only-child akan memilih elemen paragraf yang satu-satunya anak di dalam elemen pembungkusnya.

Pseudo classes memungkinkan seleksi yang lebih fleksibel dan spesifik dalam CSS, memungkinkan pengaturan gaya yang berbeda untuk elemen-elemen yang memenuhi kriteria tertentu.

## 22 nth child

- Nth Child:Pseudo class Nth Child memungkinkan pemilihan elemen dengan berbasis pada urutan atau nomor elemen dalam elemen pembungkusnya.Dapat digunakan untuk memilih elemen-elemen dengan nomor tertentu, seperti elemen ke-2 atau ke-3, serta elemen-elemen ganjil atau genap.
- Pseudo class Nth Child memungkinkan pemilihan elemen dengan berbasis pada urutan atau nomor elemen dalam elemen pembungkusnya.
- Dapat digunakan untuk memilih elemen-elemen dengan nomor tertentu, seperti elemen ke-2 atau ke-3, serta elemen-elemen ganjil atau genap.
- Penggunaan Dasar:Untuk memilih elemen ke-2, gunakan :nth-child(2).Contoh: ul:nth-child(2) akan memilih elemen <ul> yang merupakan elemen kedua dalam dokumen.
- Untuk memilih elemen ke-2, gunakan :nth-child(2).
- Contoh: ul:nth-child(2) akan memilih elemen <ul> yang merupakan elemen kedua dalam dokumen.
- Elemen Ganjil dan Genap:Untuk memilih elemen-elemen ganjil, gunakan :nth-child(odd).Untuk memilih elemen-elemen genap, gunakan :nth-child(even).
- Untuk memilih elemen-elemen ganjil, gunakan :nth-child(odd).
- Untuk memilih elemen-elemen genap, gunakan :nth-child(even).
- Penggunaan Rumus:Anda dapat menggunakan rumus dalam Nth Child, misalnya, untuk memilih elemen-elemen yang merupakan kelipatan 3, gunakan :nth-child(3n).Rumus ini berbentuk AN + B, di mana A dan B adalah angka yang dapat Anda tentukan sesuai kebutuhan.
- Anda dapat menggunakan rumus dalam Nth Child, misalnya, untuk memilih elemen-elemen yang merupakan kelipatan 3, gunakan :nth-child(3n).
- Rumus ini berbentuk AN + B, di mana A dan B adalah angka yang dapat Anda tentukan sesuai kebutuhan.
- Contoh Rumus:Untuk memilih elemen yang merupakan kelipatan 4, gunakan :nth-child(4n).Untuk memilih elemen yang merupakan kelipatan 3 dan dimulai dari nomor 2, gunakan :nth-child(3n+2).
- Untuk memilih elemen yang merupakan kelipatan 4, gunakan :nth-child(4n).
- Untuk memilih elemen yang merupakan kelipatan 3 dan dimulai dari nomor 2, gunakan :nth-child(3n+2).

Nth Child memungkinkan pemilihan yang sangat spesifik dan berguna dalam mengubah gaya elemen-elemen berdasarkan urutan atau karakteristik numeriknya dalam dokumen HTML.

## 23 pseudo pada input

- Selektor Pseudo pada Input:Pseudo class pada input digunakan untuk memilih elemen input dalam HTML dan memberikan gaya atau efek tertentu pada input tersebut.
- Pseudo class pada input digunakan untuk memilih elemen input dalam HTML dan memberikan gaya atau efek tertentu pada input tersebut.
- Disabled dan Enabled:Pseudo class :enabled digunakan untuk memilih input yang diaktifkan (enable).Pseudo class :disabled digunakan untuk memilih input yang dinonaktifkan (disable).Contoh penggunaan: input:enabled akan memilih semua input yang diaktifkan dan dapat diberikan gaya khusus, seperti perubahan warna border.
- Pseudo class :enabled digunakan untuk memilih input yang diaktifkan (enable).
- Pseudo class :disabled digunakan untuk memilih input yang dinonaktifkan (disable).
- Contoh penggunaan: input:enabled akan memilih semua input yang diaktifkan dan dapat diberikan gaya khusus, seperti perubahan warna border.
- Invalid:Pseudo class :invalid digunakan untuk memilih input yang memiliki nilai yang tidak valid sesuai dengan tipe inputnya.Ini berguna untuk memberikan efek visual kepada pengguna ketika mereka memasukkan data yang tidak sesuai.Contoh penggunaan: input:invalid dapat digunakan untuk memberi warna latar belakang merah pada input yang memiliki nilai yang tidak valid.
- Pseudo class :invalid digunakan untuk memilih input yang memiliki nilai yang tidak valid sesuai dengan tipe inputnya.
- Ini berguna untuk memberikan efek visual kepada pengguna ketika mereka memasukkan data yang tidak sesuai.
- Contoh penggunaan: input:invalid dapat digunakan untuk memberi warna latar belakang merah pada input yang memiliki nilai yang tidak valid.
- Feedback Pengguna:Penggunaan pseudo class pada input memungkinkan Anda memberikan umpan balik visual kepada pengguna terkait dengan status input, seperti kesalahan validasi atau perubahan kondisi.
- Penggunaan pseudo class pada input memungkinkan Anda memberikan umpan balik visual kepada pengguna terkait dengan status input, seperti kesalahan validasi atau perubahan kondisi.

Dengan pseudo class pada input, Anda dapat membuat pengalaman pengguna yang lebih interaktif dan informatif dengan memberikan respons visual terhadap tindakan atau input mereka.
