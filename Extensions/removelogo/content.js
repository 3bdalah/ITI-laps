const twitter = "twitter.com";
const linkWebsite = window.location.host;
console.log("Start ext")
if (linkWebsite.includes(twitter)) {
  const BixBox = document.querySelector(".css-1dbjc4n.r-dnmrzs.r-1vvnge1");
  const boxImg = document.querySelector(".css-4rbku5.css-18t94o4.css-1dbjc4n.r-1niwhzg.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1loqt21.r-19yznuf.r-64el8z.r-1ny4l3l.r-o7ynqc.r-6416eg.r-lrvibr");
  BixBox.remove();
  if (boxImg) {
    const log = boxImg.querySelector(".r-1nao33i.r-4qtqp9.r-yyyyoo.r-16y2uox.r-8kz0gk.r-dnmrzs.r-bnwqim.r-1plcrui.r-lrvibr.r-lrsllp");
    
    if (log) {
      const img = document.createElement("img");
      img.src = "./twitter.png";
      img.alt = "New Logo";
      
      boxImg.removeChild(log);
      boxImg.appendChild(img);
      console.log("Logo replaced");
    }
  }
}
