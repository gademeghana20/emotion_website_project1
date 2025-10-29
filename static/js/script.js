document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bg-video");
  const audio = document.getElementById("bg-audio");
  const backBtn = document.getElementById("back-btn");

  // --- Play video automatically ---
  if (video) {
    video.muted = false;
    video.play().catch((err) => {
      console.log("Video autoplay blocked, waiting for user click", err);
      document.addEventListener(
        "click",
        () => {
          video.play().catch(() => {});
        },
        { once: true }
      );
    });
  }

  // --- Play audio automatically (unmuted) ---
  if (audio) {
    audio.muted = true;
    audio.volume = 1.0;
    audio.play().catch((err) => {
      console.log("Audio autoplay blocked, waiting for user click", err);
      document.addEventListener(
        "click",
        () => {
          audio.play().catch(() => {});
        },
        { once: true }
      );
    });
  }

  // --- Back Button Functionality ---
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      window.location.href = "/";
    });
  }
});
