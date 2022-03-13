const questions = document.getElementsByClassName("question"),
  activeQuestion = document.getElementsByClassName("question--active"),
  qShowBtn = document.getElementsByClassName("btn-q-show"),
  stepShowBtn = document.getElementById("btn-steps-show"),
  stepBox = document.getElementById("steps-box"),
  stepBoxContent = document.getElementById("steps-box-content"),
  closeStepBoxBtn = document.getElementById("close-steps-box");

// Steps in 3-block model
const q1Steps = `<strong style="text-decoration: underline;">Đề bài:</strong> Cho người dùng nhập vào 3 số. Viết chương trình xuất 3 số theo thứ tự tăng dần. Giả sử inputs hợp lệ, có thể so sánh số.<br>
<strong style="text-decoration: underline;">Lời giải:</strong><br>
<strong>Đầu vào:</strong> Nhập giá trị bất kỳ vào trong 3 ô inputs.<br>
<strong>Xử lý:</strong><br>
 <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng nhập giá trị vào trong 3 inputs.<br>
 <strong>- Bước 2:</strong> Lấy 2 giá trị ngẫu nhiên từ 3 giá trị nhận được ở giao diện và so sánh, chọn ra một số lớn hơn và một số bé hơn giữa hai số này.<br>
 <strong>- Bước 3:</strong> Lấy số lớn hơn so sánh với số còn lại chưa được xét trong 3 số ở giao diện, nếu số này lớn hơn số được xét lớn hơn ở bước 2 thì ta nhận số này số lớn nhất -> ở bước 2, số lớn hơn sẽ là số trung gian, số bé hơn sẽ là số nhỏ nhất.<br>
 <strong>- Bước 4:</strong> Ngược lại với giả sử ở bước 3 -> số lớn hơn ở bước 2 sẽ là số lớn nhất, sau đó ta lại tiếp tục so sánh 2  số còn lại để tìm ra vị trí của chúng.<br>
 <strong>- Bước 5:</strong> Xuất kết quả tương ứng từ bước 3 hoặc 4 (dãy số theo thứ tự tăng dần đều) ra giao diện.<br>
<strong>Đầu ra:</strong> Xuất ra ba số theo thứ tự tăng dần đều.`,
  q2Steps = `<strong style="text-decoration: underline;">Đề bài:</strong> Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E).<br>
  <strong style="text-decoration: underline;">Lời giải:</strong><br>
  <strong>Đầu vào:</strong> Chọn một trong bốn thành viên trong gia đình gồm Bố, Mẹ, Anh trai và Em gái.<br>
  <strong>Xử lý:</strong><br>
   <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng chọn 1 trong 4 options gồm Bố, Mẹ, Anh trai và Em gái.<br>
   <strong>- Bước 2:</strong> Lấy giá trị nhận được từ giao diện, so sánh bằng switch statement để đưa ra kết quả phù hợp.<br>
   <strong>- Bước 3:</strong> Xuất kết quả nhận được từ bước 2 ra giao diện.<br>
  <strong>Đầu ra:</strong> Xuất ra lời chào phù hợp với thành viên trong gia đình được chọn.`,
  q3Steps = `<strong style="text-decoration: underline;">Đề bài:</strong> Cho 3 số. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.<br>
  <strong style="text-decoration: underline;">Lời giải:</strong><br>
  <strong>Đầu vào:</strong> Nhập giá trị bất kỳ vào trong 3 ô inputs.<br>
  <strong>Xử lý:</strong><br>
   <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng nhập giá trị vào trong 3 inputs.<br>
   <strong>- Bước 2:</strong> Lấy giá trị nhận được từ giao diện, lọc ra xem có phải các giá trị nhận được là số nguyên hay không.<br>
   <strong>- Bước 3:</strong> Nếu không là số nguyên thì xét số tiếp theo.<br>
   <strong>- Bước 4:</strong> Nếu là số nguyên thì xét xem là số chẵn hay số lẻ, sau đó tăng biến đếm số lượng số chẵn, số lẻ lên, đồng thời đưa vào mảng chứa các số chẵn, số lẻ tương ứng.<br>
   <strong>- Bước 5:</strong> Xuất kết quả nhận được từ bước 4 ra giao diện sau khi đã xét xong cả 3 số.<br>
  <strong>Đầu ra:</strong> Xuất ra số lượng số lẻ, là những số nào, tương tự đối với số chẵn.`,
  q4Steps = `<strong style="text-decoration: underline;">Đề bài:</strong> Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì trong 3 loại: tam giác vuông, tam giác đều, tam giác cân.<br>
  <strong style="text-decoration: underline;">Lời giải:</strong><br>
  <strong>Đầu vào:</strong> Nhập giá trị 3 cạnh tam giác vào 3 ô inputs vào giao diện.<br>
  <strong>Xử lý:</strong><br>
   <strong>- Bước 1:</strong> Thiết kế giao diện, cho người dùng nhập giá trị 3 cạnh tam giác vào 3 ô input vào giao diện.<br>
   <strong>- Bước 2:</strong> Lấy giá trị nhận được từ giao diện, xét xem các cạnh này là cạnh của một tam giác hay không.<br>
   <strong>- Bước 3:</strong> Nếu không là cạnh của tam giác thì in ra thông báo và kết thúc xét loại tam giác.<br>
   <strong>- Bước 4:</strong> Nếu là 3 cạnh của một tam giác thì xét điều kiện tam giác đều, tam giác cân, tam giác vuông.<br>
   <strong>- Bước 5:</strong> Xuất kết quả tam giác tương ứng từ bước 4 ra giao diện sau khi đã xét xong cả 3 loại tam giác.<br>
  <strong>Đầu ra:</strong> Xuất ra loại tam giác tương ứng nếu là tam giác, không thì xuất ra không đủ điều kiện tạo thành tam giác.`;

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
const nums = document.getElementsByClassName("q1-input"),
  q1SubmitBtn = document.getElementById("btn-q1-submit"),
  q1Result = document.getElementById("q1-result");

q1SubmitBtn.onclick = function () {
  const num1 = +nums[0].value,
    num2 = +nums[1].value,
    num3 = +nums[2].value;

  var smallest, middle, largest;

  (() => {
    middle = num1 > num2 ? num1 : num2;
    smallest = middle === num1 ? num2 : num1;

    if (num3 > middle) {
      largest = num3;
      // middle: second largest
      // smallest: smallest
      return;
    }

    largest = middle;

    middle = smallest > num3 ? smallest : num3;
    smallest = middle == num3 ? smallest : num3;
  })();

  q1Result.innerHTML = `3 numbers in ascending order: ${smallest}, ${middle}, ${largest}.`;
};

// ------- QUESTION 2 -------
const familyMembers = document.getElementById("family-members"),
  q2Result = document.getElementById("q2-result");

familyMembers.onchange = function () {
  q2Result.innerHTML = "Processing";
  let counter = 0;
  let myVar = setInterval(function () {
    q2Result.innerHTML += " . ";
    counter++;
    if (counter == 4) {
      clearInterval(myVar);
      switch (familyMembers.value) {
        case "B":
          q2Result.innerHTML = "👨🏻 Hello Bố!";
          break;
        case "M":
          q2Result.innerHTML = "👩🏻 Hello Mẹ!";
          break;
        case "A":
          q2Result.innerHTML = "👦🏻 Hello Anh trai!";
          break;
        case "E":
          q2Result.innerHTML = "👩🏻‍🦱 Hello Em gái!";
          break;
        default:
          break;
      }
    }
  }, 700);
};

// ------- QUESTION 3 -------
const numbers = document.getElementsByClassName("q3-input"),
  q3SubmitBtn = document.getElementById("btn-q3-submit"),
  q3Result = document.getElementById("q3-result");

q3SubmitBtn.onclick = function () {
  var odd = 0,
    even = 0;

  const oddNums = [],
    evenNums = [];

  for (let i = 0; i < numbers.length; ++i) {
    // Cases:
    // numbers[i].value is a string
    // +numbers[i].value convert string to Number
    //     while return NaN if cannot convert

    // If the +numbers[i].valuer is not an integer -> continue
    if (!Number.isInteger(+numbers[i].value)) continue;

    !(numbers[i].value % 2)
      ? ++even && evenNums.push(numbers[i].value)
      : ++odd && oddNums.push(numbers[i].value);
  }

  q3Result.innerHTML = `- There are <strong>${odd} odd</strong> number(s) which are <strong>${oddNums.toString()}</strong><br> - There are <strong>${even} even</strong> number(s) which are <strong>${evenNums.toString()}</strong>`;
};
// ------- QUESTION 4 -------
const edges = document.getElementsByClassName("q4-input"),
  q4SubmitBtn = document.getElementById("btn-q4-submit"),
  q4Result = document.getElementById("q4-result");

q4SubmitBtn.onclick = function () {
  q4Result.innerHTML = "";

  const edge1 = +edges[0].value,
    edge2 = +edges[1].value,
    edge3 = +edges[2].value;

  if (
    !(edge1 + edge2 > edge3 && edge1 + edge3 > edge2 && edge2 + edge3 > edge1)
  ) {
    q4Result.innerHTML = `🚫These 3 edges cannot form a triangle.`;
    return;
  }

  // Tam giac can
  if (edge1 === edge2 || edge1 === edge3 || edge2 === edge3)
    q4Result.innerHTML += `- These 3 edges form a <strong>isosceles triangle</strong>.<br>`;

  // Tam giac deu
  if (edge1 === edge2 && edge2 === edge3)
    q4Result.innerHTML += `- These 3 edges form a <strong>equilateral triangle</strong>.<br>`;

  // Tam giac vuong
  if (
    edge1 ** 2 + edge2 ** 2 === edge3 ** 2 ||
    edge1 ** 2 + edge3 ** 2 === edge2 ** 2 ||
    edge2 ** 2 + edge3 ** 3 === edge1 ** 2
  )
    q4Result.innerHTML += `- These 3 edges form a <strong>right-angled  triangle</strong>.<br>`;
};
