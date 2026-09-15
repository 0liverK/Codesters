var count = 0;

document.getElementById('countButton').onclick = function() {
  count++;
  document.getElementById('counter').innerHTML = count;
  document.getElementById('counter').style.fontSize = (20 + count * 5) + 'px';
}