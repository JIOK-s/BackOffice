## 업무일지
- 2023-08-19
  - router object name 설정 및 sidebar 객체 가져오기 수정
  - prettier 및 eslint 설정

- 2023-08-16
  - axios 적용

- 2023-08-12
  - 디렉터리 구조 설정
    ```
    /public                # 정적 파일 (index.html 등)
    /src
      /tests               # 테스트 파일들
      /javascript
        /components        # 재사용 가능한 컴포넌트들
        /containers        # 페이지 레벨 컨테이너 컴포넌트들
        /pages             # 각 페이지의 최상위 컴포넌트들
        /utils             # 유틸리티 함수들
        /api               # API 요청 및 관련 로직
        /styles            # 전역 CSS 스타일 및 스타일 관련 파일들
        /assets            # 이미지, 아이콘 등 정적 자산 파일들
        /context           # React Context 관련 파일들
        /hooks             # 커스텀 훅 함수들
        /routes            # 라우팅 관련 파일들
        /redux             # Redux 관련 파일들
        /actions           # 액션 생성자 함수들
        /reducers          # 리듀서 함수들
        /store             # 스토어 설정 및 생성
        /middlewares       # 미들웨어 파일들
    ```
  - react router 적용
  - index css 수정
  - layout 설정
    - 공통 sidebar 영역
    - content 영역

- 2023-08-09
    - ag-grid test 및 적용

- 2023-08-05
    - eslint 및 prettier 설정

- 2023-08-02
    - backoffice 프로젝트 생성
    - git 및 remote 설정 완료