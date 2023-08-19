# 지옥이들의 쇼핑몰 프로젝트
## [backoffice 모듈]
#### 관리자가 사용하는 화면

## [개발환경]
- NODE ver.18.17.0

## [디렉터리 구조]
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

## [발생한 문제와 해결]
#### git 원격 브랜치와 기존 브랜치 합치기
- 기존의 history와 원격 브랜치의 history가 서로 관련 기록이 없는 경우 fetch가 되지 않는다.
    - 따라서 git pull origin develop --allow-unrelated-histories를 이용하여 병합
- arrow function을 사용할 때 2가지를 고려해야 한다.
    - {}를 그대로 이용하려면 return을 이용해야 한다.
    - 혹은 ()를 이용한다. 단, 이 경우는 마지막 문만 return 한다.

## [알게된 점]
#### webstorm에서 node 및 npm 설정
- language&frameworks -> node.js에서 interpreter 설정 및 code check
#### react router 중첩경로 사용
- children속성을 사용할 시 outlet tag에 replace 된다.


## [업무일지]
[링크](./readmeDir/meetingLog/README.md)