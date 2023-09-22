# Apa Itu Github (semua video)

---

## Apa Itu GitHub (intro)

1. Perbedaan antara GitHub dan Git.
2. Git adalah Version Control System yang digunakan secara lokal pada desktop atau komputer kita.
3. GitHub adalah tempat hosting untuk project-project Git yang memungkinkan kita untuk menyimpan dan berbagi project secara online.
4. kita dapat mengunggah proyek kita ke GitHub secara gratis, meskipun ada juga opsi berbayar.
5. Disarankan membuat akun GitHub dan sign-in.
6. Tidak membahas Git, hanya membahas fitur-fitur yang ditawarkan oleh GitHub.

Pentingnya Git dalam konteks GitHub.

---

## Apa Itu GitHub (Repository dan Clone)

1. Repository dijelaskan sebagai tempat untuk project baru kita
2. Cara membuat repository baru di GitHub adalah dengan :
    1. memilih tombol "+" atau "create new" yang disusul dengan "New Repository" di GitHub.
    2. memberikan nama dan deskripsi yang sesuai.

        Pentingnya deskripsi yang akurat ditekankan, karena ini akan membantu orang lain memahami isi repository.
    3. memilih "public" repository.

        Penggunaan "public", yang berarti semua orang dapat mengakses dan melihat repository tersebut,

        sementara "private", yang berarti hanya kita dan orang yang kita undang dapat mengakses dan melihat repository tersebut,

        dulu "private" memerlukan pembayaran.
    4. memilih inisialisasi repository dengan file readme.

        kita bisa pilih inisialisasi repository dengan file readme atau tidak, dan

        file readme file yang menjelaskan tentang informasi detail tentang isi repository.
3. kita dapat membuat file baru di dalam repository langsung di github melalui interface GitHub dengan:
    1. memilih tombol "+" atau "add file" dan pilih "create new file"
    2. isi nama file-nya, contohnya file "index.html"
    3. isi konten file-nya
    4. klik tombol "commit new file" atau "commit changes"

        kita bisa isi pesan commit dan deskripsi tambahan
4. kita dapat mendownload atau clone repository secara langsung melalui terminal dengan:
    1. buka terminal dan pastikan berada di folder yang kita mau
    2. masukan command "git clone " dan url repository yang akan di-clone

        ```sh
        git clone <url-repo-github>
        ```

        kita bisa kasih nama baru dengan mengetik "namabaru" setelah url

        ```sh
        git clone <url-repo-github> <nama-baru>
        ```

    3. repo sudah terclone sempurna

       hasil cloning akan memiliki file README, index.html, dan folder .git yang diinisialisasi secara otomatis.

Langkah-langkah pembuatan repository di GitHub dan proses cloning, serta penekanan pada pentingnya deskripsi yang akurat.

## Apa Itu GitHub (Push dan Pull)

Proses mengubah file lokal dan cara push perubahan tersebut ke GitHub.

dan sebaliknya, cara pull perubahan dari GitHub jika dilakukan perubahan di sana.

1. cara push perubahan lokal tersebut ke GitHub dengan:
    1. mengedit file lokal, kemudian menyimpan perubahan tersebut,
    2. menggunakan perintah "git add ." dan "git commit -m "pesan-commit-yg-kita-mau"" untuk menyiapkan perubahan untuk di-push.

        ```sh
        git add .
        ```

        ```sh
        git commit -m "pesan-commit-yg-kita-mau"
        ```

    3. sekarang kita push perubahan ke Github menggunakan perintah "git push origin master"

        dengan "origin" sebagai remote repository kita di GitHub dan

        "master" sebagai branch yang akan di-push

        ```sh
        git push origin master
        ```

    4. kalau sudah berhasil, kita bisa langsung melihat perubahan-nya dengan me-refresh repo github kita
    5. kita juga mengedit file di GitHub dan melakukan commit melalui interface GitHub.

        prosesnya mirip dengan membuat file baru di github melalui interface GitHub.
2. cara pull perubahan dari GitHub dan menggabungkannya dengan repository lokal dengan:
    1. menggunakan perintah "git pull" untuk mengambil perubahan dari GitHub ke repository lokal.

        hampir mirip dengan "git push"

        ```sh
        git pull origin master
        ```

    2. dan otomatis perubahan dari GitHub telah berhasil diambil dan diterapkan ke repository lokal.

Cara melakukan push dan pull dalam penggunaan GitHub untuk mengelola perubahan di antara repository lokal dan GitHub.

## Apa Itu GitHub (Branch dan Merge)

branch dapat dibuat baik dari GitHub langsung maupun dari lokal.

1. Cara membuat branch di GitHub dengan:
    1. klik tombol "branch master" dan masukan nama branch baru

    2. kemudian klik "create branch"

1. Cara membuat branch di local dengan:
    1. menggunakan perintah "git checkout -b nama-branch-baru"

        ```sh
        git checkout -b nama-branch-baru
        ```

    2. menggunakan perintah "git branch" untuk melihat list branch yang sedang kita pakai

        ```sh
        git branch
        ```

    3. kita bisa langsung gunakan branch "nama-branch-baru" dengan mengubah file dan push perubahan tersebut di Github

        dengan perintah

        ```sh
        git add .
        git commit -m "pesan-commit-yg-kita-mau"
        git push origin nama-branch-baru
        ```

    4. kita bisa mengecek perubahan tersebut di Github, di branch "nama-branch-baru"

1. Cara merge branch

    langkah selanjutnya adalah melakukan merge, dan untuk itu, kita perlu membandingkan perbedaan antara branch.

    1. menekan tombol "compare view" dan memberikan komentar jika diperlukan.

        atau

    2. kemudian klik tombol "create pull request"
    3. berikan nama dan komentar pull request
    4. klik tombol "create pull request"
    5. dan klik tombol "merge pull request" dan mengonfirmasi merge dengan "confirm merge"

    Setelah merge selesai, pembicara menyarankan untuk menghapus branch yang tidak lagi diperlukan.
    6.proses merge telah selesai.

Cara membuat branch, melakukan perubahan, dan menggabungkan perubahan melalui merge di GitHub untuk manajemen branch dan penggabungan perubahan.

## Apa Itu GitHub (Fork)

1. Penggunaan GitHub selain dari proyek pribadi.

    kita dapat mencari repository orang lain di GitHub.

2. kita dapat search di repository, termasuk penggunaan kata kunci dengan menggunakan kolom search yang ditandai "this repository"

    Penting untuk diketahui bahwa search di repository hanya akan mencari di repository tersebut.

3. kita bisa kembali ke halaman utama GitHub untuk melakukan search secara global

    dengan menggunakan kolom search yang kosong

    kita dapat sortir proyek yang sesuai dengan kolom search dan filter berdasarkan bahasa pemrograman yang digunakan.

    disarankan untuk selalu memeriksa jumlah "star" dan "forks" sebagai indikasi popularitas dan kepercayaan proyek.

    contohnya pencarian proyek, seperti mencari "php mailer" atau framework seperti "Laravel"

    Selanjutnya, kita bisa lihat informasi pada file README.md di repository tersebut.

    dan dapat mengunduh proyek dalam bentuk zip atau melakukan cloning langsung ke lokal.
4. kita juga bisa "fork" di GitHub, yaitu meng-copy proyek/repo orang di akun kita.

    kita bisa lakukan "fork" dengan mengklik tombol "fork" pada repo orang tersebut

    Setelah "fork", proyek tersebut akan tersedia di akun kita

    lengkap dengan semua informasi dan riwayat yang lengkap.

Cara mencari, mengunduh, dan melakukan fork proyek di GitHub untuk mengakses proyek-proyek yang telah dibuat oleh orang lain untuk pembelajaran atau kolaborasi.

## Apa Itu GitHub (.gitignore)

1. `.gitignore` adalah file yang berisi daftar nama-nama file yang pengguna tidak ingin ditampilkan di repositori GitHub.
2. Penggunaan `.gitignore` adalah untuk menyembunyikan file yang berisi informasi sensitif atau file yang tidak relevan atau tidak penting

    seperti password database, file dokumentasi atau konfigurasi, dkk.
3. cara menggunakan `.gitignore`:
    1. contoh-nya file baru bernama "password.php" ingin kita sembunyikan
    2. kita buat file `.gitignore` dan isi konten dengan "password.php".
    3. Setelah file `.gitignore` selesai dibuat dan ditulis,

        kita menambahkan dan melakukan commit terhadap perubahan tersebut.
    4. tada, file "password.php" tidak terlihat di GitHub karena telah diatur dalam file `.gitignore`.

Penggunaan file .gitignore untuk menyembunyikan file yang tidak diinginkan di repositori GitHub untuk menjaga kerahasiaan informasi sensitif dan menjaga repositori tetap bersih.
