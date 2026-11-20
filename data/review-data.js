/* ================================================================
   복습 카드 내용 (데이터)
   ----------------------------------------------------------------
   복습하기 페이지의 글은 이 파일만 고치면 바뀝니다.
   모양(색·배치)은 js/review.js 에 있으니 건드리지 않아도 됩니다.
   수업 개요 페이지의 점검 폼 링크도 이 파일의 prereq / diag 를 씁니다.

   ■ 고칠 때 주의
   - 글은 큰따옴표 "  " 안에 씁니다. 항목 사이에는 쉼표(,)를 둡니다.
   - 공식은 $ $ 사이에 KaTeX(LaTeX) 문법으로 씁니다.
       예) $F = ma$   $a = \dfrac{v^2}{r}$   $v_0$   $\sqrt{2GM/R}$
     공식이 들어간 글은 큰따옴표 대신 tex`  ` 로 감쌉니다.
     (그래야 \dfrac 같은 역슬래시가 그대로 전달됩니다.)
   - formulas 의 한 줄은 [ "네모 칸에 들어갈 글", "옆에 붙는 설명" ] 입니다.
   - formulas 가 없으면 null 로 두고 note 에 안내 문장을 씁니다.
   - materials 에 자료를 넣으면 "준비 중입니다" 문구가 사라지고 링크가 보입니다.
       예) materials: [
             { label: "수업 PPT", url: "https://..." },
             { label: "실험 영상", url: "https://..." }
           ],
   - prereq = 선수 개념 점검(학생용 구글 폼 /viewform 링크)
     diag   = 학습 개념 점검(학생용 구글 폼 /viewform 링크)
     ※ 폼 "편집" 링크(/edit)는 절대 넣지 마세요.
   ================================================================ */
var tex = String.raw;

/* 대단원 (띠 색, 제목, 한 줄 설명) */
window.REVIEW_UNITS = [
  { id: "I",   title: "I. 시공간과 운동",   bg: "#B8D0E8", border: "#005DAA", dot: "#005DAA",
    sub: "운동의 원인을 수식으로 풀고, 중력과 시공간까지" },
  { id: "II",  title: "II. 열과 에너지",    bg: "#BDEBFA", border: "#13B5EA", dot: "#13B5EA",
    sub: "분자의 운동으로 열과 에너지의 흐름을 이해" },
  { id: "III", title: "III. 탄성파와 소리", bg: "#D3E7F6", border: "#007DC3", dot: "#007DC3",
    sub: "진동이 파동이 되어 소리로 들리기까지" }
];

/* 소단원 복습 카드 15개 (code 앞부분 I / II / III 로 대단원이 정해집니다) */
window.REVIEW_CARDS = [
{
  code: "I-01", name: "힘과 운동",
  concepts: [
    "물체에 여러 힘이 작용할 때 힘의 합을 알짜힘(합력)이라고 합니다. 알짜힘이 0이면 정지 또는 등속도 운동을 합니다.",
    "알짜힘이 0이 아니면 알짜힘의 방향으로 가속도가 생기고, 가속도는 질량에 반비례합니다.",
    "수직 항력은 면이 물체를 떠받치는 힘, 마찰력은 운동(또는 운동하려는 방향)을 방해하는 힘, 장력은 줄이 당기는 힘입니다.",
    "힘은 벡터여서 합성과 분해를 할 수 있습니다. 서로 수직인 두 힘의 합력은 피타고라스 정리로 구합니다."
  ],
  formulas: [
    [tex`$F = ma$`, "알짜힘 = 질량 × 가속도"],
    [tex`$f = \mu N$`, "운동 마찰력 = 마찰 계수 × 수직 항력"],
    [tex`$F = \sqrt{F_1^2 + F_2^2}$`, "서로 수직인 두 힘의 합력"]
  ],
  note: null,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLSclW4pJ7HsXtIAL8OUEVURh7_uK1wBpgP2GzzX5v30HjgEyUA/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLSe2gf8IxbXo1CGNrLFDNEd5WkRkXX3_GALOComojS4WwMDgnw/viewform"
},
{
  code: "I-02", name: "포물선 운동",
  concepts: [
    "공기 저항을 무시하면 던진 물체에는 중력만 작용합니다. 그래서 수평 방향은 등속도 운동, 연직 방향은 등가속도 운동입니다.",
    "두 방향의 운동은 서로 영향을 주지 않으므로 따로 계산한 뒤 합칩니다.",
    "비스듬히 던진 물체는 최고점에서 속도의 연직 성분만 0이고, 수평 성분은 그대로입니다.",
    "포물선 운동에서도 역학적 에너지(운동 에너지 + 위치 에너지)는 보존됩니다."
  ],
  formulas: [
    [tex`$x = v_0 t$`, "수평으로 던진 물체의 수평 이동 거리"],
    [tex`$y = \dfrac{1}{2}gt^2$`, "수평으로 던진 물체의 연직 낙하 거리"],
    [tex`$\dfrac{1}{2}mv^2 + mgh = \text{일정}$`, "역학적 에너지 보존"]
  ],
  note: null,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLSdLL2L9I3AJzICqZH1kK6FMoWu18pi5aJfYjgFH0vwGVjLB5Q/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLScrNj9U4wvaYPWgndU0ijr2GKg91sYw0tBIlB5E3WUHAoHVOA/viewform"
},
{
  code: "I-03", name: "원운동",
  concepts: [
    "등속 원운동은 속력은 일정하지만 운동 방향이 계속 바뀌어 속도가 변하는 운동입니다. 따라서 가속도가 있습니다.",
    "구심 가속도와 구심력의 방향은 항상 원의 중심입니다.",
    "구심력은 새로 생기는 힘이 아니라 장력, 중력, 마찰력 등이 구심력의 역할을 하는 것입니다.",
    "각속도는 단위 시간에 회전한 각도입니다. 주기가 짧을수록 각속도가 큽니다."
  ],
  formulas: [
    [tex`$v = r\omega$`, "속력 = 반지름 × 각속도"],
    [tex`$a = \dfrac{v^2}{r}$`, "구심 가속도"],
    [tex`$F = \dfrac{mv^2}{r}$`, "구심력"]
  ],
  note: null,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLSdGUQNtwhm7n77eitHmmmv8oUqg1dgPA5tDRL5-yvm7yjFPeg/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLSdyi67Knq6nhsI15sgLcaD5T-ESUVRN-b8m7S9btw_akKS7Dw/viewform"
},
{
  code: "I-04", name: "천체의 운동과 중력",
  concepts: [
    "케플러 법칙: ① 행성은 태양을 한 초점으로 하는 타원 궤도를 돕니다. ② 태양에 가까울수록 빠르게 움직입니다(면적 속도 일정). ③ 공전 주기의 제곱은 긴반지름의 세제곱에 비례합니다.",
    "만유인력: 질량이 있는 모든 물체 사이에는 서로 끌어당기는 힘이 작용하고, 질량의 곱에 비례하며 거리의 제곱에 반비례합니다.",
    "인공위성이 원 궤도를 도는 것은 중력이 구심력의 역할을 하기 때문입니다.",
    "탈출 속도는 천체의 중력을 벗어나기 위한 최소 속도로, 물체의 질량과는 관계가 없습니다."
  ],
  formulas: [
    [tex`$F = \dfrac{GMm}{r^2}$`, "만유인력"],
    [tex`$T^2 \propto a^3$`, "케플러 제3법칙"],
    [tex`$v = \sqrt{\dfrac{2GM}{R}}$`, "탈출 속도"]
  ],
  note: null,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLSez5TvESwviJyPxKw-Gtc2k0nJvYbP9VUYnYkSMSd06c2bSsQ/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLScUGQjbA8B6LvcwMTPpXgExbPvR3aneizFhmtj7TLZc_wud1A/viewform"
},
{
  code: "I-05", name: "일반 상대성 이론",
  concepts: [
    "가속하는 좌표계에서는 관성력이 나타나며, 관성력과 중력은 구별할 수 없습니다. 이것이 등가 원리입니다.",
    "일반 상대성 이론은 중력을 질량에 의해 시공간이 휘어진 결과로 설명합니다.",
    "휘어진 시공간 때문에 빛도 휘어지며, 먼 은하의 상이 여러 개로 보이기도 합니다(중력 렌즈 효과).",
    "중력이 강한 곳에서는 시간이 느리게 흐릅니다(중력 시간 지연). 블랙홀 근처에서 특히 뚜렷합니다."
  ],
  formulas: null,
  note: tex`공식보다 개념 중심인 소단원입니다. 관성력의 크기는 $F = ma$(좌표계의 가속도 $a$)로 구합니다.`,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLScCfzVVMuXJjfGg1f-dERzuwBKeRTO8s6M41h5Ap3EQ5bnGZw/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLSc5vtLjzzNS5rdSjnDkjrnAYQLSRoqDUWgp5J6YIExXBJfSaw/viewform"
},
{
  code: "II-01", name: "열과 우리 생활",
  concepts: [
    "열은 고온의 물체에서 저온의 물체로 이동하며, 이동 방식에는 전도(입자 충돌로 전달), 대류(유체가 직접 이동), 복사(매질 없이 전자기파로 전달)가 있습니다.",
    "두 물체의 온도가 같아져 더 이상 열이 이동하지 않는 상태를 열평형이라고 합니다.",
    "단열은 열의 이동을 줄이는 것으로, 열전도율이 작은 재료를 사용합니다.",
    "물체의 온도가 올라가면 길이나 부피가 늘어납니다(열팽창). 물질마다 늘어나는 정도가 다릅니다."
  ],
  formulas: [
    [tex`$Q = cm\Delta T$`, "열량 = 비열 × 질량 × 온도 변화"],
    [tex`$\Delta L = \alpha L_0 \Delta T$`, tex`막대의 늘어난 길이 ($\alpha$는 선팽창 계수)`],
    ["열평형 온도", "고온 물체가 잃은 열량 = 저온 물체가 얻은 열량"]
  ],
  note: null,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLScXCybfTGPRiW63SOGnYnvTUfK7-p_mSSgPyXMoajQJLUXnBw/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLSeSEl3rfM1zS06TWcQJDEWMDFfwr5fJ6c5eUsOrAkcA9Owskw/viewform"
},
{
  code: "II-02", name: "이상 기체 법칙",
  concepts: [
    "물질이 상태가 변하는 동안에는 열을 가해도 온도가 변하지 않습니다. 이때 출입하는 열을 잠열이라고 합니다.",
    "보일 법칙: 온도가 일정할 때 기체의 압력과 부피는 반비례합니다.",
    "샤를 법칙: 압력이 일정할 때 기체의 부피는 절대 온도에 비례합니다.",
    "보일·샤를 법칙을 합치면 이상 기체 법칙이 됩니다. 절대 온도(K) = 섭씨 온도(℃) + 273 입니다."
  ],
  formulas: [
    [tex`$Q = cm\Delta T$`, "온도 변화에 필요한 열량"],
    [tex`$P_1V_1 = P_2V_2$`, "보일 법칙 (온도 일정)"],
    [tex`$\dfrac{V}{T} = \text{일정}$`, "샤를 법칙 (압력 일정)"],
    [tex`$PV = nRT$`, "이상 기체 상태 방정식"]
  ],
  note: null,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLScPRaVIwDmAg6L_E4TAcqhP0RpoQ6EU-cRyupx2y3srB8Icdg/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLSf-RP467bOG3R086_TExA8NA-qaPpeaEnkWIyeRpVK2i3xGTw/viewform"
},
{
  code: "II-03", name: "열역학 제1법칙",
  concepts: [
    "열역학 제1법칙은 열을 포함한 에너지 보존 법칙입니다. 기체가 흡수한 열은 내부 에너지 증가와 기체가 외부에 한 일로 쓰입니다.",
    "이상 기체의 내부 에너지는 절대 온도에 비례합니다. 온도가 변하지 않으면 내부 에너지도 변하지 않습니다.",
    "등적 과정: 부피 일정, 한 일 = 0. 등압 과정: 압력 일정. 등온 과정: 온도 일정, ΔU = 0. 단열 과정: 열 출입 없음, Q = 0.",
    "단열 팽창하면 온도가 내려가고, 단열 압축하면 온도가 올라갑니다."
  ],
  formulas: [
    [tex`$Q = \Delta U + W$`, "열역학 제1법칙"],
    [tex`$W = P\Delta V$`, "압력이 일정할 때 기체가 한 일"]
  ],
  note: null,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLSdAr7VAYzDYQz5ZPfVlLhaE2V16-g3ZjgZB3zRhYUASDn7PAA/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLScLqnPYyrpDV7ZsLZAAHO1vtxMhigLsyHUhWdygpCGkCAqtsA/viewform"
},
{
  code: "II-04", name: "열기관과 열효율",
  concepts: [
    "열기관은 고열원에서 열을 흡수해 일을 하고, 나머지 열을 저열원으로 방출하는 장치입니다.",
    "연료를 기관 밖에서 연소시키면 외연 기관(증기 기관), 안에서 연소시키면 내연 기관(가솔린·디젤 기관)입니다.",
    "열기관이 한 번 순환하면 처음 상태로 돌아오므로 내부 에너지 변화는 0입니다.",
    "열효율은 흡수한 열 중 일로 바뀐 비율이며, 항상 1보다 작습니다."
  ],
  formulas: [
    [tex`$W = Q_H - Q_L$`, "한 번 순환하는 동안 한 일"],
    [tex`$e = \dfrac{W}{Q_H} = 1 - \dfrac{Q_L}{Q_H}$`, "열효율"]
  ],
  note: null,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLScfE8xjV1w5-hsK63ZG1NACLo8Sl7LVt6Lo4l-Ul6hAZzUtMw/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLSfBTuxLP6748lrBkeio5si8RLPWi_SrzT5Ol3K8lgLWFE96tA/viewform"
},
{
  code: "II-05", name: "열역학 제2법칙",
  concepts: [
    "저절로 일어나는 변화는 한쪽 방향으로만 일어나며 되돌릴 수 없습니다. 이런 현상을 비가역 현상이라고 합니다.",
    "열은 저절로 고온에서 저온으로만 이동합니다.",
    "엔트로피는 무질서한 정도를 나타내며, 가능한 상태의 수가 많을수록 큽니다.",
    "열역학 제2법칙: 고립계에서 자발적인 변화는 엔트로피가 증가하는 방향으로 일어납니다. 열효율이 1인 열기관은 만들 수 없습니다."
  ],
  formulas: null,
  note: tex`공식보다 개념 중심인 소단원입니다. 엔트로피 변화는 고립계에서 $\Delta S \ge 0$ 으로 나타냅니다.`,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLSeBOccFEPCvquHdjlsQa9ZbXi0IAT3YSH2ugD7cNbtvpkehAw/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLSfSNU5PANG74tXx2pzcMUsnhj5ru161zpc6ftIhibnOkOgVRw/viewform"
},
{
  code: "III-01", name: "단진동",
  concepts: [
    "단진동은 평형점을 중심으로 왕복하는 운동으로, 변위에 비례하고 반대 방향인 복원력이 작용합니다.",
    "평형점에서는 속력이 최대이고 가속도는 0입니다. 변위가 최대인 지점에서는 속력이 0이고 가속도의 크기가 최대입니다.",
    "주기는 한 번 왕복하는 데 걸리는 시간, 진동수는 1초 동안의 진동 횟수이며 서로 역수입니다.",
    "용수철 진자의 주기는 질량이 클수록 길고 용수철 상수가 클수록 짧습니다."
  ],
  formulas: [
    [tex`$F = -kx$`, "훅의 법칙(복원력)"],
    [tex`$T = 2\pi\sqrt{\dfrac{m}{k}}$`, "용수철 진자의 주기"],
    [tex`$f = \dfrac{1}{T}$`, "진동수와 주기의 관계"]
  ],
  note: null,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLSdoaCRQSh1uF7pcFVLDTJdFXRMmaRSM1RYCF-MvXbg3kjc8OQ/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLSeo2XzaOTrVOtOM_K5IESgW_DcoGAoIYlXnb_8GVaKQQikLGw/viewform"
},
{
  code: "III-02", name: "탄성파의 진행과 활용",
  concepts: [
    "탄성파는 매질의 진동이 전해지는 파동입니다. 진동 방향이 진행 방향과 수직이면 횡파, 나란하면 종파입니다. 소리는 종파입니다.",
    "줄의 고정단에서는 펄스가 위상이 반대로 반사되고, 자유단에서는 같은 위상으로 반사됩니다.",
    "파동의 속력은 매질이 정해지면 일정하고, 진동수가 늘면 파장이 짧아집니다.",
    "초음파를 쏘고 반사돼 돌아오는 시간을 재면 물체까지의 거리를 알 수 있습니다(초음파 검사, 소나 등)."
  ],
  formulas: [
    [tex`$v = f\lambda$`, "파동의 속력 = 진동수 × 파장"],
    [tex`$v = \dfrac{\lambda}{T}$`, "주기와 파장으로 나타낸 속력"],
    [tex`$d = \dfrac{vt}{2}$`, tex`초음파로 재는 거리 ($t$는 왕복 시간)`]
  ],
  note: null,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLSckCp-KZ39b3Ai3tpTXlzT8HSQKTl8aNHdGZEur6HEm0eqV-w/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLSeYkWFiaAFG6wZmhwL1Tm_0LJxBSYbEcPkGqBU7CMfot23a4A/viewform"
},
{
  code: "III-03", name: "도플러 효과",
  concepts: [
    "음원이나 관찰자가 움직이면 관찰자가 듣는 소리의 진동수가 원래보다 달라지는 현상이 도플러 효과입니다.",
    "음원과 관찰자가 가까워지면 진동수가 높아지고, 멀어지면 낮아집니다.",
    "소리의 세기나 속력이 변해서 일어나는 것이 아니라, 관찰자에게 도달하는 파면의 간격이 달라지기 때문입니다.",
    "속도 단속 레이더, 의료 초음파 혈류 측정 등에 활용됩니다."
  ],
  formulas: [
    ["음원이 다가올 때",   tex`$f' = f\,\dfrac{v}{v - v_s}$`],
    ["음원이 멀어질 때",   tex`$f' = f\,\dfrac{v}{v + v_s}$`],
    ["관찰자가 다가갈 때", tex`$f' = f\,\dfrac{v + v_o}{v}$`],
    ["관찰자가 멀어질 때", tex`$f' = f\,\dfrac{v - v_o}{v}$`]
  ],
  note: null,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLScXzKZZwrOzrl3HaKIbBMbX9mEN8sJaoKXlZsk9RG_gRpKSHw/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLScLv6td7KGYMkfU4zO0qlSNNgcBhHYseIS7T8lzVDnEO2hpsw/viewform"
},
{
  code: "III-04", name: "소리의 간섭",
  concepts: [
    "두 소리가 겹쳐지면 합성되어 진폭이 커지거나(보강 간섭) 작아집니다(상쇄 간섭).",
    "위상이 같은 두 음원에서 경로차가 파장의 정수배면 보강, 반파장의 홀수 배면 상쇄 간섭입니다.",
    "소음 제거 이어폰은 소음과 반대 위상의 소리를 내어 상쇄 간섭으로 소음을 줄입니다.",
    "경로차는 두 음원에서 관찰 지점까지 거리의 차입니다."
  ],
  formulas: [
    ["보강 간섭", tex`경로차 $= m\lambda \;\; (m = 0, 1, 2, \dots)$`],
    ["상쇄 간섭", tex`경로차 $= \left(m + \dfrac{1}{2}\right)\lambda$`],
    [tex`$\lambda = \dfrac{v}{f}$`, "소리의 파장"]
  ],
  note: null,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLSff1NDqJlCE7XISMrh4dVQq3yiDZ2c_Go2nDLdCXFA0KHySjQ/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLSeMYsi7Az4u9rKkzkxTnM4oHdS4fA63CRPdAf1_g77fIz3Twg/viewform"
},
{
  code: "III-05", name: "정상파",
  concepts: [
    "진동수와 진폭이 같은 두 파동이 반대 방향으로 진행하며 중첩되면 제자리에서 진동하는 정상파가 만들어집니다.",
    "진폭이 항상 0인 지점이 마디, 진폭이 최대인 지점이 배입니다.",
    "양 끝이 고정된 현에서는 양 끝이 마디이고, 한쪽 끝이 닫힌 관에서는 닫힌 쪽이 마디, 열린 쪽이 배입니다.",
    "현악기와 관악기의 소리는 정상파(기본 진동과 배진동)로 설명합니다."
  ],
  formulas: [
    [tex`$\lambda_n = \dfrac{2L}{n}$`, "양 끝 고정 현의 n번째 정상파의 파장"],
    [tex`$f_n = \dfrac{nv}{2L}$`, "양 끝 고정 현의 n번째 정상파의 진동수"],
    [tex`$\lambda = 4L$`, "한쪽 끝이 닫힌 관의 기본 진동 파장"]
  ],
  note: null,
  materials: [],
  prereq: "https://docs.google.com/forms/d/e/1FAIpQLSf0bObIVl2jrmGxNgsS5QAC3jRsh4uNT68_53fAvAOl4lp6gw/viewform",
  diag:   "https://docs.google.com/forms/d/e/1FAIpQLSeQBSZ_Q1k39oUK6cClPhheXxIvBLrw1H8HWOarSzE6mRsEgw/viewform"
}
];
