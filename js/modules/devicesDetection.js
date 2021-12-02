  const d = document,
n = navigator,
ua = n.userAgent;
export default function userAgent(user) {
  const $user = d.getElementById(user),
  isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/ios|ipad|ipod|iphone/i),
    any: function () {
      return this.android() || this.ios();
    },
  },
  isDesktop = { 
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac/i),
    windows: () => ua.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    },
  },
  isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opera mini/i),
    ie: () => ua.match(/msie|iemobile/i),
    edge: () => ua.match(/edge/i),
    any: function () {
      return (
        this.chrome() ||
        this.safari() ||
        this.firefox() ||
        this.opera() ||
        this.ie() ||
        this.edge()
      );
    },
  };

  $user.innerHTML = `<ul>
  <li><b>userAgent: </b>${ua}</li>
  <li><b>platform: </b>${isMobile.any() || isDesktop.any()}</li>
  <li><b>navigator: </b>${isBrowser.any()}</li>`;

  if (isDesktop.windows()) {
    $user.firstChild.innerHTML += `<li><mark>You're cool! you are using a desktop windows SO :)</mark></li>`;
  };  

  if (isBrowser.ie()) location.href = 'https://www.mozilla.org/es-MX/firefox/new/';
}