const projectRepoLinks = {
  oneulfarm: 'https://github.com/YuYoungKwang/oneulFarm',
  hashtrip: 'https://github.com/YuYoungKwang/hifive',
  petlab: 'https://github.com/YuYoungKwang/pet-lab',
};

export const projects = [
  {
    slug: 'oneulfarm',
    title: 'oneulFarm',
    period: '2026.03.16 - 2026.04.01',
    teamSize: 5,
    type: '팀 프로젝트',
    role: '시세·레시피·추천 경험 중심의 풀스택 기능 구현',
    oneLineSummary:
      '농산물 시세 비교와 레시피·AI 식단 추천을 결합해 합리적인 장보기와 식단 관리를 돕는 생활형 식재료 플랫폼',
    problem: [
      '공공 시세 데이터는 존재하지만 일반 사용자가 실제 구매 판단에 바로 활용하기에는 구조가 복잡했습니다.',
      '가격 정보와 구매 경험이 분리되어 있어 평균가 대비 얼마나 절약되는지, 무엇을 바로 살 수 있는지가 자연스럽게 이어지지 않았습니다.',
    ],
    features: [
      {
        title: '농산물 시세 조회와 추이 분석',
        description:
          '현재 판매가와 기간별 가격 흐름을 함께 보여줘 사용자가 적정 가격인지 판단하고 구매 시점을 가늠할 수 있게 했습니다.',
      },
      {
        title: '평균가 대비 절약률 기반 상품 추천',
        description:
          '단순 진열이 아니라 평균가와 판매가를 비교해 얼마나 절약되는지를 직관적으로 보여주는 추천 구조를 만들었습니다.',
      },
      {
        title: '레시피와 상품 데이터 연결',
        description:
          '좋은 가격의 재료를 본 뒤 바로 활용 가능한 레시피와 구매 가능한 상품까지 이어져 실제 구매 전환에 도움을 줍니다.',
      },
      {
        title: 'AI 식단 추천과 캘린더 반영',
        description:
          '식단 추천을 일정 관리와 연결해 장보기와 식단 관리를 따로 보지 않도록 사용자 경험을 설계했습니다.',
      },
      {
        title: '장바구니·주문·결제·대시보드',
        description:
          '구매 이후에도 주문 상태와 절약 금액을 확인할 수 있게 해 서비스 사용 가치가 누적되도록 구성했습니다.',
      },
    ],
    contributions: [
      'KAMIS 시세 API 연동 및 시세 데이터 파싱 로직 구현',
      '식품안전나라 레시피 API 연동 및 레시피 데이터 가공',
      '매일 오전 9시 기준 시세 배치 처리와 백필 구조 구성',
      '평균가 대비 판매가 비교와 절약률 계산 로직 구현',
      '시세 분석 페이지 UI와 가격 추이 표시 로직 구현',
      '레시피 목록·상세 페이지 구현과 관련 상품 연결',
      '재료 한 번에 장바구니 담기와 리뷰 기능 추가',
      '추천 페이지 작업과 메인 홈 UI 리디자인',
      '카드·간편결제·가상계좌 기반 결제 흐름 일부 반영',
    ],
    techStack: {
      Backend: ['Java 21', 'Spring MVC', 'Spring JDBC', 'MyBatis', 'JWT'],
      Frontend: ['React', 'JavaScript', 'CSS', 'Recharts', 'ApexCharts'],
      Database: ['Oracle'],
      'External / Tools': [
        'KAMIS API',
        '식품안전나라 레시피 API',
        'Naver DataLab',
        'OpenAI Responses API',
        'PortOne',
        'Toss Payments',
      ],
    },
    troubleshooting: [
      {
        title: '시세 데이터가 금방 낡아지는 문제',
        problem:
          '시세 데이터는 매일 달라지기 때문에 수동 반영만으로는 가격 비교와 추이 차트 신뢰도가 빠르게 떨어졌습니다.',
        solution:
          '일일 배치와 백필 구조를 두고, 시세 동기화 후 상품과 시세 매칭까지 함께 갱신하도록 구성했습니다.',
      },
      {
        title: '화면마다 절약률 기준이 달라 보이는 문제',
        problem:
          '홈, 추천, 상품 영역마다 비교 기준이 달라지면 같은 상품도 다르게 해석될 수 있었습니다.',
        solution:
          '평균가 대비 절약률 계산 기준을 통일하고, 평균가 이하 상품 뱃지까지 동일한 기준으로 맞췄습니다.',
      },
      {
        title: '레시피 조회가 구매로 이어지지 않는 문제',
        problem:
          '레시피와 상품 데이터가 분리되어 있으면 사용자가 필요한 재료를 다시 찾아야 해서 흐름이 끊겼습니다.',
        solution:
          '레시피 상세에서 관련 상품 추천과 재료 일괄 담기 기능을 연결해 구매 전환 흐름을 만들었습니다.',
      },
      {
        title: '메인페이지 초기 로딩이 무거워지는 문제',
        problem:
          '추천 섹션이 늘어나면서 홈 진입 시 데이터 요청과 렌더링 부담이 커졌습니다.',
        solution:
          '추천 구조를 정리하고 캐싱 기반으로 메인 로딩 체감을 개선했습니다.',
      },
    ],
    flow: [
      '메인 → 제철·랭킹 추천 → 상품 상세 → 장바구니 → 결제 → 주문 조회',
      '시세 분석 → 가격 추이 확인 → 추천 상품 또는 레시피 이동',
      '레시피 목록 → 레시피 상세 → 재료 한 번에 담기 → 장바구니',
      'AI 식단 추천 → 캘린더 반영 → 필요한 재료 구매',
    ],
    learned: [
      '외부 API 데이터 정제와 배치 처리 흐름을 실제 서비스 문맥 안에서 다뤄볼 수 있었습니다.',
      '가격 비교 기준이 UI 해석에 얼마나 큰 영향을 주는지 체감하며 수치 표현 설계의 중요성을 배웠습니다.',
      '추천 경험과 구매 전환을 하나의 흐름으로 묶는 서비스 설계 감각을 키웠습니다.',
    ],
    tags: ['React', 'Spring MVC', 'Oracle', 'Price Data', 'Recipe', 'Commerce'],
    links: {
      github: projectRepoLinks.oneulfarm,
      demo: 'https://www.youtube.com/watch?v=yCoXKFV9XgQ',
      docs: '',
    },
    media: {
      demoEmbed: 'https://www.youtube.com/embed/yCoXKFV9XgQ',
    },
    featured: true,
    tone: 'primary',
  },
  {
    slug: 'devflow',
    title: 'DevFlow',
    period: '2026.04 - ing',
    teamSize: 1,
    teamLabel: '개인 1인',
    type: '개인 프로젝트',
    role: '기획·설계·개발 전반 단독 진행 중',
    oneLineSummary:
      '협업 규칙, 작업 관리, 설계 문서를 한곳에 모으고 AI가 이해할 수 있는 구조로 정리하는 개발 협업 플랫폼',
    problem: [
      '팀 프로젝트 초반에는 브랜치 전략, 커밋 규칙, 파일 구조, 설계 문서가 흩어져 있어 새 팀원이 프로젝트 맥락을 빠르게 이해하기 어렵습니다.',
      '기존 협업 툴은 할 일 관리나 문서 작성에는 강하지만, 개발 협업 규칙과 AI가 이해할 수 있는 구조화까지 한 흐름으로 지원하지 못하는 경우가 많습니다.',
    ],
    features: [
      {
        title: '협업 규칙 시각화',
        description:
          '브랜치 전략, 커밋 규칙, PR 기준, 파일 구조를 카드형 UI로 정리해 문서를 길게 읽지 않아도 핵심 규칙을 빠르게 이해할 수 있게 합니다.',
      },
      {
        title: '기술스택 기반 규칙 자동 제안',
        description:
          '프로젝트 생성 시 기술스택을 입력하면 추천 폴더 구조와 기본 협업 규칙을 함께 제안해 초반 세팅 부담을 줄이는 방향으로 설계하고 있습니다.',
      },
      {
        title: '설계 문서와 작업 흐름 통합',
        description:
          'DB 정의서, API 명세, 작업 보드가 분리되지 않고 하나의 프로젝트 안에서 연결되도록 구성해 문서 분산 문제를 줄이려 합니다.',
      },
      {
        title: 'AI 프롬프트 생성용 구조화',
        description:
          'Task, DB, 규칙 데이터를 사람이 읽는 문서 수준에서 끝내지 않고 구조화해 AI 도구에 더 정확한 맥락을 전달하는 흐름을 목표로 합니다.',
      },
      {
        title: '온보딩 중심 협업 경험',
        description:
          '새 팀원이 프로젝트에 들어왔을 때 필요한 규칙과 구조를 빠르게 이해하고 바로 작업에 합류할 수 있는 온보딩 흐름을 만들고자 합니다.',
      },
    ],
    contributions: [
      '서비스 PRD 작성과 핵심 문제 정의 정리',
      '타깃 사용자와 MVP 범위 설계',
      '협업 규칙, 작업 관리, DB 정의서, AI 프롬프트를 하나의 제품 흐름으로 묶는 정보 구조 설계',
      '기술스택 기반 자동 규칙 생성 흐름 기획',
      '온보딩 중심 사용자 플로우 설계',
      'DB 버전 관리와 Diff, 롤백 확장 방향 정의',
    ],
    techStack: {
      Frontend: ['검토 중'],
      Backend: ['검토 중'],
      Database: ['설계 중'],
      'Collaboration / AI': ['Git Workflow', 'Task Board', 'DB Schema', 'AI Prompt'],
    },
    troubleshooting: [
      {
        title: '규칙 문서가 길어질수록 읽히지 않는 문제',
        problem:
          '협업 규칙을 텍스트 문서로만 정리하면 초보 팀원 입장에서는 핵심 규칙을 빠르게 파악하기 어렵고, 실제 작업 흐름과 연결되지 않을 수 있습니다.',
        solution:
          '카드형 시각화와 프로젝트 생성 단계의 자동 규칙 제안 흐름을 결합해 규칙을 읽는 것이 아니라 바로 이해하고 적용할 수 있도록 설계할 예정입니다.',
      },
      {
        title: '문서와 작업이 분산되어 맥락이 끊기는 문제',
        problem:
          'DB 정의서, API 문서, 작업 보드가 각각 다른 도구에 흩어져 있으면 변경 맥락을 추적하기 어렵고 반복 질문이 늘어날 수 있습니다.',
        solution:
          '프로젝트 단위 안에서 규칙, Task, 설계 문서를 연결하고 변경 이력을 함께 볼 수 있는 방향으로 MVP를 설계하고 있습니다.',
      },
      {
        title: 'AI 도구가 프로젝트 맥락을 충분히 이해하지 못하는 문제',
        problem:
          'Task와 규칙, DB 구조가 구조화되어 있지 않으면 AI 코딩 도구도 단일 코드 생성에 그치고 프로젝트 맥락을 반영하기 어렵습니다.',
        solution:
          '작업, 규칙, DB 정보를 구조화된 데이터 형태로 바꾸고 프롬프트 생성 흐름으로 연결하는 방향을 핵심 차별점으로 잡고 있습니다.',
      },
      {
        title: '개인 프로젝트에서 MVP 범위가 쉽게 커지는 문제',
        problem:
          '협업, 문서, AI 기능을 한 번에 담으려 하면 범위가 커져 실제 구현 속도가 급격히 느려질 수 있습니다.',
        solution:
          '1차 MVP는 프로젝트 생성, 팀원 초대, 협업 규칙 가이드, 칸반 보드, DB 정의서 CRUD에 집중하고 이후 버전 관리는 단계적으로 확장할 계획입니다.',
      },
    ],
    flow: [
      '프로젝트 생성 → 기술스택 입력 → 규칙 자동 생성 → 팀원 초대 → 온보딩 시작',
      '칸반 보드 → 작업 상세 → 관련 규칙과 문서 확인 → 개발 진행',
      'DB 정의서 관리 → 변경 이력 확인 → 버전 비교',
      'Task·DB·규칙 선택 → AI 프롬프트 생성 → 협업 보조',
    ],
    learned: [
      '직접 겪었던 팀 프로젝트의 반복 문제를 서비스 문제로 다시 정의하는 기획 경험을 쌓고 있습니다.',
      '기능 나열보다 협업 흐름과 온보딩 경험을 제품 구조로 설계하는 시각이 중요하다는 점을 더 분명히 느끼고 있습니다.',
      '개인 프로젝트로 기획, 정보 구조, MVP 우선순위를 스스로 결정하며 제품 설계 감각을 넓혀가고 있습니다.',
    ],
    tags: ['In Progress', 'Solo Project', 'Collaboration', 'Onboarding', 'DB Schema', 'AI Prompt'],
    links: {
      github: '',
      demo: '',
      docs: '',
    },
    media: {
      demoEmbed: '',
    },
    featured: false,
    statusLabel: '진행 중',
    tone: 'secondary',
  },
  {
    slug: 'hashtrip',
    title: '#Trip',
    period: '2026.02.10 - 2026.03.03',
    teamSize: 5,
    type: '팀 프로젝트',
    role: '여행지 상세·마이페이지 중심의 풀스택 기능 구현',
    oneLineSummary:
      '여행 성향 분석을 바탕으로 여행지 탐색, 리뷰, 찜, 일정 작성, 마이페이지까지 연결한 맞춤형 여행 플랫폼',
    problem: [
      '여행 계획 과정에는 정보가 많지만, 개인 취향에 맞는 여행지와 루트를 찾고 정리하는 일은 여전히 번거로웠습니다.',
      '탐색, 상세 정보, 리뷰, 찜, 마이페이지가 끊기지 않고 이어지는 서비스 흐름이 필요했습니다.',
    ],
    features: [
      {
        title: '여행 성향 분석 테스트',
        description:
          '사용자가 자신의 여행 취향을 먼저 파악하고, 이후 추천 결과를 더 쉽게 이해하도록 돕는 진입 기능입니다.',
      },
      {
        title: '여행지 검색과 상세 조회',
        description:
          '운영시간, 지도, 대표 태그, 리뷰를 함께 보여줘 방문 전에 필요한 정보를 한 곳에서 확인할 수 있게 했습니다.',
      },
      {
        title: '추천 루트 탐색',
        description:
          '비슷한 취향을 가진 사용자 기준의 루트를 제안해 처음부터 일정을 짜야 하는 부담을 줄였습니다.',
      },
      {
        title: '직접 수정 가능한 일정 플래너',
        description:
          '추천 루트를 그대로 소비하는 데서 끝나지 않고, 사용자가 자신의 일정으로 확장할 수 있게 했습니다.',
      },
      {
        title: '찜과 마이페이지 관리',
        description:
          '관심 여행지, 작성한 리뷰, 취향 태그, 문의 내역까지 한 화면에서 관리할 수 있도록 구성했습니다.',
      },
    ],
    contributions: [
      '여행지 상세 페이지를 실제 데이터 기반 화면으로 전환',
      '리뷰 CRUD, 별점, 작성일자, 사진 업로드·수정·삭제 기능 구현',
      '찜 카테고리 생성, 저장, 취소 흐름과 UX 단순화',
      '마이페이지 프론트엔드 제작과 리뷰·찜·태그·문의 내역 연동',
      '회원 정보 수정과 프로필 이미지 등록·수정·조회 기능 구현',
      '헤더·푸터 공통화, 스타일 통일, 누락 페이지 복구와 오류 수정',
    ],
    techStack: {
      Backend: ['Java 11', 'Spring MVC', 'Spring Security', 'Spring JDBC', 'MyBatis'],
      Frontend: ['JSP', 'JSTL', 'HTML/CSS/JavaScript', 'jQuery'],
      Database: ['Oracle'],
      'External / Tools': ['대한민국 구석구석 관광 API', 'Kakao Maps SDK', 'OAuth2', 'SMTP'],
    },
    troubleshooting: [
      {
        title: '리뷰와 이미지 수정 흐름이 복잡한 문제',
        problem:
          '텍스트 리뷰와 다중 이미지 업로드, 기존 이미지 삭제를 동시에 처리해야 해서 수정 로직이 복잡해졌습니다.',
        solution:
          '이미지 업로드 로직을 분리하고 수정 시 추가와 삭제를 각각 명확하게 처리하도록 구현했습니다.',
      },
      {
        title: '마이페이지에 여러 데이터가 한 번에 모이는 문제',
        problem:
          '리뷰, 찜, 태그, 문의 내역이 한 화면에 모이면서 누락과 정렬 문제가 생기기 쉬웠습니다.',
        solution:
          '마이페이지 전용 로딩 구조를 정리하고, 카운트와 정렬, 페이지네이션을 함께 통합해 안정성을 높였습니다.',
      },
      {
        title: '찜 기능이 내부 구조 기준으로 보이던 문제',
        problem:
          '기능은 동작해도 사용자 입장에서는 저장과 취소 흐름이 직관적이지 않았습니다.',
        solution:
          '카테고리 생성, 저장, 취소 과정을 사용자 행동 기준으로 단순화하고 내부 식별자 노출을 줄였습니다.',
      },
      {
        title: '외부 관광 API 데이터 형식이 들쭉날쭉한 문제',
        problem:
          '운영시간 관련 응답 형식이 일정하지 않아 화면 표시가 흔들릴 가능성이 있었습니다.',
        solution:
          '운영시간 파싱 로직을 보강하고 재시도와 예외 처리를 추가해 데이터 안정성을 높였습니다.',
      },
    ],
    flow: [
      '메인 → 여행 성향 테스트 → 분석 결과 → 추천 여행지·추천 루트 → 일정 생성',
      '검색 → 여행지 상세 → 리뷰 작성 → 찜 저장',
      '로그인 → 마이페이지 → 프로필 수정·태그 관리·리뷰·찜 확인·문의 내역 조회',
    ],
    learned: [
      'Spring MVC와 MyBatis 기반 CRUD를 실제 사용자 흐름 안에서 연결하는 경험을 쌓았습니다.',
      '파일 업로드와 리뷰 데이터를 함께 다루면서 수정 흐름 설계의 중요성을 배웠습니다.',
      'JSP 기반 화면에서도 사용감과 데이터 정합성을 함께 고려하는 습관을 얻었습니다.',
    ],
    tags: ['JSP', 'Spring MVC', 'MyBatis', 'Oracle', 'Travel Service', 'File Upload'],
    links: {
      github: projectRepoLinks.hashtrip,
      demo: 'https://www.youtube.com/watch?v=0tYfGEuP6qw',
      docs: '',
    },
    media: {
      demoEmbed: 'https://www.youtube.com/embed/0tYfGEuP6qw',
    },
    featured: false,
    tone: 'secondary',
  },
  {
    slug: 'petlab',
    title: 'Pet-Lab',
    period: '2025.12.11 - 2025.12.24',
    teamSize: 3,
    type: '팀 프로젝트',
    role: '프론트엔드 핵심 기능 구현',
    oneLineSummary:
      '반려동물 프로젝트 등록, 후원, 위시리스트, 커뮤니티, 장바구니, 주문 관리까지 연결한 크라우드 펀딩형 웹 플랫폼',
    problem: [
      '반려동물 관련 프로젝트를 탐색하고 후원한 뒤 다시 관리하는 과정이 분절되면 사용자가 서비스에 머물 이유가 약해집니다.',
      '탐색에서 후원, 관심 저장, 주문 관리까지 한 흐름으로 이어지는 경험이 필요했습니다.',
    ],
    features: [
      {
        title: '프로젝트 탐색과 검색',
        description:
          '카테고리, 검색, 정렬 구조를 통해 사용자가 원하는 프로젝트를 빠르게 찾고 비교할 수 있게 했습니다.',
      },
      {
        title: '상세 페이지와 리워드 선택',
        description:
          '프로젝트 소개, 리워드, 예산, 일정, 팀 정보를 한 화면에서 확인하며 후원 결정을 내릴 수 있도록 구성했습니다.',
      },
      {
        title: '장바구니·바로 후원·주문 흐름',
        description:
          '리워드를 비교한 뒤 장바구니에 담거나 바로 결제할 수 있게 해 실제 후원 전환 흐름을 만들었습니다.',
      },
      {
        title: '위시리스트와 관심 관리',
        description:
          '좋아요를 통해 관심 프로젝트를 저장하고 다시 비교할 수 있어 재방문과 후원 전환을 돕습니다.',
      },
      {
        title: '커뮤니티와 창작자 등록 흐름',
        description:
          '프로젝트별 소통 공간과 등록·수정 기능까지 포함해 플랫폼 관점의 흐름을 완성했습니다.',
      },
    ],
    contributions: [
      '메인페이지 인기·최신·마감임박 프로젝트 섹션 구현',
      '카테고리별 목록과 검색 결과 페이지 구현',
      '프로젝트 등록 4단계 스텝 폼과 입력값 검증 로직 구현',
      '상세 페이지에서 리워드 선택, 수량 변경, 장바구니, 바로 결제 흐름 구현',
      '프로젝트 수정·삭제 기능 구현',
      '회원별 좋아요 연동과 위시리스트 페이지 구현',
      '장바구니, 주문 내역, 주문 취소 기능 구현',
      '로그인 상태에 따른 접근 제한과 헤더 전환 처리',
      '게시물 관리 화면 일부 구현',
    ],
    techStack: {
      Backend: [],
      Frontend: ['React', 'React Router DOM', 'React Bootstrap', 'Bootstrap', 'CSS'],
      Database: ['localStorage'],
      'External / Tools': ['Create React App'],
    },
    troubleshooting: [
      {
        title: '좋아요 상태가 화면마다 다르게 보일 수 있던 문제',
        problem:
          '프로젝트 목록의 좋아요 수와 회원별 favorites 데이터가 분리되어 있어 상태가 쉽게 어긋날 수 있었습니다.',
        solution:
          '좋아요 토글 시 프로젝트 목록과 회원 정보를 동시에 갱신해 메인, 검색, 위시리스트에서 같은 상태를 유지했습니다.',
      },
      {
        title: '주문 취소 시 금액 정합성이 깨질 수 있던 문제',
        problem:
          '결제, 주문 생성, 프로젝트 달성 금액 반영이 따로 움직이면 실제 수치가 어긋날 수 있었습니다.',
        solution:
          '주문 생성과 금액 반영을 함께 처리하고, 취소 시 복구 로직까지 연결해 흐름을 맞췄습니다.',
      },
      {
        title: '등록 폼에서 잘못된 데이터가 만들어질 수 있던 문제',
        problem:
          '날짜 순서나 금액 입력 오류가 생기면 정상적으로 보이지만 사용할 수 없는 프로젝트가 생성될 수 있었습니다.',
        solution:
          '4단계 스텝 폼과 단계별 유효성 검사를 적용해 입력 오류를 초기에 차단했습니다.',
      },
      {
        title: '비로그인 사용자의 기능 진입 흐름이 꼬이던 문제',
        problem:
          '후원이나 좋아요 같은 핵심 기능에 로그인 상태가 보장되지 않으면 사용자 경험이 불안정해졌습니다.',
        solution:
          'localStorage 기반 로그인 상태 유지와 주요 기능 접근 제한 로직을 적용했습니다.',
      },
    ],
    flow: [
      '메인 → 카테고리·검색 → 프로젝트 상세 → 리워드 선택 → 장바구니 또는 바로 후원 → 주문 내역',
      '프로젝트 상세 → 커뮤니티 → 글 목록 → 글 상세 → 댓글 작성',
      '로그인·회원가입 → 마이페이지 → 위시리스트·주문 조회·게시물 관리',
    ],
    learned: [
      '상태 동기화와 사용자 흐름 설계를 프론트엔드 관점에서 깊게 경험할 수 있었습니다.',
      '단계형 폼과 주문 흐름 설계에서 입력 검증과 예외 처리의 중요성을 배웠습니다.',
      '프론트엔드만으로도 서비스 전체 흐름을 책임 있게 설계할 수 있다는 감각을 얻었습니다.',
    ],
    tags: ['React', 'Frontend', 'State Sync', 'Step Form', 'Wishlist', 'Order Flow'],
    links: {
      github: projectRepoLinks.petlab,
      demo: 'https://www.youtube.com/watch?v=vpgaXZiqIns',
      docs: '',
    },
    media: {
      demoEmbed: 'https://www.youtube.com/embed/vpgaXZiqIns',
    },
    featured: false,
    tone: 'support',
  },
];

export const featuredProjects = projects;

export const projectTimeline = [
  {
    year: '2025.12',
    title: 'Pet-Lab',
    description: 'React 기반 프론트엔드 프로젝트에서 상태 동기화와 주문 흐름 설계를 경험한 첫 팀 프로젝트',
  },
  {
    year: '2026.02 - 2026.03',
    title: '#Trip',
    description:
      'Spring MVC 기반 서비스에서 여행지 상세, 리뷰, 마이페이지, 파일 업로드 흐름까지 맡으며 풀스택 감각을 확장한 프로젝트',
  },
  {
    year: '2026.03 - 2026.04',
    title: 'oneulFarm',
    description:
      '시세 데이터, 레시피, 추천, 장바구니, 결제 흐름을 연결하며 사용자 행동 중심 서비스 설계를 더 깊게 다룬 대표 프로젝트',
  },
  {
    year: '2026.04 - ing',
    title: 'DevFlow',
    description:
      '협업 규칙, 작업 관리, DB 정의서, AI 프롬프트 생성을 하나의 흐름으로 묶는 개발 협업 플랫폼을 개인 프로젝트로 기획·설계 중',
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) || null;
}
