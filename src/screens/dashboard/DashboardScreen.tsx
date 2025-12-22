import { StyleSheet, Text, View } from 'react-native';

export default function DashboardScreen({ route }: any) {
  const data = route.params;
  console.log("Dashboard data:", data);
  return (
    <View>
      <Text>Welcome {data.profile.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})