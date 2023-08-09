export const addStep = (steps: any) => {
  return {
    id: steps.length + 1,
    description: "",
  };
};
