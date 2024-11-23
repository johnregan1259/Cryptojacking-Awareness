document.getElementById('more-info').addEventListener('click', function () {
    var additionalInfo = document.getElementById('additional-info');
    var isHidden = additionalInfo.classList.contains('hidden');

    // Toggle visibility
    additionalInfo.classList.toggle('hidden');
    additionalInfo.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
    this.setAttribute('aria-expanded', isHidden ? 'true' : 'false');

    // Update button text
    this.textContent = isHidden ? 'Hide additional information' : 'Click for more information';

    // Smoothly handle height expansion/collapse
    additionalInfo.style.height = isHidden ? additionalInfo.scrollHeight + 'px' : '0px';

    // Scroll the section into view if expanded
    if (isHidden) {
        additionalInfo.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});
