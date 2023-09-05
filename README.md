# WSBDchat
ESTsoft 오르미 3기 첫번째 프로젝트


## 1. 목표와 기능
### 1.1 목표
- 운동 계획표를 손쉽게 작성 가능한 사이트

### 1-2 기능
- 사용자들의 성별, 키, 체중, 운동능력, 운동시간 같은 정보를 기반으로 운동 계획표 작성
- 추후 다시 계획표 확인 가능한 저장소 및 모달창 구현

## 2. 개발 환경
### 2-1 개발 환경
- Visual Studio Code (HTML, CSS, JavaScript)

### 2-2 배포 URL
- https://alexmint001.github.io/WSBDchat/

## 3. 프로젝트 구조와 개발 일정
### 3-1 프로젝트 구조
<img width="795" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/8a563cd4-4ba6-4ab8-9716-496df5db7bad">

### 3-2 개발 일정

<img width="480" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/e90da3fe-bdd3-4038-91b4-766fd03ee090">

- 기획 [23.08.29 ~ 23.08.30]

과제 주제: 자신의 운동 수준과 목적, 하루에 운동할 수 있는 시간을 입력하면 운동 계획을 작성해주는 챗봇

초기 디자인:

<img width="300" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/14d3ba00-e9b1-4036-a996-a0b18073e636">

2차 디자인:

<img width="300" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/9ef30602-31a8-4e8e-8b2c-0c36a760512a">

<img width="300" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/a12c5774-ee9d-4e25-98ae-355f9a0367eb">

목업 페이지 작성

https://ovenapp.io/view/eQtb6yvmgYVt2tghNHczgSHTH5xVbsbE/tUQl4

<img width="500" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/fe6b9197-e8f7-4c1f-b268-2d0cc515caaf">

<img width="500" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/c79bea03-68fd-494a-9dcf-11d2d8fc56b6">

<img width="500" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/f9e79e08-fab4-4a9b-a5d2-8cab8bd26eeb">

- 1차 구현 [23.08.31 ~ 23.09.04]
   - HTML
   - CSS
   - JavaScript

- 최종 수정 [23.09.05 ~ 23.09.06]
   - 과제 제출 [23.09.06 자정까지]
   - 발표자료 작성 README

### 4. UI
- 메인페이지
<img width="640" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/ed3b63fa-2183-4458-8c51-0404f2a442c3">

각 입력창, radio 버튼 및 select option 값을 선택한 후 운동계획생성 버튼을 구현하였다.

<img width="640" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/0265b206-fb47-4b0e-a528-db0a59b6d371">

만약 input 창에 아무 값도 입력하지 않았을 경우에는 데이터를 요청하지 못하도록 required 속성을 사용하였다.

<img width="640" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/da60879b-1bcd-4586-81f2-510d797d242e">

각 input 창에 값을 입력해주고 운동 계획 생성 버튼을 누르면 

<img width="640" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/ddc3826a-a6be-4114-9802-12c0e143982e">

데이터를 요청하고 다시 받을 때 까지 spinner가 돌아가도록 HTML 및 CSS 작성하였다.

<img width="640" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/79fd1175-7196-4502-a0e4-3c72eb46bc72">

데이터를 정상적으로 받은 모습이다.

<img width="640" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/655fda29-bb4f-4dc6-b19e-107ec9f12857">

밑의 확장 버튼을 누르면 textarea가 커지는 모습을 확인할 수 있다.
그리고 밑의 next 버튼을 누르면

<img width="640" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/c08f599d-0db9-4d99-b883-299dff3011b1">

입력한 사용자의 정보와 작성된 운동 계획표를 볼 수 있도록 만든 "열기" 버튼을 확인할 수 있으며,
열기 버튼을 누를 경우

<img width="640" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/7418b404-d512-4f3b-acbf-ab0acfa00fe1">

이와 같은 모습으로 모달창에 저장한 계획표를 출력한다.

### 5. 메인 기능 
- 사용자들의 성별, 키, 체중, 운동능력, 운동시간 같은 데이터를 chatGPT API로 전달하고, 원하는 데이터를 요청.
- 원하는 데이터 접수 후 운동 계획 데이터를 표로 작성
- 운동 계획표 작성 시 매 요일 마다 5가지 운동을 추천해준다.

### 6. 추가 기능
- 작성한 운동 데이터를 로컬저장소에 저장하고, 다시 불러와서 모달창에 작성.

### 7. 개발하며 느낀점
- 작성중 

5. 발표

   
