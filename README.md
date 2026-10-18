# 🐦 Pigeon.js

A tiny JavaScript helper for sending browser data to PHP using ordinary HTML form submissions. No `fetch()`, no API requests, no extra complexity.

## Installation

Add Pigeon.js to your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/justorbit/pigeon@main/pigeon.js"></script>
```

## POST — Send Data

Send JavaScript data to PHP using the POST method.

### JavaScript

```js
var name = "John";
var age = 16;

POST({ name, age });
```

### PHP

```php
<?php
$name = $_POST["name"];
$age = $_POST["age"];

echo "Hello " . $name;
echo "You are " . $age . " years old.";
?>
```

PHP receives the values through `$_POST`.


---

## GET — Send Data Through the URL

Send data as URL parameters.

### JavaScript

```js
GET({
    name: "John",
    page: "home"
});
```

### PHP

```php
<?php
$name = $_GET["name"];
$page = $_GET["page"];

echo $name;
echo $page;
?>
```

The URL will look something like this:

```text
https://example.com/index.php?name=John&page=home
```

**Use GET for:** Searches, filters, page selection, and other non-sensitive data.


---

## FILE — Upload a File

Upload a file selected by the user.

### HTML + JavaScript

```html
<input type="file" id="upload">
<button onclick="uploadFile()">Upload</button>

<script>
function uploadFile() {
    var file = document.getElementById("upload").files[0];

    if (file) {
        FILE(file);
    }
}
</script>
```

### PHP

```php
<?php
$file = $_FILES["file"];

move_uploaded_file(
    $file["tmp_name"],
    "uploads/" . basename($file["name"])
);
?>
```

Before using this example:

- Create the `uploads` directory.
- Make sure the server can write to that directory.
- Validate the file type and size.
- Generate a safe filename instead of blindly trusting the original filename.
- Handle upload errors and missing files.


**Compatibility:** The current `FILE()` implementation uses `DataTransfer` to attach a selected file to a form. Browser support can vary, so test it in your target browsers.

---

##  Quick Reference

| Function | Purpose | PHP receiver |
|---|---|---|
| `POST({ name: "John" })` | Send data in the request body | `$_POST["name"]` |
| `GET({ page: "home" })` | Send data through URL parameters | `$_GET["page"]` |
| `FILE(file)` | Upload a selected file | `$_FILES["file"]` |

---

##  Important Notes

- Pigeon.js uses ordinary HTML form submissions.
- It doesn't require `fetch()` or manually written API requests.
- Form submissions normally navigate to or reload the target page.
- POST doesn't encrypt data by itself. Use HTTPS to protect data in transit.
- Validate input on the server.
- Escape user-provided values before displaying them in HTML.

---

## 🐦 Pigeon.js

**Small helper. Simple communication. No `fetch()` required.**
