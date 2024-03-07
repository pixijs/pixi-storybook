import { action } from '@storybook/addon-actions';

import { BunnyDemo } from './BunnyDemo';

export default {
    title: 'Demos-Basic',
    args: {
        bunnySize: 5,
        bunnySpacing: 40,
        someInjectedObject: {
            onBunnyClick: action('onBunnyClick'),
        },
    },
};

export const Default = (args, ctx) => {
    return new BunnyDemo(args, ctx.parameters.pixi.appReady)
}