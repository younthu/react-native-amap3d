import { LatLng } from "../types";
export interface HeatMapProps {
    /**
     * 节点坐标
     */
    coordinates: LatLng[];
    /**
     * 半径（米）
     */
    radius?: number;
    /**
     * 透明度
     */
    opacity?: number;
}
declare const _default: import("react-native").HostComponent<unknown>;
export default _default;
