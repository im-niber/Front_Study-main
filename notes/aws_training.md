# AWS 클라우드 교육 - Dong-A 취업지원실

## 이론 part

<h3>클라우드 컴퓨팅이란 ?</h3>

- 온디맨드(요구 사항에 따라 즉시 제공/공급 하는 주문형 방식)로 서비스에 액세스
- 대규모 사전 투자 방지
- 필요에 따라 컴퓨팅 리소스를 프로비저닝(요구에 맞게 시스템 자원을 할당 배치 배포 해두었다가 필요 시 시스템을 즉시 사용할 수 있는 상태로 준비 해 두는 것)
- 사용한 만큼만 비용을 지불

---

<h3>클라우드 컴퓨팅 배포 모델</h3>

<h4>클라우드 기반 배포 모델</h4>

- 애플리케이션의 모든 부분을 클라우드에서 실행
- 기존 애플리케이션을 클라우드로 마이그레이션
- 클라우드에서 새로운 애플리케이션 설계 및 구축

<h4>온프레미스 배포</h4>

- 가상화 및 리소스 관리 도구를 사용하여 리소스 배포
- 애플리케이션 관리 및 가상화 기술을 사용하여 리소스 사용량 증가

<h4>하이브리드 배포 </h4>

- 클라우드 기반 리소스를 온프레미스 인프라에 연결
- 클라우드 기반 리소스와 레거시 IT 애플리케이션을 통합

<h3>클라우드 컴퓨팅의 이점</h3>

<h4> 가변비용 </h4>

- 기술 리소스를 사용하기 전에 먼저 투자
- 사용한 만큼만 비용을 지불

<h4> 비용 최적화 </h4>

- 데이터 센터 운영
- 애플리케이션과 고객에 집중

<h4> 용량 </h4>

- 필요한 인프라 용량을 추정할 필요가 없음
- 필요에 따라 축소 및 확장

<h4> 규모의 경제 </h4>

- 더 작은 규모, 내 사용량만을 기준으로 더 비싼 요금을 지불
- 규모의 경제, 집계된 고객 사용량으로 인한 이점 

<h4> 속도 및 민첩성 </h4>

- 데이터 센터, 리소스 필요시점과 리소스 확보 시점 간의 간격이 **주** 단위
- 클라우드  컴퓨팅, 리소스 필요 시점과 리소스 확보 시점간의 간격이 **분** 단위

<h4> 몇 분 만에 전 세계에 배포 </h4>

- 애플리케이션을 전 세계에 빠르게 배포
- AWS 글로벌 인프라 사용

---
### 클라우드 컴퓨팅

<h4> Amazon EC2 </h4>

- 안전하고 크기 조정 가능한 컴퓨팅 용량 사용
- 몇 분만에 서버 인스턴스(일시적으로 사용하라) 부팅
- 사용한 만큼만 비용을 지불

**EC2 생성과정**

1. AMI 선택 AMI란?, 소프트웨어가 설치되어 있는 탬플릿, 리눅스 or 윈도우 or 맥 os or Apach or Custom ...
2. 유형 선택, ex) t(Family,목적 여기서 t는 범용) 2(세대) micro(사이즈, 라지가 될수도 있고 스몰이 될수도 있다)
3. 구성
4. 보안
5. 스토리지 ~~ 나중에 설명함

<h4>확장성 및 로드 밸런싱</h4>

여러 인스턴스에 워크로드를 분산해줌

<h4>Elastic Load Balancing의 기능</h4>

1. 단일 접점
2. 트래픽 분배

<h4>Auto Scailing의 기능</h4>

사용량이 늘면 그 만큼 자원을 더 할당 해준다. 반대도 마찬가지

---

<h4> AWS 메시징 서비스 </h4>

<h4> Amazon Simple notification Service </h4>

- 메시지가 주제에 게시됨
- 구독자는 자신의 주제에 대한 메시지를 즉시 수신

<h4> Amazon Simple queue Service </h4>

- 소프트웨어 구성 요소 간에 메시지를 전송 저장 수신
- 다른 서비스를 사용할 필요 없이 메시지를 대기열에 넣음

---

<h4> 서버리스 컴퓨팅 </h4>

우리 쪽에서 서버 관리를 할 필요 없는 것을 뜻함. (아마존에는 서버가 당연히 존재)

<h4> AWS Lambda </h4>

- 서버를 프로비저닝하거나 관리하지 않고 코드 실행
- 코드가 실행되는 컴퓨팅 시간에 대해서만 비용 지불
- 다른 AWS 서비스를 사용하여 코드를 자동으로 트리거

**작동방식**

1. Lambda에 코드 업로드
2. 이벤트 소스에서 트리거 되도록 코드 설정
3. 코드는 트리거될 때만 실행됨
4. 사용한 컴퓨팅 시간에 대해서만 비용 지불

---

<h4> 가용영역(AZ) </h4>

하나의 데이터 센터 이상이 모여서 생기는 영역, 물리적으로 1~100km로 떨어져 있다

CDN? 정적인 데이터를 캐시에 저장해 고객에게 빠른 속도로 제공하게끔 해준다.

<h4> AWS Outpost </h4>

AWS 인프라를 온프리머스 데이터센터로 확장

---

<h4> VPC의 네트워크 트래픽 </h4>

1. 네트워크 액세스 제어 목록(NACL), 여기서 필터링을 한 번 거침


---

## day 02

### 스토리지

#### AWS 스토리지 유형


- 블록 스토리지
    - 블록 스토리지에서 파일은 동일한 크기의 데이터 조각(블록)으로 구분된다.
    - 블록 스토리지는 Amazon EC2 인스턴스에 실행되는 애플리케이션에 사용된다.
    
    - **인스턴스 스토어**는 호스트 안에 있는 것들을 나눠 쓰는 개념, 임시적인 용도로만 사용해야 한다. why? 껐다 키면 다른 호스트에서 실행이 될 수도 있기 때문이다. (전용 인스턴스를 사용하지 않기 때문)
    
    **Amazon EBS 볼륨** : 네트워크로 연결이 되어 있는 저장 장치(SSD,HDD), 영구적인 저장을 할 수있는 장치이다.

    **EBS 스냅샷** : 가장 최근 스냅샷 이후에 변경된 데이터만 백업됩니다.

- 객체 스토리지
    - 객체 스토리지에서 각 객체는 데이터, 메타데이터, 키로 구성된다
    - 데이터의 변경이 있다면 새로운 객체를 만들어야 하므로, 자주 변경이 되는 데이터는 블록 데이터로 만드는 것이 좋다. 한 번쓰고 읽기만 할 용도라면(비디오, 이미지 등) 객체 스토리지를 사용하는게 낫다

    - **Amazon Simple Storage Service**(Amazon S3) : 객체를 버킷에 저장, 객체에 대한 액세스를 제어하는 권한을 설정, 다양한 사용 사례에 맞는 일단의 스토리지 클래스 중 선택,, 버킷의 용량은 무한하며 내구성이 매우 좋음
        - 분산저장을 이용함. 최소 3개의 가용 영역에 데이터를 저장
        - S3 Standard-IA : 자주 액세스 하지 않는 데이터에 이상적, 스토리지 가격은 낮지만 검색 가격은 더 높다 
        - S3 Glacier : 데이터 아카이빙을 위해 설계된 저비용 스토리지, 1년에 1번 볼까말까한 데이터를 보통 넣는다. 단점은 검색이 오래걸린다. S3 Glacier Deep Archive는 그 정도가 더 심한 클래스(은행 등에서 사용)
        - S3 Intelligent-Tiering : 아마존의 머신러닝을 사용하여 어디 스토리지에 보관할지 학습을 하여 적절하게 저장을 해줌

- 파일 스토리지
    
    - 파일 스토리지에서는 여러 클라이언트가 공유 파일폴더에 저장된 데이터에 액세스 할 수 있다.

    - Amazon Elastic File System
        - 확장 가능한 파일 시스템에 데이터 저장
        - 수천 개의 Amazon EC2 인스턴스에 동시에 데이터를 제공
        - 여러 가용 영역에 걸쳐 데이터를 저장

---

**관계형 데이터베이스**

- 관계형 데이터베이스에서는 데이터가 다른 데이터 부분과 관련된 방식으로 저장됩니다
- 관계형 데이터베이스는 구조화질의 언어(SQL)를 사용하여 데이터를 저장하고 쿼리합니다.

#### Amazon Relational Database Service(RDS)
- AWS 클라우드에서 관계형 데이터베이스를 운영하고 규모 조정
- 시간이 많이 사용되는 관리 작업 자동화
- 데이터를 안전하게 저장 및 전송

#### Amazon Aurora
 - 엔터프라이즈급 관계형 데이터베이스에 데이터를 저장
 - 불필요한 입출력(I/O)작업을 제거하여 데이터베이스 비용을 절감
 - 3개의 가용영역에 6개의 데이터 복사본을 복제

---

**비관계형 데이터베이스**

- 행과 열이 아닌 구조를 사용하여 데이터를 구성함
- 예를 들어 키-값 페어에서는 데이터가 항목(키)로 구성되고 항목은 속성(값)을 갖습니다

#### Amazon DynamoDB
- 서버리스 키-값 데이터베이스이다.
- 용량 변경에 따라 자동으로 확장 축소되어 일관된 성능을 유지할 수 있다.
- 하루에 10조 개 이상의 요청 처리하도록 설계되었다

**AWS Database Migration Service(DMS)** 

관계형 데이터베이스, 비관계형 데이터베이스 및 기타 유형의 데이터 스토어를 마이그레이션

---

### 보안

#### 고객 : 클라우드 내부의 보안
고객 책임의 예
 - 인스턴스 운영 체제
 - 호스트 기반 방화벽
 - 애플리케이션
 - 계정 관리
 - 보안 그룹

#### AWS : 클라우드 자체의 보안
AWS 책임의 예
 - 데이터 센터의 물리적 보안
 - 네트워크 인프라
 - 가상화 인프라
 - 하드웨어 및 소프트웨어 인트라

### AWS Idnetity and Access Management(IAM)

카페에서의 보안
 - 새로운 계산원이 카페에서 근무하기 시작
 - 이 계산원은 pos 시스템에 액세스할 권한이 있는 계정이 부여
 - 계산원은 자신의 계정을 사용하여 pos 시스템에 액세스 한다

**AWS 계정 루트 사용자**

- AWS 계정을 만들면 루트 사용자 자격 증명이 설정된다.
- 첫 IAM 사용자를 생성하고 다른 사용자를 생성할 수 있는 권한을 부여함
- 새 IAM 사용자로 로그인하고 계속해서 다른 사용자를 생성함
- 제한된 수의 작업에 대해서만 루트 사용자에 액세스함

**IAM 사용자**

AWS 서비스 및 리소스와 상호 작용하는 사람 or 애플리케이션을 나타내는 자격 증명이다. 

**IAM 정책** 

AWS 서비스 및 리소스에 대한 권한을 허용하거나 거부하는 JSON문서이다

**IAM 역할**

임시로 권한에 액세스하기 위해 수임할 수 있는 자격 증명이다. 협업을 하거나 할때 주로 사용함. 다른 계정에 자신의 서비스에 접근을 하게 해주는 느낌

**Multi Factor Authentication(MFA)**

AWS 계정에 추가 보호 계층을 제공함(이중 인증 개념이라고 보면 된다)

**AWS Organizations**

고객이 중앙 위치에서 여러 AWS 계정을 통합하고 관리하도록 지원함 서비스 제어 정책(SCP)을 사용하여 조직 계정에 대한 권한을 중앙에서 제어함

---

### 마이그레이션 및 혁신

AWS Cloud Adoption Framework

- AWS로 빠르고 원활하게 마이그레이션 할 수 있도록 귀사에 조언 제공
- 6가지 관점이라고 하는 집중 영역별로 구성된 지침 제공

---

## 실습 part

**IAM(Identity and Access Management)**

처음 아마존에 가입을 한 계정을 Root 계정이라고한다. 이 계정으로는 AWS의 모든 기능을 사용이 가능하다. 만약 이 계정을 해킹을 당한다면 엄청난 손실이 일어날 수가 있다 이때 사용하는 것이 **IAM**

기본적으로 admin 사용자 계정을 따로 만들어서 사용하고 Root 계정은 사용하지 않는 것이 좋다

**정책의 우선순위**

 1. Deny가 있는지 먼저 확인 함
 2. 명시적인 허용이 있는지 다음으로 확인 함 

더 있지만 지금은 이 정도로 짚고 넘어감


**Amazon EC2 인스턴스 수명 주기**

1. AMI 시작 -> 대기중
2. 실행 중(여기서 부터 비용이 발생 함) -> 재부팅 중
3. 재부팅 -> 실행 중
4. 실행 중 -> 중지(최대 절전모드)
5. 중지 종료 -> 실행 -> 종료 중 - > 종료됨

**Private IP / Public IP**

공인 IP는 사설 IP도 같이 가질 수 있다, 데이터베이스는 퍼블릭 IP는 필요가 없다 어차피 EC2 인스턴스랑 통신을 하기 때문

**CIDR**

클래스 없는 도메인 간 라우팅




