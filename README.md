# 안성현 선생님 물리 수업 사이트 — 인계 묶음

## 폴더 구성
- `design/` : 디자인 시안 4개 (Main, Overview, Review, Ask). 화면의 모양·문구·색의 기준입니다.
- `links.csv` : 학생용 구글 폼 링크 30개 (선수 개념 점검 15, 학습 개념 점검 15). **학생용 링크만** 들어 있습니다.
- `build/` : 복습 카드 15개의 내용 데이터(`review_data.py`)와 생성 스크립트. 내용 수정은 여기서 합니다.
- `images/` : `class-sketch.png`(수업 장면 스케치), `teacher-portrait.png`(선생님 초상)

## 지켜야 할 것 (개인정보·보안)
- 공개 저장소(GitHub Pages)에 올라가므로 아래는 절대 넣지 않습니다.
  폼 편집 링크, 정답·해설이 있는 문항 파일, Apps Script 코드, 학생 명단·이메일, 비밀번호·토큰, 교과서·출판사 자료.
- 사이트에 들어가는 구글 폼 링크는 `links.csv`의 학생용 링크(`/viewform`)만 씁니다.
- 검색 노출을 막기 위해 모든 페이지에 `<meta name="robots" content="noindex">`를 넣습니다.

## 색 체계
- 기본: Navy #005DAA, Blue #007DC3, Sky #13B5EA
- 대단원 배경: I `#B8D0E8`(테두리 #005DAA) / II `#BDEBFA`(#13B5EA) / III `#D3E7F6`(#007DC3)
