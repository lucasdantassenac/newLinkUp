
import { Image, Text, View, TouchableOpacity} from "react-native"

import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Octicons';
import EntypoIcons from 'react-native-vector-icons/Entypo';

import { styles } from "./styles";
import {theme} from "../../theme";

export const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.logoContainer}>
                <Text>Link.UP</Text>
                <AntDesignIcon name='down' color={theme.COLORS.GRAY_700} style={styles.chatIcon}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name='chat' color={theme.COLORS.GRAY_700} style={styles.chatIcon}/>
            </TouchableOpacity>
        </View>
    )
}