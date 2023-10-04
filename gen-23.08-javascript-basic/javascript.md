# Javascript

## Basic

### Variable & Primitive Data Type

#### String

data text

Diapit tanda kutip tunggal (' '), ganda (" "), atau tanda kutip balik (\` \`).

```js
let greeting = 'Hello, World!';
```

#### Number

data numerik, baik bilangan bulat (integer) maupun bilangan decimal (float).

tidak ada perbedaan antara tipe integer dan floating-point.

```js
let age = 25;
let pi = 3.14;
```

#### Boolean

nilai logika - true atau false.

Digunakan dalam kondisi dan perbandingan.

```js
let isRaining = true;
let hasSunshine = false;
```

#### Null

nilai objek yang tidak ada.

nilai khusus yang diberikan pada suatu variabel untuk menunjukkan bahwa variabel tersebut tidak memiliki nilai yang berarti.

```js
let myVariable = null;
```

#### Undefined

variabel yang telah dideklarasikan tetapi tidak diberi nilai.

Juga mewakili nilai yang dikembalikan oleh fungsi yang tidak mengembalikan nilai secara eksplisit.

```js
let notDefinedYet;
```

### Where to write

#### external

dibuat terpisah dan dihubungkan menggunakan tag `<script>` dengan atribut src yang berisi nama file di dalam tag `<head>` atau sebelum `</body>`.

```html
<head>
    <!-- ... -->

    <script src="path/to/your/script.js"></script>
</head>
<body>
    <!-- ... -->

    <script src="path/to/your/script.js"></script>
</body>
```

#### internal

ditulis di dalam tag `<script>` di HTML sebelum `</body>`.

```html
<body>
    <!-- ... -->

    <script>
        function sayHello() {
            alert('Hello, World!');
        }
    </script>
</body>
```

#### inline event handler

ditulis Langsung di dalam tag HTML menggunakan atribut acara seperti onclick, onmouseover, dll.

```html
    <button onclick="sayHello()">Click me</button>
```

### Output

#### console.log()

Terutama digunakan untuk tujuan debugging.

Menghasilkan informasi ke konsol browser, yang dapat dilihat di developer tools browser.

```js
let message = "Hello, World!";
console.log(message);
```

#### document.write()

Menghasilkan konten langsung ke dokumen HTML.

Penting untuk diperhatikan bahwa penggunaan document.write() setelah dokumen selesai loading dapat menimpa seluruh dokumen, sehingga sering kali dihindari dalam development.

```js
document.write("<p>Hello, World!</p>");
```

#### alert()

Menampilkan kotak dialog dengan pesan tertentu dan tombol OK.

Sering digunakan untuk pemberitahuan pengguna sederhana, namun dapat mengganggu dan tidak umum digunakan dalam pengembangan web modern.

```js
let greeting = "Hello, World!";
alert(greeting);
```

### Function

#### function scope, return value

### Array Data Type

#### Creating & Accessing Array

#### Get array length

#### Looping Array Elements

#### Mutating array using push(), pop(), splice()

### Condition

#### Ternary Operator, one line logical operator

### Loop

#### for in

#### for of

#### .map()

### Built in method

#### String method => substring, replace, toUpperCase, etc

#### Number method => toString, toFixed, etc

#### Array method => push, pop, sort, join, map, filter, find, etc

### String Template Literal

### JS Scope & Hoisting Concept

## DOM

### HTML DOM Introduction

Saat halaman web dimuat, browser membuat Document Object Model halaman tersebut.

Model HTML DOM dibuat sebagai pohon Objek:

![HTML DOM](https://www.w3schools.com/js/pic_htmltree.gif)

Dengan model objek, JavaScript mendapatkan semua kekuatan yang dibutuhkan untuk membuat HTML dinamis:

- dapat mengubah semua elemen HTML di halaman
- dapat mengubah semua atribut HTML di halaman
- dapat mengubah semua gaya CSS di halaman
- dapat menghapus elemen dan atribut HTML yang ada
- dapat menambahkan elemen dan atribut HTML baru
- dapat bereaksi terhadap semua peristiwa HTML yang ada di halaman
- dapat membuat acara HTML baru di halaman

### Selecting Element

#### `getElementById`

Gunakan `document.getElementById("namaID")` untuk memilih elemen berdasarkan ID.

#### `getElementsByClassName`

Gunakan `document.getElementsByClassName["namaKelas"](indeks)` untuk memilih elemen berdasarkan kelas dan indeks.

#### `getElementsByTagName`

Gunakan `document.getElementsByTagName["namaTag"](indeks)` untuk memilih elemen berdasarkan tag dan indeks.

#### `querySelector`

Gunakan `document.querySelector("namaCSSSelector")` untuk memilih elemen pertama yang cocok dengan CSS selector yang ditentukan.

#### `querySelectorAll`

Gunakan `document.querySelectorAll("namaCSSSelector")` untuk memilih semua elemen yang cocok dengan pemilih CSS yang ditentukan.

### Manipulating HTML Element

#### innerHTML, appendChild

### Manipulating Form

#### .value

### Manipulating Element Attribute

### Manipulating Element CSS

### DOM Event

#### inline event, addEventListener()

## Object

### Object Data Type

### Method inside Object

### `this` Keyword

### Array Of Object

### Spread & Rest Operator

### Object Destructure

### Optional Chaining

#### Question Mark Symbol (?)

### Copy by reference vs by value

## Asynchronous

### Callback function

#### arrow function

### Asynchronous concept

#### setTimeout()

### Promise Data Type

### Async Await

### Try Catch Finally Block

## NPM

### NPM Introduction

### Install Package/Library using NPM

### Import, Export, Export Default

### package.json structure

#### Custom Script

## REST API

### JSON Introduction & Syntax

### JSON Property Value

### JSON Parse & JSON Stringify

### JSON String, Number, Array, Object

### API Introduction

### HTTP Status Code

### Consume API using Axios

### Manual API Testing using Hoppscotch
