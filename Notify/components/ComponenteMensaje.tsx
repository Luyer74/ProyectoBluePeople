import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { View } from './Themed';

type TemaFila = {
  titulo: string;
  ultimaNotif: string;
  sinLeer: number;
};

export default function ComponenteMensaje({ comps }) {
  return (
    <View style={styles.temaContainer}>
      {comps.map((topic) => (
        <View style={[styles.temaContainer, styles.lineStyle, { flexDirection: "row", alignItems: 'center', }]}>
          <View style={[styles.temaContainer, { flexDirection: "column" }]}>
            <Text style={styles.textoTema} key={topic.id}>{topic.mensaje}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  temaContainer: {
    backgroundColor: '#fdfdfd',
    paddingVertical: 12,
    marginRight: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  lineStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(219, 138, 116, 0.66)',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  textoTema: {
    fontSize: 17,
    lineHeight: 24,
    color: 'black'
  },
  tituloNotificacion: {
    fontSize: 17,
    color: 'black',
    fontWeight: '600'
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});