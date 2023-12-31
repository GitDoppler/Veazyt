import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 628 444" {...props}>
        <Path fill="#FFA800" d="M628 246.034c0 40.74-32.839 73.014-73.348 73.014-40.51 0-73.349-32.274-73.349-73.014 0-40.741 32.839-74.52 73.349-74.52 40.509 0 73.348 33.779 73.348 74.52Z" />
        <Path fill="#FFA800" d="M106.328 101.953c0-3.29 3.752-5.174 6.39-3.207l95.518 71.183a8.002 8.002 0 0 0 4.78 1.585h98.131a4 4 0 0 0 4-4V56.701c0-3.63 4.444-5.383 6.922-2.73l107.465 115.005a8 8 0 0 0 5.845 2.538h120.512a4 4 0 0 1 4 4v139.534a4 4 0 0 1-4 4H435.379a7.998 7.998 0 0 0-5.845 2.538L322.069 436.592c-2.478 2.651-6.922.898-6.922-2.731V323.048a4 4 0 0 0-4-4h-98.589a7.998 7.998 0 0 0-4.082 1.12l-96.107 57.019c-2.666 1.582-6.041-.34-6.041-3.44V101.953Z" />
        <Path fill="#F0821C" d="M106.328 171.281h166.138v91.101c0 6.627-5.373 12-12 12H106.328V171.281Z" />
        <Rect width={250.868} height={252.764} fill="#FF8C20" rx={12} />
        <Path fill="#fff" d="M59.81 56.54h26.78l39.003 111.221 42.826-111.222h24.301l-53.701 138.023h-26.145L59.81 56.539Z" />
    </Svg>
);
export default SvgComponent;
