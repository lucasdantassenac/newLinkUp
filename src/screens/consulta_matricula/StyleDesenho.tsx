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
                d="M0,96L120,106.7C240,117,480,139,720,138.7C960,139,1200,117,1320,106.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
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
