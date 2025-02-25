<script setup lang="ts">
import { ref, useTemplateRef, onMounted, onBeforeUnmount } from "vue";

const eyes = useTemplateRef("eyes");
const bar = useTemplateRef("bar");
const date = ref("01/01");
const time = ref("01/01");

function updateDatetime() {
  const now = new Date();
  date.value = now.toLocaleDateString(undefined, {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  });
  time.value = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
}
updateDatetime();
setInterval(updateDatetime, 500);

function moveEyes(event) {
  const maxAbsoluteDistance = 300;
  const maxRelativeDistance = [0.035, 0.04];
  const baseEyesRelativePosition = [0.28, 0.32]; // [x, y]

  let mouseAbsolutePosition = [event.clientX, event.clientY];
  let betweenEyesAbsolutePosition = [
    bar.value.offsetLeft + bar.value.offsetWidth * 0.46,
    bar.value.offsetTop + bar.value.offsetHeight * 0.35,
  ];

  const eyesRelativePosition = [
    baseEyesRelativePosition[0] +
      Math.max(
        -maxRelativeDistance[0],
        Math.min(
          maxRelativeDistance[0],
          (mouseAbsolutePosition[0] - betweenEyesAbsolutePosition[0]) *
            (maxRelativeDistance[0] / maxAbsoluteDistance),
        ),
      ),
    baseEyesRelativePosition[1] +
      Math.max(
        -maxRelativeDistance[1],
        Math.min(
          maxRelativeDistance[1],
          (mouseAbsolutePosition[1] - betweenEyesAbsolutePosition[1]) *
            (maxRelativeDistance[1] / maxAbsoluteDistance),
        ),
      ),
  ];

  eyes.value.style.left = eyesRelativePosition[0] * 100 + "%";
  eyes.value.style.top = eyesRelativePosition[1] * 100 + "%";
}

onMounted(() => document.addEventListener("mousemove", moveEyes));
onBeforeUnmount(() => document.removeEventListener("mousemove", moveEyes));
</script>

<template>
  <button id="poryphone-bar" ref="bar">
    <div id="eyes" ref="eyes"></div>
    <div class="content">
      <div class="datetime">
        <div id="poryphone-bar-date" class="date">{{ date }}</div>
        <div id="poryphone-bar-time" class="time">{{ time }}</div>
      </div>
    </div>
  </button>
</template>

<style scoped>
#poryphone-bar {
  --width: var(--players-width);
  align-self: end;
  position: absolute;
  margin-bottom: -10px;
  pointer-events: all;
  border: 0;
  border-radius: 0;
  width: var(--width);
  height: calc(var(--width) * 110 / 161);
  background: url(/assets/poryphone-fermer.png);
  background-size: 100% 100%;
  box-shadow: none;
  margin-left: calc((var(--players-width) - var(--width)) / 2);
  text-shadow: 0 1px 1px #70ddff;
  cursor: pointer;
}

#eyes {
  content: "";
  background: url(/assets/poryphone-fermer-pupille-normal.png);
  position: absolute;
  width: 46.9%;
  height: 22.8%;
  background-size: 100% 100%;
  left: 28%;
  top: 32%;
}

#poryphone-bar .content {
  margin: 43% 10% 10%;
  color: #2ba3c9;
  font-family: Oxanium, monospace;
  font-weight: 600;
  padding: 3px;
  display: flex;
  transition: color 0.3s;
}

#poryphone-bar:hover .content {
  color: #067395;
}

#poryphone-bar .datetime {
  flex: 1;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: -2px;
}

#poryphone-bar .datetime .date {
  font-size: 14px;
  line-height: 14px;
}
</style>
