
  function selectDate(element) {
    // เอา class "selected" ออกจากทุกตัวก่อน
    document.querySelectorAll('.date-item').forEach(item => {
      item.classList.remove('selected');
    });

    // ใส่ class "selected" กับวันที่ที่เลือก
    element.classList.add('selected');
    
    // เปิดปุ่ม Confirm
    const selectedtime = document.getElementById('time');
    selectedtime.classList.remove('hide');
    selectedtime.classList.add('show');
    
    
  }
  function selecttime(element) {
    // เอา class "selected" ออกจากทุกตัวก่อน
    document.querySelectorAll('.time-slot').forEach(item => {
      item.classList.remove('selected');
    });

    // ใส่ class "selected" กับวันที่ที่เลือก
    element.classList.add('selected');
    
    // เปิดปุ่ม Confirm
    document.getElementById('confirmDateBtn').disabled = false;

  }
  function nexttime(){
    // เปิดปุ่ม Confirm
      const selectedtime = document.getElementById('time');
      selectedtime.classList.remove('show');
      selectedtime.classList.add('hide');
      const dateElement = document.getElementById('date');
      dateElement.classList.remove('show');
      dateElement.classList.add('hide');
      const finsihElement = document.getElementById('finish');
      finsihElement.classList.remove('hide');
      finsihElement.classList.add('show');
  }
