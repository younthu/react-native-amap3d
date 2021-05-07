import { LatLng } from "../types";
export interface CircleProps {
    /**
     * 圆点坐标
     */
    coordinate: LatLng;
    /**
     * 半径（米）
     */
    radius: number;
    /**
     * 边线宽度
     */
    strokeWidth?: number;
    /**
     * 边线颜色
     */
    strokeColor?: string;
    /**
     * 填充颜色
     */
    fillColor?: string;
    /**
     * 层级
     */
    zIndex?: number;
}
declare const _default: import("react-native").HostComponent<unknown>;
export default _default;
