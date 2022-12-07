import { bubble, current_component, listen } from 'svelte/internal';

export function useForwardRef(additionalEvents: string[] = []) {
  const events = [
    'focus',
    'blur',
    'fullscreenchange',
    'fullscreenerror',
    'scroll',
    'cut',
    'copy',
    'paste',
    'keydown',
    'keypress',
    'keyup',
    'auxclick',
    'click',
    'contextmenu',
    'dblclick',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseout',
    'mouseup',
    'pointerlockchange',
    'pointerlockerror',
    'select',
    'wheel',
    'drag',
    'dragend',
    'dragenter',
    'dragstart',
    'dragleave',
    'dragover',
    'drop',
    'touchcancel',
    'touchend',
    'touchmove',
    'touchstart',
    'pointerover',
    'pointerenter',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointercancel',
    'pointerout',
    'pointerleave',
    'gotpointercapture',
    'lostpointercapture',
    ...additionalEvents,
  ];

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const component = current_component;

  function forward(e: any) {
    bubble(component, e);
  }

  return (node: EventTarget) => {
    const destructors: (() => void)[] = [];

    for (const event of events) {
      destructors.push(listen(node, event, forward));
    }

    return {
      destroy() {
        for (const destructor of destructors) {
          destructor();
        }
      },
    };
  };
}
