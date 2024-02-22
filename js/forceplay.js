function makeURL(object) {
    return (window.URL) ? window.URL.createObjectURL(object) :    
    window.webkitURL.createObjectURL(object);
  }

  async function display(videoStream){
    var myvideo = document.getElementById('ForcePlay');
    let blob = await fetch(videoStream).then(r => r.blob());
    var videoUrl= makeURL(blob);
    myvideo.src = videoUrl;
  }

  display('./assets/video_home_h264.mp4');