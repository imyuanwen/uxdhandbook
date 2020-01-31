console.log('hi');
var about = `
<h1 id="about">
            About Yuan
          </h1>
          <figure>
           <img
            id="profilepic"
            src="https://cdn.glitch.com/bbbd9d87-0557-48fe-b253-83473a2706c8%2FIMG_4167.jpg?v=1580328329917"
            alt="traveling with my friends at key west"
            width="100%"
          />
            <figurecaption>Traveling with my friends at key west</figurecaption>
          </figure>
         
          <p id="hello">
            Hi, I'm
            <a href="https://imyuanwen.github.io/" target="_blank"> Yuan Wen</a
            >!
          </p>
          <p>
            A baller, LA Lakers fan and UX designer.<br />I was borned in China
            and I'm living in Chaple Hill now. I studied Psychology in SYSU and
            Human-Computer Interaction (HCI) in UNC at Chapel Hill.
          </p>
          <p>
            You can also find me at
            <a href="https://www.instagram.com/yuanwen929/" target="_blank"
              >Instagram</a
            >,
            <a href="https://www.behance.net/yawxd" target="_blank">Behance</a>,
            <a href="https://github.com/imyuanwen" target="_blank">Github</a>,
            or <a href="mailto:yuanwen@ad.unc.edu">Send an email</a>.
          </p>`;

var landing = `<img
id="landingimg"
src="https://cdn.glitch.com/bbbd9d87-0557-48fe-b253-83473a2706c8%2Fuxdhandbook.jpg?v=1580329849100"
alt="person working on blue and white paper on board"
width="100%"
/>
<h2>
🚧This project is under construction🚧
</h2>
<p>
This is an online interactive book that you can find theories and
tools about User Experience (UX) design.The target audience are people who want to learn UX design.
</p>`;

document.getElementById('aboutlink').onclick = function() {
  console.log('about');
  document.querySelector('article').innerHTML = about;
};
// function changeContent() {
//   console.log('about');
//   document.querySelector('article').innerHTML = about;
// }
document.getElementById('homebtn').onclick = function() {
  console.log('home');
  document.querySelector('article').innerHTML = landing;
};