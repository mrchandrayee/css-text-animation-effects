const cssSnippets = {
  liquid: `.liquid-gradient {
  color: transparent;
  background: linear-gradient(90deg, #00e5ff, #a855f7, #00e5ff);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  animation: liquid-flow 3s linear infinite;
}
@keyframes liquid-flow {
  to { background-position: 200% center; }
}`,
  glitch: `.cyber-glitch {
  position: relative;
  animation: cyber-glitch 1.5s infinite;
  text-shadow: 2px 0 #00eaff, -2px 0 #ff2f92;
}
.cyber-glitch::before,
.cyber-glitch::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
}
@keyframes cyber-glitch {
  0%, 90%, 100% { transform: translate(0); }
  92% { transform: translate(-2px, 1px); }
  94% { transform: translate(2px, -1px); }
  96% { transform: translate(-1px, 0); }
}`,
  wave: `.wave-text { display: flex; perspective: 500px; }
.wave-text span {
  display: inline-block;
  animation: wave3d 1.6s ease-in-out infinite;
}
@keyframes wave3d {
  0%, 100% { transform: translateY(0) rotateX(0); }
  50% { transform: translateY(-12px) rotateX(35deg); }
}`,
  mask: `.mask-reveal {
  overflow: hidden;
  clip-path: inset(0 100% 0 0);
  animation: mask-open 2.5s cubic-bezier(.77, 0, .18, 1) infinite alternate;
}
@keyframes mask-open {
  0% {
    clip-path: inset(0 100% 0 0);
    transform: translateX(-12px);
  }
  55%, 100% {
    clip-path: inset(0 0 0 0);
    transform: translateX(0);
  }
}`,
  neon: `.neon-electric {
  color: #eaffff;
  text-shadow: 0 0 5px #fff, 0 0 10px #00eaff,
    0 0 22px #00eaff, 0 0 42px #00aaff;
  animation: electric-pulse 1.5s ease-in-out infinite alternate;
}
@keyframes electric-pulse {
  from { opacity: .72; }
  to { opacity: 1; }
}`
};
Object.entries(cssSnippets).forEach(([name, code]) => {
  document.getElementById(`code-${name}`).textContent = code;
});
const waveText = document.getElementById("waveText");
[..."ANIMATED"].forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.animationDelay = `${index * 0.1}s`;
  waveText.appendChild(span);
});
document.querySelectorAll(".copy-btn").forEach(button => {
  button.addEventListener("click", async () => {
    const code = cssSnippets[button.dataset.copy];
    try {
      await navigator.clipboard.writeText(code);
      button.textContent = "Copied!";
    } catch {
      button.textContent = "Copy unavailable";
    }
    window.setTimeout(() => button.textContent = "Copy CSS", 1300);
  });
});
document.getElementById("replayAll").addEventListener("click", () => {
  document.querySelectorAll(".effect-title").forEach(element => {
    element.style.animation = "none";
    void element.offsetWidth;
    element.style.animation = "";
  });
});