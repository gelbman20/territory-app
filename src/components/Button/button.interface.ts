import BaseComponent from 'interfaces/base-component.interfase';

interface ButtonProps extends BaseComponent {
  url?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'lg';
}

export default ButtonProps;
