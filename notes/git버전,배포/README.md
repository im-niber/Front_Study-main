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

서버 없이 프론트엔드 스택으로만 구성된 정적 애플리케이션을 배포하는 용도로 최적화된 서비스이다 

정적 사이트를 배포하게 해준다 !

### branch 분리/병합 (ex. 로그인 페이지)

```bash
#branch 생성 과정 
#현재 관리되고 있는 branch 목록을 보여줌
$ git branch

# 원격 저장소에 있는 branch 목록도 보여줄수 있게 해줌 
$ git branch -a 

# signin 이라는 branch 하나 생성 
$ git branch signin 

# signin의 branch를 관리한다는 뜻
$ git checkout signin
```

병합은 마찬가지로 `git add .` 한 후 커밋을하고 `git push origin signin`을 입력해주면 github 홈페이지에서 Pull requests를 할 수 있게 된다

### 프로젝트 복제하기 

바탕화면에 먼저 폴더하나를 생성 후 vscode를 실행하고 디렉토리를 맞게 설정한 후 밑에 명령을 실행하면 된다

```bash
$ git clone https://git..저장소주소
```

### 이전 버전으로 되돌리기

```bash
# 이전 버전으로 되돌아간다
$ git reset --hard HEAD~1

# 전전 버전으로 되돌아간다 
$ git reset --hard HEAD~2

# 되돌리기하기 전 상태로 돌아가는 명령
$ git reset --hard ORIG_HEAD
```

### 다른 환경에서 프로젝트 시작하기

```bash
$ git clone https://저장소주소

# 저장소의 다른 branch 가져오기
## 원격저장소의 branch 목록
$ git branch -r

## 원격 저장소의 브랜치 가져오기
$ git checkout -t origin/가져올 브랜치명

## 잘못 들고온 경우, 먼저 master 브랜치로 변경한 뒤에 해야함
$ git branch -d 지울 브랜치명

## 브랜치 생성 후 바로 체크아웃하는 방법
$ git checkout -b 생성할 브랜치명

## 원격 저장소의 내용을 로컬에 가져오기
$ git pull origin master
```
