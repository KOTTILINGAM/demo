Sorry Website for Priyanka

How to use

- Open `index.html` in a browser (double-click or serve with a simple static server).
- Optionally, drop an MP3 file onto the page to use as background music (or set the <audio> source in `index.html`).
- Click the big "SORRY" button. Flowers and hearts will fall and the looping SVG animation of a boy giving a rose will appear.

Notes

- Autoplay for audio is blocked by most browsers until the user interacts with the page. The button click provides that gesture.
- The SVG animation is intentionally simple and lightweight; you can replace it with a Lottie animation by embedding a Lottie player and JSON.

Files

- `index.html` — main page
- `styles.css` — styles and keyframe animations
- `script.js` — button logic, particle spawning, music handling

Customization

- Change fonts or colors in `styles.css` under :root.
- To add a Lottie animation, include the Lottie web player and load a JSON animation file into the `lottieContainer`.

Additional tips

- To load a Lottie animation instead of the inline SVG, add this line before `</body>` in `index.html` (or set it in the console before clicking):

	<script>window.LOTTIE_SRC = 'path-or-url-to-your-animation.json';</script>

	Then include the lottie-web script (uncomment the CDN script in `index.html`) so the page can load it when you click the button.
- To add background music permanently, open `index.html` and set the `<source src="your-music.mp3">` inside the `<audio id="bgMusic">` element.
