

const CopiarAlPortapapeles = ({ contenido }) => {
  const copiarAlPortapapeles = () => {
    // Crea un elemento temporal para contener el contenido a copiar
    const elementoTemporal = document.createElement('div');

    // Agrega el contenido al elemento temporal
    elementoTemporal.innerHTML = contenido;

    // Copia los estilos del documento al elemento temporal
    const estilos = getComputedStyle(document.documentElement);
    const estilosString = [...estilos].map(s => `${s}:${estilos.getPropertyValue(s)};`).join('');
    elementoTemporal.setAttribute('style', estilosString);

    // Agrega el elemento temporal al documento para poder seleccionarlo
    document.body.appendChild(elementoTemporal);

    // Selecciona el contenido del elemento temporal
    const seleccion = window.getSelection();
    const rango = document.createRange();
    rango.selectNodeContents(elementoTemporal);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);

    // Copia el contenido seleccionado al portapapeles
    document.execCommand('copy');

    // Elimina el elemento temporal del documento
    document.body.removeChild(elementoTemporal);
  };

  return (
    <button onClick={copiarAlPortapapeles}>Copiar al portapapeles</button>
  );
};

export default CopiarAlPortapapeles;
