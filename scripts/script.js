window.downloadSJIS = (path) => {
    const filename = path.replace(/^.*\//, '');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onload = () => {
        const stringArray = Encoding.stringToCode(xhr.response);
        const sjisArray = Encoding.convert(stringArray, 'shift_jis');
        const buffer = new Uint8Array(sjisArray);
        const blob = new Blob([ buffer ], { 'type' : 'text/plain' });

        if (window.navigator.msSaveBlob) {
            // msSaveOrOpenBlobの場合はファイルを保存せずに開ける
            window.navigator.msSaveBlob(blob, filename);
        } else {
            const url = window.URL.createObjectURL(blob);
            var download = document.createElement('a');
            document.body.appendChild(download);
            download.href = url;
            download.download = filename;
            download.click();
            document.body.removeChild(download);
        }
    };
    xhr.send(null);
}
