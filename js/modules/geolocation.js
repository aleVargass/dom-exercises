export default function geolocation(info) {
  const $info = document.getElementById(info)

  const success = position => {
    let { latitude, longitude, accuracy } = position.coords;

    $info.innerHTML = `Your current position is:<br>
    <b>Latitude</b> ${latitude}<br>
    <b>Longitude:</b> ${longitude}<br>
    <b>Accuracy:</b> ${accuracy} meters<br><br><br>
    <a href='https://www.google.com/maps/@${latitude},${longitude}, 15z' target='_blank' rel='noopener'>Go to coords</a>`
  };

  const error = err => $info.innerHTML = `<p> <mark>Error ${err.code}: ${err.message}</mark></p>`;
  
  const options =  {
    enableHighAcurracy: true,
    timeout: 5000,
    maximunAge: 0
  };


  navigator.geolocation.getCurrentPosition(success, error, options);
}