function renderABC() {
  if (typeof ABCJS === "undefined") {
    setTimeout(renderABC, 100);
    return;
  }

  document.querySelectorAll("pre code").forEach(function (block, index) {
    if (block.classList.contains("language-abc") || block.innerText.trim().startsWith("X:")) {
      const code = block.textContent;
      const parent = block.closest(".highlight") || block.parentElement;

      if (parent.previousElementSibling && parent.previousElementSibling.classList.contains("abc-wrapper")) {
        return;
      }

      // 1. Contenidor principal
      const wrapper = document.createElement("div");
      wrapper.className = "abc-wrapper";
      
      // 2. Contenidor per al reproductor d'àudio
      const audioContainer = document.createElement("div");
      audioContainer.className = "abc-audio-player";
      const audioId = "abc-audio-" + Math.random().toString(36).substring(2, 9);
      audioContainer.id = audioId;

      // 3. Contenidor per a la partitura
      const paperContainer = document.createElement("div");
      paperContainer.className = "abc-notation";
      const paperId = "abc-paper-" + Math.random().toString(36).substring(2, 9);
      paperContainer.id = paperId;

      wrapper.appendChild(audioContainer);
      wrapper.appendChild(paperContainer);

      parent.parentNode.insertBefore(wrapper, parent);
      parent.style.display = "none";

      // 4. Renderitzar partitura
      const visualObj = ABCJS.renderAbc(paperId, code, { responsive: "resize" })[0];

      // 5. Inicialitzar el reproductor d'àudio (si la llibreria ho permet)
      if (ABCJS.synth.supportsAudio()) {
        const synthControl = new ABCJS.synth.SynthController();
        synthControl.load("#" + audioId, null, {
          displayLoop: true,
          displayRestart: true,
          displayPlay: true,
          displayProgress: true,
          displayWarp: true
        });

        const createSynth = new ABCJS.synth.CreateSynth();
        createSynth.init({ visualObj: visualObj }).then(function () {
          synthControl.setTune(visualObj, false).then(function () {
            console.log("Audio preparat correctament");
          });
        });
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", renderABC);
if (typeof document$ !== "undefined") {
  document$.subscribe(renderABC);
}