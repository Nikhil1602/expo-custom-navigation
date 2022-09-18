import { itemProps, defaultHeaderProps } from "./constants";

export const defaultItemStyle = (itemStyle: itemProps | any)  => {

    return { 
        width: itemStyle?.width,
        margin: itemStyle?.margin,
        marginStart: itemStyle?.marginStart,
        marginEnd: itemStyle?.marginEnd,
        marginTop: itemStyle?.marginTop,
        marginBottom: itemStyle?.marginBottom,
        marginLeft: itemStyle?.marginLeft,
        marginRight: itemStyle?.marginRight,
        marginVertical: itemStyle?.marginVertical,
        marginHorizontal: itemStyle?.marginHorizontal,
        minWidth: itemStyle?.minWidth,
        maxWidth: itemStyle?.maxWidth,
        minHeight: itemStyle?.minHeight,
        maxHeight: itemStyle?.maxHeight,
        
        padding: itemStyle?.padding,
        paddingStart: itemStyle?.paddingStart,
        paddingEnd: itemStyle?.paddingEnd,
        paddingTop: itemStyle?.paddingTop,
        paddingBottom: itemStyle?.paddingBottom,
        paddingLeft: itemStyle?.paddingLeft,
        paddingRight: itemStyle?.paddingRight,
        paddingVertical: itemStyle?.paddingVertical,
        paddingHorizontal: itemStyle?.paddingHorizontal,
  
        borderWidth: itemStyle?.borderWidth,
        borderTopWidth: itemStyle?.borderTopWidth,
        borderBottomWidth: itemStyle?.borderBottomWidth,
        borderStartWidth: itemStyle?.borderStartWidth,
        borderEndWidth: itemStyle?.borderEndWidth,
        borderLeftWidth: itemStyle?.borderLeftWidth,
        borderRightWidth: itemStyle?.borderRightWidth,
  
        borderColor: itemStyle?.borderColor,
        borderTopColor: itemStyle?.borderTopColor,
        borderBottomColor: itemStyle?.borderBottomColor,
        borderStartColor: itemStyle?.borderStartColor,
        borderEndColor: itemStyle?.borderEndColor,
        borderLeftColor: itemStyle?.borderLeftColor,
        borderRightColor: itemStyle?.borderRightColor,
  
        borderRadius: itemStyle?.borderRadius,
        borderTopLeftRadius: itemStyle?.borderTopLeftRadius,
        borderTopRightRadius: itemStyle?.borderTopRightRadius,
        borderTopStartRadius: itemStyle?.borderTopStartRadius,
        borderTopEndRadius: itemStyle?.borderTopEndRadius,
        borderBottomLeftRadius: itemStyle?.borderBottomLeftRadius,
        borderBottomRightRadius: itemStyle?.borderBottomRightRadius,
        borderBottomStartRadius: itemStyle?.borderBottomStartRadius,
        borderBottomEndRadius: itemStyle?.borderBottomEndRadius,
      };
}

export const defaultHeaderTitleStyle = (headerStyle: typeof defaultHeaderProps | any) => {
    return {
        fontFamily: headerStyle?.fontFamily,
        fontSize: headerStyle?.fontSize || 20,
        fontStyle: headerStyle?.fontStyle,
        fontWeight: headerStyle?.fontWeight,
        letterSpacing: headerStyle?.letterSpacing,
        textTransform: headerStyle?.textTransform,
        textDecorationColor: headerStyle?.textDecorationColor,
        textDecorationLine: headerStyle?.textDecorationLine,
        textDecorationStyle: headerStyle?.textDecorationStyle,
      }
}

export const defaultHeaderStyle = (headerStyle: typeof defaultHeaderProps | any) => {

    return {
        backgroundColor: headerStyle?.backgroundColor,
        height: headerStyle?.height,
        shadowColor: headerStyle?.shadowColor,
        shadowOffset: headerStyle?.shadowOffset,
        shadowOpacity: headerStyle?.shadowOpacity,
        shadowRadius: headerStyle?.shadowRadius,
        elevation: headerStyle?.elevation,
      }
}