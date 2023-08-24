import React from "react";

type ToastComponentProps = {
  toastText: string;
  toastShow: boolean;
};
const ToastComponent: React.FC<ToastComponentProps> = ({
  toastText,
  toastShow,
}) => {
  const toastRef = React.useRef<HTMLDivElement>(null);
  if (toastShow && toastRef.current) {
    toastRef.current.className =
      "toast position-fixed top-15 start-10 align-items-center text-white bg-danger border-0 show";
  }
  return (
    <div
      ref={toastRef}
      className="toast position-fixed top-15 start-10 align-items-center text-white bg-danger border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">{toastText}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default ToastComponent;
