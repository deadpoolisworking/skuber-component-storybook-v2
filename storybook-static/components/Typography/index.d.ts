export interface Props {
    variant?: 'h1' | 'h2' | 's1' | 'b1' | 'b2' | 'label' | 'link' | 'link-lowercase' | 'code';
    weight?: 'bold' | 'semi-bold' | 'medium' | 'regular' | 'thin';
    ellipsis?: boolean;
    style?: any;
    children?: any;
    link?: string;
    dangerouslySetInnerHTML?: any;
    onClick?: () => void;
}
declare const Typography: import('../../../node_modules/react').ForwardRefExoticComponent<Props & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Typography;
