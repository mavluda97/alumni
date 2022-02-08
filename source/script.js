function onClick() {
  if (document.getElementById("participantGuest").checked) {
    document
      .getElementById("hidden-textarea")
      .classList.remove("show-hidden-textarea");
    document
      .getElementById("participantGuestLabel")
      .classList.add("active-class");

    document.getElementById("gradient-user-icon").classList.add("active-icon");
    document.getElementById("white-user-icon").classList.remove("active-icon");
    document.getElementById("white-user-icon").classList.add("no-active-icon");
    document
      .getElementById("participantSpeakerLabel")
      .classList.remove("active-class");
    document
      .getElementById("gradient-micro-icon")
      .classList.remove("active-icon");
    document.getElementById("white-micro-icon").classList.add("active-icon");
  } else if (document.getElementById("participantSpeaker").checked) {
    document
      .getElementById("hidden-textarea")
      .classList.add("show-hidden-textarea");
    document
      .getElementById("participantSpeakerLabel")
      .classList.add("active-class");

    document.getElementById("gradient-micro-icon").classList.add("active-icon");
    document.getElementById("white-micro-icon").classList.remove("active-icon");
    document.getElementById("white-micro-icon").classList.add("no-active-icon");
    document
      .getElementById("gradient-user-icon")
      .classList.remove("active-icon");
    document.getElementById("white-user-icon").classList.add("active-icon");
    document
      .getElementById("participantGuestLabel")
      .classList.remove("active-class");
  }
}
