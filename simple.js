const simple={
    rebuildPage:()=>{simple.page={width:window.innerWidth,height:window.innerHeight}},
    save:(k,d)=>{localStorage.setItem(k,d)},
    load:(k)=>{return localStorage.getItem(k)},
    randint:(i,a)=>{return Math.floor(Math.random()*(a-i+1))+i},
    openURL:function(u){window.open(u,'_blank')}
}
function gid(i){return document.getElementById(i)}
function gcn(i){return document.getElementsByClassName(i)}
function idex(i){return gid(i)!=null}
Object.prototype.preHTML=function(h){this.innerHTML=h+this.innerHTML}
Object.prototype.addHTML=function(h){this.innerHTML+=h}
Object.prototype.setHTML=function(h){this.innerHTML=h}
Object.prototype.setText=function(h){this.innerText=h}
Object.prototype.insertBefore=function(h){this.insertAdjacentHTML("beforebegin",h)}
Object.prototype.insertTop=function(h){this.insertAdjacentHTML("afterbegin",h)}
Object.prototype.insertBottom=function(h){this.insertAdjacentHTML("beforeend",h)}
Object.prototype.insertEnd=function(h){this.insertAdjacentHTML("afterend",h)}
Object.prototype.hide=function(){this.style.display='none'}
Object.prototype.show=function(){this.style.display='block'}
Object.prototype.width=function(){return this.offsetWidth}
Object.prototype.height=function(){return this.offsetHeight}
Object.prototype.left=function(){return this.offsetLeft}
Object.prototype.top=function(){return this.offsetTop}
Object.prototype.val=function(n=null){if(n!=null){this.value=n}else{return this.value}}
Object.prototype.classAdd=function(n){this.classList.add(n)}
Object.prototype.classRemove=function(n){this.classList.remove(n)}
Object.prototype.ael=function(e,c){this.addEventListener(e,c)}
Object.prototype.rel=function(e,c){this.removeEventListener(e,c)}
Object.prototype.val=function(n=null){if(n!=null){this.value=n}else{return this.value}}
Object.prototype.parent=function(){return this.parentElement}
Object.prototype.setAttr=function(k,v){this.setAttribute(k,v)}
Object.prototype.getAttr=function(k){return this.getAttribute(k)}
Array.prototype.sample=function(){return this[Math.floor(Math.random()*this.length)]}
String.prototype.isUpper=function(){if(this.toUpperCase()==this){return true}return false}
String.prototype.isLower=function(){if(this.toLowerCase()==this){return true}return false}
String.prototype.isEmpty=function(){if(this.replaceAll(/ /g,'')==''){return true}else return false}
String.prototype.JSONify=function(){return JSON.parse(this)}
String.prototype.invertCase=function(){return this.split('').map((a)=>{return a.isUpper()?a.toLowerCase():a.toUpperCase()}).join('')}
String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)}
window.addEventListener('resize',simple.rebuildPage)
simple.rebuildPage()
