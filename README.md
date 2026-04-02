# Portfolio Site

React 기반 포트폴리오 사이트입니다.  
대표 프로젝트 `oneulFarm`을 중심으로 `hashTrip`, `Pet-Lab`을 함께 소개하며, 정적 배포 환경에서도 안전하게 동작하도록 `HashRouter`를 사용했습니다.

## Scripts

### `npm start`
개발 서버를 실행합니다.

### `npm test`
테스트를 실행합니다.

### `npm run build`
배포용 정적 파일을 `build/`에 생성합니다.

## GitHub Pages 배포 메모

1. 의존성을 설치합니다.

```bash
npm install
```

2. 정적 빌드를 생성합니다.

```bash
npm run build
```

3. GitHub Pages에 `build/` 결과물을 배포합니다.

- 이 프로젝트는 `HashRouter`를 사용하므로 GitHub Pages 새로고침 시 라우팅 오류를 피할 수 있습니다.
- `package.json`의 `homepage`를 `"."`로 설정해 상대 경로 기반 정적 배포에 유리하도록 구성했습니다.
- GitHub Actions 또는 별도 배포 스크립트로 `build/` 폴더를 업로드하면 됩니다.

## Structure

- `src/data/projects.js`: 프로젝트 데이터
- `src/data/siteContent.js`: 메인 문구, 스킬, 연락처 데이터
- `src/pages/*`: 라우트 단위 페이지
- `src/components/*`: 재사용 컴포넌트

## Notes

- 시연 영상, 문서, Notion 링크가 비어 있어도 UI가 깨지지 않도록 처리했습니다.
- 다크모드 토글 상태는 `localStorage`에 저장됩니다.
