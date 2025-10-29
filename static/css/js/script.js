document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bg-video");
  const audio = document.getElementById("bg-audio");
  const backBtn = document.getElementById("back-btn");

  // --- Try autoplay video muted ---
  if (video) {
    video.muted = true; // keep muted so browsers allow autoplay
    video.play().catch(() => {});
  }

  // --- Prepare audio but don't play yet ---
  if (audio) {
    audio.muted = true;
    audio.volume = 1.0;
    audio.load();
  }

  // --- Enable sound and start music on first user click ---
  const enableSound = () => {
    if (video) {
      video.muted = false;
      video.play().catch(() => {});
    }
    if (audio) {
      audio.muted = false;
      audio.play().catch((err) => console.log("Audio play blocked:", err));
    }
    document.removeEventListener("click", enableSound);
  };
  document.addEventListener("click", enableSound);

  // --- Back Button ---
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
