function switchContent(divId) {
    // Hide all content divs
    document.querySelectorAll('.contents > div').forEach(div => {
        div.classList.add('hidden');
    });

    // Show the clicked div
    document.getElementById(divId).classList.remove('hidden');
}
