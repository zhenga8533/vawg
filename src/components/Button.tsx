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

const Button = ({ children, onClick, type }: Props) => {
  return (
    <button type="button" className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
