let audio = new Audio('./cat.wav');
let init = false 
window.onclick = () => {
    if(!init){
      audio.play();
      
      setTimeout(() => {
        window.location.href = 'https://youtu.be/YRvOePz2OqQ?si=o9vGc4qX023bam2k';
      }, 28000)
    }
}