export function pos(el: Element, pos: 'top' | 'right' | 'bottom' | 'left' | 'x' | 'y') {
    try {
        return el.getBoundingClientRect()[pos];
    } catch(e) {}
}

export function getClosest(from: Element, search: string, radius: number) {
    let element = document.elementFromPoint(pos(from, 'x'), pos(from, 'y'));
    const hasSearchElement = () => element.classList.contains(search.replace('.', ''));
    const radiusOffset = (radius: number) => {
        element = document.elementFromPoint(pos(from, 'x') + radius, pos(from, 'y'));

        if(hasSearchElement()) return element;
    }

    if(hasSearchElement()) {
        return element;
    }
    else {
        for(let i = 0;i < radius;i++) if(radiusOffset(i)) return radiusOffset(i);
    }
}