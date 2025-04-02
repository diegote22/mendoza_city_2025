// 1. Definir los textos
const languageTexts = {
    en: "<b>Discover Mendoza:</b> Argentina's Sun-Drenched Paradise Nestled against the majestic Andes Mountains, Mendoza beckons with its breathtaking landscapes, world-renowned wineries, and thrilling outdoor adventures. This sun-drenched paradise offers a diverse array of experiences for every traveler.",
    es: "<b>Descubre Mendoza:</b> El paraíso argentino bañado por el sol. Ubicada junto a la majestuosa Cordillera de los Andes, Mendoza atrae con sus impresionantes paisajes, bodegas de renombre mundial y emocionantes aventuras al aire libre. Este paraíso bañado por el sol ofrece una diversa gama de experiencias para cada viajero.",
    it: "<b>Scopri Mendoza:</b> Il paradiso argentino baciato dal sole. Situata ai piedi delle maestose Ande, Mendoza attira con i suoi paesaggi mozzafiato, le cantine di fama mondiale e le emozionanti avventure all'aria aperta. Questo paradiso baciato dal sole offre una vasta gamma di esperienze per ogni viaggiatore.",
};
  
// 2. Seleccionar elementos
const descriptionElement = document.getElementById('description-text');
const flagEN = document.getElementById('flag-en');
const flagES = document.getElementById('flag-es');
const flagIT = document.getElementById('flag-it');
  
// 3. Añadir Event Listeners
flagEN.addEventListener('click', function() {
    changeLanguage('en');
});
  
flagES.addEventListener('click', function() {
    changeLanguage('es');
});

flagIT.addEventListener('click', function() {
    changeLanguage('it');
});
   
// 4. Función de cambio
function changeLanguage(langCode) {
    if (languageTexts[langCode]) {
        descriptionElement.innerHTML = languageTexts[langCode];
    } else {
        console.error("Idioma no encontrado:", langCode);
    }
}
  
// Opcional: Establecer el idioma inicial al cargar la página
changeLanguage('en');