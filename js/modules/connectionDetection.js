export default function connectionDetection() {
  const $cross = document.querySelector(".fa-times");

  addEventListener('online', e => {
    $cross.style.color = "#e63946";
  })
  
  addEventListener('offline', e => {
    $cross.style.color = "#f0ffff";
  })

}