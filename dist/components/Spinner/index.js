import { jsx as _jsx } from "react/jsx-runtime";
import Lottie from 'react-lottie';
import { spinnerLottie } from 'assets';
import '../../index.css';
const option = {
    animationData: spinnerLottie,
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};
const Spinner = (props) => {
    const { style, wrapperStyle } = props;
    return (_jsx("div", { className: "component-spinner", style: wrapperStyle, children: _jsx(Lottie, { options: option, width: 104, height: 104, style: style }) }));
};
export default Spinner;
