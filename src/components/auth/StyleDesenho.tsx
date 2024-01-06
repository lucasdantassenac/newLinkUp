import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import myColors from '../../components/stylesGlobal/myColors';

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
                fill="#0B7171"
                d="M0,96L80,101.3C160,107,320,117,480,122.7C640,128,800,128,960,106.7C1120,85,1280,43,1360,21.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
        </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    overflow: 'hidden',
    position: 'relative',
    zIndex: 0,
    height: 900,
    backgroundColor: myColors.padraoBackground1.backgroundColor,
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
