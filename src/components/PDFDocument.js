import React from "react";
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

const PDFDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image style={styles.image} src={data.image} />
        <Text>Name: {data.name}</Text>
        <Text>Email: {data.email}</Text>
        <Text>Date of Birth: {data.dob}</Text>
        <Text>Phone Number: {data.phone}</Text>
        <Text>Gender: {data.gender}</Text>
        <Text>Address: {data.address}</Text>
        <Text>Course Preference: {data.course}</Text>
        <Text>High School: {data.highSchool}</Text>
        <Text>Intermediate: {data.intermediate} </Text>
        <Text>Diploma: {data.diploma} </Text> 
        <Text>Graduation: {data.graduation} </Text>
        <Text>Post Graduation: {data.postGraduation}</Text>
        <Text>Course: {data.course} </Text>
        <Text>Category: {data.category} </Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
