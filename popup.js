const uiButton = document.createElement("button");
uiButton.innerText = 'Web embeddables';
uiButton.style.position = 'fixed';
uiButton.style.top = "50%";
uiButton.style.right = "-70px";
uiButton.style.padding = "10px 20px";
uiButton.style.fontSize = "16px";
uiButton.style.transform ="rotate(-90deg)";
document.body.appendChild(uiButton);

const modal = document.createElement("div");
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.zIndex = "999";
modal.style.left = 0;
modal.style.top = 0;
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.overflow = "auto";
modal.style.backgroundColor = "rgba(0,0,0,0.4)";

const closeButton = document.createElement("span");
closeButton.innerHTML = "&times";
closeButton.style.color = "#aaa";
closeButton.style.float  = "right";
closeButton.style.fontSize = "28px";
closeButton.style.fontWeight = "bold";
closeButton.style.cursor = "pointer";
closeButton.style.position = "absolute";
closeButton.style.top = "-6px";
closeButton.style.right = "0px";


const modalContent = document.createElement("div");
modalContent.style.backgroundColor = "#fefefe";
modalContent.style.margin = '15% auto';
modalContent.style.padding = '20px';
modalContent.style.border = "1px solid grey";
modalContent.style.width = "80%";
modalContent.style.position = "relative";
modalContent.innerHTML = `<iframe src="https://code.devsnc.com/pages/rohit-kumardogra/web-embeddables/task-calendar.html" height="200" width="100%" title="Iframe Example"></iframe>`;

modalContent.appendChild(closeButton);
modal.appendChild(modalContent);

document.body.appendChild(modal);

uiButton.onclick = function(){
    modal.style.display = "block";
}

closeButton.onclick = function(){
    modal.style.display = "none";
}



