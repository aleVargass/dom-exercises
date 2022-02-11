const d = document,
$section4 = d.getElementById('section4');

export default function responsive(id, mq, mobileContent, desktopContent) {

  let breakpoint = matchMedia(mq);
  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = mobileContent;
    } else {
      d.getElementById(id).innerHTML = desktopContent;
    }
  };

  breakpoint.addEventListener('change', responsive);
  responsive(breakpoint);
}