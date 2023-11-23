(() => {
  //ここに命令を書く
  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]");
  const $content = $tab.querySelectorAll("[data-content]");

  //初期化
  const init = () => {
    $content[0].style.display = "block";
  };
  init();

  //クリックしたら起こるイベント
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked!");
  };
  $nav[0].addEventListener("click", (e) => handleClick(e));
})();
