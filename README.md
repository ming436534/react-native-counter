React Native Counter
====================

Simple counter component for [React Native](http://facebook.github.io/react-native/)
inspired by [react-count-to](https://github.com/MicheleBertoli/react-count-to)
and [react-counter](https://github.com/saebekassebil/react-counter).

![gif](http://i.giphy.com/l4Jz4MOLaWYU61Oso.gif)

# Installation

```bash
npm install --save react-native-counter
```

# Usage

```javascript
import Counter from 'react-native-counter';

<Counter
  target={}                        // REQUIRED End of the counter
  start={0}                     // Beginning of the counter
  time={1000}                   // Duration (in ms) of the counter
  digits={0}                    // Number of digits after the comma
  easing="linear"               // Easing function name
  onComplete={}                 // Callback when the counter is completed
  style={}                      // Custom style
/>
```

The easing prop is a string corresponding to one of any function from [eases](https://github.com/mattdesl/eases).

Updating target props will trigger the animation automatically

# License

MIT
