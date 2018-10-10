/* global module */

import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'

import Card from '../components/Card'
storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add('full Card', () => (
    <Card
      title={text('Title', 'Input title')}
      description={text('description', 'input here some description')}
      urlToImage={text('img', 'https://source.unsplash.com/random/355x170')}
    />
  ))
