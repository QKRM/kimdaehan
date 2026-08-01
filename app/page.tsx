"use client";

import { useEffect, useState } from "react";

const refrain =
  "김대한그는누구인가2000년생으로서울특별시에서태어나고등학교시절1학년부터주전을꿰차며4할6푼대타율로이부분2위에올랐다시즌말까지당시3학년선배김혜성과이영민타격상을두고경쟁을치뤘으나당시타율0.4이승엽이더높았고20타석가량더들어선김혜성에게아쉽게밀렸다1학년따리가3학년그것도후에메이저리그포스팅을선언할진짜재능에게비볐다는소리다더군다나당시출루율장타율OPS는더높을정도로엄청난모습을보였다.2018년에는타율5할OPS1.502를기록하며백인천타격상을수상했다참고로2021년에이상을받은김도영의타율.428OPS1.128보다훨씬높았던것이다거기다조야제약프로야구시상식에서아마추어MVP를받기도했다이활약은청소년대표팀에서도이어졌는데후에홈런왕이되는노시환을제끼고청소년국가대표4번타자를먹었으며슈퍼라운드한일전에는지금까지회자되는쓰리런홈런이자그경기결승타를때려내는데때려낸투수가바로당해고시엔의최고스타요시다코에이였다이에당당히서울1번으로두산베어스1차지명을받았고3억5천만원으로당해최고액을받았는데참고로2024년신인김택연과황준서가3억5천으로똑같은금액을받았다배트스피드는정상급이라는평가를받아김태형에게존나칭찬받았으며당시고교야구를본모두가무조건터질선수이새끼가안터지면안된다라는평가를받았다파워수비어깨주루등등모든부분에서툴이있다는평가를받은파이브툴플레이어라고평가받았다프로에들어와2019년시즌내내안타를때려내지못하고군대행2022년돌아와7월3일KT이채호를상대로데뷔첫안타를때려냈으며물오른타격감을보이며7월12일신민혁을상대로데뷔첫홈런을때려냈다김대한의OPS는두산베어스한시대를빛냈던박건우김재환오재일김재호동나이대와비교해봤을때월등했던수준이었으며시즌마지막경기김태형의마지막경기오XX의은퇴식이있던날솔로홈런을때려내며두산팬들의희망임을입증했다";

type Story = {
  date: string;
  year: string;
  source: string;
  title: string;
  kicker: string;
  summary: string;
  quote?: string;
  url: string;
  image: string;
  credit: string;
};

const stories: Story[] = [
  {
    date: "2016. 08. 02",
    year: "2016",
    source: "스포츠서울",
    title: "열다섯의 태극마크",
    kicker: "U-15 세계청소년대회 · 조 1위",
    summary:
      "고교 1학년 중심의 한국 A팀이 3연승으로 8강에 올랐다. 김대한은 일본전 현장에서 코칭스태프와 호흡하며 투타 겸업 유망주의 첫 국제무대를 통과하고 있었다.",
    url: "https://www.sportsseoul.com/news/read/420921",
    image:
      "https://file.sportsseoul.com/news/legacy/2016/08/03/news/2016080301000145800008911.jpg",
    credit: "사진 스포츠서울 · 서울시야구협회 제공",
  },
  {
    date: "2016. 08. 04",
    year: "2016",
    source: "스포츠서울",
    title: "고1, 이미 147km",
    kicker: "U-15 세계청소년대회 · 투타 겸업",
    summary:
      "휘문고 1학년 김대한은 세계청소년대회에서 투수와 타자로 동시에 뛰었다. 이른 시기부터 시속 147km를 기록했고, 빠른 공과 강한 타격을 함께 가진 선수로 주목받았다.",
    quote: "“오승환 형이 부럽다.”",
    url: "https://www.sportsseoul.com/news/read/422022",
    image:
      "https://file.sportsseoul.com/news/legacy/2016/08/04/news/2016080401000262000017151.jpg",
    credit: "사진 스포츠서울 이웅희 기자",
  },
  {
    date: "2016. 08. 15",
    year: "2016",
    source: "한국일보",
    title: "1학년 2번 타자, 결승으로",
    kicker: "제44회 봉황대기 · 휘문고 우승 여정",
    summary:
      "경남고와의 준결승. 1회 이정후의 출루 뒤 김대한이 우전 안타로 기회를 이었다. 휘문고는 초반 3점을 만들고 결승에 진출했고, 김대한은 1학년부터 우승팀의 중심에 있었다.",
    url: "https://v.daum.net/v/20160815222649568",
    image:
      "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/201608/15/hankooki/20160815222648738gwto.jpg",
    credit: "사진 한국일보 오대근 기자",
  },
  {
    date: "2017. 12. 11",
    year: "2017",
    source: "고교야구 기록 아카이브",
    title: "2학년, 다음 서울 1차를 예고하다",
    kicker: "스카우팅 리포트 · 빠른 배트와 강한 어깨",
    summary:
      "1학년부터 투타에서 활약한 경력, 빠른 배트 스피드, 투수 출신의 송구 능력이 함께 기록됐다. 2018년 서울권 1차 지명 후보라는 전망이 이미 선명했다.",
    url: "https://mlbpark.donga.com/mp/b.php?b=kbotown&id=201712110011860975&p=1",
    image:
      "https://file.sportsseoul.com/news/legacy/2016/08/04/news/2016080401000262000017151.jpg",
    credit: "당시 공개 기록을 바탕으로 한 아카이브",
  },
  {
    date: "2018. 06. 22",
    year: "2018",
    source: "케이비리포트",
    title: "서울에서 가장 먼저 불릴 이름",
    kicker: "1차 지명 프리뷰 · 5툴 플레이어",
    summary:
      "150km의 공을 던질 수 있는 어깨, 타격에 전념하며 보여준 생산력, 수비와 주루까지. 현장 평가는 김대한을 투타 어느 쪽으로도 1차 지명감인 서울권 최고 유망주로 모았다.",
    url: "https://v.daum.net/v/20180622125410445",
    image:
      "https://img1.daumcdn.net/thumb/S800x400/?fname=https://t1.daumcdn.net/news/201806/22/daumsports/20180622004451709ctwu.jpeg",
    credit: "사진 케이비리포트 · 유선영",
  },
  {
    date: "2018. 06. 25",
    year: "2018",
    source: "OSEN",
    title: "두산 베어스, 고민 없이 김대한",
    kicker: "2019 신인 1차 지명 · 서울 1순위",
    summary:
      "두산은 첫 선택으로 휘문고 외야수 겸 투수 김대한을 지명했다. 당시 기록은 타율 0.545, OPS 1.530. 구단은 양쪽 모두의 자질과 ‘두산을 대표할 선수’로서의 가능성을 강조했다.",
    quote: "“기회를 주신다면 신인왕, 자신 있다.”",
    url: "https://www.osen.co.kr/article/G1110932798",
    image:
      "https://file.osen.co.kr/article_thumb/2018/06/25/201806251426771429_5b30846d7f2d3_300x.jpg",
    credit: "사진 OSEN 최규한 기자",
  },
  {
    date: "2018. 06. 26",
    year: "2018",
    source: "스포티비뉴스",
    title: "재능보다 먼저, 좋아하는 마음",
    kicker: "선수의 시작 · 가족이 기억한 야구",
    summary:
      "2009년 WBC를 본 뒤 야구선수가 되겠다고 한 아이. 힘든 선수 생활을 걱정한 가족 앞에서도 한 번도 야구가 하기 싫다고 말하지 않았다는 이야기가 1차 지명 다음 날 전해졌다.",
    url: "https://v.daum.net/v/ol3UFxS354",
    image:
      "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/201806/26/spotvnews/20180626111345677rbmt.jpg",
    credit: "사진 두산 베어스 제공",
  },
  {
    date: "2018. 06. 28",
    year: "2018",
    source: "스포츠동아",
    title: "두 개의 1차 지명 재능",
    kicker: "투수 153km · 타자 OPS 1.530",
    summary:
      "프로 스카우트들은 투수 김대한과 타자 김대한 모두를 1차 지명급으로 평가했다. 최고 153km의 직구와 3학년 타자의 정교함을 함께 지닌 보기 드문 선택지였다.",
    url: "https://www.donga.com/news/Sports/article/all/20180627/90793378/4",
    image: "https://dimg.donga.com/wps/NEWS/IMAGE/2018/06/27/90793516.3.jpg",
    credit: "사진 스포츠동아DB",
  },
  {
    date: "2018. 07. 24",
    year: "2018",
    source: "야구공작소",
    title: "쟁쟁한 선배 사이, 처음부터 주전",
    kicker: "신인 스카우팅 리포트 · 휘문고 3번 타자",
    summary:
      "휘문고 입학 직후부터 주전 3번 타자로 나섰고 U-15에서 147km를 찍었다. 수술과 재활을 지나 3학년에는 타격에 집중해 고교 무대를 지배했다는 성장 서사가 정리됐다.",
    url: "https://yagongso.com/2019-1%EC%B0%A8-%EC%A7%80%EB%AA%85-%EC%8B%A0%EC%9D%B8-%EC%8A%A4%EC%B9%B4%EC%9A%B0%ED%8C%85-%EB%A6%AC%ED%8F%AC%ED%8A%B8-%EB%91%90%EC%82%B0-%EB%B2%A0%EC%96%B4%EC%8A%A4-%EA%B9%80%EB%8C%80/",
    image: "https://yagongso.com/wp-content/uploads/2018/07/KBO-e1532320182500.jpg",
    credit: "이미지 야구공작소",
  },
  {
    date: "2018. 09. 04",
    year: "2018",
    source: "스포츠동아",
    title: "대한민국 U-18의 4번",
    kicker: "아시아청소년선수권 · 한일전 전야",
    summary:
      "아시아청소년선수권 대표팀 외야수로 김대한의 이름이 올랐다. 한국은 조별리그 2승 뒤 일본과 조 1위를 다퉜고, 그 중심 타선에 휘문고의 4번 타자가 섰다.",
    url: "https://sports.donga.com/sports/article/all/20180904/91834861/2",
    image: "https://dimg.donga.com/wps/SPORTS/IMAGE/2018/09/04/91834858.2.jpg",
    credit: "사진 스포츠동아DB",
  },
  {
    date: "2018. 09. 05",
    year: "2018",
    source: "연합뉴스",
    title: "요시다를 넘긴 결승 3점포",
    kicker: "U-18 한일전 · 한국 3–1 일본",
    summary:
      "1회 1사 1·2루. 김대한은 고시엔 스타 요시다 고세이의 슬라이더를 받아쳐 담장을 넘겼다. 한국이 올린 세 점 전부이자 승부를 결정한 한 방이었다.",
    quote: "한국의 4번 타자가, 일본의 에이스를 제압했다.",
    url: "https://www.yna.co.kr/view/AKR20180905182500007",
    image:
      "https://img6.yna.co.kr/photo/yna/YH/2018/06/25/PYH2018062513720001300_P4.jpg",
    credit: "사진 연합뉴스 김도훈 기자",
  },
  {
    date: "2018. 12. 04",
    year: "2018",
    source: "일간스포츠",
    title: "그해 아마추어의 최정상",
    kicker: "조아제약 프로야구대상 · 아마 MVP",
    summary:
      "프로야구의 별들이 모인 시상식에서 고교 최고 타자의 한 해가 인정받았다. 김대한은 2018년 아마 MVP로 무대에 올라 휘문고 마지막 시즌을 트로피로 남겼다.",
    url: "https://isplus.com/article/view/isp201812040159",
    image:
      "https://isplus.com/data/isp/image/2018/12/04/isphtm_20181204131535472788.800x.0.jpg",
    credit: "사진 일간스포츠",
  },
  {
    date: "2018. 12. 06",
    year: "2018",
    source: "스포츠조선 · 연합뉴스",
    title: "타율 5할, 백인천상의 주인공",
    kicker: "최고의 고교 타자 · BIC 0.412",
    summary:
      "고교리그 16경기에서 타율 5할을 기록한 김대한은 은퇴선수들이 선정한 최고의 고교 타자로 호명됐다. 정확한 타격을 자신의 강점으로 꼽으며 더 큰 무대를 약속했다.",
    quote: "“더 좋은 선수로 성장하겠다.”",
    url: "https://www.yna.co.kr/view/AKR20181206096400007",
    image:
      "https://img1.yna.co.kr/photo/yna/YH/2018/12/06/PYH2018120608680001300_P4.jpg",
    credit: "사진 연합뉴스 한종찬 기자",
  },
];

const years = ["2016", "2017", "2018"];

export default function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>("[data-story]")];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(Number((visible.target as HTMLElement).dataset.story));
      },
      { rootMargin: "-25% 0px -25%", threshold: [0.05, 0.25, 0.5, 0.75] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="kinetic-text" aria-hidden="true">
        {[0, 1, 2, 3].map((row) => (
          <div className={row % 2 ? "ticker reverse" : "ticker"} key={row}>
            <span>{refrain}</span><span>{refrain}</span>
          </div>
        ))}
      </div>

      <div className="backgrounds" aria-hidden="true">
        {stories.map((story, index) => (
          <div
            className={`background ${active === index ? "is-active" : ""}`}
            key={story.date}
            style={{ backgroundImage: `url("${story.image}")` }}
          />
        ))}
        <div className="background-shade" />
      </div>

      <header className="masthead">
        <a className="brand" href="#top" aria-label="처음으로">KDH<span>00</span></a>
        <nav aria-label="연도 바로가기">
          {years.map((year) => <a href={`#year-${year}`} key={year}>{year}</a>)}
        </nav>
        <span className="archive-label">RESPECT ARCHIVE</span>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">KIM DAE HAN · HIGH SCHOOL YEARS</p>
        <h1><span>김대한,</span><br />그는 누구인가.</h1>
        <p className="hero-copy">휘문고 1학년 주전에서<br />대한민국 청소년대표 4번까지.</p>
        <div className="scroll-cue"><span />아래로, 그의 시작</div>
      </section>

      <section className="opening-note">
        <p>이것은 조롱이 아니다.</p>
        <h2>한 선수가<br />기대라는 이름이던<br />시간의 기록.</h2>
        <div className="opening-stat">
          <span>2018 고교 타율</span><strong>.500</strong>
          <span>백인천상 · 아마 MVP</span>
        </div>
      </section>

      <div className="timeline">
        {stories.map((story, index) => {
          const showYear = index === 0 || stories[index - 1].year !== story.year;
          return (
            <section
              className="story"
              data-story={index}
              id={showYear ? `year-${story.year}` : undefined}
              key={`${story.date}-${story.title}`}
            >
              {showYear && <div className="year-marker"><span>{story.year}</span><i /></div>}
              <article className="story-card">
                <div className="story-meta"><time>{story.date}</time><span>{story.source}</span></div>
                <p className="story-kicker">{story.kicker}</p>
                <h2>{story.title}</h2>
                {story.quote && <blockquote>{story.quote}</blockquote>}
                <p className="story-summary">{story.summary}</p>
                <a href={story.url} target="_blank" rel="noreferrer">
                  원문 기사 읽기 <span aria-hidden="true">↗</span>
                </a>
                <small>{story.credit}</small>
              </article>
              <div className="story-count">{String(index + 1).padStart(2, "0")}<span>/{stories.length}</span></div>
            </section>
          );
        })}
      </div>

      <footer>
        <p className="footer-lead">기대는 사라지지 않는다.<br />기록 속에서 다시 시작할 뿐.</p>
        <div className="footer-bottom">
          <p>공개 웹에서 확인 가능한 2016–2018년 기사와 기록을 날짜순으로 재구성했습니다. 기사 문장은 요약·재서술했으며 사진 저작권은 각 매체와 촬영자에게 있습니다.</p>
          <a href="#top">처음으로 ↑</a>
        </div>
      </footer>
    </main>
  );
}
