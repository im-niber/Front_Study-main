# Git을 활용한 버전관리

## git

Git(깃)은 컴퓨터 파일의 변경사항을 추적하고 여러 사용자들 간에 해당 파일 작업을 조율하기 위한 대표적인 버전 관리 시스템(VCS)입니다

### 버전 생성과 업로드의 이해

```bash
#개행 문자(Newline) 설정
## macOS
$ git confing --global core.autocrlf input
## Windows
$ git config --global core.autocrlf true

#사용자 정보
## 커밋(버전 생성)을 위한 정보 등록
$ git config --global user.name 'YOUR_NAME'
$ git config --global user.email 'YOUR_EMAIL'

#구성확인
## Q키를 눌러서 종료
$ git config --global --list

# 현재 프로젝트에서 변경사항 추적(버전 관리)을 시작
$ git init

# 변경사항을 추적할 특정 파일(index.html)을 지정
$ git add index.html

# 모든 파일의 변경사항을 추적하도록 지정
$ git add .

# 메시지(-m)와 함께 버전을 생성
$ git commit -m '프로젝트 생성'

# 메시지(-m)와 함께 버전을 생성
$ git commit -m 'main.js 추가'

# origin이란 별칭으로 원격 저장소를 연결
$ git remote add origin https://github.c...

#origin이란 별칭의 원격 저장소로 버전 내역 전송
$ git push origin master

```

### Netlify

github의 저장소를 지속적으로 배포하게 해줌

