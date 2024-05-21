import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select'
        },
        fontColor: {
            control: 'color',
        },
        color: {
            control: 'select'
        },
        backgroundColor: {
            control: 'color',
        }
    }

} satisfies Meta<typeof MyLabel>


export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic label',
        size: 'normal'
    }
}

export const AllCaps: Story = {
    args: {
        label: 'All Caps label',
        size: 'normal',
        allCaps: true
    }
}

export const SecondaryLabel: Story = {
    args: {
        label: 'Secondary label',
        size: 'normal',
        color: 'text-secondary'
    }
}

export const CustomColorLabel: Story = {
    args: {
        label: 'Custom color label',
        size: 'normal',
        fontColor: '#46dd'
    }
}

export const CustomBackgroundColor: Story = {
    args: {
        label: 'Background color',
        size: 'h1',
        fontColor: 'white',
        backgroundColor: '#4df'
    }
}