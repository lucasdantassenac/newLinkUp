import { Image, Text, View, TouchableOpacity} from "react-native"
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcons from 'react-native-vector-icons/Entypo';

import { styles } from "./styles";
import {theme} from "../../theme";

export const postCard = (
  {
    description, 
    photobase64='', 
    likesQuantity=0, 
    commentsQuantity=0,
  }:any,
  currentUser:any
) => {
 
  
  return (
    <View>
      <View style={styles.userContainer}>

        <View style={styles.userInfoContainer}>
          {currentUser.photobase64 &&  <Image style={styles.userImage} source={{uri: `${currentUser.photobase64}`}} />}
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{currentUser.name}</Text>
            <Text style={styles.userCourse}>{currentUser.courseName}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.addButton}><Text style={styles.addButtonText}>Adicionar</Text></TouchableOpacity>
        <TouchableOpacity><EntypoIcons name='dots-three-vertical' color={theme.COLORS.GRAY_700}/></TouchableOpacity>

      </View>
      <View style={styles.postContainer}>
        <Text>{description}</Text>
        {photobase64 &&  <Image style={styles.postCardImage} source={{uri: `${photobase64}`}} />}
        <View>
          <AntDesignIcon 
              name='like2'
              size={30}
              color='black'
          />
          <Text>{likesQuantity || 0}</Text>

          <Icon 
              name='comment-o'
              size={30}
              color='black'
          />
          <Text>{commentsQuantity || 0}</Text>
        </View>
      </View>
    </View>
  )
}