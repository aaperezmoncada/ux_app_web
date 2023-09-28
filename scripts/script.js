function showParameter() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mensaje = urlParams.get('mensaje');
    if (mensaje) {
        alert(mensaje)
        window.location.href = window.location.href.split("?")[0]
    }
}


showParameter()