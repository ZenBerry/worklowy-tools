// use with Scripty Chrome extension:
// https://chrome.google.com/webstore/detail/scripty-javascript-inject/milkbiaeapddfnpenedfgbfdacpbcbam

let displayGlobalTags = true;

function flatSearch() {
  // flat search. Doesn't work from the injector for now cause the WF object is not accessible.
  // @TODO: try window.location = *single-lined file*
  // https://tools.knowledgewalls.com/online-multiline-to-single-line-converter

  function toastMsg(str, sec, err) {
    WF.showMessage(str, err);
    setTimeout(WF.hideMessage, (sec || 2) * 1000);
  }

  function fixFlatClicks(e) {
    if (
      document.querySelector(".page.searching") &&
      e.target &&
      e.target.parentNode &&
      e.target.parentNode.className.includes("bullet")
    ) {
      location.href = e.target.parentNode.hash;
      e.preventDefault();
    }
  }

  const css = `.page.searching .project .name{display:none}.page.searching .project.matches .name.matches,.page.searching .project.matches.noted .name,.page.searching .project.metaMatches .name{display:block}.page.searching .selected>.children>.project .project{margin:0 0 4px}.page.searching .children{margin:0;padding:0;border:0}.newMobileDesign .page.searching .selected .children .children{margin-left:-2px}.newMobileDesign .page.searching .selected .project>.name>.parentArrow{display:none}.newMobileDesign .page.searching .children .content{padding-right:0}`;
  const h = `data:text/css;charset=UTF-8,${encodeURIComponent(css)}`;
  const s = document.querySelector(`link[href="${h}"]`);
  const noSearch = WF.currentSearchQuery() === null;

  if (s) {
    if (noSearch) toastMsg(`FlatFlowy: ${s.disabled ? "ON" : "OFF"}`);
    return (s.disabled = !s.disabled);
  }

  const a = document.createElement("link");
  a.rel = "stylesheet";
  a.href = h;
  document.head.appendChild(a);

  if (!navigator.userAgent.includes("Mobile"))
    document.body.addEventListener("click", fixFlatClicks, false);

  if (noSearch) toastMsg("Flatflowy: ON");
}

function toggleTags() {

  function t1() { // turn on the tags fast, works globally
    console.clear();
    displayGlobalTags = true;
    document.querySelector('body').insertAdjacentHTML('beforeend', '<style>.contentTag { display: initial; }</style>');
    return 'Tags are now switched on';
  }

  function t0() { // turn off the tags fast, works globally
    displayGlobalTags = false;
    console.clear();
    document.querySelector('body').insertAdjacentHTML('beforeend', '<style>.contentTag { display: none; }</style>');
    return 'Tags are now switched off';
  }

  if (displayGlobalTags) {
    t0();
  } else {
    t1()
  }
}

document.addEventListener('keydown', function (e) {
  // Check if the Enter key is pressed (key code 13 or key name 'Enter')
  if (e.keyCode === 13 || e.key === 'Enter') {
    const text = e.target.querySelector('.innerContentContainer').textContent
    console.log(text);
    if (text.includes('>')) {
      e.preventDefault;
      const command = text.split('>').pop();
      if (command === 't') {
        toggleTags();
      } else if (command === 'f') {
        flatSearch();
      }
    }
  }
});