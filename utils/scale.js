import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const scaleVertical = size => (height / guidelineBaseHeight) * size;
const scaleModerate = (size, factor = 0.5) => size + ((scale(size) - size) * factor);

const vw = size => size * (width/100);
const vh = size => size * (height/100);
const vmin = size => size * Math.min((width/100),(height/100));
const vmax = size => size * Math.max((width/100),(height/100));

export { scale, scaleVertical, scaleModerate, vw, vh, vmin, vmax };
