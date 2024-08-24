function switchContent(divId) {
    // Hide all content divs
    document.querySelectorAll('.content > div').forEach(div => {
        div.classList.add('hidden');
    });

    // Show the clicked div
    document.getElementById(divId).classList.remove('hidden');
    // Change button background color
    document.querySelectorAll('.linkme button').forEach(button => {
        button.classList.remove('clicked'); // Remove 'clicked' class from all buttons
    });
    
    // Add 'clicked' class to the clicked button
    const clickedButton = document.querySelector(`button[onclick="switchContent('${divId}'); return false;"]`);
    if (clickedButton) {
        clickedButton.classList.add('clicked');
    }
}