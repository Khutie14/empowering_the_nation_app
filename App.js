import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  Platform,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/* --- Color Constants --- */
const red = "#C0392B";
const navy = "#0D3B66";
const cream = "#fff";

/* ---------------- HOME SCREEN ---------------- */
function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require("./logo.jpg")} style={styles.logo} />
          <Text style={styles.headerTitle}>EMPOWERING{"\n"}THE NATION</Text>
        </View>

        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="home-outline" size={22} color="white" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SixMonthList")}>
            <Ionicons name="book-outline" size={22} color="white" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Ionicons name="call-outline" size={22} color="white" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => navigation.navigate("CourseCalculator")}
          >
            <Ionicons name="cart-outline" size={20} color={red} />
            <Text style={styles.cartText}>Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Welcome Section */}
      <View style={styles.mainContent}>
        <Ionicons name="menu" size={28} color={red} style={styles.menuIcon} />
        <Text style={styles.welcomeText}>Welcome To</Text>

        <Image source={require("./logo.jpg")} style={styles.mainLogo} />

        <Text style={styles.empowerTitle}>EMPOWERING{"\n"}THE NATION</Text>
        <Text style={styles.subTitle}>
          SKILLS DEVELOPMENT FOR DOMESTIC WORKERS & GARDENERS
        </Text>

        <Text style={styles.description}>
          Empowering the Nation provides training opportunities designed to support both personal
          advancement and care.
        </Text>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.courseButtonBlue}
          onPress={() => navigation.navigate("SixMonthList")}
        >
          <Text style={styles.courseText}>Six-month Courses</Text>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.courseButtonRed}
          onPress={() => navigation.navigate("SixWeekList")}
        >
          <Text style={styles.courseText}>Six-week Courses</Text>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ©️ Powered by KNV   Terms & Conditions   Privacy Policy
        </Text>
        <View style={styles.socialIcons}>
          <Ionicons name="logo-twitter" size={20} color={navy} />
          <Ionicons name="logo-facebook" size={20} color={navy} />
          <Ionicons name="logo-instagram" size={20} color={navy} />
        </View>
      </View>
    </ScrollView>
  );
}

/* ---------------- SIX-MONTH COURSES ---------------- */
const sixMonthCourses = [
  { id: "first_aid", title: "First Aid", price: 1500, desc: "To provide first aid awareness and basic life support" },
  { id: "sewing", title: "Sewing", price: 1500, desc: "To provide alterations and new garment tailoring services" },
  { id: "landscaping", title: "Landscaping", price: 1500, desc: "To provide landscaping services for new and established gardens" },
  { id: "life_skills", title: "Life Skills", price: 1500, desc: "To provide skills to navigate basic life necessities" },
];

function SixMonthList({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.listWrap}>
        {sixMonthCourses.map((c) => (
          <TouchableOpacity
            key={c.id}
            style={[styles.courseListButton, { backgroundColor: red }]}
            onPress={() => navigation.navigate("SixMonthDetails", { course: c })}
          >
            <Text style={styles.courseListText}>{c.title}</Text>
            <Ionicons name="chevron-forward" size={22} color="#fff" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function SixMonthDetails({ route, navigation }) {
  const { course } = route.params;
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.detailsWrap}>
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>Image</Text>
        </View>
        <Text style={styles.detailTitle}>{course.title}</Text>
        <Text style={styles.detailDesc}>{course.desc}</Text>

        <TouchableOpacity
          style={[styles.calcButton]}
          onPress={() =>
            navigation.navigate("CourseCalculator", { preselected: [course] })
          }
        >
          <Text style={styles.calcButtonText}>Check Price</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- SIX-WEEK COURSES ---------------- */
const sixWeekCourses = [
  { id: "child_minding", title: "Child minding", price: 750, desc: "To provide basic child and baby care" },
  { id: "cooking", title: "Cooking", price: 750, desc: "To prepare and cook nutritious family meals" },
  { id: "garden", title: "Garden maintenance", price: 750, desc: "To provide knowledge of watering, pruning and planting" },
];

function SixWeekList({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.listWrap}>
        {sixWeekCourses.map((c) => (
          <TouchableOpacity
            key={c.id}
            style={[styles.courseListButton, { backgroundColor: navy }]}
            onPress={() => navigation.navigate("SixWeekDetails", { course: c })}
          >
            <Text style={styles.courseListText}>{c.title}</Text>
            <Ionicons name="chevron-forward" size={22} color="#fff" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function SixWeekDetails({ route, navigation }) {
  const { course } = route.params;
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.detailsWrap}>
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>Image</Text>
        </View>
        <Text style={styles.detailTitle}>{course.title}</Text>
        <Text style={styles.detailDesc}>{course.desc}</Text>

        <TouchableOpacity
          style={[styles.calcButton]}
          onPress={() =>
            navigation.navigate("CourseCalculator", { preselected: [course] })
          }
        >
          <Text style={styles.calcButtonText}>Check Price</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- COURSE FEE CALCULATOR ---------------- */
function CourseCalculator({ route, navigation }) {
  const pre = route.params?.preselected || [];
  const preIds = pre.map((p) => p.id);
  const allCourses = [...sixMonthCourses, ...sixWeekCourses];
  const [selected, setSelected] = useState(
    allCourses.reduce((acc, c) => {
      acc[c.id] = preIds.includes(c.id);
      return acc;
    }, {})
  );

  const selectedList = allCourses.filter((c) => selected[c.id]);
  const total = selectedList.reduce((sum, c) => sum + c.price, 0);

  function toggle(id) {
    setSelected((s) => ({ ...s, [id]: !s[id] }));
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.calcWrap}>
        <Text style={styles.sectionTitle}>Select Courses</Text>
        {allCourses.map((c) => (
          <TouchableOpacity key={c.id} onPress={() => toggle(c.id)} style={styles.calcRow}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name={selected[c.id] ? "checkbox" : "square-outline"}
                size={24}
                color={navy}
              />
              <Text style={styles.calcLabel}>{c.title}</Text>
            </View>
            <Text style={styles.calcPrice}>R{c.price}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.totalText}>Total: R{total}</Text>

        <TouchableOpacity
          style={[styles.calcButton]}
          onPress={() =>
            navigation.navigate("Registration", { selected: selectedList })
          }
        >
          <Text style={styles.calcButtonText}>Proceed to Registration</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- REGISTRATION ---------------- */
function Registration({ route, navigation }) {
  const selected = route.params?.selected || [];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submit() {
    if (Platform.OS === "web") {
      setSubmitted(true); // show message on screen
    } else {
      const courses = selected.map((s) => s.title).join(", ") || "None";
      Alert.alert(
        "Registration Successfully Submitted",
        `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCourses: ${courses}`,
        [{ text: "OK", onPress: () => navigation.popToTop() }]
      );
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.formWrap}>
        <Text style={styles.sectionTitle}>Course Registration Form</Text>

        <Text style={styles.inputLabel}>Name</Text>
        <TextInput value={name} onChangeText={setName} placeholder="Enter your name" style={styles.input} />

        <Text style={styles.inputLabel}>Phone</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          style={styles.input}
        />

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          style={styles.input}
        />

        <Text style={[styles.inputLabel, { marginTop: 12 }]}>Selected Courses</Text>
        {selected.length > 0 ? (
          selected.map((s) => (
            <Text key={s.id} style={{ color: "#222", marginBottom: 4 }}>
              ⦿ {s.title} — R{s.price}
            </Text>
          ))
        ) : (
          <Text style={{ color: "#333" }}>No courses selected.</Text>
        )}

        <TouchableOpacity style={[styles.calcButton, { marginTop: 20 }]} onPress={submit}>
          <Text style={styles.calcButtonText}>Submit Registration</Text>
        </TouchableOpacity>

        {/* Success Message for Web */}
        {Platform.OS === "web" && submitted && (
          <View style={styles.successBox}>
            <Ionicons name="checkmark-circle" size={36} color="green" />
            <Text style={styles.successTitle}>Registration Successfully Submitted!</Text>
            <Text style={styles.successText}>Name: {name}</Text>
            <Text style={styles.successText}>Phone: {phone}</Text>
            <Text style={styles.successText}>Email: {email}</Text>
            <Text style={styles.successText}>
              Courses: {selected.map((s) => s.title).join(", ") || "None"}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- NAVIGATION ---------------- */
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SixMonthList" component={SixMonthList} />
        <Stack.Screen name="SixMonthDetails" component={SixMonthDetails} />
        <Stack.Screen name="SixWeekList" component={SixWeekList} />
        <Stack.Screen name="SixWeekDetails" component={SixWeekDetails} />
        <Stack.Screen name="CourseCalculator" component={CourseCalculator} />
        <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: red,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  logo: { width: 30, height: 30, marginRight: 5 },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 11,
    lineHeight: 13,
  },
  headerIcons: { flexDirection: "row", alignItems: "center" },
  icon: { marginHorizontal: 4 },
  cartButton: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignItems: "center",
    marginLeft: 4,
  },
  cartText: { color: red, fontSize: 11, fontWeight: "600", marginLeft: 3 },

  mainContent: { alignItems: "center", padding: 16 },
  menuIcon: { alignSelf: "flex-start" },
  welcomeText: { fontSize: 20, fontWeight: "500", marginVertical: 6, color: "#001F3F" },
  mainLogo: { width: 80, height: 80, marginVertical: 12 },
  empowerTitle: { fontWeight: "bold", fontSize: 20, textAlign: "center", color: "#001F3F" },
  subTitle: { fontSize: 13, color: "#001F3F", textAlign: "center", marginVertical: 4 },
  description: { textAlign: "center", fontSize: 14, color: "#001F3F", marginVertical: 14, paddingHorizontal: 10 },
  courseButtonBlue: {
    flexDirection: "row",
    backgroundColor: navy,
    borderRadius: 6,
    padding: 14,
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 6,
  },
  courseButtonRed: {
    flexDirection: "row",
    backgroundColor: red,
    borderRadius: 6,
    padding: 14,
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 6,
  },
  courseText: { color: "white", fontSize: 16, fontWeight: "500" },
  footer: { alignItems: "center", padding: 16, borderTopWidth: 0.5, borderColor: "#ccc" },
  footerText: { fontSize: 11, color: "#333", textAlign: "center", marginBottom: 8 },
  socialIcons: { flexDirection: "row", gap: 12 },

  listWrap: { padding: 16 },
  courseListButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 6,
    marginBottom: 10,
  },
  courseListText: { color: "#fff", fontSize: 16, fontWeight: "500" },
  placeholderBox: {
    height: 160,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 14,
  },
  placeholderText: { color: "#555", fontWeight: "600", fontSize: 16 },
  detailsWrap: { padding: 20 },
  detailTitle: { fontSize: 22, fontWeight: "700", color: navy, marginBottom: 8 },
  detailDesc: { color: "#333", fontSize: 15, lineHeight: 22, marginBottom: 20 },

  calcWrap: { padding: 20 },
  calcRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 6,
  },
  calcLabel: { color: navy, fontSize: 16, marginLeft: 6 },
  calcPrice: { color: navy, fontSize: 16, fontWeight: "600" },
  totalText: { fontSize: 18, fontWeight: "700", color: red, marginTop: 12 },
  calcButton: {
    backgroundColor: red,
    padding: 14,
    borderRadius: 6,
    marginTop: 20,
    alignItems: "center",
  },
  calcButtonText: { color: "white", fontWeight: "700", fontSize: 16 },

  formWrap: { padding: 20 },
  inputLabel: { fontWeight: "600", color: navy, marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginTop: 4,
  },
  successBox: {
    backgroundColor: "#E8F5E9",
    padding: 16,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  successTitle: { color: "green", fontWeight: "700", marginTop: 8, fontSize: 16 },
  successText: { color: "#333", marginTop: 4 },
});