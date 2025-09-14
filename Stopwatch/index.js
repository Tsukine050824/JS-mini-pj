// Lấy phần tử hiển thị thời gian từ HTML (ví dụ <div id="display"></div>)
const display = document.getElementById("display");

// Biến quản lý bộ đếm
let timer = null;        // ID của setInterval
let startTime = 0;       // Thời điểm bắt đầu (ms)
let elapsedTime = 0;     // Tổng thời gian đã trôi (ms)
let isRunning = false;   // Trạng thái đồng hồ (đang chạy hay không)

// Bắt đầu stopwatch
function start() {
  if (!isRunning) {
    // Gán thời điểm bắt đầu = thời gian hiện tại - thời gian đã trôi
    // => giúp resume sau khi stop không bị reset
    startTime = Date.now() - elapsedTime;

    // Cập nhật mỗi 10ms (0.01 giây)
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

// Dừng stopwatch
function stop() {
  if (isRunning) {
    // Dừng setInterval
    clearInterval(timer);

    // Cập nhật thời gian đã trôi đến lúc dừng
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

// Reset stopwatch
function reset() {
  clearInterval(timer);                  // Dừng timer
  startTime = 0;                         // Reset thời điểm bắt đầu
  elapsedTime = 0;                       // Reset thời gian đã trôi
  isRunning = false;                     // Reset trạng thái
  display.textContent = "00:00:00:00";   // Reset hiển thị về 0
}

// Hàm cập nhật hiển thị
function update() {
  const now = Date.now();           // Lấy thời gian hiện tại (ms)
  elapsedTime = now - startTime;    // Thời gian đã trôi = now - startTime

  // Tính giờ, phút, giây, mili-giây
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));        // số giờ
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);    // số phút
  let seconds = Math.floor((elapsedTime / 1000) % 60);           // số giây
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);      // mili-giây (2 chữ số)

  // Format thành chuỗi có 2 chữ số (vd: "05", "09")
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  // Cập nhật text trong HTML
  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
