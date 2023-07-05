export const addStep = (steps: any) => {
  return {
    id: steps.length + 1,
    title: `Step ${steps.length + 1}`,
    description: "",
  };
};
