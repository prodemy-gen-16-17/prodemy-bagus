# Tailwind CSS

## Installation

### CDN

- tambahkan tag `<script>` Tailwind CDN ke tag `head` file HTML kita

  ```html
  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
  </html>
  ```

- mulai pakai `class` Tailwind

- bisa sesuaikan konfigurasi kita dengan mengubah `tailwind.config`

  ```html
  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              clifford: '#da373d',
            }
          }
        }
      }
    </script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline **text-clifford**">
      Hello world!
    </h1>
  </body>
  </html>
  ```

### NPM

- install tailwind via npm

    ```sh
    npm install -D tailwindcss
    npx tailwindcss init
    ```

- sesuaikan konfigurasi tempat template kita

    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: [
            "./app/**/*.{js,ts,jsx,tsx,mdx}",
            "./pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}",
        
            // Or if using `src` directory:
            "./src/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
    }
    ```

- Tambah `@tailwind` directives ke file CSS utama Anda.

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- Jalankan `tailwindcss` CLI untuk memindai file templat kita untuk mencari `class` dan membuat CSS kita.

  ```sh
  npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
  ```

- tambahkan tag `<link>` CSS ke tag `head` file HTML kita

  ```html
  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/dist/output.css" rel="stylesheet">
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
  </html>
  ```

- mulai pakai `class` Tailwind

## Basic Concept

Membangun komponen kompleks dari sekumpulan `class` yang terbatas.

### Utility Based Class

Biasanya, untuk menghias html kita memakai CSS

Dengan Tailwind, kita menghias html kita dengan menerapkan `class` yang sudah disiapkan oleh tailwind.

#### keunggulan tailwind dibandingkan dengan inline `style`?

- desain dengan keterbatasan `class`

  pake inline `style`, semua value is a magic number,

  dengan tailwind, semuanya telah ditentukan sebelumnya oleh tailwind

- desain yang responsive

  tidak perlu `@media` queri lagi,

  sudah ada `class` responsive

- Hover, focus, dan status lainnya bisa langsung diimplementasi dengan `class` tailwind

#### masalah tailwind

komponen yang memiliki kombinasi kelas yang berulang

solusinya:

- **Reusing Styles**
  - pakai fitur dari editor dan/atau fitur template html bahasa pemrograman
    - multi-cursor
    - for loops
  - pakai fitur komponen atau template partials dari framework frontend atau javascript agar bisa dipake ulang
  - memakai custom class dengan menggunakan `@apply` di CSS file
  
    untuk hal-hal yang sangat kecil dan dapat digunakan kembali seperti `button` dan `form`

    jangan gunakan `@apply` hanya untuk membuat segalanya terlihat “lebih clean”

    contoh

    ```html
    <!-- Before extracting a custom class -->
    <button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
      Save changes
    </button>

    <!-- After extracting a custom class -->
    <button class="btn-primary">
      Save changes
    </button>
    ```

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer components {
      .btn-primary {
        @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
      }
    }
    ```

## Box Model Utility Class

### Padding

- satu sisi, pakai `p{t|r|b|l}-{size}`
- horizontal, pakai `px-{size}`
- vertikal, pakai `py-{size}`
- semua sisi, pakai `p-{size}`
- nilai bebas, seperti `p-[5px]`

### Margin

- satu sisi, pakai `m{t|r|b|l}-{size}`
- horizontal, pakai `mx-{size}`
- vertikal, pakai `my-{size}`
- semua sisi, pakai `m-{size}`
- nilai negatif, pakai kasih `-` sebelum `m`, contoh `-m-2`
- nilai bebas, seperti `m-[5px]`

### Width

- fixed width, pakai `w-{number}` atau `w-px`
- percentage width, pakai `w-{fraction}` atau `w-full`
- Viewport width, pakai `w-screen`
- Resetting the width pada kondisi tertentu, contohnya `<div class="w-full md:w-auto">`

### Min-Width

- bisa pakai `min-w-{width}` dengan `{width}` dari width

### Max-Width

- bisa pakai `max-w-{size}`
- bisa pakai `max-w-prose` untuk agar mudah dibaca dan disesuaikan berdasarkan ukuran font.
- sesuaikan dengan breakpoint dengan pakai `max-w-screen-{breakpoint}`

### Height

- fixed height, pakai `h-{number}` atau `h-px`
- full height, pakai `h-full`
- Viewport height, pakai `h-screen`

### Min-Height

- bisa pakai `min-h-0`, `min-h-full`, atau `min-h-screen`

### Max-Height

- bisa pakai `max-h-{size}`

## Tailwind Modifier for Pseudo Class and Element

### Pseudo-classes

#### `hover`, `focus`, and `active`

masing-masing bisa pakai `hover`, `focus`, dan `active` diikut dengan `:{class-yg-lain}`

- contoh

  ```html
  <button type="button" class="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
    Save changes
  </button>
  ```

juga menyertakan `visited`, `focus-within`, `focus-visible`, and more.

#### `first`, `last`, `odd`, and `even`

- menghias first-child atau last-child element masing-masing dengan `first` atau `last`

  - contoh

    ```html
    <ul role="list" class="p-6 divide-y divide-slate-200">
      {#each people as person}
        <!-- Remove top/bottom padding when first/last child -->
        <li class="flex py-4 first:pt-0 last:pb-0">
          <img class="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
          <div class="ml-3 overflow-hidden">
            <p class="text-sm font-medium text-slate-900">{person.name}</p>
            <p class="text-sm text-slate-500 truncate">{person.email}</p>
          </div>
        </li>
      {/each}
    </ul>
    ```

- menghias odd-child atau even-child element masing-masing dengan `odd` atau `even`

  - contoh

    ```html
      <table>
      <!-- ... -->
        <tbody>
          {#each people as person}
            <!-- Use a white background for odd rows, and grey for even rows -->
            <tr class="odd:bg-white even:bg-grey">
              <td>{person.name}</td>
              <td>{person.title}</td>
              <td>{person.email}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    ```

- juga menyertakan `only-child`, `first-of-type`, `empty`, and more.

### Pseudo-element

#### `before` and `after`

masing-masing bisa pakai `before` and `after`

gunakan `before` and `after` untuk situasi di mana penting bahwa konten pseudo-element sebenarnya tidak ada di DOM dan tidak dapat dipilih oleh pengguna.

- contoh `before`

  ```html
  <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
    When you look
    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
      <span class="relative text-white">annoyed</span>
    </span>
    all the time, people think that you're busy.
  </blockquote>
  ```

- contoh `before` dengan `span`

  ```html
  <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
    When you look
    <span class="relative">
      <span class="block absolute -inset-1 -skew-y-3 bg-pink-500" aria-hidden="true"></span>
      <span class="relative text-white">annoyed</span>
    </span>
    all the time, people think that you're busy.
  </blockquote>
  ```

- contoh `after`

  ```html
  <label class="block">
    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
      Email
    </span>
    <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
  </label>
  ```

#### `placeholder` text

bisa pakai `placeholder` pada `input` atau `textarea`

- contoh

  ```html
  <label class="relative block">
    <span class="sr-only">Search</span>
    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg>
    </span>
    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
  </label>
  ```

## Tailwind Responsive Modifier

semua `class` bisa diberikan
`breakpoint prefix` dengan format `{prefix}:{class-yg-lain}`

berikut 5 breakpoint di tailwind secara default

| prefix | Min Width | CSS                                |
|--------|-----------|------------------------------------|
| `sm`   | 640px     | @media (min-width: 640px) { ... }  |
| `md`   | 768px     | @media (min-width: 768px) { ... }  |
| `lg`   | 1024px    | @media (min-width: 1024px) { ... } |
| `xl`   | 1280px    | @media (min-width: 1280px) { ... } |
| `2xl`  | 1536px    | @media (min-width: 1536px) { ... } |

- contoh

  ```html
  <!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
  <img class="w-16 md:w-32 lg:w-48" src="...">
  ```

  ```html
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:shrink-0">
        <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
        <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
      </div>
    </div>
  </div>
  ```

### Targeting mobile screens first

- ❌ Don’t use `sm`: to target mobile devices

  ```html
  <!-- This will only center text on screens 640px and wider, not on small screens -->
  <div class="sm:text-center"></div>
  ```

- ✅ Use unprefixed utilities to target mobile, and override them at larger breakpoints

  ```html
  <!-- This will center text on mobile, and left align it on screens 640px and wider -->
  <div class="text-center sm:text-left"></div>
  ```

### Targeting a breakpoint range

Secara default, style seperti `md:flex` akan diterapkan pada breakpoint tersebut dan **tetap diterapkan** pada breakpoint yang lebih besar.

Jika ingin menerapkan style hanya ketika rentang breakpoint tertentu aktif, susunlah responsive modifier seperti `md` dengan `max-*` untuk membatasi style itu ke rentang breakpoint tertentu

- contoh

  ```html
  <div class="md:max-xl:flex">
    <!-- ... -->
  </div>
  ```

| Modifier  | Media query                                    |
|-----------|------------------------------------------------|
| `max-sm`  | @media not all and (min-width: 640px) { ... }  |
| `max-md`  | @media not all and (min-width: 768px) { ... }  |
| `max-lg`  | @media not all and (min-width: 1024px) { ... } |
| `max-xl`  | @media not all and (min-width: 1280px) { ... } |
| `max-2xl` | @media not all and (min-width: 1536px) { ... } |

### Targeting a single breakpoint

Untuk menargetkan satu breakpoint, targetkan rentang breakpoint tersebut dengan menyusun responsive modifier seperti `md` dengan `max-*` untuk breakpoint berikutnya:

- contoh

  ```html
  <div class="md:max-lg:flex">
    <!-- ... -->
  </div>
  ```

## Color & Size unit

### Text Color

- bisa pakai langsung dengan `text-{color}`

  - contoh

    ```html
    <p class="text-black">The quick brown fox...</p>
    ```

- bisa ubah intesitas warna teks dengan `text-{color}-{intesitas}`

  - contoh

    ```html
    <p class="text-sky-400">The quick brown fox...</p>
    ```

- bisa sekaligus ubah opacity text color juga dengan `text-{color}-{intesitas}/{opacity}`

  - contoh

    ```html
    <p class="text-sky-400/100">The quick brown fox...</p>
    <p class="text-sky-400/75">The quick brown fox...</p>
    <p class="text-sky-400/50">The quick brown fox...</p>
    <p class="text-sky-400/25">The quick brown fox...</p>
    <p class="text-sky-400/0">The quick brown fox...</p>
    ```

## Display `flex` dan `grid`

### `flex`

### `grid`

## Customization pada style

### `tailwind.config.js` file

kita bisa kustomisasi tailwind dengan mengubah `theme` object pada `tailwind.config.js` file

- `theme`
  - `screens`
  - `colors`
  - `spacing`
  - `classTailwindDenganCamelCase`

- kustomisasi default theme
  - `extend`
  - mengganti nilai defaultnya
  - me-reference ke nilai lain
  - me-reference ke default theme lain
  - menonaktifkan seluruh default `class`

### arbitrary values

kadang kita perlu ukuran yg sangat pas pada elemen tertentu,

maka di tailwind kita bisa gunakan kurung kotak `[size]` untuk membuat `class` tailwind yg sesuai dengan `size`-nya

mirip dengan inline `style`, dengan keuntungan kita kombinasi kan dengan interactive modifier seperti `hover` dan responsive modifier seperti `md`

bisa dipake untuk kelas apapun yg ada di tailwind

#### Arbitrary properties

#### Arbitrary variants

#### Handling whitespace

#### Resolving ambiguities

### `@layer` pada CSS file

## [Style Reusable using @apply](#masalah-tailwind)

## Tailwind Plugin

### `@tailwindcss/typography`

### [Form](https://github.com/tailwindlabs/tailwindcss-forms)

### [Aspect Ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

### [Container Queries](https://github.com/tailwindlabs/tailwindcss-container-queries)

## Build for production

### Optimizing for Production

For the smallest possible production build, we recommend minifying your CSS with a tool like [cssnano](https://cssnano.co/), and compressing your CSS with [Brotli](https://en.wikipedia.org/wiki/Brotli).

- If you’re using Tailwind CLI,

  you can minify your CSS by adding the `--minify` flag:

  ```sh
  npx tailwindcss -o build.css --minify
  ```

- If you’ve installed Tailwind as a `PostCSS` plugin,

  add `cssnano` to the end of your plugin list:

  ```js
  // postcss.config.js
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
  }
  ```

- If you’re using a framework,

  check the documentation as this is often handled for you in production automatically and you don’t even need to configure it.
