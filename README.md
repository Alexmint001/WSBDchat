<img width="527" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/dde3819b-a73f-44f2-af4d-c6d15f1e50ba">



# 오늘 운동 뭐하지?
ESTsoft 오르미 3기 첫번째 프로젝트


## 1. 목표와 기능
### 1.1 목표
- 운동 계획표를 손쉽게 작성 가능한 사이트

### 1-2 기능
- 사용자들의 성별, 키, 체중, 운동능력, 운동시간 같은 정보를 기반으로 운동 계획표 작성
- 추후 다시 계획표 확인 가능한 저장소 및 모달창 구현
<img width="795" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/8a563cd4-4ba6-4ab8-9716-496df5db7bad">

## 2. 개발 환경
### 2-1 개발 환경
- Visual Studio Code (HTML, CSS, JavaScript)

### 2-2 배포 URL
- https://alexmint001.github.io/WSBDchat/


## 3. 프로젝트 구조와 개발 일정
### 3-1 프로젝트 구조


### 3-2 개발 일정

<img width="450" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/e90da3fe-bdd3-4038-91b4-766fd03ee090">

- 기획 [23.08.29 ~ 23.08.30]

   - 과제 주제: 자신의 운동 수준과 목적, 하루에 운동할 수 있는 시간을 입력하면 운동 계획을 작성해주는 챗봇

   - 초기 디자인:

<img width="300" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/14d3ba00-e9b1-4036-a996-a0b18073e636">

   - 2차 디자인:

<img width="300" height="400" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/9ef30602-31a8-4e8e-8b2c-0c36a760512a">

<img width="300" height="400" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/a12c5774-ee9d-4e25-98ae-355f9a0367eb">

      - 처음에는 목업 페이지 작성이라는 개념을 몰랐어서 손으로 디자인하였다.

   - 목업 페이지 작성

https://ovenapp.io/view/eQtb6yvmgYVt2tghNHczgSHTH5xVbsbE/tUQl4

<img width="500" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/fe6b9197-e8f7-4c1f-b268-2d0cc515caaf">

<img width="500" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/c79bea03-68fd-494a-9dcf-11d2d8fc56b6">

<img width="500" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/f9e79e08-fab4-4a9b-a5d2-8cab8bd26eeb">

      - 이후에 목업 페이지 작성하여 좀 더 확실한 틀을 잡았다.

- 1차 구현 [23.08.31 ~ 23.09.04]
   - HTML
   - CSS
   - JavaScript

- 최종 수정 [23.09.05 ~ 23.09.06]
   - 과제 제출 [23.09.06 자정까지]
   - 발표자료 작성 README
 
- 발표


### 4. UI
- 메인페이지
![1  main](https://github.com/Alexmint001/WSBDchat/assets/142385654/217aabbc-1196-4715-9070-27e4ef513326)

각 입력창, radio 버튼 및 select option 값을 선택한 후 운동계획생성 버튼을 구현하였다.

![2  emptyinput](https://github.com/Alexmint001/WSBDchat/assets/142385654/d2d6f858-f6c6-4e9c-b37a-2007fbd9e67a)

만약 input 창에 아무 값도 입력하지 않았을 경우에는 데이터를 요청하지 못하도록 required 속성을 사용하였다.

![3  input](https://github.com/Alexmint001/WSBDchat/assets/142385654/f3534f78-e6f7-4352-9c74-99483f5a3485)

각 input 창에 값을 입력해주고 운동 계획 생성 버튼을 누르면 

![4  generateplan](https://github.com/Alexmint001/WSBDchat/assets/142385654/3a6ab13a-be11-4545-bb99-888895e2b811)

데이터를 요청하고 다시 받을 때 까지 spinner가 돌아가도록 HTML 및 CSS 작성하였다.

![5  writeplantable](https://github.com/Alexmint001/WSBDchat/assets/142385654/3c99646d-3c80-430f-8959-c75aa431ac98)

데이터를 정상적으로 받은 모습이다.

![6  expandtable](https://github.com/Alexmint001/WSBDchat/assets/142385654/cb91ec93-921f-48b9-8578-95b105b01574)

밑의 확장 버튼을 누르면 textarea가 커지는 모습을 확인할 수 있다.
그리고 밑의 next 버튼을 누르면

![7  secondtable](https://github.com/Alexmint001/WSBDchat/assets/142385654/95dc4fc0-aac3-41e2-847e-94b2cdfd1eb1)

입력한 사용자의 정보와 작성된 운동 계획표를 볼 수 있도록 만든 "열기" 버튼을 확인할 수 있으며,
열기 버튼을 누를 경우

![8  modal](https://github.com/Alexmint001/WSBDchat/assets/142385654/2e2b39b9-b750-4e31-9cec-8aa938a892e8)

이와 같은 모습으로 모달창에 저장한 계획표를 출력한다.

![오늘운동뭐하지](https://github.com/Alexmint001/WSBDchat/assets/142385654/f874a3d0-afbf-4dcb-a250-da9a877e2c6f)


### 5. 메인 기능 
- 사용자들의 성별, 키, 체중, 운동능력, 운동시간 같은 데이터를 chatGPT API로 전달하고, 원하는 데이터를 요청.
- 원하는 데이터 접수 후 운동 계획 데이터를 표로 작성
- 운동 계획표 작성 시 매 요일 마다 5가지 운동을 추천해준다.


### 6. 추가 기능

- 작성한 운동 데이터를 로컬저장소에 저장하고, 다시 불러와서 모달창에 작성.


### 7. 개발하며 느낀점
- 혼자서 직접 만들어보는 첫 프로젝트이다 보니 걱정도 많이 되고, 모르는 것도 많았지만 하나하나 공부해가면서 만드는 과정과 내가 머릿속으로 생각했던 기능들이 점점 구현이 되어가는 모습을 보는 것이 재밌었다.
- 그리고 기능구현이 안되더라도 왜 안되지? 하면서 고민하다가 해결이 되면 기분이 되게 좋다는 것을 느꼈다.



   
