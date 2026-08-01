# 대한이는터진다 — Codex 작업 인계

이 폴더는 김대한 선수 리스펙 아카이브 사이트의 전체 소스입니다.

## 다른 컴퓨터에서 이어서 작업하기

1. ZIP을 원하는 폴더에 압축 해제합니다.
2. Codex에서 압축을 푼 폴더를 워크스페이스로 엽니다.
3. `npm install`을 실행합니다.
4. 로컬 미리보기는 `npm run dev`, GitHub Pages 정적 빌드는 `npm run build:pages`를 사용합니다.

## 배포

- GitHub 저장소: https://github.com/QKRM/kimdaehan
- GitHub Pages: https://qkrm.github.io/kimdaehan/
- `main` 브랜치에 푸시하면 `.github/workflows/pages.yml`이 자동 배포합니다.

## 프로젝트 구조

- `app/page.tsx`: 기사 타임라인, 주요 경기, 유튜브 재생 구성
- `app/globals.css`: 전체 비주얼과 반응형 스타일
- `app/layout.tsx`: 사이트 제목, 설명, 공유 미리보기 설정
- `public/og.png`: 링크 공유용 미리보기 이미지
- `next.config.ts`: Sites와 GitHub Pages 빌드 설정

기사 이미지와 유튜브 영상은 원 출처의 공개 URL을 사용합니다.
