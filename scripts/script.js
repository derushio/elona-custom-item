window.downloadSJIS = (path) => {
    const filename = path.replace(/^.*\//, '');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onload = () => {
        // TODO: sjis & CRLFに変換
        const blob = new Blob([ xhr.responseText ], { 'type' : 'text/plain' });

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
