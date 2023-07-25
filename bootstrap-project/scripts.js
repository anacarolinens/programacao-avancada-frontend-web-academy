//Progress bar
let containerA = new ProgressBar.Circle(circleA, {
  color: '#f2f3f4',

  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#0c0c0c', width: 1 },
  to: { color: '#0b7b9e', width: 4 },

  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 564);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

let containerB = new ProgressBar.Circle(circleB, {
  color: '#f2f3f4',

  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#0c0c0c', width: 1 },
  to: { color: '#0b7b9e', width: 4 },

  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 75);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

let containerC = new ProgressBar.Circle(circleC, {
  color: '#f2f3f4',

  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#0c0c0c', width: 1 },
  to: { color: '#0b7b9e', width: 4 },
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 313);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

let containerD = new ProgressBar.Circle(circleD, {
  color: '#f2f3f4',

  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#0c0c0c', width: 1 },
  to: { color: '#0b7b9e', width: 4 },

  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 768);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

// containerA.text.style.fontFamily = 'Helvetica, sans-serif';
// containerA.text.style.fontSize = '2rem';

// containerB.text.style.fontFamily = 'Helvetica, sans-serif';
// containerB.text.style.fontSize = '2rem';

// containerC.text.style.fontFamily = 'Helvetica, sans-serif';
// containerC.text.style.fontSize = '2rem';

// containerD.text.style.fontFamily = 'Helvetica, sans-serif';
// containerD.text.style.fontSize = '2rem';


containerA.animate(1.0); 
containerB.animate(1.0);
containerC.animate(1.0); 
containerD.animate(1.0);  




// Parallax
// $( "#data-area" ).parallax({imageSrc: 'img/cidadeparallax.png'})
// $( "#apply-content" ).parallax({imageSrc: 'img/pattern.png'})