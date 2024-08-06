// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Static
    const staticTop = document.getElementById('static-top');
    const staticBottom = document.getElementById('static-bottom');
    const staticLeft = document.getElementById('static-left');
    const staticRight = document.getElementById('static-right');
    const staticMargin = document.getElementById('static-margin');

    // Relative
    const relativeTop = document.getElementById('relative-top');
    const relativeBottom = document.getElementById('relative-bottom');
    const relativeLeft = document.getElementById('relative-left');
    const relativeRight = document.getElementById('relative-right');
    const relativeMargin = document.getElementById('relative-margin');
    
    // Absolute
    const absoluteTop = document.getElementById('absolute-top');
    const absoluteBottom = document.getElementById('absolute-bottom');
    const absoluteLeft = document.getElementById('absolute-left');
    const absoluteRight = document.getElementById('absolute-right');
    const absoluteMargin = document.getElementById('absolute-margin');

    // Fixed
    const fixedTop = document.getElementById('fixed-top');
    const fixedBottom = document.getElementById('fixed-bottom');
    const fixedLeft = document.getElementById('fixed-left');
    const fixedRight = document.getElementById('fixed-right');
    const fixedMargin = document.getElementById('fixed-margin');   
    
    // Sticky
    const stickyTop = document.getElementById('sticky-top');
    const stickyBottom = document.getElementById('sticky-bottom');
    const stickyLeft = document.getElementById('sticky-left');
    const stickyRight = document.getElementById('sticky-right');
    const stickyMargin = document.getElementById('sticky-margin');        

    
    const statics = document.querySelectorAll('.static');
    const relative = document.querySelector('.relative');
    const absolute = document.querySelector('.absolute');
    const fixed = document.querySelector('.fixed');
    const sticky = document.querySelector('.sticky');

    function updateStaticPosition() {
        const topValue = staticTop.value + 'px';
        const bottomValue = staticBottom.value + 'px';
        const leftValue = staticLeft.value + 'px';
        const rightValue = staticRight.value + 'px';
        const marginValue = staticMargin.value + 'px';

        statics.forEach(static => {
            static.style.top = topValue;
            static.style.bottom = bottomValue;
            static.style.left = leftValue;
            static.style.right = rightValue;
            static.style.margin = marginValue;
        });
    }

    function updateRelativePosition() {
        const topValue = relativeTop.value + 'px';
        const bottomValue = relativeBottom.value + 'px';
        const leftValue = relativeLeft.value + 'px';
        const rightValue = relativeRight.value + 'px';
        const marginValue = relativeMargin.value + 'px';

        relative.style.top = topValue;
        relative.style.bottom = bottomValue;
        relative.style.left = leftValue;
        relative.style.right = rightValue;
        relative.style.margin = marginValue;
    }

    function updateAbsolutePosition() {
        const topValue = absoluteTop.value + 'px';
        const bottomValue = absoluteBottom.value + 'px';
        const leftValue = absoluteLeft.value + 'px';
        const rightValue = absoluteRight.value + 'px';
        const marginValue = absoluteMargin.value + 'px';

        absolute.style.top = topValue;
        absolute.style.bottom = bottomValue;
        absolute.style.left = leftValue;
        absolute.style.right = rightValue;
        absolute.style.margin = marginValue;
    }

    function updateFixedPosition() {
        const topValue = fixedTop.value + 'px';
        const bottomValue = fixedBottom.value + 'px';
        const leftValue = fixedLeft.value + 'px';
        const rightValue = fixedRight.value + 'px';
        const marginValue = fixedMargin.value + 'px';

        fixed.style.top = topValue;
        fixed.style.bottom = bottomValue;
        fixed.style.left = leftValue;
        fixed.style.right = rightValue;
        fixed.style.margin = marginValue;
    }

    function updateStickyPosition() {
        const topValue = stickyTop.value + 'px';
        const bottomValue = stickyBottom.value + 'px';
        const leftValue = stickyLeft.value + 'px';
        const rightValue = stickyRight.value + 'px';
        const marginValue = stickyMargin.value + 'px';

        sticky.style.top = topValue;
        sticky.style.bottom = bottomValue;
        sticky.style.left = leftValue;
        sticky.style.right = rightValue;
        sticky.style.margin = marginValue;
    }


    staticTop.addEventListener('input', updateStaticPosition);
    staticBottom.addEventListener('input', updateStaticPosition);
    staticLeft.addEventListener('input', updateStaticPosition);
    staticRight.addEventListener('input', updateStaticPosition);
    staticMargin.addEventListener('input', updateStaticPosition);

    relativeTop.addEventListener('input', updateRelativePosition);
    relativeBottom.addEventListener('input', updateRelativePosition);
    relativeLeft.addEventListener('input', updateRelativePosition);
    relativeRight.addEventListener('input', updateRelativePosition);
    relativeMargin.addEventListener('input', updateRelativePosition);

    absoluteTop.addEventListener('input', updateAbsolutePosition);
    absoluteBottom.addEventListener('input', updateAbsolutePosition);
    absoluteLeft.addEventListener('input', updateAbsolutePosition);
    absoluteRight.addEventListener('input', updateAbsolutePosition);
    absoluteMargin.addEventListener('input', updateAbsolutePosition);

    fixedTop.addEventListener('input', updateFixedPosition);
    fixedBottom.addEventListener('input', updateFixedPosition);
    fixedLeft.addEventListener('input', updateFixedPosition);
    fixedRight.addEventListener('input', updateFixedPosition);
    fixedMargin.addEventListener('input', updateFixedPosition);

    stickyTop.addEventListener('input', updateStickyPosition);
    stickyBottom.addEventListener('input', updateStickyPosition);
    stickyLeft.addEventListener('input', updateStickyPosition);
    stickyRight.addEventListener('input', updateStickyPosition);
    stickyMargin.addEventListener('input', updateStickyPosition);
});
