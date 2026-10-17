function sendForm(data, method = "POST") {
    const form = document.createElement("form");
    form.method = method;

    for (const [key, value] of Object.entries(data)) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.append(input);
    }

    document.body.append(form);
    form.submit();
}

function POST(data) {
    sendForm(data, "POST");
}

function GET(data) {
    sendForm(data, "GET");
}

function FILE(file, name = "file") {
    const form = document.createElement("form");
    form.method = "POST";
    form.enctype = "multipart/form-data";

    const input = document.createElement("input");
    input.type = "file";
    input.name = name;

    const transfer = new DataTransfer();
    transfer.items.add(file);
    input.files = transfer.files;

    form.append(input);
    document.body.append(form);
    form.submit();
}
