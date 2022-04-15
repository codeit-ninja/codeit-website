/**
 * Check if given element is in viewport
 * 
 * @param el        - Selector or an HTML Element
 * @param margin    - https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin
 */
export async function isInViewport(el: Element|string, margin?: string): Promise<boolean> {
    return new Promise(resolve => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.intersectionRatio > 0) {
                    return resolve(true);
                }

                return resolve(false);
            });
        },
        {
            rootMargin: margin || '-400px 0px 0px 0px'
        });

        if(typeof el === 'string') {
            observer.observe(document.querySelector(el));
        }
        else {
            observer.observe(el);
        }
    })
}
/**
 * Run a function when element is in viewport
 * 
 * @param {Element|string}  el 
 * @param {Function}        cb 
 * @param {boolean}         once    - (default true) only run once?
 */
export function whenInViewPort(el: Element|string, cb: Function, once = true) {
    let didExecute = false;

    document.addEventListener('scroll', async () => {
        if(await isInViewport(el)) {
            if( once && ! didExecute ) {
                cb();
            }

            didExecute = true;
        }
    });
}