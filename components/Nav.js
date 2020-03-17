export default links => `<nav>
<div class ="nav">
    <div class = "logo">
      <h4>Jermell's Website</h4>
    </div>
      <ul class="nav-links">
        <li>
          <a href="#">Galaxy S10+</a>
        </li>
        <li>
          <a href="#">iPhone 11 Pro Max</a>
        </li>
        <li>
          <a href="#">OnePlus 7 Pro</a>
        </li>
        <li>
          <a href="#">Google Pixel 4 XL</a>
        </li>
        <li>
          <a href="#">Galaxy Note 10+</a>
        </li>
      </ul>

    </div>
    ${links.map(el => `<li><a href="#">${el}</a></li>`).join()}
</nav>
`;
