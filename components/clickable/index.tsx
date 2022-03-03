import { ReactChild } from "react";
import { TouchableHighlight, View } from "react-native";

type Props = {
    onPress: () => void,
    children: ReactChild,
}

export function Clickable(props: Props){
    const {children, onPress} = props;
    return (
        <TouchableHighlight
            // activeOpacity={0}
            underlayColor={'gray'}
            onPress={onPress}
            style={{
                borderWidth: 1,
                padding: 8,
                margin: 16,
                borderRadius: 8
            }}
        >
            {children}
        </TouchableHighlight>
    )
}