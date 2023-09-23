# Belajar HTML untuk Pemula - part 1

## Belajar HTML untuk pemula - intro

1. HTML

    Hypertext Markup Language

    merupakan struktur dasar dari sebuah website.
2. Fungsi HTML:

    pembuatan elemen-elemen dalam website, termasuk tulisan, gambar, video, dan formulir.
3. Alat yang Diperlukan, yaitu:
    1. Text Editor:

        Text Editor digunakan untuk menulis kode HTML
    2. Browser:

        Browser seperti Google Chrome, Firefox, dan Internet Explorer digunakan untuk melihat hasil dari kode HTML

## 1 file html pertama

membuat file HTML pertama.

cara membuat, menyimpan, dan melihat hasilnya di browser.

**Disarankan pakai Text Editor**.

**Pilih Text Editor yang kita sukai**. dalam hal ini vscode

1. Buat File HTML, contohnya `index.html`
2. Simpan File `index.html` dengan format HTML.

    Ini dilakukan dengan mengeklik Ctrl + S atau Command + S.
3. Buka File `index.html` dengan browser.

## 2 Berkenalan dengan tag html

1. Pengenalan: Video ini membahas aturan-aturan dasar HTML, khususnya mengenai elemen-elemen HTML, tag pembuka, isi, dan tag penutup.

2. Elemen HTML:

    HTML terdiri dari elemen-elemen HTML,

    Elemen HTML ini terdiri dari tag pembuka, isi, dan tag penutup.

    ```html
    <tag pembuka> isi </tag penutup>
    ```

    tag html memberitahu fungsi dari elemen tersebut.

3. Tag HTML Utama `<html></html>`:

    Seluruh konten HTML harus ditempatkan dalam tag HTML.

    ```html
    <html>

    </html>
    ```

4. Tag Head:

    Tag head berisi informasi-informasi tentang website, seperti judul.

    Untuk menambahkan judul, digunakan tag title.

    ```html
    <html>
        <head>
            <title>Judul</title>
        <head>
    </html>
    ```

    Informasi dalam tag head tidak muncul pada halaman web.
5. Tag Body:

    Tag body berisi konten yang akan ditampilkan pada halaman web.

    ```html
    <html>
        <head>
            <title>Judul</title>
        <head>
        <body>
            Test body
        </body>
    </html>
    ```

## 3 heading dan paragraf

1. Tag heading:

    digunakan untuk menandai bagian-bagian penting atau judul-judul utama di dalam konten.
2. Tag `<h1>`:

    adalah salah satu tag heading yang digunakan untuk judul utama atau bagian yang paling penting

3. Tag `<h2>` sampai `<h6>`:

    Selain `<h1>`, ada lagi `<h2>` sampai `<h6>`.

    Masing-masing memiliki tingkat kepentingan, format, dan ukuran teks yang berbeda,

    dengan H1 sebagai yang paling penting dan H6 sebagai yang paling rendah.

4. Contoh Penggunaan Tag Heading:

    penggunaan tag H2 untuk subjudul dari judul utama.

    ```html
    <html>
        <head>
            <title>Judul</title>
        <head>
        <body>
            <h1>Judul h1</h1>
            <h2>Judul h2</h2>
            <h3>Judul h3</h3>
            <h4>Judul h4</h4>
            <h5>Judul h5</h5>
            <h6>Judul h6</h6>
        </body>
    </html>
    ```

    Ini membantu dalam merancang tampilan dan hierarki konten.
5. Tag Paragraph `<p>`:

    Tag paragraph digunakan untuk menandai paragraf atau teks biasa dalam dokumen HTML.

6. Contoh Penggunaan Tag Paragraph:

    penggunaan tag paragraf untuk menulis teks biasa, seperti "Selamat datang di website sekolahkoding."

    ```html
    <html>
        <head>
            <title>Judul</title>
        <head>
        <body>
            <h1>Judul h1</h1>
            <h2>Judul h2</h2>
            <h3>Judul h3</h3>
            <h4>Judul h4</h4>
            <h5>Judul h5</h5>
            <h6>Judul h6</h6>

            <p>Selamat datang di website sekolahkoding.</p>
        </body>
    </html>
    ```

7. Penggunaan yang Fleksibel:

    Penggunaan tag heading dan paragraf bisa sangat fleksibel sesuai dengan konten yang ingin ditampilkan.

    Tidak ada aturan yang ketat tentang pemilihan tag tertentu, dan

    penggunaan bergantung pada kebutuhan spesifik.

## 4 membuat link

1. Untuk membuat tautan atau link dalam HTML, kita bisa menggunakan tag `<a>` (anchor).

2. Atribut:

    tidak cukup dengan tag `<a>` saja, diperlukan atribut dalam tag `<a>`.

    Atribut ini memberikan informasi tambahan tentang link tersebut.

    Atribut ditulis dalam format `nama-atribut="nilai-atribut"`.

    untuk memisahkan atribut, kita beri spasi di antara 2 atribut

    untuk tag `<a>`, ada beberapa atribut yang bisa diberikan:

    1. atribut `href`:

        digunakan untuk menentukan URL atau alamat tujuan link.

    2. atribut `target`:

        digunakan untuk mengatur apakah link akan membuka halaman tujuan di tab yang sama atau tab baru.

        Contohnya penggunaan "_blank" dalam atribut "target" mengindikasikan pembukaan di tab baru.

3. Menambahkan Teks ke Link:

    setelah itu kita isi teks di dalam tag `<a>`,

    agar Link memiliki teks yang dapat diakses oleh orang lain.

4. Contohnya Penggunaan tag `<a>`

    ```html
    <html>
        <head>
            <title>Judul</title>
        <head>
        <body>
            <h1>Judul h1</h1>
            <h2>Judul h2</h2>

            <p>Selamat datang di website sekolahkoding.</p>

            <a href="https://facebook.com">Tab sama ke Facebook</a>
            <a href="https://twitter.com" target="_blank">Tab baru ke Twitter</a>
        </body>
    </html>
    ```

5. Warna dan Gaya:

    Di browser kita bisa lihay bahwa HTML secara otomatis mengenali tautan dan

    memberi tanda dengan warna biru atau ungu serta garis bawah.

    Penyetingan warna dan gaya teks tautan akan dibahas lebih lanjut menggunakan CSS di masa mendatang.

## 5 menampilkan gambar

1. Untuk menampilkan gambar dalam HTML, kita bisa menggunakan tag `<img>`.
2. Penggunaan Gambar:

    Untuk menampilkan gambar dalam HTML, gambar tersebut perlu tersedia.

    Nama dan format gambar serta direktori gambar yang ada harus sesuai dengan yang akan digunakan dalam kode HTML.
3. Format Gambar:

    bisa berupa PNG, JPG, atau JPEG, dan tidak terbatas pada salah satu format tertentu.
4. Tag `<img>`:

    Tag gambar dalam HTML adalah `<img>`.

    Tidak ada tag penutup untuk tag `<img>` ini, karena itu adalah format default.
5. Atribut:

    untuk tag `<img>`, ada beberapa atribut yang bisa diberikan:
    1. Atribut `src` (source):

        atribut paling penting

        digunakan untuk menentukan sumber gambar yang akan ditampilkan.

        Pada video ini, gambar berada dalam folder yang sama dengan halaman HTML, sehingga hanya perlu menentukan nama file gambar (contoh: coding.png).

        atau kita bisa ambil gambar dari internet dengan mencantum kan link gambarnya
    2. atribut `height` dan `width`:

        digunakan untuk mengatur ukuran gambar, masing-masing `tinggi` dan `lebar`

        Misalnya, `height="100"` dan `width="100"` akan mengubah ukuran gambar menjadi lebih kecil.

        tanpa atribut ini, gambar akan otomatis muncul di halaman sesuai dengan ukuran aslinya.
    3. atribut `alt`:

        digunakan untuk memberikan teks alternatif yang mewakili gambar.

        Ini penting dan berguna ketika gambar tidak dapat ditampilkan, seperti ketika internet lambat atau untuk pengguna yang menggunakan pembaca layar.

        misalnya, `alt="Sekolah Coding"`

6. Contohnya Penggunaan tag `<a>`

    ```html
    <html>
        <head>
            <title>Judul</title>
        <head>
        <body>
            <h1>Judul h1</h1>
            <h2>Judul h2</h2>

            <p>Selamat datang di website sekolahkoding.</p>

            <a href="https://facebook.com">Tab sama ke Facebook</a>
            <a href="https://twitter.com" target="_blank">Tab baru ke Twitter</a>

            <img src="coding.png" alt="Sekolah Coding" height="100" width="100">
        </body>
    </html>
    ```

## 6 belajar iframe

1. Untuk mengambil dan menampilkan halaman web tertentu di dalam halaman web atau situs kita sendiri, kita bisa menggunakan tag `<iframe>` dalam HTML.
2. Tag `<iframe>`:

    Untuk menampilkan halaman web eksternal di dalam halaman web kita, kita perlu menggunakan tag `<iframe>`.

    Tag ini memiliki tag pembuka dan tag penutup, namun kontennya tidak ditulis di antara tag tersebut seperti pada beberapa tag lain dalam HTML.

    ukuran konten `<iframe>` akan sesuai dengan ukuran `<iframe>` tersebut
3. Atribut:

    untuk tag `<iframe>`, ada beberapa atribut yang bisa diberikan:
    1. Atribut `src` (source):

        atribut paling penting

        digunakan untuk menentukan URL atau alamat web halaman yang akan ditampilkan.

        Pada video ini misalnya, `src="https://sekolahkoding.com"`.

        atau kita bisa ambil gambar dari internet dengan mencantum kan link gambarnya
    2. atribut `height` dan `width`:

        digunakan untuk mengatur ukuran `<iframe>`

        Misalnya, `height="500"` dan `width="500"` akan mengubah ukuran `<iframe>` menjadi lebih besar.

        tanpa atribut ini, `<iframe>` akan otomatis muncul di halaman sesuai dengan ukuran defaultnya.

4. Pentingnya Izin Akses:

    Harap diperhatikan bahwa tidak semua situs web dapat diambil dan ditampilkan dalam `<iframe>` secara langsung.

    Beberapa situs web memerlukan izin khusus atau pengaturan tambahan untuk mengizinkan penanaman dalam `<iframe>`.

    Oleh karena itu, ada kasus di mana `<iframe>` mungkin tidak dapat digunakan untuk situs web tertentu.

5. Contohnya Penggunaan tag `<iframe>`

    ```html
    <html>
        <head>
            <title>Judul</title>
        <head>
        <body>
            <h1>Judul h1</h1>
            <h2>Judul h2</h2>

            <p>Selamat datang di website sekolahkoding.</p>

            <a href="https://facebook.com">Tab sama ke Facebook</a>
            <a href="https://twitter.com" target="_blank">Tab baru ke Twitter</a>

            <img src="coding.png" alt="Sekolah Coding" height="100" width="100">

            <iframe src="https://sekolahkoding.com" height="500" width="500"></iframe>
        </body>
    </html>
    ```

## 7 mengubah format text

1. Mengubah format teks dalam dokumen HTML.

2. Referensi ke Sumber Eksternal:

    "w3schools.com" untuk melihat daftar lengkap format teks yang dapat digunakan dalam HTML.
3. Teks Tebal (Bold):

    kita dapat menggunakan tag `<b>` (bold).

    Sebuah contoh paragraf yang digunakan dalam video dibuat tebal dengan mengelilinginya dengan tag `<b>`. Ini menghasilkan teks yang lebih tebal.
4. Format Teks Miring (Italic):

    kita dapat menggunakan tag `<i>`.

    Sebuah contoh dalam video menunjukkan teks yang diubah menjadi miring dengan tag ini.
5. Format Teks Penekanan (Emphasize):

    kita dapat menggunakan tag `<em>` dapat digunakan.

    Sebuah contoh dalam video menunjukkan penggunaan tag `<em>` untuk menghasilkan teks yang ditekankan.
6. Format Teks Lainnya:

    tag `<small>` untuk membuat teks menjadi lebih kecil,

    tag `<strong>` untuk membuat teks penting,

    tag `<sub>` untuk membuat teks subskrip,

    tag `<sup>` untuk membuat teks superskrip,

    tag `<ins>` untuk yang sudah disisipkan

    tag `<del>` untuk yang sudah dihapus

    tag `<mark>` untuk menyorot teks dengan warna tertentu menggunakan.

    kita bisa bereksperimen dengan berbagai format teks yang tersedia.

7. Contoh mengubah format text

    ```html
    <html>
        <head>
            <title>Judul</title>
        <head>
        <body>
            <h1>Judul h1</h1>
            <h2>Judul h2</h2>

            <p>Selamat datang di website sekolahkoding.</p>

            <a href="https://facebook.com">Tab sama ke Facebook</a>
            <a href="https://twitter.com" target="_blank">Tab baru ke Twitter</a>

            <img src="coding.png" alt="Sekolah Coding" height="100" width="100">

            <iframe src="https://sekolahkoding.com" height="500" width="500"></iframe>

            <p>kita akan <em>belajar</em> cara format <i>text</i> pada <b>html<b>.</p>
            
        </body>
    </html> 
    ```

## 8 perbedaan element block dan inline

1. tiga tag HTML baru, yaitu:
    1. Tag `<br>`:

        digunakan untuk memberi jarak atau membuat baris baru dalam teks.

        tidak memiliki tag penutup, dan penggunaannya akan menghasilkan jarak yang sesuai dalam teks.

        Beberapa tag `<br>` dapat digunakan untuk membuat jarak yang lebih besar.

    2. Tag `<div>`:

        digunakan untuk membuat divisi atau bagian-bagian dalam dokumen HTML.

        umumnya digunakan untuk mengelompokkan elemen-elemen HTML untuk keperluan pemformatan dan layout.

        `<div>` tidak memiliki tampilan visual yang terlihat, tetapi digunakan untuk tujuan struktural.

    3. Tag `<span>`:

        digunakan untuk mengelompokkan elemen-elemen HTML, tetapi berbeda dari `<div>`.

        merupakan elemen `inline`, yang berarti elemen-elemen di dalamnya akan tetap dalam satu baris dalam teks, tanpa memberikan jarak tambahan.

        Ini digunakan ketika Anda ingin mengelompokkan elemen dalam satu baris, seperti teks yang ditekankan.

2. Perbedaan Block dan Inline Elements:

    1. Elemen block secara otomatis akan mengambil lebar penuh viewport atau browser, menjadikannya elemen yang memulai baris baru.

        Beberapa contoh elemen block termasuk `<div>` dan `<h1>`

    2. Elemen inline, di sisi lain, akan tetap dalam satu baris dengan elemen lain yang ada di sekitarnya dalam teks.

        elemen inline mencakup `<a>` dan `<span>`

    Hal ini membantu kita memahami cara elemen HTML berinteraksi dalam hal tata letak dan tampilan.

3. Pentingnya Penggunaan Elemen `<div>` dan `<span>`:

    meskipun elemen `<div>` dan `<span>` mungkin tidak terlalu berguna dalam kasus sederhana,

    mereka sangat berguna ketika dokumen HTML lebih kompleks, terutama ketika menggunakan CSS untuk mengatur tampilan dan tata letak.

4. Contoh mengubah format text

    ```html
    <html>
        <head>
            <title>Judul</title>
        <head>
        <body>
            <div>
                <h1>Judul h1</h1>
                <h2>Judul h2</h2>
            </div>

            <p>Selamat datang di website sekolahkoding.</p>

            <a href="https://facebook.com">Tab sama ke Facebook</a>
            <a href="https://twitter.com" target="_blank">Tab baru ke Twitter</a>

            <img src="coding.png" alt="Sekolah Coding" height="100" width="100">

            <iframe src="https://sekolahkoding.com" height="500" width="500"></iframe>

            <p>kita akan <em>belajar</em> cara format <i>text</i> pada <b>html<b>.</p>

            <p>kembali lagi dengan <br> tag `br`.</p>

            <div>
                <h1>Judul h1 <div>di dalam div</div></h1>
                <h2>Judul h2 <span>di dalam span<span></h2>
            </div>
        </body>
    </html> 
    ```

## 9 doctype html

1. HTML Versi-variasi:

    Versi terbaru yang dibahas dalam video ini adalah HTML5.

    Setiap versi HTML memiliki aturan dan fitur-fitur tertentu yang berbeda.
2. Deklarasi HTML:

    Untuk memberi tahu browser versi HTML mana yang akan digunakan dalam suatu dokumen HTML, diperlukan deklarasi.

    Ini penting karena browser memerlukan informasi ini untuk merender halaman web dengan benar sesuai dengan standar versi HTML yang digunakan.

3. Deklarasi HTML5 yang Simpel:

    Untuk mendeklarasikan penggunaan HTML5, kita hanya perlu menambahkan tag berikut di bagian paling atas dokumen HTML dengan `<!DOCTYPE html>`

    Dibandingkan dengan versi HTML sebelumnya, Versi-versi sebelumnya memiliki deklarasi yang lebih kompleks.

4. Contoh doctype html

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Judul</title>
        <head>
        <body>
            <div>
                <h1>Judul h1</h1>
                <h2>Judul h2</h2>
            </div>

            <p>Selamat datang di website sekolahkoding.</p>

            <a href="https://facebook.com">Tab sama ke Facebook</a>
            <a href="https://twitter.com" target="_blank">Tab baru ke Twitter</a>

            <img src="coding.png" alt="Sekolah Coding" height="100" width="100">

            <iframe src="https://sekolahkoding.com" height="500" width="500"></iframe>

            <p>kita akan <em>belajar</em> cara format <i>text</i> pada <b>html<b>.</p>

            <p>kembali lagi dengan <br> tag `br`.</p>

            <div>
                <h1>Judul h1 <div>di dalam div</div></h1>
                <h2>Judul h2 <span>di dalam span<span></h2>
            </div>
        </body>
    </html> 
    ```

## 10 komentar pada html

1. Komentar pada HTML:

    digunakan untuk memberikan informasi tambahan atau penjelasan yang tidak akan ditampilkan kepada pengguna akhir, tetapi bermanfaat bagi pengembang atau tim pengembangan, seperti:

    - Memahami old code
    - komunikasi antar anggota tim
    - menambahkan informasi pembuat kode, tanggal pembuatan, dan riwayat perubahan

    dapat ditempatkan di mana saja dalam kode HTML, tetapi mereka biasanya ditempatkan di bagian atas dokumen HTML atau di sekitar bagian kode yang dianggap penting atau rumit.

    hanya ditampilkan dalam kode sumber halaman web

2. Format Komentar HTML:

    Komentar dalam HTML ditulis dengan format yang unik. Ini dimulai dengan `<!--, diikuti dengan isi komentar, dan diakhiri dengan -->`.

3. Contoh komentar pada html

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Judul</title>
        <head>
        <body>
            <div>
                <h1>Judul h1</h1>
                <h2>Judul h2</h2>
            </div>

            <p>Selamat datang di website sekolahkoding.</p>

            <a href="https://facebook.com">Tab sama ke Facebook</a>
            <a href="https://twitter.com" target="_blank">Tab baru ke Twitter</a>

            <img src="coding.png" alt="Sekolah Coding" height="100" width="100">

            <iframe src="https://sekolahkoding.com" height="500" width="500"></iframe>

            <p>kita akan <em>belajar</em> cara format <i>text</i> pada <b>html<b>.</p>

            <p>kembali lagi dengan <br> tag `br`.</p>

            <div>
                <h1>Judul h1 <div>di dalam div</div></h1>
                <h2>Judul h2 <span>di dalam span<span></h2>
            </div>

            <!-- Ini adalah contoh komentar HTML -->
        </body>
    </html> 
    ```
