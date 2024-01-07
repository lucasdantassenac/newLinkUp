import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import myDimensions from '../../components/stylesGlobal/myDimensions';

const StyleDesenho = () => {
  return (
<View style={styles.container}>
        <Svg
            height="100%"
            width="100%"
            viewBox="0 0 1440 320"
            style={{ position: 'absolute' }}
            preserveAspectRatio="none"
            >
            <Path
                fill="#215151"
                d="M0,128L80,122.7C160,117,320,107,480,101.3C640,96,800,96,960,133.3C1120,171,1280,245,1360,282.7L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            />
        </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    overflow: 'hidden',
    position: 'relative',
    height: myDimensions.myConfig.height,
    backgroundColor: '#0B7171',
},
  svg: {
    position: 'absolute',
    zIndex: 0,
    bottom: -0.1,
    left: -0.1,
    right: -0.1,
    top: -0.1,
},
});

export default StyleDesenho;
