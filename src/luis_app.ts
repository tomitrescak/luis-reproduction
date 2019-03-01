import { renderLuis } from 'luis';

renderLuis({
  loadTests: () => {
    require('**.story');
  }
});
