/* global module */

import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs/react'

import Card from '../components/Card'
storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add('full Card', () => (
    <Card
      title={text('Title', 'Input title')}
      source={text('description', 'input here some description')}
      img={text('img', 'https://source.unsplash.com/random/355x170')}
    />
  ))
