import anime from 'animejs';

export function loop (target) {
    anime({
        targets: target,
        keyframes: [
            {translateY: 5},
            {translateY: 0}
        ],
        duration: 1000,
        easing: 'easeInSine',
        loop: true
    });
}
