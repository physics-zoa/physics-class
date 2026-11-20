/* ================================================================
   모든 페이지 공통 동작
   1) 점검 링크(data-form)에 구글 폼 주소 채우기 → 새 탭으로 열기
   2) $ $ 사이의 공식을 KaTeX로 보기 좋게 표시
   3) 주소 끝에 #review-I-01 처럼 붙어 있으면 그 카드를 펼치고 이동
   ================================================================ */
(function () {
  /* 1) 구글 폼 링크: data/review-data.js 의 prereq / diag 를 씁니다 */
  var byCode = {};
  (window.REVIEW_CARDS || []).forEach(function (c) { byCode[c.code] = c; });
  document.querySelectorAll("a[data-form]").forEach(function (a) {
    var c = byCode[a.getAttribute("data-code")];
    var url = c && c[a.getAttribute("data-form")];
    if (url) {
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
    }
  });

  /* 2) 공식 표시 */
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [{ left: "$", right: "$", display: false }],
      throwOnError: false,
      strict: "ignore"
    });
  }

  /* 3) #review-... 카드 자동 펼침 */
  function openFromHash(smooth) {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    var t = document.getElementById(id);
    if (!t) return;
    if (t.tagName === "DETAILS") t.open = true;
    t.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  }
  openFromHash(false);
  // 글꼴이 늦게 불러와져 위치가 밀릴 수 있어 한 번 더 맞춥니다
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { openFromHash(false); });
  }
  window.addEventListener("hashchange", function () { openFromHash(true); });
})();
