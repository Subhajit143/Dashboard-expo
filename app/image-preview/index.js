// app/image-preview/index.js
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useImage } from '../../context/ImageContext';

export default function ImagePreview() {
  const router = useRouter();
  const { imageUri } = useImage();
  const [displayImageUri, setDisplayImageUri] = useState(null);

  useEffect(() => {
    if (imageUri) {
      setDisplayImageUri(imageUri);
    } else {
      // If no image in context, go back
      router.back();
    }
  }, [imageUri]);

  if (!displayImageUri) {
    return (
      <SafeAreaView className="flex-1 bg-white justify-center items-center">
        <Text className="text-lg">No image to display</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 justify-center">
        <Image 
          source={{ uri: displayImageUri }} 
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
        
        {/* Back button */}
        <TouchableOpacity 
          className="absolute top-10 left-4 bg-black/50 p-2 rounded-full"
          onPress={() => router.back()}
        >
          <Text className="text-white text-lg">←</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}