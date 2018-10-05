window.loadText = (id, path) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.overrideMimeType('text/plain; charset=shift_jis')
    xhr.onload = () => {
        document.getElementById(id).innerText = xhr.responseText;
    };
    xhr.send(null);
}
