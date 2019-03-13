import React from 'react'
import { configure } from '@storybook/react';
import 'antd/dist/antd.min.css';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components/moduleComponents', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
