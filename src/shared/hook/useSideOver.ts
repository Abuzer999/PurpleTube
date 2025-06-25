export const useSideOver = () => {
  const isOpen = useState<boolean>("isOpen", () => false);
  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
  return { isOpen, toggle };
};
