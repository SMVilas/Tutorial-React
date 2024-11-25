$(document).ready(function () {
    // Mostrar/ocultar menu no mobile
    $('#mobile-menu').click(function () {
        $(this).toggleClass('open');
        $('.nav-links').toggleClass('show');
    });

    // Dropdown no desktop
    $('.nav-links li').each(function () {
        $(this).hover(
            function () {
                if ($(window).width() > 800) {
                    $(this).children('.dropdown').stop().slideDown();
                }
            },
            function () {
                if ($(window).width() > 800) {
                    $(this).children('.dropdown').stop().slideUp();
                }
            }
        );
    });

    // Adicionar evento de clique para mobile
    $('.nav-links li a').click(function (e) {
        if ($(window).width() <= 800) {
            const submenu = $(this).siblings('.dropdown');
            if (submenu.length > 0) {
                e.preventDefault(); // Evitar navegação ao clicar
                submenu.stop().slideToggle();
            }
        }
    });
});

// Função para copiar código
function copyCode(button) {
    const codeElement = button.closest('.code-container').querySelector('.code-block');
    const code = codeElement.textContent.trim();
    navigator.clipboard.writeText(code)
        .then(() => alert("Code copied to clipboard!"))
        .catch((err) => console.error("Failed to copy code: ", err));
}
