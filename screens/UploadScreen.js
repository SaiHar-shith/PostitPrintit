import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

export default function UploadScreen({ navigation }) {
  const [pdfName, setPdfName] = useState('');
  const [projectTitle, setProjectTitle] = useState('');

  const handleFilePick = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });

      setPdfName(res.name);
      Alert.alert('File Selected', res.name);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) return;
      Alert.alert('Error', 'File selection failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Your Project</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Project Title"
        value={projectTitle}
        onChangeText={setProjectTitle}
      />

      <Button title="Choose PDF" onPress={handleFilePick} />

      <View style={{ height: 20 }} />

      {pdfName ? <Text style={styles.pdfText}>📄 {pdfName}</Text> : null}

      <View style={{ height: 20 }} />

      <Button
        title="Proceed to Payment"
        onPress={() => navigation.navigate('Payment')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, textAlign: 'center', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  pdfText: { marginVertical: 10, textAlign: 'center', color: 'green' },
});
