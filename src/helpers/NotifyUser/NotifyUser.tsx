import { toast } from "react-toastify";

export const NotifyUser = (res: any, customMessage?: string) => {
  const { status } = res.response;
  const { message } = res.response.data;

  const toastProps: object = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  };

  if (status === 404 || status === 500 || status === 400)
    return toast.error(
      message ? message : "Something went wrong..",
      toastProps
    );

  return toast.success(customMessage ? customMessage : "Success!", toastProps);
};
