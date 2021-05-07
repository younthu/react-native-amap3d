import * as React from "react";
import * as PropTypes from "prop-types";
import { LatLng } from "../types";
export interface PolylineProps {
    /**
     * 节点坐标
     */
    coordinates: LatLng[];
    /**
     * 线段宽度
     */
    width?: number;
    /**
     * 线段颜色
     */
    color?: string;
    /**
     * 层级
     */
    zIndex?: number;
    /**
     * 多段颜色
     */
    colors?: string[];
    /**
     * 是否使用颜色渐变
     */
    gradient?: boolean;
    /**
     * 是否绘制大地线
     */
    geodesic?: boolean;
    /**
     * 是否绘制虚线
     */
    dashed?: boolean;
    /**
     * 点击事件
     */
    onPress?: () => void;
}
/**
 * @ignore
 */
export default class Polyline extends React.PureComponent<PolylineProps> {
    static propTypes: {
        coordinates: PropTypes.Validator<PropTypes.InferProps<{
            latitude: PropTypes.Validator<number>;
            longitude: PropTypes.Validator<number>;
        }>[]>;
        width: PropTypes.Requireable<number>;
        color: React.Validator<string>;
        zIndex: PropTypes.Requireable<number>;
        colors: PropTypes.Requireable<string[]>;
        gradient: PropTypes.Requireable<boolean>;
        geodesic: PropTypes.Requireable<boolean>;
        dashed: PropTypes.Requireable<boolean>;
        onPress: PropTypes.Requireable<(...args: any[]) => any>;
        hitSlop?: PropTypes.Validator<import("react-native").Insets>;
        onLayout?: PropTypes.Validator<(event: import("react-native").LayoutChangeEvent) => void>;
        pointerEvents?: PropTypes.Validator<"box-none" | "none" | "box-only" | "auto">;
        removeClippedSubviews?: PropTypes.Validator<boolean>;
        style?: PropTypes.Validator<import("react-native").StyleProp<import("react-native").ViewStyle>>;
        testID?: PropTypes.Validator<string>;
        nativeID?: PropTypes.Validator<string>;
        collapsable?: PropTypes.Validator<boolean>;
        needsOffscreenAlphaCompositing?: PropTypes.Validator<boolean>;
        renderToHardwareTextureAndroid?: PropTypes.Validator<boolean>;
        focusable?: PropTypes.Validator<boolean>;
        shouldRasterizeIOS?: PropTypes.Validator<boolean>;
        isTVSelectable?: PropTypes.Validator<boolean>;
        hasTVPreferredFocus?: PropTypes.Validator<boolean>;
        tvParallaxProperties?: PropTypes.Validator<import("react-native").TVParallaxProperties>;
        tvParallaxShiftDistanceX?: PropTypes.Validator<number>;
        tvParallaxShiftDistanceY?: PropTypes.Validator<number>;
        tvParallaxTiltAngle?: PropTypes.Validator<number>;
        tvParallaxMagnification?: PropTypes.Validator<number>;
        onStartShouldSetResponder?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => boolean>;
        onMoveShouldSetResponder?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => boolean>;
        onResponderEnd?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
        onResponderGrant?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
        onResponderReject?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
        onResponderMove?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
        onResponderRelease?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
        onResponderStart?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
        onResponderTerminationRequest?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => boolean>;
        onResponderTerminate?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
        onStartShouldSetResponderCapture?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => boolean>;
        onMoveShouldSetResponderCapture?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => boolean>;
        onTouchStart?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
        onTouchMove?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
        onTouchEnd?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
        onTouchCancel?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
        onTouchEndCapture?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
        accessible?: PropTypes.Validator<boolean>;
        accessibilityActions?: PropTypes.Validator<readonly Readonly<{
            name: string;
            label?: string;
        }>[]>;
        accessibilityLabel?: PropTypes.Validator<string>;
        accessibilityRole?: PropTypes.Validator<import("react-native").AccessibilityRole>;
        accessibilityState?: PropTypes.Validator<import("react-native").AccessibilityState>;
        accessibilityHint?: PropTypes.Validator<string>;
        accessibilityValue?: PropTypes.Validator<import("react-native").AccessibilityValue>;
        onAccessibilityAction?: PropTypes.Validator<(event: import("react-native").AccessibilityActionEvent) => void>;
        accessibilityLiveRegion?: PropTypes.Validator<"none" | "polite" | "assertive">;
        importantForAccessibility?: PropTypes.Validator<"auto" | "yes" | "no" | "no-hide-descendants">;
        accessibilityElementsHidden?: PropTypes.Validator<boolean>;
        accessibilityViewIsModal?: PropTypes.Validator<boolean>;
        onAccessibilityEscape?: PropTypes.Validator<() => void>;
        onAccessibilityTap?: PropTypes.Validator<() => void>;
        onMagicTap?: PropTypes.Validator<() => void>;
        accessibilityIgnoresInvertColors?: PropTypes.Validator<boolean>;
    };
    static defaultProps: {
        colors: any[];
    };
    render(): JSX.Element;
}
