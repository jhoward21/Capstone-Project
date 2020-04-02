export default st => `
<<<<<<< HEAD
<h2 id="PT">${st.name}</h2>
=======
<h2>${st.name}</h2>
>>>>>>> e9a8665e3b9ea8b612fe91ca18da761f16256636
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
<li>${st.C3}</li>
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
<<<<<<< HEAD
<li><a href="${st.Buy1}">OnePlus's Official Website</a></li>
<li><a href="${st.Buy2}">T-Mobile OnePlus 7 Pro</a></li>
<li><a href="${st.Buy3}">Amazon OnePlus 7 Pro</a></li>
=======
<li><a href="${st.Buy1}">Samsung's Official Website</a></li>
<li><a href="${st.Buy2}">T-Mobile GalaxyS10+</a></li>
<li><a href="${st.Buy3}">Verizon GalaxyS10+</a></li>
<li><a href="${st.Buy4}">Sprint GalaxyS10+</a></li>
<li><a href="${st.Buy5}">AT&T GalaxyS10+</a></li>
>>>>>>> e9a8665e3b9ea8b612fe91ca18da761f16256636
`;
