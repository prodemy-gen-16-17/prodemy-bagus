# Belajar CSS untuk Pemula

## Belajar CSS untuk pemula - intro

CSS (Cascading Style Sheets)

- untuk menghias website.
- digunakan setelah membuat struktur HTML.

## 1 menghubungkan file css

- Ada 3 cara untuk menggunakan CSS:
  - inline:
  
    Tambahkan atribut `style` pada tag HTML langsung.
  - internal:
  
    Tambahkan tag `<style>` di dalam `<head>` HTML.
  - external:
  
    Buat file CSS terpisah (contoh: style.css) dan hubungkan dengan HTML menggunakan tag `<link>` dalam `<head>`.
- tergantung pada kebutuhan proyek dan preferensi.

Demikianlah ringkasan dari transkrip video ini.

## 2 struktur dasar css

- CSS memiliki tiga bagian dasar:
  - Selector
  
    digunakan untuk memilih elemen HTML yang akan diubah tampilannya.
  - kurung kurawal `{}`
  - Property
  
    adalah atribut yang akan diubah, seperti warna atau ukuran font.
- contoh

    ```css
    selector {
        property: nilai-property;
        property-1: nilai-property-1;
    }

    h2 {
        color: blue;
        font-size: 30px;
    }
    ```

## 3 selector id dan class

Selektor tidak terbatas pada tag HTML, dan ada cara yang lebih spesifik untuk memilih elemen.

- Ada dua atribut untuk memilih elemen:
  - Atribut `id`
    - digunakan untuk elemen spesifik
    - setiap elemen hanya memiliki satu `id` unik.
    - gunakan tanda pagar (#) diikuti dengan nama `id` (contoh: `#menu-web`).
  - Atribut `class`
    - digunakan untuk beberapa elemen dengan nama kelas yang sama.
    - gunakan tanda titik (.) diikuti dengan nama kelas (contoh: `.menu`).
- contoh

    ```css
    a {
        color: red;
    }
    
    #menu-web {
        color: red;
    }

    .menu {
        color: blue;
        font-size: 30px;
    }
    ```

## 4 background color

Cara menggunakan background color dalam CSS.

- 3 cara umum untuk menentukan warna dalam CSS:
  - Kata kunci warna (misalnya, `blue` atau `black`).
  - Hexadecimal color dengan format tanda pagar (#) diikuti oleh enam angka hexadecimal (contoh: `#dfdfdf`).
  - RGB color yang terdiri dari kombinasi red (merah), green (hijau), dan blue (biru) dalam angka (contoh: `rgb(255,0,0)` untuk merah).
- contoh

    ```css
    body {
        background-color: blue;
    }

    body {
        background-color: #dfdfdf;
    }
    
    body {
        background-color: rgb(255,0,0);
    }
    ```

## 5 background gambar

background image (gambar latar belakang) dalam CSS.

- Property `background-image`

    digunakan untuk menambahkan gambar sebagai latar belakang.

    Gambar dihubungkan dengan menggunakan nilai URL dalam tanda kutip.

    Jika gambar berada di folder yang sama, cukup tulis nama file gambar beserta formatnya.
- Property `background-repeat`

    digunakan untuk mengatur apakah gambar akan diulang (default) atau tidak (`no-repeat`).
- Property `background-attachment`

    dapat diatur sebagai `scroll` (default) atau `fixed` untuk mengendalikan apakah gambar bergerak saat menggulir halaman.
- Property `background-position`

    digunakan untuk menentukan posisi gambar latar belakang.

- Property `background`

    memungkinkan pengaturan warna, gambar, pengulangan, attachment, dan posisi background dalam satu baris.

- contoh

    ```css
    body {
        background-color: #dfdfdf;
        background-image: url("/folder/gambar.png");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: right top;
    }

    body {
        background: #dfdfdf url("/folder/gambar.png") no-repeat fixed right top;
    }
    ```

## 5.5 komentar

- ditulis dengan tanda `/* dan diakhiri dengan */`.
- digunakan untuk menambahkan catatan atau keterangan

    dalam kode CSS yang tidak akan tereksekusi.

## 6 text pada css

Mengubah tampilan teks dalam HTML.

- Property `color`

    digunakan untuk mengubah warna teks.
- Property `text-align`

    digunakan untuk mengatur posisi teks (contoh: `center` untuk tengah).
- Property `text-decoration`

    digunakan untuk menambahkan hiasan teks seperti garis bawah atau coretan tengah.
- Property `text-indent`

    digunakan untuk memberikan jarak pada awal teks.
- Property `text-transform`

    digunakan untuk mengubah tampilan huruf, seperti `uppercase` (huruf besar semua) atau `lowercase` (huruf kecil semua).
- Property `letter-spacing`

    digunakan untuk mengatur jarak antara huruf-huruf dalam teks.
- Property `line-height`

    digunakan untuk mengatur jarak antara baris teks.
- Property `word-spacing`

    digunakan untuk mengatur jarak antara kata-kata dalam teks.
- contoh

    ```css
    h1 {
        color: blue;
        text-align: center;
        text-decoration: underline;
    }

    h2 {
        text-align: center;
        text-transform: uppercase;
    }

    #text_panjang {
        text-align: justify;
        text-indent: 30px;
        letter-spacing: 2px;
        word-spacing: 10px;
        line-height: 10px;
    }
    ```

## 7 belajar font

Mengubah font teks dalam HTML.

- Property `font-size`

    digunakan untuk mengatur ukuran font teks.

    bisa pakai:

  - absolute size
  - relative size
- Property `font-family`

    digunakan untuk memilih jenis tulisan (font) yang digunakan, seperti `sans-serif` atau `serif.`
- Property `font-weight`

    digunakan untuk mengatur ketebalan font teks, dengan nilai mulai dari 100 hingga 900, dengan kelipatan 100 (misalnya, 100 untuk tipis dan 900 untuk tebal).
- contoh

    ```css
    body {
        font-family: sans-serif;
    }

    #text_pendek {
        font-size: 30px;
        font-weight: bold;
    }
    ```

## 8 menghias link

Cara menghias link.

- kita pakai selektor class untuk memilih link-nya.
- Ada empat kondisi link yang dapat diubah tampilannya:
  - Standar (default)
  
    bisa dengan tag `<a>` atau dengan menggunakan class `menu` pada html

    kemudian kita pakai selector `.menu:link`
  - Setelah dikunjungi (visited)

    kita pakai selector `.menu:visited`
  - Saat mouse berada di atasnya (hover)
  
    dengan selector `.menu:hover`
  - Saat sedang di-klik (active)
  
    dengan selector `.menu:active`
- contoh

    ```css
    .menu:link {
        background: grey;
        color: white;
    }

    .menu:visited {
        background: yellow;
    }

    .menu:hover {
        background: green;
    }

    .menu:active {
        background: red;
    }
    ```

## 9 dimensi elemen

Dimensi elemen dalam CSS, yaitu tinggi dan lebar suatu elemen.

- Property `width`

    untuk mengatur lebar elemen dengan satuan piksel (px) atau persentase (%).

- Property `height`

    untuk mengatur tinggi elemen dengan satuan piksel (px).

- Property `max-width` dan `max-height`

    untuk mengatur batasan maksimum lebar dan tinggi elemen.
- Biasanya tidak digunakan bersamaan,

    melainkan tergantung pada kasus penggunaan,

    seperti mengatur dimensi default dengan class dan kemudian memberikan batasan maksimum untuk elemen spesifik dengan ID.

- contoh

    ```css
    #text_pendek {
        font-size: 30px;
        font-weight: bold;
        background: yellow;
        width: 50%;
        height: 200px;
        max-width: 30%;
        max-height: 100px;
    }
    ```

## 10 display inline, block, dan inline-block

Properti `display` dalam CSS untuk mengatur sifat tampilan dari elemen HTML.

- Elemen HTML dapat memiliki tiga jenis tampilan:
  - `display: block`

    lebar-nya sepanjang browser dan elemen berikutnya berada di bawahnya.
  - `display: inline`
  
    menumpuk secara horizontal di sebelah kiri satu sama lain.
  - `display: inline-block`
  
    mirip dengan `display inline,` tetapi dapat memiliki tinggi dan lebar yang dapat diatur.
- contoh

    ```css
    h1 {
        color: blue;
        text-align: center;
        text-decoration: underline;
        display: inline;
    }

    h2 {
        text-align: center;
        text-transform: uppercase;
        display: inline;
    }

    a {
        /* tag default inline */
        display: block;
    }

    .menu {
        display: inline-block;
        width: 50px;
        height: 30px;
        text-decoration: none;
    }
    ```

## 11 menghilangkan elemen

- menghilangkan elemen dalam HTML:
  - secara langsung melalui HTML,

    kita dapat menghapus tag elemen tersebut dari kode HTML.
  - melalui CSS,
  
    kita menggunakan dua properti yang berbeda:

    - `visibility`

        Jika kita ingin menghilangkan elemen tetapi tetap mempertahankan ruangnya di tata letak,

        kita dapat menggunakan `visibility` dengan nilai `hidden.`

        Ini akan membuat elemen tetap ada di halaman tetapi tidak terlihat.
    - `display`

        Jika kita ingin sepenuhnya menghapus elemen, termasuk ruang yang ditempatinya,

        kita dapat menggunakan `display` dengan nilai `none`

        Ini akan menghapus elemen dari tampilan halaman dan menghilangkan ruang yang ditempatinya.

- contoh

    ```css
    #text_pendek {
        font-size: 30px;
        font-weight: bold;
        background: yellow;
        width: 50%;
        height: 200px;
        max-width: 30%;
        max-height: 100px;

        visibility: hidden;        
    }

    #text_panjang {
        text-align: justify;
        text-indent: 30px;
        letter-spacing: 2px;
        word-spacing: 10px;
        line-height: 10px;

        display: none;
    }
    ```

## 12 box model dan margin

konsep penting dalam HTML yang mengatur lebar dan tinggi elemen serta jarak antara elemen-elemen.

```text
                        Top
    ┌────────────────────────────────────────┐
    │ Margin                                 │
    │ ┌────────────────────────────────────┐ │
    │ │ Border                             │ │
    │ │ ┌────────────────────────────────┐ │ │
    │ │ │ Padding                        │ │ │
    │ │ │ ┌────────────────────────────┐ │ │ │
    │ │ │ │                          ▲ │ │ │ │
    │ │ │ │                          │ │ │ │ │
    │ │ │ │                          │ │ │ │ │
Left│ │ │ │          Content   Height│ │ │ │ │Right
    │ │ │ │                          │ │ │ │ │
    │ │ │ │           Width          │ │ │ │ │
    │ │ │ │◄─────────────────────────┘►│ │ │ │
    │ │ │ │                          ▼ │ │ │ │
    │ │ │ └────────────────────────────┘ │ │ │
    │ │ │                                │ │ │
    │ │ └────────────────────────────────┘ │ │
    │ │                                    │ │
    │ └────────────────────────────────────┘ │
    │                                        │
    └────────────────────────────────────────┘
                     Bottom
```

- Tiga komponen utama dalam box model:
  - Padding

    adalah jarak antara konten elemen dan batas elemen tersebut.

    Ini dapat diberikan pada empat sisi elemen dengan urutan `top`, `right`, `bottom`, `left`.

    Padding dapat ditentukan menggunakan properti CSS seperti `padding-top`, `padding-right`, `padding-bottom`, dan `padding-left.`
  - Border

    adalah garis yang mengelilingi elemen.

    biasanya digunakan untuk menggambar tepi elemen.

    Ini juga dapat diberikan pada empat sisi elemen

    Border dapat diatur dengan properti CSS seperti `border-width`, `border-style`, dan `border-color.`

    Properti-properti border juga dapat digabungkan dalam satu baris, seperti `border: 1px solid black.`
  - Margin

    adalah jarak antara elemen dengan elemen lainnya.

    Ini juga dapat diberikan pada empat sisi elemen dengan urutan `top`, `right`, `bottom`, `left`.

    Margin dapat ditentukan dengan menggunakan properti CSS seperti `margin-top`, `margin-right`, `margin-bottom`, dan `margin-left.`

## 14 posisi relative dan static

- Dalam CSS, kita dapat mengatur posisi elemen dengan berbagai properti posisi.
- Ada beberapa jenis posisi dalam CSS: static (default), relative, absolute, dan fixed.
- Static adalah posisi default di mana elemen mengikuti urutan di halaman HTML.
- Posisi relative memungkinkan kita untuk mengatur posisi elemen relatif terhadap posisi aslinya dengan menggunakan properti seperti `top,` `right,` `bottom,` dan `left.`
- Contohnya, dengan `position: relative; top: 50px; left: 20px;`, elemen akan bergeser 50 piksel ke bawah dan 20 piksel ke kiri dari posisi aslinya.
- Posisi relative berguna untuk mengatur elemen dalam konteks elemen lainnya tanpa memengaruhi elemen lain di halaman.

Catatan ini merangkum konsep posisi relative dan statik dalam CSS, serta cara menggunakannya untuk mengatur posisi elemen secara relatif terhadap posisi aslinya dalam halaman web.

## 15 posisi absolute

- Posisi absolute adalah salah satu properti CSS yang memungkinkan pengaturan posisi elemen dalam konteks elemen yang berisi elemen tersebut.
- Saat menggunakan posisi absolute, Anda dapat menggunakan properti seperti `top,` `left,` `bottom,` dan `right` untuk mengatur posisi elemen tersebut.
- Perbedaan penting antara posisi relative dan absolute adalah bahwa posisi absolute akan memengaruhi elemen-elemen lainnya. Ketika elemen diberi posisi absolute, elemen tersebut dianggap hilang dari konteks aslinya, dan elemen-elemen lain akan menggeser posisinya untuk mengisi ruang yang ditinggalkan oleh elemen tersebut.
- Ini berarti bahwa elemen-elemen yang sebelumnya berada di bawah elemen yang menggunakan posisi absolute akan naik ke atas untuk mengisi posisinya.
- Pemahaman yang baik tentang perbedaan antara posisi relative dan absolute sangat penting dalam desain web untuk menghindari efek yang tidak diinginkan pada tata letak elemen-elemen.

## 16 position fixed

- Pada property CSS `position,` terdapat nilai `fixed` yang memiliki karakteristik unik.
- Ketika elemen memiliki posisi `fixed,` posisinya akan bergantung sepenuhnya pada browser.
- Elemen dengan posisi `fixed` akan tetap berada pada posisi yang ditentukan, bahkan ketika halaman web di-scroll.
- Ini berbeda dengan posisi `absolute,` di mana elemen dengan posisi `absolute` akan tetap berada pada posisi yang ditentukan, tetapi dalam konteks elemen parentnya.
- Dalam contoh video, elemen H2 dengan posisi `fixed` memiliki jarak 100 piksel dari atas browser dan 20 piksel dari kiri browser, yang tidak akan berubah saat menggulir halaman.
- Perbedaan mendasar antara posisi `fixed` dan `absolute` adalah bahwa posisi `fixed` tergantung pada browser, sementara posisi `absolute` tergantung pada elemen parent.

## 17 posisi parent element

- `Parent element` adalah elemen yang berada di atas elemen lain dalam struktur HTML.
- Contoh sederhana adalah elemen H1 dalam div, di mana div adalah `parent element` untuk H1.
- Pengaruh `parent element` pada posisi elemen dapat diilustrasikan dengan mengubah posisi elemen H1 dan H2.
- Ketika posisi elemen H1 diubah menjadi `absolute` dan `parent element` H1 diubah menjadi `relative,` elemen H1 akan memiliki jarak 100 piksel dari atas `parent element`-nya (div).
- Pada posisi `absolute,` elemen tersebut tergantung pada `parent element` dalam hal posisi.
- Jika `parent element` dari elemen `fixed,` elemen tersebut akan tetap tergantung pada browser dan tidak akan dipengaruhi oleh jarak `parent element.`
- Posisi `relative` akan tergantung pada browser dan tidak akan dipengaruhi oleh `parent element.`
- Kesimpulannya, posisi `absolute` tergantung pada `parent element,` sementara posisi `fixed` tergantung pada browser, kecuali jika `parent element` tersebut memiliki posisi `relative.`

Semua ini adalah contoh penting bagaimana `parent element` dapat memengaruhi posisi elemen dalam CSS.

## 18 z index pada css

- Z-index adalah properti CSS yang memungkinkan pengaturan tumpukan elemen dalam hal posisi tampilan.
- Secara default, elemen-elemen ditumpuk berdasarkan urutan mereka dalam kode HTML, di mana elemen terakhir akan berada di atas elemen-elemen sebelumnya.
- Dengan Z-index, Anda dapat mengontrol elemen mana yang akan tampil di depan atau di belakang elemen lain.
- Nilai Z-index yang lebih besar akan membuat elemen tersebut muncul lebih depan dalam tampilan.
- Nilai Z-index yang lebih kecil akan membuat elemen tersebut muncul lebih belakang dalam tampilan.
- Anda dapat menggunakan Z-index dengan elemen-elemen CSS seperti H1 dan H2 untuk mengubah urutan tampilan.
- Menggunakan Z-index dengan baik dapat membantu dalam pembuatan animasi dan efek tampilan yang menarik di situs web Anda.

Dengan menguasai Z-index, Anda dapat memiliki kendali lebih besar dalam mengatur tampilan elemen-elemen dalam halaman web Anda, yang dapat digunakan untuk menciptakan efek-efek visual yang menarik.

## 19 float dan clear

- Teknik `float` adalah cara untuk mengatur posisi elemen-elemen HTML sehingga elemen berikutnya akan mengisi konten di sebelahnya.
- Ada dua jenis `float` yang dapat digunakan: `float left` (mengapung ke kiri) dan `float right` (mengapung ke kanan).
- Contoh penggunaan `float` adalah mengapungkan elemen `table` ke kiri atau ke kanan sehingga elemen-elemen berikutnya mengisi sisi kosongnya.
- Anda dapat mengatur margin pada elemen yang di-`float` untuk memberikan jarak di sekelilingnya.
- Untuk menghilangkan efek `float` pada elemen berikutnya, Anda dapat menggunakan properti `clear`. Nilai-nilai yang dapat digunakan adalah `left` (menghilangkan efek `float` dari elemen-elemen yang mengapung ke kiri), `right` (menghilangkan efek `float` dari elemen-elemen yang mengapung ke kanan), atau `both` (menghilangkan efek `float` dari kedua sisi).
- Penggunaan `clear` pada elemen akan menghilangkan efek `float` ke elemen berikutnya dan membuat elemen berikutnya memulai baris baru.

Dengan menguasai teknik `float` dan `clear,` Anda dapat mengatur tampilan elemen-elemen HTML secara lebih fleksibel dan membuat desain yang lebih menarik untuk halaman web Anda.

## 20 masih tentang float

- Dalam pengaturan tampilan halaman web, Anda dapat menggunakan teknik `float` untuk mengatur posisi elemen-elemen HTML sehingga elemen berikutnya akan mengisi sisi kosong di sebelahnya.
- Untuk membagi konten secara merata, Anda dapat memberikan properti `float: left;` pada elemen-elemen yang ingin diatur.
- Untuk menghilangkan jarak dan padding pada elemen-elemen yang di-`float,` Anda dapat mengatur margin dan padding menjadi 0.
- Untuk memastikan bahwa elemen-elemen yang mengikuti elemen yang di-`float` tidak ikut terpengaruh oleh efek `float,` Anda dapat menggunakan properti `clear: both;` pada elemen tersebut.
- Penggunaan `float` adalah salah satu teknik yang sering digunakan dalam pengaturan layout halaman web, seperti mengatur posisi menu, konten, dan sidebar pada sebuah blog.
- Teknik `float` memungkinkan Anda untuk merancang tampilan halaman web secara lebih fleksibel dan sesuai dengan kebutuhan desain Anda.

## 21 selektor bagian kedua

- Ada berbagai cara untuk memilih elemen-elemen dalam CSS, dan dalam video ini, beberapa konsep selektor penting dibahas.
- Anda dapat memilih beberapa elemen sekaligus dengan memisahkan mereka dengan tanda koma. Misalnya, untuk memilih H1 dan H2, gunakan `H1, H2 { properti: nilai; }`.
- Anda bisa memilih elemen yang berada di bawah elemen tertentu dengan menggunakan format `elemen1 elemen2` tanpa spasi. Misalnya, `div A { properti: nilai; }` memilih elemen A yang berada di bawah elemen div.
- Anda juga dapat memilih elemen yang langsung berada di bawah elemen tertentu dengan menggunakan `elemen1 > elemen2`. Misalnya, `div > A { properti: nilai; }` memilih elemen A yang langsung berada di bawah elemen div.
- Untuk memilih elemen yang berada setelah elemen tertentu, gunakan `~` di antara elemen. Misalnya, `div ~ P { properti: nilai; }` akan memilih semua elemen P yang ada setelah elemen div.
- Selektor tilde (~) hanya memengaruhi elemen yang berada di bawahnya, bukan elemen yang ada sebelumnya.
- Dalam kasus pemilihan elemen, urutan elemen dalam HTML sangat penting, dan pemilihan elemen dapat disesuaikan sesuai dengan tata letak dan struktur halaman web.

## 22 referensi selektor

- Ada banyak kemungkinan selektor atau cara memilih elemen dalam CSS.
- Referensi yang disebutkan adalah `w3schools.com/cssref/css_selectors.asp`, di mana Anda dapat menemukan berbagai macam selektor CSS dan contoh penggunaannya.
- Salah satu contoh yang dibahas adalah `first-child` selector, yang memilih elemen yang menjadi anak pertama dari elemen lain. Contoh: `p:first-child` akan memilih semua elemen `<p>` yang menjadi anak pertama di dalam elemen lain.
- Penggunaan selektor CSS sangat beragam, termasuk berdasarkan posisi, urutan, atribut, dan banyak lagi.
- Tidak ada batasan dalam mencoba berbagai macam selektor CSS untuk mencapai tampilan dan tata letak yang diinginkan dalam desain web.
- Referensi ini adalah sumber yang berguna untuk memahami dan menguasai berbagai jenis selektor dalam CSS.

## 23 hover dan focus

- Dalam video ini, dua selektor CSS dibahas: hover dan focus.
- Hover adalah keadaan ketika mouse berada pada elemen tertentu. Ini memungkinkan perubahan tampilan elemen saat mouse mengarah ke atasnya.
- Ada dua cara menggunakannya: mengubah elemen itu sendiri saat dihover atau mengubah elemen lain saat elemen yang dihover berada dalam konteks yang tepat.
- Untuk mengubah elemen itu sendiri saat dihover, gunakan notasi `elemen:hover` dan tentukan perubahan yang diinginkan, seperti mengubah warna teks.
- Untuk mengubah elemen lain saat elemen yang dihover berada dalam konteks yang tepat, gunakan notasi `elemen1:hover + elemen2`. Ini mengubah elemen2 saat elemen1 dihover.
- Focus adalah keadaan ketika elemen mendapatkan fokus, seperti inputan teks saat diklik atau diberikan fokus melalui perangkat bantu. Ini memungkinkan perubahan tampilan elemen saat fokus diberikan.
- Focus digunakan dengan notasi `elemen:focus` dan memungkinkan perubahan tampilan elemen saat fokus aktif, seperti mengubah warna latar belakang inputan teks saat diklik.
- Anda juga dapat menggunakan ID atau class untuk memilih elemen tertentu yang ingin diberikan efek hover atau focus.
- Contoh penggunaan hover dan focus adalah mengubah warna teks atau latar belakang elemen saat interaksi pengguna terjadi.
- Penggunaan hover dan focus adalah teknik yang berguna dalam perancangan tampilan interaktif pada halaman web.
