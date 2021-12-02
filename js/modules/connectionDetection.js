const d  = document,
n = navigator;
export default function connectionDetection(msg) {
const $msg = d.querySelector(msg);

  addEventListener('online', e => {
    $msg.textContent = `Conexión reestablecida`;
    $msg.classList.add('online');
    setTimeout(() => {
      $msg.classList.remove('online')
    }, 2000);
  })
  
  addEventListener('offline', e => {
    $msg.textContent = `Conexión perdida`;
    $msg.classList.add('offline');
    setTimeout(() => {
      $msg.classList.remove('offline')
    }, 2000)
  })
  }