import Card from './Card.vue';
import Badge from './Badge.vue';
import AppButton from './Button.vue';

export {
  Card,
  Badge,
  AppButton
};

export default {
  install(app) {
    app.component('Card', Card);
    app.component('Badge', Badge);
    app.component('AppButton', AppButton);
  }
}; 