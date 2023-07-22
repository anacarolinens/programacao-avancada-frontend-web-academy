//Progress bar
let containerA = new ProgressBar.Circle(circleA, {
  color: '#0b7b9e',
  strokeWidth: 6,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: trues
  },
  from: { color: '#0b7b9e', width: 1 },
  to: { color: '#0b7b9e', width: 4 },
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 60);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"roboto", sans-serif';
bar.text.style.fontSize = '2rem';

ContainerA.animate(1.0);