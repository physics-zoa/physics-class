/* ================================================================
   복습 카드 모양 (템플릿)
   data/review-data.js 의 내용을 읽어 복습하기 페이지에 카드를 그립니다.
   글을 고칠 때는 이 파일이 아니라 data/review-data.js 를 고치세요.
   ================================================================ */
(function () {
  var units = window.REVIEW_UNITS || [];
  var cards = window.REVIEW_CARDS || [];
  var bandsBox = document.getElementById("review-bands");
  var bannerBox = document.getElementById("review-banner");
  if (!bandsBox) return;

  /* 작은 도우미: 태그 만들기 */
  function el(tag, style, text) {
    var e = document.createElement(tag);
    if (style) e.setAttribute("style", style);
    if (text != null) e.textContent = text; // 글은 그대로(태그로 해석하지 않음) 넣습니다
    return e;
  }

  function formLink(kind, code, label, count) {
    var a = el("a");
    a.className = "lk";
    a.setAttribute("data-form", kind);   // site.js 가 실제 구글 폼 주소를 채웁니다
    a.setAttribute("data-code", code);
    a.appendChild(el("span", null, label));
    a.appendChild(el("span", "font-weight:400; color:#5A606A; font-size:13px", count));
    return a;
  }

  function card(c, first) {
    var num = c.code.split("-")[1];
    var d = el("details", "background:#FFFFFF; border:1px solid #B9D3E8; scroll-margin-top:16px");
    d.id = "review-" + c.code;
    if (first) d.open = true;

    var s = el("summary", "list-style:none; display:flex; justify-content:space-between; align-items:center; gap:12px; padding:16px 20px; font-weight:700; font-size:17px; color:#005DAA");
    s.appendChild(el("span", null, num + " " + c.name));
    var chev = el("span", "font-size:13px; color:#5A606A", "▼");
    chev.className = "chev";
    s.appendChild(chev);
    d.appendChild(s);

    var body = el("div", "padding:4px 20px 20px; border-top:1px solid #E1E7EE");

    body.appendChild(el("div", "font-weight:700; margin:14px 0 8px", "핵심 개념"));
    var ul = el("ul", "margin:0; padding-left:20px; font-size:15px; color:#2A2E35");
    (c.concepts || []).forEach(function (t) {
      ul.appendChild(el("li", "margin-bottom:6px", t));
    });
    body.appendChild(ul);

    body.appendChild(el("div", "font-weight:700; margin:16px 0 4px", "주요 공식"));
    if (c.formulas && c.formulas.length) {
      var box = el("div");
      c.formulas.forEach(function (f) {
        var row = el("div", "display:flex; flex-wrap:wrap; gap:6px 14px; align-items:baseline; padding:8px 0; border-bottom:1px solid #E1E7EE");
        var chip = el("span", "font-weight:700; color:#005DAA; background:#F5F8FB; border:1px solid #B9D3E8; padding:3px 10px; font-size:15px", f[0]);
        chip.className = "fm-chip";
        row.appendChild(chip);
        row.appendChild(el("span", "font-size:14px; color:#4A5059", f[1]));
        box.appendChild(row);
      });
      body.appendChild(box);
    } else {
      body.appendChild(el("div", "font-size:14px; color:#4A5059; background:#F5F8FB; border:1px dashed #B9D3E8; padding:10px 12px", c.note || ""));
    }

    /* 수업 자료: materials 가 있으면 링크, 없으면 "준비 중" */
    if (c.materials && c.materials.length) {
      var mat = el("div", "display:flex; flex-direction:column; gap:8px; font-size:15px; margin-top:16px");
      c.materials.forEach(function (m) {
        var a = el("a");
        a.className = "lk";
        a.href = m.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.appendChild(el("span", null, m.label));
        mat.appendChild(a);
      });
      body.appendChild(mat);
    } else {
      body.appendChild(el("div", "margin-top:16px; padding:12px; border:1px dashed #B9D3E8; color:#5A606A; font-size:14px; text-align:center", "수업 PPT · 실험 영상은 준비 중입니다"));
    }

    var links = el("div", "display:flex; flex-direction:column; gap:8px; font-size:15px; margin-top:14px");
    links.appendChild(formLink("prereq", c.code, "선수 개념 점검", "3문항"));
    links.appendChild(formLink("diag", c.code, "학습 개념 점검", "9문항"));
    body.appendChild(links);

    d.appendChild(body);
    return d;
  }

  units.forEach(function (u, i) {
    /* 위쪽 파란 배너의 대단원 바로가기 */
    if (bannerBox) {
      var bn = el("a", "color:#FFFFFF; text-decoration:none; font-weight:700; font-size:16px");
      bn.className = "bn";
      bn.href = "#rv-unit-" + u.id;
      bn.appendChild(el("span", "display:inline-block; width:12px; height:12px; background:" + u.dot + "; border:2px solid #FFFFFF; margin-right:8px; vertical-align:-1px"));
      bn.appendChild(document.createTextNode(u.title));
      bannerBox.appendChild(bn);
    }

    /* 대단원 색 띠 */
    var band = el("div", "background:" + u.bg + "; border-top:4px solid " + u.border + "; margin-top:" + (i === 0 ? 44 : 0) + "px; padding:28px 0 32px");
    var inner = el("div", "max-width:1100px; margin:0 auto; padding:0 24px");
    var h2 = el("h2", "font-family:'Noto Serif KR',serif; font-weight:700; font-size:26px; margin:0 0 6px; color:#005DAA; border-left:6px solid " + u.border + "; padding-left:12px; scroll-margin-top:16px", u.title);
    h2.id = "rv-unit-" + u.id;
    inner.appendChild(h2);
    inner.appendChild(el("div", "font-size:15px; color:#4A5059; margin-bottom:16px", u.sub));
    var list = el("div", "display:flex; flex-direction:column; gap:12px");
    cards.filter(function (c) { return c.code.split("-")[0] === u.id; })
         .forEach(function (c) { list.appendChild(card(c, c.code === "I-01")); });
    inner.appendChild(list);
    band.appendChild(inner);
    bandsBox.appendChild(band);
  });
})();
