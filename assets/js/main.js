function registerbtn (){
  // ส่วนที่ 1: การลงทะเบียน
  const registerBtn = document.querySelector('.register');
  registerBtn.classList.add('hide');
  const element = document.getElementById('location');
  element.classList.remove('hide');
  element.classList.add('show');
}


  function selectlocation(element) {
    // เอา class "selected" ออกจากทุกตัวก่อน
    document.querySelectorAll('.branch-item').forEach(item => {
      item.classList.remove('selected');
    });

    // ใส่ class "selected" กับวันที่ที่เลือก
    element.classList.add('selected');

    // เปิดปุ่ม Confirm
    document.getElementById('nextBtn').disabled = false;
  }

  function nextStep() {
    const locationElement = document.getElementById('location');
    locationElement.classList.remove('show');
    locationElement.classList.add('hide');
    const dateElement = document.getElementById('date');
    dateElement.classList.remove('hide');
    dateElement.classList.add('show');
  }
  function finalbtn() {
    alert("Booking Confirmed!");
  }

