import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "./PDFDocument";

const Preview = ({ data, onBack, onSubmit }) => {
  const [pdfUrl, setPdfUrl] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  React.useEffect(() => {
    const pdfBlob = new Blob([<PDFDocument data={data} />], { type: "application/pdf" });
    setPdfUrl(URL.createObjectURL(pdfBlob));

    return () => URL.revokeObjectURL(pdfUrl);
  }, [data]);


  return (
    <div className="preview">
      <h2>Preview</h2>
      <div>
        <img src={data.image} alt="User" />
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Date of Birth:</strong> {data.dob}</p>
        <p><strong>Phone Number:</strong> {data.phoneNumber}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>High School:</strong> {data.highSchool}</p>
        <p><strong>Intermediate:</strong> {data.intermediate}</p>
        <p><strong>Diploma:</strong> {data.diploma}</p>
        <p><strong>Graduation:</strong> {data.graduation}</p>
        <p><strong>Post Graduation:</strong> {data.postGraduation}</p>
        <p><strong>Course:</strong> {data.course}</p>
        <p><strong>Category:</strong> {data.category}</p>
      </div>
      <button className="button" onClick={onBack}>Back</button>
      <button className="button" onClick={handleSubmit}>Submit</button>
      <button className="button">
      <PDFDownloadLink  document={<PDFDocument data={data} />} fileName="registration_form.pdf">
          {({ blob, url, loading, error }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
      </button>
      <div className="PDFViewer">
        <PDFViewer width="1000" height="1200">
        <PDFDocument data={data} />
      </PDFViewer>
      </div>
    </div>
  );
};

export default Preview;
