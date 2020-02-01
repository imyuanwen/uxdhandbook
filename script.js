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

var home = `<img
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

var intro = `
<h1>What is User Experience (UX) Design?</h1>
          <p>User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function. -- <em>Interaction Design Foundation</em></p>
          <ul>
            <li><a href="https://www.interaction-design.org/literature/topics/ux-design" target="_blank">What is user experience design?</a></li>
            <li><a href="https://www.nngroup.com/articles/definition-user-experience/" target="_blank">The Definition of User Experience (UX)</a></li>
          </ul>
          <h2>UX design & Human-Computer Interaction (HCI)</h2>
          <p>HCI is more academic-based and focuses more on research. UX design is more industry-based and focuses more on practice. While HCI focuses more on understanding the interaction between human and computers through research, UX design focuses more on dictating the rules about how to design a great user experience.</p>
          <h2>UX design & User-centered Design</h2>
          <p>User-centered Design is <strong>a process</strong> in which the needs, wants, and limitations of end users of a product are given extensive attention at each stage of the design process. UX design is User-centered. So they can exist together.</p>
          <ul>
            <li><a href="https://www.interaction-design.org/literature/topics/user-centered-design" target="_blank">What is User-centered design?</a></li>
          </ul>
`;

document.getElementById('aboutlink').onclick = function () {
  console.log('about');
  document.querySelector('article').innerHTML = about;
};

document.getElementById('homelink').onclick = function () {
  console.log('home');
  document.querySelector('article').innerHTML = home;
};

document.getElementById('introlink').onclick = function () {
  console.log('intro');
  document.querySelector('article').innerHTML = intro;
};