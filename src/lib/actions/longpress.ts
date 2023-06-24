export const longpress = (node, options) => {
  let timer;

  const handleMouseDown = () => {
    const { duration = 2000 } = options;
    timer = setTimeout(() => {
      node.dispatchEvent(new CustomEvent("longpress"));
    }, duration);
  };

  const handleMouseUp = () => {
    clearTimeout(timer);
  };

  return {
    update(newOptions) {
      options = newOptions;
    },
    destroy() {
      clearTimeout(timer);
    },
  };
};
