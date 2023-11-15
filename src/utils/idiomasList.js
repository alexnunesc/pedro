export const idiomasList = (idiomas) => {
  if (idiomas.length === 1) {
    return idiomas[0].slice(0, 2);
  } else if (idiomas.length === 2) {
    return `${idiomas[0].slice(0, 2)}/${idiomas[1].slice(0, 2)}`;
  } else if (idiomas.length === 3) {
    return `${idiomas[0].slice(0, 2)}/${idiomas[1].slice(0, 2)}/${idiomas[2].slice(0, 2)}`;
  }
};
