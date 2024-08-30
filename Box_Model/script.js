// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Content Box
    const contentWidth = document.getElementById('content-width');
    const contentBorder = document.getElementById('content-border');
    const contentPadding = document.getElementById('content-padding');
    const contentMargin = document.getElementById('content-margin');

    // Border Box
    const borderWidth = document.getElementById('border-width');
    const borderBorder = document.getElementById('border-border');
    const borderPadding = document.getElementById('border-padding');
    const borderMargin = document.getElementById('border-margin');
          

    
    const content = document.querySelector('.content-box-model');
    const border = document.querySelector('.border-box-model');

    function updateContentBox() {
        const width = contentWidth.value + 'px';
        const border = contentBorder.value + 'px';
        const padding = contentPadding.value + 'px';
        const margin = contentMargin.value + 'px';

        content.style.width = width;
        content.style.border = border;
        content.style.padding = padding;
        content.style.margin = margin;
    }

    function updateBorderBox() {
        const width = borderWidth.value + 'px';
        const border = borderBorder.value + 'px';
        const padding = borderPadding.value + 'px';
        const margin = borderMargin.value + 'px';

        border.style.width = width;
        border.style.border = border;
        border.style.padding = padding;
        border.style.margin = margin;
    }


    contentWidth.addEventListener('input', updateContentBox);
    contentBorder.addEventListener('input', updateContentBox);
    contentPadding.addEventListener('input', updateContentBox);
    contentMargin.addEventListener('input', updateContentBox);

    borderWidth.addEventListener('input', updateBorderBox);
    borderBorder.addEventListener('input', updateBorderBox);
    borderPadding.addEventListener('input', updateBorderBox);
    borderMargin.addEventListener('input', updateBorderBox);
});
