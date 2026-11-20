import sys; sys.path.insert(0,'.')
from review_data import R
U={"I":("I. 시공간과 운동","#B8D0E8","#005DAA","운동의 원인을 수식으로 풀고, 중력과 시공간까지"),
"II":("II. 열과 에너지","#BDEBFA","#13B5EA","분자의 운동으로 열과 에너지의 흐름을 이해"),
"III":("III. 탄성파와 소리","#D3E7F6","#007DC3","진동이 파동이 되어 소리로 들리기까지")}
LK='display:flex; justify-content:space-between; align-items:center; padding:9px 12px; border:1px solid #B9D3E8; background:#F5F8FB; color:#005DAA; font-weight:700; text-decoration:none'
def lk(h,t,n):return f'<a class="lk" href="{h}" style="{LK}"><span>{t}</span><span style="font-weight:400; color:#5A606A; font-size:13px">{n}</span></a>'
def card(code,first):
    name,bul,fm,note=R[code]
    num=code.split('-')[1]
    li="".join(f'<li style="margin-bottom:6px">{b}</li>' for b in bul)
    if fm:
        rows="".join(f'<div style="display:flex; flex-wrap:wrap; gap:6px 14px; align-items:baseline; padding:8px 0; border-bottom:1px solid #E1E7EE"><span style="font-weight:700; color:#005DAA; background:#F5F8FB; border:1px solid #B9D3E8; padding:3px 10px; font-size:15px">{a}</span><span style="font-size:14px; color:#4A5059">{b}</span></div>' for a,b in fm)
        f=f'<div>{rows}</div>'
    else:
        f=f'<div style="font-size:14px; color:#4A5059; background:#F5F8FB; border:1px dashed #B9D3E8; padding:10px 12px">{note}</div>'
    return f'''<details id="review-{code}" style="background:#FFFFFF; border:1px solid #B9D3E8; scroll-margin-top:16px"{" open" if first else ""}>
<summary style="list-style:none; display:flex; justify-content:space-between; align-items:center; padding:16px 20px; font-weight:700; font-size:17px; color:#005DAA"><span>{num} {name}</span><span class="chev" style="font-size:13px; color:#5A606A">▼</span></summary>
<div style="padding:4px 20px 20px; border-top:1px solid #E1E7EE">
<div style="font-weight:700; margin:14px 0 8px">핵심 개념</div>
<ul style="margin:0; padding-left:20px; font-size:15px; color:#2A2E35">{li}</ul>
<div style="font-weight:700; margin:16px 0 4px">주요 공식</div>
{f}
<div style="margin-top:16px; padding:12px; border:1px dashed #B9D3E8; color:#5A606A; font-size:14px; text-align:center">수업 PPT · 실험 영상은 준비 중입니다</div>
<div style="display:flex; flex-direction:column; gap:8px; font-size:15px; margin-top:14px">
{lk('#prereq-'+code,'선수 개념 점검','3문항')}
{lk('#diag-'+code,'학습 개념 점검','9문항')}
</div></div></details>
'''
bands="";banner=""
dots={"I":"#005DAA","II":"#13B5EA","III":"#007DC3"}
for u,(t,bg,bd,sub) in U.items():
    banner+=f'<a class="bn" href="#rv-unit-{u}" style="color:#FFFFFF; text-decoration:none; font-weight:700; font-size:16px"><span style="display:inline-block; width:12px; height:12px; background:{dots[u]}; border:2px solid #FFFFFF; margin-right:8px; vertical-align:-1px"></span>{t}</a>\n'
    cards="".join(card(c,c=="I-01") for c in R if c.startswith(u+"-"))
    bands+=f'''<div style="background:{bg}; border-top:4px solid {bd}; margin-top:{44 if u=="I" else 0}px; padding:28px 0 32px"><div style="max-width:1100px; margin:0 auto; padding:0 24px">
<h2 id="rv-unit-{u}" style="font-family:'Noto Serif KR',serif; font-weight:700; font-size:26px; margin:0 0 6px; color:#005DAA; border-left:6px solid {bd}; padding-left:12px; scroll-margin-top:16px">{t}</h2>
<div style="font-size:15px; color:#4A5059; margin-bottom:16px">{sub}</div>
<div style="display:flex; flex-direction:column; gap:12px">
{cards}</div></div></div>
'''
html=f'''<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>복습하기</title>
</head>
<body>
<x-dc>
<helmet>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Noto+Serif+KR:wght@500;700&display=swap" rel="stylesheet">
<style>
html{{scroll-behavior:smooth}}
body{{margin:0}}
a{{color:#005DAA}}a:hover{{color:#004A87}}
.nav a{{color:#2A2E35;text-decoration:none}}
.nav a:hover{{color:#005DAA}}
.bn:hover{{opacity:.85;text-decoration:underline !important}}
summary{{cursor:pointer}}summary::-webkit-details-marker{{display:none}}
details[open] .chev{{transform:rotate(180deg)}}
.lk:hover{{background:#E6F1FA !important; border-color:#007DC3 !important}}
</style>
</helmet>
<div style="background:#F5F8FB; color:#1F2328; font-family:'Noto Sans KR',sans-serif; line-height:1.7; min-height:100%">

<div style="height:6px; background:#005DAA"></div>
<div style="height:3px; background:#13B5EA"></div>
<div class="nav" style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; max-width:1100px; margin:0 auto; padding:20px 24px">
<div style="font-family:'Noto Serif KR',serif; font-weight:700; font-size:18px; color:#005DAA">안성현의 물리 교실</div>
<div style="display:flex; gap:24px; flex-wrap:wrap; font-size:15px">
<a href="#intro">선생님 소개</a>
<a href="#overview">수업 개요</a>
<a href="#unitmap">선수 개념 점검</a>
<a href="#review" style="color:#005DAA; font-weight:700">복습하기</a>
<a href="#unitmap">학습 개념 점검</a>
<a href="#ask">질문 창구</a>
</div>
</div>

<div id="review" style="max-width:1100px; margin:24px auto 0; padding:0 24px">
<div style="background:#007DC3; color:#FFFFFF; padding:32px clamp(20px,4vw,40px)">
<div style="font-size:15px; margin-bottom:4px">복습하기</div>
<div style="font-family:'Noto Serif KR',serif; font-weight:700; font-size:clamp(24px,6vw,32px); line-height:1.4">소단원별 핵심 개념과 주요 공식</div>
<div style="font-size:15px; margin-top:8px">수업 전후에 카드를 눌러 펼쳐 보세요. 카드 아래에서 바로 점검 문항으로 이동할 수 있습니다.</div>
<div style="display:flex; flex-wrap:wrap; gap:8px 28px; margin-top:20px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.45)">
{banner}</div></div></div>
{bands}
<div style="max-width:1100px; margin:48px auto 0; padding:24px 24px 48px; border-top:1px solid #D5D8DD; font-size:14px; color:#5A606A; display:flex; flex-wrap:wrap; gap:8px 24px; justify-content:space-between">
<div>안성현 · 청원고등학교 물리</div>
<div>인스타그램 DM: physics_zoa</div>
</div>

</div>
</x-dc>
</body>
</html>
'''
open('../design/Review.dc.html','w',encoding='utf-8').write(html)
print(len(R),len(html))
