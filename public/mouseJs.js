let start = new Date().getTime();
const originPosition = { x: 0, y: 0 };
const last = {
    starTimestamp: start,
    starPosition: originPosition,
    mousePosition: originPosition,
};
const config = {
    starAnimationDuration: 1500,
    minimumTimeBetweenStars: 250,
    minimumDistanceBetweenStars: 75,
    glowDuration: 75,
    maximumGlowPointSpacing: 10,
    colors: ["229, 204, 255", "123, 97, 255", "255, 235, 20", "255, 223, 128"],
    sizes: ["1.4rem", "1rem", "0.6rem"],
    animations: ["fall-1", "fall-2", "fall-3"],
};
let count = 0;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const selectRandom = (items) => items[rand(0, items.length - 1)];
const withUnit = (value, unit) => `${value}${unit}`;
const px = (value) => withUnit(value, "px");
const ms = (value) => withUnit(value, "ms");

const calcDistance = (a, b) => {
    const diffX = b.x - a.x;
    const diffY = b.y - a.y;
    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

const calcElapsedTime = (start, end) => end - start;
const appendElement = (element) => document.body.appendChild(element);
const removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);

const createStar = (position) => {
    const star = document.createElement("div");
    const color = selectRandom(config.colors);

    star.className = "fa-solid fa-star star";
    star.style.left = px(position.x);
    star.style.top = px(position.y + 10);
    star.style.fontSize = selectRandom(config.sizes);
    star.style.color = `rgb(${color})`;
    star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
    star.style.animationName = config.animations[count++ % 3];
    star.style.animationDuration = ms(config.starAnimationDuration); 

    appendElement(star);
    removeElement(star, config.starAnimationDuration);
};

const createGlowPoint = (position) => {
    const glow = document.createElement("div");
    glow.className = "glow-point";
    glow.style.left = px(position.x);
    glow.style.top = px(position.y + 10);
    appendElement(glow);
    removeElement(glow, config.glowDuration);
};

const determinePointQuantity = (distance) => Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1);

const createGlow = (last, current) => {
    const distance = calcDistance(last, current);
    const quantity = determinePointQuantity(distance);
    const dx = (current.x - last.x) / quantity;
    const dy = (current.y - last.y) / quantity;

    Array.from(Array(quantity)).forEach((_, index) => {
        const x = last.x + dx * index;
        const y = last.y + dy * index;
        createGlowPoint({ x, y });
    });
};

const updateLastStar = (position) => {
    last.starTimestamp = new Date().getTime();
    last.starPosition = position;
};

const updateLastMousePosition = (position) => (last.mousePosition = position);

const adjustLastMousePosition = (position) => {
    if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
        last.mousePosition = position;
    }
};

const handleOnMove = (e) => {
    const mousePosition = { x: e.clientX, y: e.clientY };
    adjustLastMousePosition(mousePosition);

    const now = new Date().getTime();
    const hasMovedFarEnough = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars;
    const hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;

    if (hasMovedFarEnough || hasBeenLongEnough) {
        createStar(mousePosition);
        updateLastStar(mousePosition);
    }

    createGlow(last.mousePosition, mousePosition);
    updateLastMousePosition(mousePosition);
};

window.onmousemove = (e) => handleOnMove(e);
window.ontouchmove = (e) => handleOnMove(e.touches[0]);
document.body.onmouseleave = () => updateLastMousePosition(originPosition);
