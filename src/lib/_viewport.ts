/**
 * Check if given element is in viewport
 * 
 * @param el        - Selector or an HTML Element
 * @param margin    - https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin
 */
export async function isInViewport(el: Element|string, margin?: string): Promise<true> {
    return new Promise(resolve => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.intersectionRatio > 0) {
                    resolve(true)
                    observer.disconnect()
                }
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