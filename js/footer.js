document.addEventListener("DOMContentLoaded", function () {
	const footerHTML = `
        <footer>
					<div class="bottom-text">
							<p>Маврин Роман Алексеевич<br>б1-ИФСТипу-11<br>Программирование интернет-приложений</p>
							<a href="https://github.com/Santechi/StupidWebsiteForACat.git" class="bottom-text__link">Проект на GitHub</a>
					</div>
				</footer>
    `;
	document.getElementById("footer").innerHTML = footerHTML;
});