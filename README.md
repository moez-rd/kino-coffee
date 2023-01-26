# KINO COFFEE

Untuk menambahkan/mengubah menu, silakan buka `menu.json`.
### Menambahkan Kategori Menu
Tambahkan blok berikut.
```json
{
    "id": id menu (string),
    "title": nama menu (string),
    "type": tipe menu (string),
    "items": daftar menu (list)
},
```
### Menambahkan Item Menu
Tambahkan blok berikut pada list `items` di blok kategori.
```json
{
    "name": nama menu (string),
    "description": deskripsi menu (string),
    "price": harga (number),
    "best": terbaik? (number)
},
```