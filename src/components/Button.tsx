interface Props {
  children: string;
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

const Button = ({ children, type, onClick }: Props) => {
  return (
    <button type="button" className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
