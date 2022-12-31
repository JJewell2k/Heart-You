/* make a floating heart in the center of the screen */
document.body.style.background = 'linear-gradient(to bottom, red, black)';
var heart = document.createElement('div');
heart.style.position = 'absolute';
heart.style.top = '50%';
heart.style.left = '50%';
heart.style.transform = 'translate(-50%, -50%)';
heart.style.fontSize = '300px';
heart.innerHTML = '&hearts;';
document.body.appendChild(heart);

/* make the heart a button that when clicked will disappear and turn the screen into a blue green background gradient with big words that say "I love you Emma Kate <3" */
heart.onclick = function() {
  document.body.removeChild(heart);
  document.body.style.background = 'linear-gradient(to bottom right, #00FFFF, #00FF00)';
  var love = document.createElement('div');
  love.style.position = 'absolute';
  love.style.top = '50%';
  love.style.left = '50%';
  love.style.transform = 'translate(-50%, -50%)';
  love.style.fontSize = '100px';
  love.innerHTML = 'I love you Emma Kate <3  -JJ';
  document.body.appendChild(love);
}