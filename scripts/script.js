window.downloadSJIS = (path) => {
    const filename = path.replace(/^.*\//, '');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onload = () => {
        const crlf = xhr.response.replace(/\n/g, '\r\n');
        const stringArray = Encoding.stringToCode(crlf);
        const sjisArray = Encoding.convert(stringArray, 'shift_jis');
        const buffer = new Uint8Array(sjisArray);
        const blob = new Blob([ buffer ], { 'type' : 'text/plain;charset=shift_jis;' });

        if (window.navigator.msSaveBlob) {
            // msSaveOrOpenBlobの場合はファイルを保存せずに開ける
            window.navigator.msSaveBlob(blob, filename);
        } else {
            const url = window.URL.createObjectURL(blob);
            const download = document.createElement('a');
            download.style.display = 'none';
            document.body.appendChild(download);
            download.href = url;
            download.download = filename;
            download.click();
            document.body.removeChild(download);
        }
    };
    xhr.send(null);
}

downloadSJISNoComment = (path) => {
    const filename = path.replace(/^.*\//, '');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onload = () => {
        const noComment = xhr.response.replace(/\/\/.*\n/g, '');
        const crlf = noComment.replace(/\n/g, '\r\n');
        const stringArray = Encoding.stringToCode(crlf);
        const sjisArray = Encoding.convert(stringArray, 'shift_jis');
        const buffer = new Uint8Array(sjisArray);
        const blob = new Blob([ buffer ], { 'type' : 'text/plain;charset=shift_jis;' });

        if (window.navigator.msSaveBlob) {
            // msSaveOrOpenBlobの場合はファイルを保存せずに開ける
            window.navigator.msSaveBlob(blob, filename);
        } else {
            const url = window.URL.createObjectURL(blob);
            const download = document.createElement('a');
            download.style.display = 'none';
            document.body.appendChild(download);
            download.href = url;
            download.download = filename;
            download.click();
            document.body.removeChild(download);
        }
    };
    xhr.send(null);
}
