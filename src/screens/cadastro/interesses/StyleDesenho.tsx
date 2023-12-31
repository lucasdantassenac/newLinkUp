import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

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
                d="M0,128L60,122.7C120,117,240,107,360,90.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
        </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    overflow: 'hidden',
    position: 'relative',
    height: 843,
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
