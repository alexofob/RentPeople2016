import { configure } from '@kadira/storybook';
import '../client/main.scss';

function loadStories() {
  require('../imports/ui/components/stories/');
  // require as many stories as you need.
}

configure(loadStories, module);
