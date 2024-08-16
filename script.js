const shapes = ['cube', 'pyramid', 'sphere'];
const characters = ['@', '#', '$', '%', '&', '*', '+', '=', '-', ':', '.', ' '];

function generateAsciiArt() {
    const art = [];
    const width = 40;
    const height = 20;

    for (let y = 0; y < height; y++) {
        let line = '';
        for (let x = 0; x < width; x++) {
            const distance = Math.sqrt(Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2));
            const charIndex = Math.floor(distance / 2) % characters.length;
            line += characters[charIndex];
        }
        art.push(line);
    }

    return art.join('\n');
}

function displayAsciiArt() {
    const asciiArtElement = document.getElementById('ascii-art');
    asciiArtElement.textContent = generateAsciiArt();
}

document.getElementById('regenerate').addEventListener('click', displayAsciiArt);

// Initial generation
displayAsciiArt();
