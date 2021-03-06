//if (link.title !== "Home") {
//  return link.title
//} else {
//  return ""
//}

export default links => `
<nav>
<div class ="nav">
<div class="burger">
<div class="line1"></div>
<div class="line2"></div>
<div class="line3"></div>
</div>
    <div class = "logo">
      <h4>PhoneInfo4U</h4>
    </div>
      <ul class="nav-links">
       ${links
         .map(
           link =>
             `<li><a href ="/${link.url}" data-navigo>${link.text}</a></li>`
         )
         .join("")}
      </ul>
    </div>
</nav>
`;
