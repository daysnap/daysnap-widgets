
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Trigger, { TriggerProps } from './index'

export default {
  title: 'Trigger',
  component: Trigger,
  argTypes: {},
} as Meta

const Template: Story<TriggerProps> = args => <Trigger {...args} />

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}

