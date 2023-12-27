import { Image, Text, View } from "react-native"
import { Post } from "../../@types/posts"
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

export const postCard = ({description, photoBase64Url='', likesQuantity, commentsQuantity, comments=['']}:Post) => {
    return (
        <View>
            <Text>{description}</Text>
            {
                photoBase64Url && 
                <Image 
                    source={{uri: `data:image/png;base64,${photoBase64Url}`}} 
                />
            }

            <View>
                <AntDesignIcon 
                    name='LikeOutlined'
                    size={30}
                    color='black'
                />
                <Text>{likesQuantity}</Text>

                <AntDesignIcon 
                    name='CommentOutlined'
                    size={30}
                    color='black'
                />
                <Text>{commentsQuantity}</Text>
            </View>
        </View>
    )

}