# Belajar HTML untuk Pemula - part 2

## 11 membuat halaman lebih dari satu

1. Membuat lebih dari satu halaman dan menghubungkannya untuk meningkatkan daya tarik.
2. Caranya:
    1. Membuat file html baru, misalnya `kontak.html`
    2. Hubungkan file html baru dengan file html utama

        misalnya, `kontak.html` dengan `index.html`

        dengan cara:
         1. membuat menu navigasi di `index.html` dengan tag `div`
         2. Menambahkan Link dengan menggunakan tag `<a>` dengan atribut href yang sesuai.

        Untuk mengakses file dalam folder tertentu, gunakan subfolder dan jalur relatif yang tepat.

        Perhatikan penggunaan `../` untuk mengakses folder sebelumnya.

3. Contoh membuat halaman lebih dari satu

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Home</title>
        <head>
        <body>
            <div>
                Menu
                <a href="kontak.html">Kontak</a>
                <a href="subfolder/tabel.html">Tabel</a>
            </div>

            <div>
                <h1>Home h1</h1>
                <h2>subjudul h2</h2>
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

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Kontak</title>
        <head>
        <body>
            <div>
                Menu
                <a href="index.html">Home</a>
                <a href="subfolder/tabel.html">Tabel</a>
            </div>

            <div>
                <h1>Kontak h1</h1>
                <h2>subjudul h2</h2>
            </div>
        </body>
    </html> 
    ```

## 12 table html

1. Tabel HTML terdiri dari sel-sel tabel di dalam baris dan kolom.
2. Untuk membuat tabel HTML, kita menggunakan tag `<table>` untuk menandai awal dan akhir tabel.

    Jika ingin menampilkan garis-garis pemisah antar sel, tambahkan atribut "border" pada tag `<table>` dengan nilai ketebalan garis (misalnya, "1" untuk garis tipis).

3. Baris:

    Setiap baris dalam tabel dimulai dengan tag `<tr>` (table row), dan pastikan untuk menutupnya setelah selesai.
4. Kolom:

    Untuk menambah kolom, gunakan tag `<td>` (table data) untuk masing-masing sel dalam baris. Pastikan setiap sel ditutup.

5. Tabel Head:

    kita dapat menggunakan tag `<th>` (table header) untuk elemen yang ingin digunakan sebagai judul.

    secara otomatis akan memformat teks judul sebagai tebal.
6. Keterangan:

    Jika kita ingin menambahkan keterangan tentang tabel, kita dapat menggunakan tag `<caption>` setelah tag `<table>`.

7. Contoh tabel:

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Tabel</title>
        <head>
        <body>
            <div>
                Menu
                <a href="../index.html">Home</a>
                <a href="../kontak.html">Kontak</a>
            </div>

            <div>
                <h1>Tabel h1</h1>
                <h2>subjudul h2</h2>
            </div>

            <table border="1">
                <caption>Daftar Nilai Murid</caption>
                <tr>
                    <th>Nama Murid</th>
                    <th>Nilai</th>
                </tr>
                <tr>
                    <td>Emil</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Tobias</td>
                    <td>9</td>
                </tr>
            </table> 
        </body>
    </html>
    ```

## 13 list html

1. selain tabel, kita juga dapat membuat daftar (list) untuk menampilkan data.

    Terdapat tiga jenis list, yaitu:

    1. Unordered List (List Tidak Berurutan):

        gunakan tag `<ul>` dan tutup dengan `</ul>`.

        Setiap item dalam list dimulai dengan `<li>` dan ditutup dengan `</li>`.

    2. Ordered List (List Berurutan):

        Gunakan tag `<ol>` dan tutup dengan `</ol>`.

        Setiap item dimulai dengan `<li>` dan ditutup dengan `</li>`.

        Ordered list secara otomatis memberikan nomor kepada setiap itemnya.

        Nomor dalam list dapat berupa angka, huruf, atau simbol lain, tergantung pada jenisnya.

    3. Data List:

        jarang digunakan dan cocok untuk situasi di mana setiap item list memiliki deskripsi tersendiri.

        Gunakan tag `<dl>` untuk memulai data list, dan setiap elemen list dimulai dengan `<dt>` (data term) dan ditutup dengan `<dd>` (data description).

2. Contoh tabel:

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Tabel</title>
        <head>
        <body>
            <div>
                Menu
                <a href="../index.html">Home</a>
                <a href="../kontak.html">Kontak</a>
            </div>

            <div>
                <h1>Tabel h1</h1>
                <h2>subjudul h2</h2>
            </div>

            <table border="1">
                <caption>Daftar Nilai Murid</caption>
                <tr>
                    <th>Nama Murid</th>
                    <th>Nilai</th>
                </tr>
                <tr>
                    <td>Emil</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Tobias</td>
                    <td>9</td>
                </tr>
            </table>

            <!-- list -->
            <ul>
                <li>Emil</li>
                <li>Tobias</li>
            </ul>

            <ol>
                <li>Emil</li>
                <li>Tobias</li>
            </ol>

            <dl>
                <dt>Emil</dt>
                <dd>10</dd>

                <dt>Tobias</dt>
                <dd>9</dd>
            </dl>
        </body>
    </html>
    ```

## 14 charset dan entities

1. Karakter Set (Charset):

    adalah standar karakter, huruf, simbol, dan angka yang digunakan dalam halaman HTML.

    Dalam HTML5, charset dapat ditentukan dengan menggunakan tag `<meta charset="UTF-8">` yang ditempatkan di dalam tag `<head>`.

2. Entities:

    adalah simbol-simbol yang tidak tersedia pada keyboard dan simbol-simbol yang telah digunakan oleh HTML.

    Entities selalu dimulai dengan karakter "&" dan diakhiri dengan titik koma ";".

    Kontennya bervariasi sesuai dengan simbol yang ingin ditampilkan.

    Contohnya,
    - `&nbsp;` digunakan untuk menampilkan spasi non-breaking.
    - `&copy;` untuk tanda hak cipta (copyright symbol).
    - dan banyak lagi bisa dilihat di [w3schools](https://www.w3schools.com/html/html_entities.asp) dan [oinam](https://oinam.github.io/entities/)

    Selain menggunakan entity name, kita juga dapat menggunakan entity number sebagai alternatif.

    Contohnya,
    - `&#169;` digunakan untuk menampilkan simbol hak cipta.

3. Contoh charset dan entities

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Home</title>
            <meta charset="UTF-8">
        <head>
        <body>
            <div>
                Menu
                <a href="kontak.html">Kontak</a>
                <a href="subfolder/tabel.html">Tabel</a>
            </div>

            <div>
                <h1>Home h1</h1>
                <h2>subjudul h2</h2>
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
            
            <br>
            <p>entities</p>

            <p>&nbsp;&nbsp;&nbsp;&nbsp; non-breaking space</p>
            <p>&copy; szczynk</p>
        </body>
    </html> 
    ```

Catatan ini merangkum informasi penting dari transkrip video tentang charset, symbol, dan entities dalam HTML, termasuk bagaimana menggunakannya dalam konteks pembuatan halaman web.

## 15 form, text, dan textarea

1. formulir (form) pada HTML:
    tempat untuk berbagai input

    kita bisa pake tag `<form>`

    digunakan untuk memungkinkan mengirim input.

2. Form Element:
    - input text `<input type="text">`:

        digunakan untuk input data yang bersifat singkat, seperti nama.

    - textarea `<textarea>`:

        digunakan untuk input data multi-line yang lebih panjang, seperti pesan atau biodata.

        kita dapat mengatur ukuran textarea menggunakan atribut `cols` (jumlah kolom) dan `rows` (jumlah baris).

        Misalnya, `<textarea cols="7" rows="100">`

    - Checkbox `<input type="checkbox">`:

        digunakan untuk input satu atau lebih opsi / centang

        atribut `name` boleh sama agar mudah dikelompokkan

        atribut `value` harus beda nilainya

        atribut `checked` dapat digunakan untuk mengatur bahwa opsi tertentu sudah terpilih secara default saat halaman dimuat.

    - Radio Button `<input type="radio">`:

        digunakan untuk input satu opsi / centang

        atribut `name` harus sama

        atribut `value` harus beda nilainya

        atribut `checked` dapat digunakan untuk mengatur bahwa opsi tertentu sudah terpilih secara default saat halaman dimuat.

    - select `<select>`:

        digunakan untuk membuat daftar drop-down

        dalam `<select>`, terdapat element option `<option>`

        option `<option>`:

        - digunakan untuk mendefinisikan pilihan-pilihan yang dapat dipilih
        - setiap option harus diberikan atribut `value` dengan **nilai yang unik** agar bisa dipilih
        - contoh `<option value="jangkrik">jangkrik</option>`

        untuk merapihkan option, kita bisa pakai option group `<optgroup>`

        option group `<optgroup>`:

        - membantu dalam mengorganisir opsi-opsi menjadi beberapa kategori atau grup
        - berikan atribut `label` untuk memberikan label pada grup tersebut

    - Tombol Submit `<input type="submit">`:

        digunakan untuk memvalidasi dan mengirim data yang telah diinput di form

        secara default, akan muncul tombol dengan tulisan **Submit**

        untuk mengganti text pada tombol, kita bisa pake atribut `value`

    - kelompok input `<fieldset>`:

        wadah yang mengelompokkan elemen-elemen formulir

        Untuk merapikan formulir dan mengelompokkan elemen-elemen terkait

        biasanya disertai dengan elemen `<legend>`

        elemen `<legend>`:

        - memberikan judul atau keterangan untuk kelompok elemen tersebut.

    - dan masih banyak lagi di [w3schools.com](https://www.w3schools.com/html/html_form_input_types.asp)

3. Attribut Form Element
    - Placeholder:

        adalah teks yang muncul sebagai latar belakang dalam field input.

        dapat digunakan dengan atribut `placeholder`.

        Untuk memberikan petunjuk kepada pengguna tentang apa yang harus diisi,

        Contohnya: `<input type="text" placeholder="Nama User">`.

    - Nilai Default:

        dapat digunakan dengan atribut `value`.

        Untuk menentukan nilai default pada input type text,

        Jika nilai sudah ada, placeholder tidak akan terlihat dan nilai tersebut dapat diedit oleh pengguna.

    - Nama:

        dapat digunakan dengan atribut `name`.

        untuk memberikan nama input

4. Label `<label>`:

    digunakan untuk menambahkan teks di luar kotak input (field) dalam form

    meningkatkan aksesibilitas dan pengalaman pengguna dalam formulir

    Atribut:
    - Atribut `for`:

        digunakan untuk menghubungkan `<label>` dengan Form Element input yang telah diberikan atribut `id`

    - Atribut `id`:

        atribut untuk Form Element input untuk dihubungkan dengan `<label>`

    Atribut `id` harus memiliki nilai yang sama dengan atribut `for` pada label yang sesuai.

5. contoh form:

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Kontak</title>
        <head>
        <body>
            <div>
                Menu
                <a href="index.html">Home</a>
                <a href="subfolder/tabel.html">Tabel</a>
            </div>

            <div>
                <h1>Kontak h1</h1>
                <h2>subjudul h2</h2>
            </div>

            <form action="">
                <fieldset>
                    <legend>Nama dan pesan</legend>
                    <label for="nama">Nama</label>
                    <input type="text" name="nama" id="nama" placeholder="Nama">
                    <br>
                    <label for="pesan">Pesan</label>
                    <textarea name="pesan" id="pesan" cols="30" rows="10">Pesan saya adalah</textarea>
                </fieldset>

                <fieldset>
                    <legend>Pilihan data</legend>
                    <label for="hobi">Hobi</label>
                    <input type="checkbox" name="hobi" id="hobi" value="0">Menggambar
                    <input type="checkbox" name="hobi" id="hobi" value="1" checked>Menulis
                    <input type="checkbox" name="hobi" id="hobi" value="2">Menyanyi
                    <br>
                    <label for="gender">Jenis Kelamin</label>
                    <input type="radio" name="gender" id="gender" value="0" checked>Laki-laki
                    <input type="radio" name="gender" id="gender" value="1">Perempuan
                    <br>
                    <label for="pelajaran">Pelajaran</label>
                    <select name="pelajaran" id="pelajaran">
                        <optgroup label="frontend">
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                        </optgroup>

                        <optgroup label="backend">
                            <option value="database">Database</option>
                            <option value="js">JavaScript</option>
                        </optgroup>
                    </select>
                </fieldset>

                <input type="submit" value="Kirim">
            </form>
        </body>
    </html> 
    ```

## 16 Semantic HTML

Banyak situs web berisi kode HTML seperti: `<div id="nav">`, `<div class="header">`, `<div id="footer">` untuk menunjukkan navigasi, header, dan footer.

```text
┌──────────────────────┐
│       <header>       │
├──────────────────────┤
│        <nav>         │
├────────────┬─────────┤
│ <section>  │         │
├────────────┤         │
│            │ <aside> │
│ <article>  │         │
│            │         │
├────────────┴─────────┤
│       <footer>       │
└──────────────────────┘
```

Dalam HTML ada beberapa elemen semantik yang dapat digunakan untuk mendefinisikan berbagai bagian halaman web:

| tag            | deskripsi                                                                        |
|----------------|----------------------------------------------------------------------------------|
| `<article>`    | Mendefinisikan konten independen dan mandiri                                     |
| `<aside>`      | Mendefinisikan konten selain konten halaman                                      |
| `<details>`    | Mendefinisikan detail tambahan yang dapat dilihat atau disembunyikan pengguna    |
| `<figcaption>` | Mendefinisikan keterangan untuk elemen `<figure>`                                |
| `<figure>`     | Menentukan konten mandiri, seperti ilustrasi, diagram, foto, daftar kode, dll.   |
| `<footer>`     | Mendefinisikan footer untuk dokumen atau bagian                                  |
| `<header>`     | Menentukan header untuk dokumen atau bagian                                      |
| `<main>`       | Menentukan konten utama dokumen                                                  |
| `<mark>`       | Mendefinisikan teks yang ditandai/disorot                                        |
| `<nav>`        | Mendefinisikan link navigasi                                                     |
| `<section>`    | Mendefinisikan bagian dalam dokumen                                              |
| `<summary>`    | Mendefinisikan judul yang terlihat untuk elemen `<details>`                      |
| `<time>`       | Mendefinisikan tanggal/waktu                                                     |

## 17 Media tag

1. `<video>`

    digunakan untuk menampilkan video di HTML

2. `<audio>`

    digunakan untuk memainkan audio di HTML

3. iframe dengan sumber youtube

4. contoh

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Kontak</title>
        <head>
        <body>
            <div>
                Menu
                <a href="../index.html">Home</a>
                <a href="../kontak.html">Kontak</a>
                <a href="tabel.html">Tabel</a>
            </div>

            <div>
                <h1>Media h1</h1>
            </div>

            <video width="320" height="240" controls autoplay>
                <source src="video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <audio controls>
                <source src="audio.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio> 
            
            <iframe width="420" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=bsh19_xLyg5fBOFQ">
            </iframe>
        </body>
    </html> 
    ```

## 20 ke mana setelah ini

1. Lanjut ke HTML5
2. Belajar CSS
3. Bahasa Back-End
4. Penggunaan Hosting
