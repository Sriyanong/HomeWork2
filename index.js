var score=0;
var wrong=0;
function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        score = score+1;
        } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
        wrong = wrong+1;
    }
    
}

function checkAnswer1(answer1) {
    const result1 = document.getElementById('result1');
    if (answer1 === 'b') {
        result1.textContent = "ถูกต้อง จังหวัดบุรีรัมย์";
        result1.style.color = 'green';
        score = score+1;
        } else {
        result1.textContent = "Incorrect! Try again.";
        result1.style.color = 'red';
        wrong = wrong+1;
        }  
 
}

var element = document.getElementById("btn1");
element.innerHTML = "<input id='my-button' type='button' value='คลิกเพื่อดูคะแนน'>";
var mybutton = document.getElementById('my-button');
mybutton.onclick = () => {
alert('คุณได้คะแนนทั้งสิ้น : ' + score + ' คะแนน ตอบถูก : ' + score + ' ข้อ ตอบผิด : ' + wrong + ' ข้อ');
score=0;
wrong=0;
element.innerHTML="<a href = 'https://sriyanong.github.io/HomeWork2/index.html'>กลับไปทำใหม่อีกครั้ง</a>";

}

    