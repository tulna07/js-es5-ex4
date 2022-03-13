const questions = document.getElementsByClassName("question"),
  activeQuestion = document.getElementsByClassName("question--active"),
  qShowBtn = document.getElementsByClassName("btn-q-show"),
  stepShowBtn = document.getElementById("btn-steps-show"),
  stepBox = document.getElementById("steps-box"),
  stepBoxContent = document.getElementById("steps-box-content"),
  closeStepBoxBtn = document.getElementById("close-steps-box");

// Steps in 3-block model
const q1Steps = `<strong style="text-decoration: underline;">Đề bài:</strong> Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ). Tìm ngày, tháng, năm của ngày tiếp theo, tương tự cho ngày trước đó.<br>
<strong style="text-decoration: underline;">Lời giải:</strong><br>
<strong>Đầu vào:</strong> Nhập lần lượt giá trị ngày, tháng, năm trong 3 ô inputs.<br>
<strong>Xử lý:</strong><br>
 <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng nhập giá trị ngày, tháng, năm.<br>
 <strong>- Bước 2:</strong> Tăng ngày hiện tại (nhận được từ người dùng) 1 ngày, kiểm tra điều kiện để đưa ra ngày, tháng, năm phù hợp tiếp theo, giảm ngày hiện tại (nhận được từ người dùng) 1 ngày, kiểm tra điều kiện để đưa ra ngày, tháng, năm phù hợp trước đó.<br>
 <strong>- Bước 3:</strong> Xuất kết quả tương ứng từ bước 2 (ngày, tháng, năm của ngày tiếp theo và ngày trước đó) ra giao diện.<br>
<strong>Đầu ra:</strong> Xuất ra ngày, tháng, năm của ngày tiếp theo và ngày trước đó.`,
  q2Steps = `<strong style="text-decoration: underline;">Đề bài:</strong> Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng của năm nhuận).<br>
  <strong style="text-decoration: underline;">Lời giải:</strong><br>
  <strong>Đầu vào:</strong> Nhập lần lượt giá trị tháng, năm trong 2 ô inputs.<br>
  <strong>Xử lý:</strong><br>
   <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng nhập giá trị tháng, năm.<br>
   <strong>- Bước 2:</strong> Kiểm tra xem tháng và năm nhập vào có hợp lệ chưa, nếu không hợp lệ in ra thông báo và kết thúc chương trình.<br>
   <strong>- Bước 3:</strong> Nếu hợp lệ, xét xem năm đó là năm nhuận hay không để đưa ra số ngày của tháng nhuận và số ngày mặc định của các tháng còn lại.<br>
   <strong>- Bước 4:</strong>  Xuất ra số ngày trong tháng của tháng, năm người dùng nhập vào.<br>
  <strong>Đầu ra:</strong> Xuất ra số ngày trong tháng của tháng, năm người dùng nhập vào.`,
  q3Steps = `<strong style="text-decoration: underline;">Đề bài:</strong> Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.<br>
  <strong style="text-decoration: underline;">Lời giải:</strong><br>
  <strong>Đầu vào:</strong> Nhập giá trị bất kỳ vào trong ô input.<br>
  <strong>Xử lý:</strong><br>
   <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng nhập giá trị vào trong ô input.<br>
   <strong>- Bước 2:</strong> Lấy giá trị nhận được từ giao diện, xét xem có phải là số nguyên có 3 chữ số hay không.<br>
   <strong>- Bước 3:</strong> Nếu không là số nguyên 3 chữ số thì in ra thông báo, kết thúc chương trình.<br>
   <strong>- Bước 4:</strong> Nếu là số nguyên 3 chữ số thì lấy từng vị trí hàng trăm, hàng chục, hàng đơn vị sau đó sử dụng điều kiện để đọc ra số tương ứng.<br>
   <strong>- Bước 5:</strong> Xuất kết quả nhận được từ bước 4 ra giao diện sau.<br>
  <strong>Đầu ra:</strong> Xuất ra cách đọc số nguyên có 3 chữ số.`,
  q4Steps = `<strong style="text-decoration: underline;">Đề bài:</strong> Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương trình in tên sinh viên xa trường nhất.<br>
  <strong style="text-decoration: underline;">Lời giải:</strong><br>
  <strong>Đầu vào:</strong> Nhập tọa tên, tọa độ của 3 sinh viên và tọa độ trường.<br>
  <strong>Xử lý:</strong><br>
   <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng nhập giá trị tọa độ, tên của sinh viên và tọa độ trường vào các ô input.<br>
   <strong>- Bước 2:</strong> Lấy giá trị từ giao diện dùng công thức tính khoảng cách giữa 2 điểm để tìm ra khoảng cách của mỗi sinh viên với trường, sau đó tìm ra khoảng cách lớn nhất để tìm ra sinh viên xa trường nhất.<br>
   <strong>- Bước 3:</strong> Xuất ra kết quả sinh viên ở xa trường nhất tìm được ở bước 2 cùng tọa độ tương ứng.<br>
  <strong>Đầu ra:</strong> Xuất ra tên sinh viên xa trường nhất.`;

const qSteps = [q1Steps, q2Steps, q3Steps, q4Steps];

stepShowBtn.onclick = function () {
  stepBox.style.display = "block";
};

closeStepBoxBtn.onclick = function () {
  stepBox.style.display = "none";
};

for (let i = 0; i < qShowBtn.length; ++i) {
  qShowBtn[i].onclick = function () {
    const activeQShowBtn =
      document.getElementsByClassName("btn-q-show--active");
    activeQShowBtn[0]?.classList?.remove("btn-q-show--active");

    qShowBtn[i].classList.add("btn-q-show--active");

    activeQuestion[0]?.classList?.remove("question--active");

    questions[i]?.classList?.add("question--active");

    stepBoxContent.innerHTML = qSteps[i];
  };
}

// ------- QUESTION 1 -------
// Assume that years % 4 === 0 is a leap year,
// while a none-leap year.
const date = document.getElementsByClassName("q1-input"),
  q1SubmitBtn = document.getElementById("btn-q1-submit"),
  q1Result = document.getElementById("q1-result");

q1SubmitBtn.onclick = function () {
  const currentDay = +date[0].value;
  var nextDay = currentDay + 1,
    prevDay = currentDay - 1;
  const currentMonth = +date[1].value;
  const currentYear = +date[2].value;

  var nextMonth = currentMonth,
    prevMonth = currentMonth,
    nextYear = currentYear,
    prevYear = currentYear;

  const months = {
    1: 31,
    2: !(currentYear % 4) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  if (nextDay > months[currentMonth]) {
    nextDay = 1;
    nextMonth++;

    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear++;
    }
  }

  if (!prevDay) {
    prevDay = months[--prevMonth];

    if (!prevMonth) {
      prevDay = 31;
      prevMonth = 12;
      prevYear--;
    }
  }

  q1Result.innerHTML = `<strong>- Current date:</strong> ${currentDay}/${currentMonth}/${currentYear}.<br> <strong>- Next date:</strong> ${nextDay}/${nextMonth}/${nextYear}.<br> <strong>- Prev date:</strong> ${prevDay}/${prevMonth}/${prevYear}.`;
};

// ------- QUESTION 2 -------
// Leap year calculation
// Reference: https://www.wikihow.com/Calculate-Leap-Years
function isLeapYear(year) {
  if (!(year % 4)) {
    if (!(year % 100)) {
      if (!(year % 400)) return true;
      return false;
    }
    return true;
  }

  return false;
}

const month_year = document.getElementsByClassName("q2-input"),
  q2SubmitBtn = document.getElementById("btn-q2-submit"),
  q2Result = document.getElementById("q2-result");

q2SubmitBtn.onclick = function () {
  const month = +month_year[0].value,
    year = +month_year[1].value;

  if (
    !Number.isInteger(month) ||
    !Number.isInteger(year) ||
    month * year <= 0
  ) {
    q2Result.innerHTML = `🚫Invalid input.`;
    return;
  }

  const months = [
    undefined,
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  q2Result.innerHTML = `<strong>${month}/${year}</strong> has ${months[month]} days.`;
};

// ------- QUESTION 3 -------
const number = document.getElementById("q3-input"),
  q3SubmitBtn = document.getElementById("btn-q3-submit"),
  q3Result = document.getElementById("q3-result");

const reader1 = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

const reader2 = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const reader3 = [
  "ten",
  "eleven",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

q3SubmitBtn.onclick = function () {
  if (
    !Number.isInteger(+number.value) ||
    ((+number.value < 100 || +number.value > 999) &&
      (+number.value < -999 || +number.value > -100))
  ) {
    q3Result.innerHTML = "🚫 Invalid.";
    return;
  }

  var result = "";

  var numberValue = +number.value;
  if (numberValue < 0) {
    result += "negative ";
    numberValue = -numberValue;
  }

  var unitPlace = numberValue % 10,
    tenPlace = Math.floor(numberValue / 10) % 10,
    hundredPlace = Math.floor(numberValue / 100);

  result += `${reader1[hundredPlace]} hundred`;

  if (!tenPlace && !hundredPlace) {
    q3Result.innerHTML = result;
    return;
  }

  if (!tenPlace) {
    q3Result.innerHTML = result + ` ${reader1[unitPlace]}`;
    return;
  }

  if (tenPlace === 1) {
    q3Result.innerHTML = result + ` ${reader2[unitPlace]}`;
    return;
  }

  q3Result.innerHTML = result + ` ${reader3[tenPlace]} ${reader1[unitPlace]}`;
};
// ------- QUESTION 4 -------
const student1 = document.getElementsByClassName("student1-input"),
  student2 = document.getElementsByClassName("student2-input"),
  student3 = document.getElementsByClassName("student3-input"),
  school = document.getElementsByClassName("school-input"),
  q4SubmitBtn = document.getElementById("btn-q4-submit"),
  q4Result = document.getElementById("q4-result"),
  studentNames = document.getElementsByClassName("student-name"),
  closeQ4ResultBtn = document.getElementById("close-q4-result");

closeQ4ResultBtn.onclick = function () {
  q4Result.style.display = "none";
};

q4SubmitBtn.onclick = function () {
  const STUDENT_1_X = +student1[0].value;
  const STUDENT_1_Y = +student1[1].value;
  const STUDENT_2_X = +student2[0].value;
  const STUDENT_2_Y = +student2[1].value;
  const STUDENT_3_X = +student3[0].value;
  const STUDENT_3_Y = +student3[1].value;
  const SCHOOL_X = +school[0].value;
  const SCHOOL_Y = +school[1].value;

  const distBetweenStudent1AndSchool = Math.sqrt(
    (SCHOOL_X - STUDENT_1_X) ** 2 + (SCHOOL_Y - STUDENT_1_Y) ** 2
  );
  const distBetweenStudent2AndSchool = Math.sqrt(
    (SCHOOL_X - STUDENT_2_X) ** 2 + (SCHOOL_Y - STUDENT_2_Y) ** 2
  );
  const distBetweenStudent3AndSchool = Math.sqrt(
    (SCHOOL_X - STUDENT_3_X) ** 2 + (SCHOOL_Y - STUDENT_3_Y) ** 2
  );

  const hash = {};
  hash[studentNames[0].value] = distBetweenStudent1AndSchool;
  hash[studentNames[1].value] = distBetweenStudent2AndSchool;
  hash[studentNames[2].value] = distBetweenStudent3AndSchool;

  const longestDist = Math.max(
    distBetweenStudent1AndSchool,
    distBetweenStudent2AndSchool,
    distBetweenStudent3AndSchool
  );

  console.log(longestDist);
  var result = "";

  for (const student in hash)
    if (hash[student] === longestDist) result += `${student} `;

  q4Result.style.display = "block";
  q4Result.innerHTML = `<i id="close-q4-result"
  class="fa-solid fa-xmark position-absolute"></i>`;
  q4Result.innerHTML += ` ${result}is/are the farthest from school: ${longestDist.toFixed(
    2
  )}.`;
};
