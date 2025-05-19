# 반응형 웹 페이지 스터디

## git, github

- git: 형상관리도구(버전관리도구)(https://git-scm.com/)
- gitHub: 저장소

### git 설치 및 버전 확인

- git --version

### 맥과 윈도우 엔터(줄내림) 키 처리

- git config --global core.autocrlf true

### VSCode 터미널 설정(Git Bash)

- 설정 > terminal default profile 검색 > Git Bash 선택
- 목록에 Git Bash 없을 시 VSCode 재시작
- 터미널 열기, ctrl + ` 또는 ctrl + j 또는 마우스 오른쪽 클릭 통합터미널 열기

### Global Git 사용자 설정

- gitHub 가입시 설정한 "이메일", "아이디" 사용
- 아이디, 이메일 설정
- git config --global user.name "깃허브 가입시 아이디"
- git config --global user.email "깃허브 가입시 이메일"

- 참고: 터미널 청소하기 명령어 clear

----------------- 위 내용은 최초 한 번만 설정--------------------

### gitHub repository 생성하기

- repository 이름은 폴더명과 똑같이 설정하는 것을 추천
- git 초기화 하기(폴더별로 최초 한 번 설정)
  - git init
- 파일 추가
  - git add .
