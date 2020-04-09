export default st => `
<div id="H">
<h2>${st.title}</h2>
<br></br>
<!--Galaxy S20-->
<div id="20">
<h3>${st.name}</h3>
<a href="https://www.samsung.com/us/mobile/galaxy-s20-5g/"> <img id="S20" src="${st.photo1}"/> </a>
<p>${st.info}</p>
<a href="${st.link1}">Galaxy S20 Ultra Sammobile Review</a>
</div>
<!--Huawei P40 Pro+-->
<div id="H40">
<h3>${st.name2}</h3>
<a href="#"> <img id="P40" src="${st.photo2}"/> </a>
<p>${st.info2}</p>
<a href="${st.link2}">Huawei P40 Pro+ AndroidAuthority Review</a>
</div>
<!--Galaxy Note 10-->
<div id="others">
<h3>${st.name3}</h3>
<a href="#"><img id="R10" src="${st.photo3}"/> </a>
<p>${st.info3}</p>
</div>
<!--iPhone 11-->
<div id="Apple">
<h3>${st.name4}</h3>
<a href="#"> <img id="R11" src="${st.photo4}"/> </a>
<p>${st.info4}</p>
</div>
</div>
`;
