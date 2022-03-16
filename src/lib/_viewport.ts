export async function isInViewport(el: Element, margin?: string) {
    return new Promise(resolve => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.intersectionRatio > 0) {
                    console.log(entry.target)
                    resolve(true)
                    observer.disconnect()
                }
            });
        },
        { 
            rootMargin: margin || '-300px' 
        });

        observer.observe(el);
    })
}