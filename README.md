
<p align="center"><img width="200" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/e3fbad0b-9fe6-49f3-aad1-bb9145e023ce"></p>

# 오늘 운동 뭐 하지? 

## 목차 
1. 개요 
2. 목표와 기능 
3. 개발환경 
4. 프로젝트 구조 및 개발 일정 
5. 메인 기능 
6. UI 
7. 개발하면서 어려웠던 점 및 해결방법 

## 1. 개요 
- 최근 대한민국에는 운동을 하는 사람들이 점점 늘어나고 있다. Instagram, youtube 만 봐도 운동 관련 콘텐츠들이 많고, netflix에 "피지컬 100"이라는 예능 프로그램도 나올 정도로 운동이 점점 우리의 생활에 가까워지는 모습을 볼 수 있습니다. 
- 저도 마찬가지로 운동을 즐겨하는 사람으로서 도움이 될 프로젝트를 해보려 합니다. 
- "오늘 운동 뭐 하지?"를 통해서 계획을 짜고 "오운완" 하자. 

## 2. 목표와 기능 
### 2-1 목표 
- 운동 계획표를 손쉽게 작성 가능한 사이트를 개발해 보자! 

### 2-2 기능 
- 사용자들의 성별, 키, 체중, 운동능력, 운동시간 같은 정보를 기반으로 운동 계획표 작성 
- 추후 다시 계획표 확인 가능한 저장소 및 모달창 구현


- https://mm.tt/app/map/2935821703?t=MiK9WOJnc1
<p align="center"><img width="1000" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/b4283834-6ab9-452f-9192-2e53e5c2a4bd"></p>


## 3. 개발 환경
### 3-1 개발 환경
- Visual Studio Code (HTML, CSS, JavaScript)

### 3-2 배포 URL
- https://alexmint001.github.io/WSBDchat/


## 4. 프로젝트 구조와 개발 일정
### 4-1 프로젝트 구조
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

### 4-2 개발 일정

<p align="center"><img width="700" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/0bac9ef3-a129-4c5e-8655-4ff21302784a">
</p>

- 기획 [23.08.29 ~ 23.08.30]

   - 과제 주제: 오늘 운동 뭐 하지? ( 사용자의 정보를 chatGPT에게 전달하여 운동계획표를 작성해주는 서비스 )
  
   - 목업 페이지 작성:

   카카오 오븐 URL : https://ovenapp.io/view/eQtb6yvmgYVt2tghNHczgSHTH5xVbsbE/tUQl4

   <p align="center"><img width="1000" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/fe6b9197-e8f7-4c1f-b268-2d0cc515caaf"></p>

   <p align="center"><img width="1000" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/c79bea03-68fd-494a-9dcf-11d2d8fc56b6"></p>

   <p align="center"><img width="1000" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/f9e79e08-fab4-4a9b-a5d2-8cab8bd26eeb"></p>


## 5. 메인 기능 
- 사용자들의 성별, 키, 체중, 운동능력, 운동시간 같은 데이터를 chatGPT로 전달하고, 원하는 데이터를 요청. 
- 원하는 데이터 접수 후 운동 계획 데이터를 표로 작성 
- 운동 계획표 작성 시 요일마다 5가지 운동을 추천해 준다. 
- 작성한 운동 데이터를 로컬저장소에 저장하고, 다시 불러와서 모달창에 작성.

## 6. UI

<p align="center"><img width="500" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/273d77b4-fdaa-4a1d-982c-4d484b38ff10"></p>

<p align="center">메인페이지</p>

동일한 key값을 가진 JSON데이터를 받기 위해 넘겨준 데이터

`const contentDataType = {"요일": [{ "exercise": "스쿼트", "sets": 3, "reps": 10 },{ "exercise": "벤치프레스", "sets": 3, "reps": 8 }]};`


<p align="center"><img width="500" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/e478e970-4ae2-4781-b31a-145f3130233e"></p>

<p align="center">운동계획표 작성 완료</p>

```
for (let day in exercisePlans) {
     if (exercisePlans.hasOwnProperty(day)) {
         let plans = exercisePlans[day];    
         for (let i = 0; i < plans.length; i++) {
             let plan= plans[i];                  
             let exerciseName= plan.exercise;
             let setsCount= plan.sets;
             let repsCount=plan.reps;
             if(i % 5 == 0){
                 tableHTML += "<tr><td rowspan = '5'>" + day + "</td><td>" + exerciseName + "</td><td>" + setsCount + "</td><td>" + repsCount+ "</td></tr>";
             } else {
                 tableHTML += "<tr><td>" + exerciseName + "</td><td>" + setsCount + "</td><td>" + repsCount+ "</td></tr>";
             }
         }
     }
  }
  ```


<p align="center"><img width="500" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/c42b3641-b858-486b-8483-dff7da2847b2"></p>


<p align="center"><img width="500" alt="image" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/0d991983-e033-4c4f-9032-a38f6906ac16"></p>

<p align="center">로컬저장소 데이터 이용하여 모달창에 운동계획표 출력</p>

<p align="center"><img width="500" alt="gif" src="https://github.com/Alexmint001/WSBDchat/assets/142385654/5d684767-2c4a-4522-9de8-46266193e28d"></p>

## 7. 개발 이슈 사항 
### 7-1. 프롬프트 엔지니어링 
- 문제 : chatGPT로부터 동일한 key값을 가진 JSON데이터 접수받을 확률이 낮음. 
- 해결방안 : chatGPT에게 요청할 때 원하는 형식을 정확하게 전달해야 한다. 
- 개선해야 될 점 : 성공률은 높아졌지만 가끔씩 실패할 경우가 있다. 실패한 데이터를 받을 경우 이를 어떻게 처리해야 할지 연구해 볼 필요가 있다.

```
 const requestContent = `월요일부터 일요일까지 요일별로 하루에 운동 5가지를 하는 것으로 추천해줘. JSON 형식으로 다른 설명은 생략, key값은 모두 영어로 해줘., 만약에 reps가 sec 여야할 경우에는 30sec 이런식으로 sec 표시해서 주세요`;
 const contentDataType = {"요일": [{ "exercise": "스쿼트", "sets": 3, "reps": 10 },{ "exercise": "벤치프레스", "sets": 3, "reps": 8 }]};
```

### 7-2. JSON 데이터 접수받아서 테이블 작성
- 문제 : JSON 데이터 및 반복문에 대한 이해 부족
- 해결방안 : 태그를 일일히 적어서 innerHTML 방식으로 출력함.
- 개선해야될 점 : 이렇게 일일히 태그를 적어서 반복문을 작성할 경우 코드가 너무 지저분해지는 단점이 있다. 따라서 데이터를 받아 테이블로 만드는 함수를 만들어서 반복문을 사용하면 훨씬 가독성이 좋아질 것으로 보인다.

```
if (localexerciseplan[i]){
        const createTable = `<tr id="table-element"><td>${i+1}</td><td id="table-gender${i}">${genderValue}</td><td id="table-height${i}">${heightValue}</td><td id="table-weight${i}">${weightValue}</td><td id="table-level${i}">${levelValue}</td><td id="table-object${i}">${objectValue}</td><td><button id="open-modal${i}">열기</button></td></tr>`;
        const planTable = document.querySelector('.plan-table');
        planTable.innerHTML += createTable;
        } else {
            const createTable = `<tr id="table-element"><td>${i+1}</td><td id="table-gender${i}">${genderValue}</td><td id="table-height${i}">${heightValue}</td><td id="table-weight${i}">${weightValue}</td><td id="table-level${i}">${levelValue}</td><td id="table-object${i}">${objectValue}</td><td></td></tr>`;
            const planTable = document.querySelector('.plan-table');
            planTable.innerHTML += createTable;
        }
    }     
```

### 7-3. 로컬저장소 저장 및 업데이트
- 문제 : 로컬저장소에 대한 이해 부족
- 해결 방안 : localStorage.getItem('key값') 으로 데이터를 불러와서 JSON.parse로 사용가능하도록 변환하여 변수에 저장하고, 그 변수에 값을 추가하여 localStorage.setItem('key값', value) 으로 다시 로컬저장소에 저장하였음.

```
// 로컬저장소에서 불러온 값을 파싱하여 변수에 저장
const localgender = JSON.parse(localStorage.getItem('gender')) || [];
const localheight = JSON.parse(localStorage.getItem('height')) || [];
const localweight = JSON.parse(localStorage.getItem('weight')) || [];
const locallevel = JSON.parse(localStorage.getItem('level')) || [];
const localobject = JSON.parse(localStorage.getItem('object')) || [];
const localexerciseplan = JSON.parse(localStorage.getItem('exercisePlan')) || [];
```
위의 방식으로 로컬저장소 객체를 불러와서 localgender,localheight... 에 저장하였다. 

```
// 변수에 값을 추가한 후  로컬저장소로 저장장
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

### 7-4. 페이지 전환
- 문제 : HTML, css, JS에 대한 지식 부족
- 해결 방안 : 뷰포트 사이즈 설정과 overflow:hidden 를 통하여 전환

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

### 반응형 웹 [ 2023.09.11 ~ 현재 진행중 ]
- 문제: 배운적 없는 반응형 웹을 공부하면서 구현해보려 한다.
