// 로컬저장소 불러오기
const localgender = JSON.parse(localStorage.getItem('gender')) || [];
const localheight = JSON.parse(localStorage.getItem('height')) || [];
const localweight = JSON.parse(localStorage.getItem('weight')) || [];
const locallevel = JSON.parse(localStorage.getItem('level')) || [];
const localobject = JSON.parse(localStorage.getItem('object')) || [];
const localexerciseplan = JSON.parse(localStorage.getItem('exercisePlan')) || [];

// 로컬저장소 업데이트
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

const $container = document.querySelector('.container');
const $prevBtn = document.querySelector('.prev-btn');
const $nextBtn = document.querySelector('.next-btn');

// 페이지 전환(이전) 버튼
$prevBtn.addEventListener('click', function() {
    $container.style.transform = 'translateX(0vw)';
    $prevBtn.style.display = "none";
    $nextBtn.style.display = "block";
    const $planStorage = document.querySelector(".plan-storage")
    const firstTable = `<table class="plan-table"><tr><th>No.</th><th>성별</th><th>키</th><th>체중</th><th>운동능력</th><th>운동목적</th><th>운동계획</th></tr></table>`
    const planTable = document.querySelector('.plan-table');
    planTable.remove()
    $planStorage.innerHTML += firstTable
})

// 페이지 전환(다음) 버튼
let clickBtn = 0
$nextBtn.addEventListener('click', function() {
    $container.style.transform = 'translateX(-100vw)';
    $answer.style = 'height:195px; transition:0.1s';
    $expandPageBtn.style.transform= 'rotatex(0deg)';
    $prevBtn.style.display = "block";
    $nextBtn.style.display = "none";

    for (let i = 0; i < 20; i++) {
        const genderValue = localgender[i] || ""; // 값이 없을 경우 공백으로 설정
        const heightValue = localheight[i] || "";
        const weightValue = localweight[i] || "";
        const levelValue = locallevel[i] || "";
        const objectValue = localobject[i] || "";

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

    // 모달창 열기
    for (let i = 0; i < 23; i++) {
        let openModalBtn = document.getElementById(`open-modal${i}`);
        openModalBtn.addEventListener("click", () => {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
            createExerciseModal.innerHTML = localexerciseplan[i]
        });

    // 모달창 닫기
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
            document.body.style.overflow = "hidden";
        });   
    }   

})

// 운동 시간 데이터 입력
for (hours=0;hours<11;hours+=1) {
    const hourParent = document.querySelector('#work-out-hour');
    const createHourOption = document.createElement('option');
    const createHour = hourParent.appendChild(createHourOption);
    createHour.value = hours;
    createHour.text = hours;
}
for (minutes=0;minutes<60;minutes+=5) {
    const minuteParent = document.querySelector('#work-out-minute');
    const createMinuteOption = document.createElement('option');
    const createMinute = minuteParent.appendChild(createMinuteOption);
    createMinute.value = minutes;
    createMinute.text = minutes;
}

// 성별이 선택됨에 따라 그 값을 $gender에 할당한다. event.target은 이벤트가 발생한 대상을 뜻한다.
let $gender = '';

window.onload = function() {
    const radios = document.getElementsByName('gender');
    for(let i=0; i<radios.length; i++) {
        if(radios[i].checked) { // 만약 라디오 버튼이 선택되어 있다면
            $gender = radios[i].value;
        }
    }
}

function getGender(event) {
    $gender = event.target.value;
}

const $height = document.querySelector('.height');
const $weight = document.querySelector('.weight');
const $level = document.querySelector('.level');
let $object;
let $hour;
let $minute;

const selectElement = document.getElementById('workout-obj');
selectElement.addEventListener('change', function() {
$object = this.options[this.selectedIndex].text;
});

function ChangeHour() {
    let value_hour = document.getElementById('work-out-hour');
    $hour = value_hour.options[value_hour.selectedIndex].value;
}

function ChangeMinute() {
    let value_minute = document.getElementById('work-out-minute');
    $minute = value_minute.options[value_minute.selectedIndex].value;
}

const $form = document.querySelector('form');
const $answer = document.querySelector('.textarea');
const $answerExpand = document.querySelector('.ai-chat-expand');


// data라는 배열에 역할 부여하는 객체를 추가한다.
const data = []
data.push({
    'role':'system',
    'content':'assistant는 웨이트 트레이닝, 바디빌딩의 전문가 입니다.'
})

// chatGPT API를 url 변수에 할당
const url = "https://estsoft-openai-api.jejucodingcamp.workers.dev/"



// 운동계획 생성버튼
try {
let spinnerDupl = 0 // spinner 중복 방지를 위한 변수 설정
$form.addEventListener('submit', e=>{
    e.preventDefault() // 클릭했을 때 이벤트 발생 강제로 막기
    if (spinnerDupl == 0) {
        spinnerDupl+=1;
        
        submitDataToGPT()
        createSpinner();
        chatGPTAPI();
    } else {
        spinnerDupl = 0;
        const removePlan = document.querySelector("#exercisePlan")
        removePlan.remove()

        submitDataToGPT()
        createSpinner();
        chatGPTAPI();
    }        
}) 
} catch(error) {
    console.log('JSON형식 오류',error.message);
}

// chatGPT한테 요청할 데이터 및 전송할 데이터 함수
function submitDataToGPT() {
    const genderContent = `저의 성별은 ${$gender}입니다.`;
    const heightContent = `저의 키는 ${$height.value}cm 입니다.`;
    const weightContent = `저의 체중은 ${$weight.value}kg 입니다.`;
    const levelContent = `저의 벤치프레스, 스쿼트, 데드리프트의 합산 무게는 ${$level.value}kg 입니다.`;
    const objectContent = `저의 운동 목표는 ${$object}입니다.`;
    const timeContent = `저는 하루에 운동을 ${$hour}시간 ${$minute}분 할 수 있습니다.`;
    const requestContent = `월요일부터 일요일까지 요일별로 하루에 운동 5가지를 하는 것으로 추천해줘. JSON 형식으로 다른 설명은 생략, key값은 모두 영어로 해줘., 만약에 reps가 sec 여야할 경우에는 30sec 이런식으로 sec 표시해서 주세요`;
    const contentDataType = {"요일": [{ "exercise": "스쿼트", "sets": 3, "reps": 10 },{ "exercise": "벤치프레스", "sets": 3, "reps": 8 }]};

    addUserInput();

    data.push({
        'role':'user',
        'content' : genderContent+heightContent+weightContent+levelContent+objectContent+timeContent+requestContent+JSON.stringify(contentDataType)

    })
}

// 스피너 작성 함수
function createSpinner() {
    const spinnerParent = document.querySelector('.textarea'); // textarea라는 클래스를 가진 객체를 spinnerParent변수에 할당
    const spinnerWrapper = document.createElement('div');
    const spinnerElement = document.createElement('div'); // div태그를 생성하는 요소를 spinnerElement 변수에 할당함
    
    const spinnerSelectWrapper = spinnerParent.appendChild(spinnerWrapper); // spinnerParent의 자식요소에 spinnerWrapper 를 생성한다.
    const spinnerSelectElement = spinnerWrapper.appendChild(spinnerElement); // spinnerWrapper의 자식요소로 spinnerElement를 생성한다.
    
    spinnerSelectWrapper.id = 'wrapper';
    spinnerSelectElement.id = 'spinner';
}

// chatGPT 함수
function chatGPTAPI() {

    fetch(url, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'
    },
    body:JSON.stringify(data),
    redirect: 'follow'
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
        const data = JSON.parse(res.choices[0].message.content);
        console.log(data);
        const strdata = JSON.stringify(data);
        localStorage.setItem('myData', data);
        // ExercisePlan 클래스 정의
        class ExercisePlan {
            constructor(exercise, sets, reps) {
                this.exercise = exercise;
                this.sets = sets;
                this.reps = reps;
            }
        }

        // 요일별로 운동 계획 생성 및 모델 인스턴스 생성
        let exercisePlans = {};
        for (let day in data) {
            if (data.hasOwnProperty(day)) {
                let exercises = data[day];
                
                let planList = [];
                
                for (let i = 0; i < exercises.length; i++) {
                    let exerciseData = exercises[i];
                    
                    let exerciseName = exerciseData.exercise || "-";
                    let setsCount = exerciseData.sets || "-";
                    let repsCount = exerciseData.reps || "-";
                    
                    let plan= new ExercisePlan(exerciseName,setsCount,repsCount);
                    
                    planList.push(plan);
                }
                
                exercisePlans[day] = planList;
            }
        }

        let tableHTML = "<table id='exercisePlan'><tr><th>Day</th><th>Exercise</th><th>Sets</th><th>Reps</th></tr>";

        // 요일별로 반복하며 표에 추가
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

        // 테이블 마무리 태그 추가
        tableHTML += "</table>";

        localexerciseplan.push(tableHTML);
        localStorage.setItem("exercisePlan",JSON.stringify(localexerciseplan));

        const selectExercisePlan = document.getElementById("tableContainer");
        selectExercisePlan.innerHTML=tableHTML;
        
    
    })
    spinnerWrapper.remove();
    
}

// 버튼 누르면 텍스트 박스 커지게
const $expandPageBtn = document.querySelector('.expandpage');
let changeSizenum = 0;
$expandPageBtn.addEventListener('click',function(){
    $answer.style = 'height:40vh';
    $expandPageBtn.style.transform= 'rotatex(180deg)';
    if (changeSizenum%2==1) {
        $answer.style = 'none';
        $expandPageBtn.style.transform= 'rotatex(0deg)';
    } 
    changeSizenum+=1 ;
})

const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");
const createExerciseModal = document.getElementById("create-exercise-plan")