/* function makeURL(object) {
    return (window.URL) ? window.URL.createObjectURL(object) :    
    window.webkitURL.createObjectURL(object);
  }

  async function display(videoStream){
    var myvideo = document.getElementById('forceplay');
    let blob = await fetch(videoStream).then(r => r.blob());
    var videoUrl= makeURL(blob);
    myvideo.src = videoUrl;
  }

  display('./assets/video_home_h264.mp4'); */

  const videoElement = document.querySelector('video');
const sources = [
  {
    type: 'video/mp4',
    src: './assets/video_home_h264.mp4',
  },
  {
    type: 'video/webm',
    src: './assets/video_home_webm.webm',
  },
];

// Función para detectar el navegador
function detectBrowser() {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('chrome') > -1) {
    return 'chrome';
  } else if (userAgent.indexOf('safari') > -1) {
    return 'safari';
  } else {
    return 'other';
  }
}

// Función para seleccionar la fuente compatible
function selectSource(browser) {
  for (const source of sources) {
    if (source.type.indexOf(browser) > -1) {
      return source;
    }
  }
  return null;
}

// Obtener el navegador del usuario
const browser = detectBrowser();

// Seleccionar la fuente compatible
const selectedSource = selectSource(browser);

// Si se encontró una fuente compatible, asignarla al elemento de video
if (selectedSource) {
  videoElement.src = selectedSource.src;
  videoElement.play();
} else {
  // Mostrar un mensaje de error si no se encontró una fuente compatible
  console.error('No se encontró una fuente de video compatible con este navegador.');
}
