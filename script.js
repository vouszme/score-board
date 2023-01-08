const Skor1 = document.querySelector(".angka1");
const Skor2 = document.querySelector(".angka2");

Skor1.addEventListener("pointerdown", handlePointerDown);
Skor1.addEventListener("pointerup", handlePointerUp);

Skor2.addEventListener("pointerdown", handlePointerDown);
Skor2.addEventListener("pointerup", handlePointerUp);

let initialY = null;

function handlePointerDown(event) {
  initialY = event.clientY;
}

function handlePointerUp(event) {
  if (initialY === null) {
    return;
  }

  const currentY = event.clientY;
  const diffY = initialY - currentY;

  if (diffY > 0) {
    // Swipe ke atas
    if (event.target.classList.contains("angka1")) {
      if (Skor1.textContent < 10) {
        Skor1.textContent = parseInt(Skor1.textContent) + 1;
      }
    } else if (event.target.classList.contains("angka2")) {
      if (Skor2.textContent < 10) {
        Skor2.textContent = parseInt(Skor2.textContent) + 1;
      }
    }
    
  } else {
    // Swipe ke bawah
    if (event.target.classList.contains("angka1")) {
      if (Skor1.textContent > 0) {
        Skor1.textContent = parseInt(Skor1.textContent) - 1;
      }
    } else if (event.target.classList.contains("angka2")) {
      if (Skor2.textContent > 0) {
        Skor2.textContent = parseInt(Skor2.textContent) - 1;
      }
    }
  }

  initialY = null;
}


Skor1.addEventListener("touchstart", handleTouchStart);
Skor1.addEventListener("touchend", handleTouchEnd);

Skor2.addEventListener("touchstart", handleTouchStart);
Skor2.addEventListener("touchend", handleTouchEnd);

function handleTouchStart(event) {
  initialY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
  if (initialY === null) {
    return;
  }

  const currentY = event.changedTouches[0].clientY;
  const diffY = initialY - currentY;

  if (diffY > 0) {
    if (event.target.classList.contains("angka1")) {
      if (Skor1.textContent < 10) {
        Skor1.textContent = parseInt(Skor1.textContent) + 1;
      }
    } else if (event.target.classList.contains("angka2")) {
      if (Skor2.textContent < 10) {
        Skor2.textContent = parseInt(Skor2.textContent) + 1;
      }
    }
    
  } else {
    if (event.target.classList.contains("angka1")) {
      if (Skor1.textContent > 0) {
        Skor1.textContent = parseInt(Skor1.textContent) - 1;
      }
    } else if (event.target.classList.contains("angka2")) {
      if (Skor2.textContent > 0) {
        Skor2.textContent = parseInt(Skor2.textContent) - 1;
      }
    }
  }

  initialY = null;
}

function updateScore(event, value) {
	if (event.target.classList.contains("angka1")) {
	  if (Skor1.textContent < 10 && Skor1.textContent > 0) {
		Skor1.textContent = parseInt(Skor1.textContent) + value;
	  }
  
	  if (Skor1.textContent >= 10) {
		alert("Team 1 menang!");
	  }
	} else if (event.target.classList.contains("angka2")) {
	  if (Skor2.textContent < 10 && Skor2.textContent > 0) {
		Skor2.textContent = parseInt(Skor2.textContent) + value;
	  }
  
	  if (Skor2.textContent >= 10) {
		alert("Team 2 menang!");
	  }
	}
  
	if (Skor1.textContent === Skor2.textContent) {
	  alert("Imbang!");
	}
  }
  
  const resetButton = document.querySelector(".reset-button");
  
  resetButton.addEventListener("click", function() {
	Skor1.textContent = 0;
	Skor2.textContent = 0;
  });
  
