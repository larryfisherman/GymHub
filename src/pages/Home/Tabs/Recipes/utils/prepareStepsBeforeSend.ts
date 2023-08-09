interface stepsProps {
  id: number;
  title: string;
  description: string;
}

export const prepareStepsBeforeSend = (
  steps: stepsProps[],
  recipeId: number
) => {
  const preparedSteps = steps.map((item: any) => {
    delete item.id;
    return item;
  });

  return preparedSteps;
};
