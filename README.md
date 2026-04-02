# Portfolio Site

React 기반 포트폴리오 사이트입니다.  
대표 프로젝트 `oneulFarm`을 중심으로 `#Trip`, `Pet-Lab`을 함께 소개하며, 정적 배포 환경에서도 안전하게 동작하도록 `HashRouter`를 사용했습니다.

## Local Scripts

### `npm start`
개발 서버를 실행합니다.

### `npm test`
테스트를 실행합니다.

### `npm run build`
배포용 정적 파일을 `build/`에 생성합니다.

## GitHub Pages 배포

이 저장소는 GitHub Actions로 자동 배포되도록 설정되어 있습니다.

### 1. GitHub Pages 설정

GitHub 저장소 `Settings > Pages`에서 아래처럼 설정합니다.

- Source: `GitHub Actions`

### 2. 배포 방법

`main` 브랜치에 push 하면 자동으로 빌드 후 GitHub Pages에 배포됩니다.

```bash
git push origin main
```

### 3. 예상 배포 주소

```text
https://yuyoungkwang.github.io/portfolio/
```

## Structure

- `src/data/projects.js`: 프로젝트 데이터
- `src/data/siteContent.js`: 메인 문구, 스킬, 연락처 데이터
- `src/pages/*`: 라우트 단위 페이지
- `src/components/*`: 재사용 컴포넌트
- `.github/workflows/deploy-pages.yml`: GitHub Pages 자동 배포 워크플로

## Notes

- 이 프로젝트는 `HashRouter`를 사용하므로 GitHub Pages 새로고침 시 라우팅 오류를 피할 수 있습니다.
- `package.json`의 `homepage`를 `"."`로 설정해 상대 경로 기반 정적 배포에 유리하도록 구성했습니다.
- 다크모드 토글 상태는 `localStorage`에 저장됩니다.
