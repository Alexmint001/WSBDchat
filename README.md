<img width="200" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/e3fbad0b-9fe6-49f3-aad1-bb9145e023ce">

# 오늘 운동 뭐하지?
[ESTsoft 오르미 3기 첫번째 프로젝트]

"오늘 운동 뭐하지?" 는 운동을 하려고 마음 먹은 사람들이 계획을 어떻게 짜야할지 모르거나, 계획하기가 귀찮을 때 간편하게 사용하여 계획표를 만들 수 있도록 개발한 서비스입니다. 

## 목차
   1. 목표와 기능
   2. 개발환경
   3. 프로젝트 구조 및 개발 일정
   4. 메인 기능
   5. UI
   6. 개발하면서 어려웠던 점 및 해결방법

## 1. 목표와 기능
### 1.1 목표
- 운동 계획표를 손쉽게 작성 가능한 사이트를 개발해보자!

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
```
C:.
│  ESTsoft 1차 프로젝트 일정표.pdf
│  index.html
│  README.md
│  WSBD.css
│  WSBD.js
│
├─.vscode
│      settings.json
│
└─img
        20kg_plate_character-1-removebg-preview.png
        20kg_plate_character-1.jpg
        20kg_plate_character-2-removebg-preview.png
        20kg_plate_character-2.jpg
        close.png
        expand.png
        WSBD.gif
```

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

   - 목업 페이지 작성:

[ https://ovenapp.io/view/eQtb6yvmgYVt2tghNHczgSHTH5xVbsbE/tUQl4 ]

<img width="500" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/fe6b9197-e8f7-4c1f-b268-2d0cc515caaf">

<img width="500" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/c79bea03-68fd-494a-9dcf-11d2d8fc56b6">

<img width="500" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/f9e79e08-fab4-4a9b-a5d2-8cab8bd26eeb">


## 4. 메인 기능 
- 사용자들의 성별, 키, 체중, 운동능력, 운동시간 같은 데이터를 chatGPT로 전달하고, 원하는 데이터를 요청.
- 원하는 데이터 접수 후 운동 계획 데이터를 표로 작성
- 운동 계획표 작성 시 요일 마다 5가지 운동을 추천해준다.
- 작성한 운동 데이터를 로컬저장소에 저장하고, 다시 불러와서 모달창에 작성.


## 5. UI

<img width="700" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/217aabbc-1196-4715-9070-27e4ef513326">

메인페이지

1. input 창에 아무 값도 입력하지 않았을 경우에는 데이터를 요청하지 못하도록 required 속성을 사용하였다.

2. input 창에 값을 입력해주고 운동 계획 생성 버튼 클릭.

3. 데이터를 요청하고 다시 받을 때 까지 spinner가 돌아가도록 HTML 및 CSS 작성하였다.

4. 데이터를 정상적으로 받을 경우 textarea에 테이블 작성.

5. 확장 " ^ " 버튼을 누르면 textarea가 커지는 모습을 확인할 수 있다.

6. "다음" 버튼을 누르면 다음 페이지로 넘어간다.

7. 입력한 사용자의 정보와 작성된 운동 계획표를 볼 수 있도록 만든 "열기" 버튼을 확인할 수 있다.
   
8. 열기 버튼을 누를 경우 모달창에 저장한 계획표를 출력한다.

![오늘운동뭐하지11](https://github.com/Alexmint001/WSBDchat/assets/142385654/af00b936-f163-4ec0-9583-575eec698572)


https://github.com/Alexmint001/WSBDchat/assets/142385654/d1ef27be-b521-4f97-83bc-9303bdccaf59



## 6. 개발 이슈 사항
### 1. 프롬프트 엔지니어링
- chatGPT로부터 지정한 key값의 올바른 JSON 데이터를 접수 받기 위해서 고민을 많이 했으며, 성공확률이 많이 올라간 방법으로 현재 적용하였으며, 그 방법은 chatGPT에게 요청할 때 원하는 형식을 정확하게 전달하는 것이었다.
  현재 적용된 방식은 아래와 같은 방식으로 전달하였다.
```
 const requestContent = `월요일부터 일요일까지 요일별로 하루에 운동 5가지를 하는 것으로 추천해줘. JSON 형식으로 다른 설명은 생략, key값은 모두 영어로 해줘., 만약에 reps가 sec 여야할 경우에는 30sec 이런식으로 sec 표시해서 주세요`;
 const contentDataType = {"요일": [{ "exercise": "스쿼트", "sets": 3, "reps": 10 },{ "exercise": "벤치프레스", "sets": 3, "reps": 8 }]};
```

### 2. JSON 데이터 접수받아서 테이블 작성
- chatGPT로 부터 JSON 데이터를 접수받아 테이블 작성하는 방법을 두가지 중에 고민하였다. 첫번째는 createElement 방식으로  for 반복문 사용하여 작성하는 것이고, 두번째는 작성하려고하는 모든 태그를 일일히 다 작성하여 innerHTML로 작성하는 것이었다.
- 일단 기능구현을 목표로 두고 두번째 방식으로 작성하였습니다.
- 개선할 방식은 데이터를 받아 테이블을 만드는 함수를 만들어서 반복문에서 사용하면 더 깔끔해질 것 같습니다.

### 3. 로컬저장소 저장 및 업데이트
- 로컬저장소에 저장은 되는데 업데이트를 하려고 보니, 로컬저장소는 덮어쓰기만 된다라는 것을 깨닫고 어떻게 하지 고민을 하게 되었다. 고민을 하던 중 로컬저장소 값을 불러와서 변수에 저장하고, 변수에 값을 추가해서 다시 로컬저장소로 저장하면 되지 않을까? 라는 결론에 이르렀다.
```
const localgender = JSON.parse(localStorage.getItem('gender')) || [];
const localheight = JSON.parse(localStorage.getItem('height')) || [];
const localweight = JSON.parse(localStorage.getItem('weight')) || [];
const locallevel = JSON.parse(localStorage.getItem('level')) || [];
const localobject = JSON.parse(localStorage.getItem('object')) || [];
const localexerciseplan = JSON.parse(localStorage.getItem('exercisePlan')) || [];
```
위의 방식으로 로컬저장소 객체를 불러와서 localgender,localheight... 에 저장하였다. 

```
function addUserInput() {
    localgender.push($gender);
    localheight.push($height.value);
    localweight.push($weight.value);
    locallevel.push($level.value);
    localobject.push($object);

    localStorage.setItem('gender',JSON.stringify(localgender));
    localStorage.setItem('height',JSON.stringify(localheight));
    localStorage.setItem('weight',JSON.stringify(localweight));
    localStorage.setItem('level',JSON.stringify(locallevel));
    localStorage.setItem('object',JSON.stringify(localobject));
}
```
그리고 위의 방식으로 변수에 입력값들을 push 메소드로 추가하고 다시 로컬저장소에 덮어쓰기를 하는 방식으로 업데이트를 구현하였다.

### 4. 페이지 전환
- 처음에는 html파일을 여러개 만들어서 연결해야하나? 라는 생각으로 고민이 많았는데, 강사님이 페이지 전환방식 중에 같은 사이트 안에 여러가지 페이지를 만들어서 이동하는 방식으로 많이 쓴다라는 이야기를 해주셨다.
- 방법을 몰라서 여기저기 찾아보니, 뷰포트 사이즈 설정과 overflow 를 통하여 전환이 가능하다라는 것을 알게되었다.
```
// 페이지 전환(이전) 버튼
$prevBtn.addEventListener('click', function() {
    $container.style.transform = 'translateX(0vw)';
    $prevBtn.style.display = "none";
    $nextBtn.style.display = "block";
})

// 페이지 전환(다음) 버튼
$nextBtn.addEventListener('click', function() {
    $container.style.transform = 'translateX(-100vw)';
    $answer.style = 'height:195px; transition:0.1s';
    $expandPageBtn.style.transform= 'rotatex(0deg)';
    $prevBtn.style.display = "block";
    $nextBtn.style.display = "none";
```
- 구현한 방식은 컨테이너의 뷰포트 사이즈를 200vw로 정하고, 페이지 사이즈를 100vw로 정하여 버튼을 클릭할 경우 -100vw 이동하는 이벤트를 추가하는 방식입니다. 
