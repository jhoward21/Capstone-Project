export default st => `
<div id="Pixel4">
<h2 id="PT">${st.name}</h2>
<img id="S10" src="${st.photo}"/>
<p>${st.info}</p>
<h3>${st.titleSpecs}</h3>
<li>${st.Specs}</li>
<li>${st.Specs1}</li>
<li>${st.Specs2}</li>
<li>${st.Specs3}</li>
<li>${st.OS}</li>
<li>${st.BC}</li>
<ul>
<h4>${st.CSpec}</h4>
<li>${st.C1}</li>
<li>${st.C2}</li>
<h4>${st.CSpec2}</h4>
<li>${st.FC1}</li>
<li>${st.FC2}</li>
<h4>${st.Video}</h4>
<li>${st.V}</li>
<h4>${st.FVideo}</h4>
<li>${st.FV}</li>
</ul>
<br></br>
<h3>${st.YT}</h3>
<iframe width="420" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
src="${st.YouTube}">
</iframe>
<br></br>
<h3>${st.Purchase}</h3>
<li><a href="${st.Buy1}">Google's Official Website</a></li>
<li><a href="${st.Buy2}">Verizon Google Pixel 4XL</a></li>
<li><a href="${st.Buy3}">AT&T Google Pixel 4XL</a></li>
<li><a href="${st.Buy4}">BestBuy Google Pixel 4XL</a></li>
</div>
`;
