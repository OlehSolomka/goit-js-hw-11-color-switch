const colors=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];refs={button:document.querySelectorAll("button"),body:document.querySelector("body")};const buttonStart=refs.button[0],buttonStop=refs.button[1];let intId=null,themeChangerActive=null;function onClickColorChangeStart(){themeChangerActive||(themeChangerActive=!0,intId=setInterval(addRandomColor,2e3,0,colors.length-1))}function onClickColorChangeStop(){clearInterval(intId),themeChangerActive=!1}function addRandomColor(t,o){const e=Math.floor(Math.random()*(o-t+1)+t),n=colors[e];refs.body.style=`background-color: ${n}`,themeChangerActive=!0}buttonStart.addEventListener("click",onClickColorChangeStart),buttonStop.addEventListener("click",onClickColorChangeStop);
//# sourceMappingURL=index.ebc3eda3.js.map