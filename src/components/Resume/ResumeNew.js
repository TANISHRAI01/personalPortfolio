// // import React, { useState, useEffect } from "react";
// // import { Container, Row } from "react-bootstrap";
// // import Button from "react-bootstrap/Button";
// // import Particle from "../Particle";
// // import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
// // import { AiOutlineDownload } from "react-icons/ai";
// // import { Document, Page, pdfjs } from "react-pdf";
// // import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// // function ResumeNew() {
// //   const [width, setWidth] = useState(1200);

// //   useEffect(() => {
// //     setWidth(window.innerWidth);
// //   }, []);

// //   return (
// //     <div>
// //       <Container fluid className="resume-section">
// //         <Particle />
// //         <Row style={{ justifyContent: "center", position: "relative" }}>
// //           <Button
// //             variant="primary"
// //             href={pdf}
// //             target="_blank"
// //             style={{ maxWidth: "250px" }}
// //           >
// //             <AiOutlineDownload />
// //             &nbsp;Download CV
// //           </Button>
// //         </Row>

// //         <Row className="resume">
// //           <Document file={pdf} className="d-flex justify-content-center">
// //             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
// //           </Document>
// //         </Row>

// //         <Row style={{ justifyContent: "center", position: "relative" }}>
// //           <Button
// //             variant="primary"
// //             href={pdf}
// //             target="_blank"
// //             style={{ maxWidth: "250px" }}
// //           >
// //             <AiOutlineDownload />
// //             &nbsp;Download CV
// //           </Button>
// //         </Row>
// //       </Container>
// //     </div>
// //   );
// // }

// // export default ResumeNew;
// import React from "react";
// import { Container, Row } from "react-bootstrap";
// import Particle from "../Particle";

// function ResumeNew() {
//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <h2 style={{ color: "#bbb", textAlign: "center", marginTop: "150px" }}>
//             📄 Resume Coming Soon. Stay Tuned! 🔥
//           </h2>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;
import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <Container
      fluid
      className="resume-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Particle />

      <Row style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <h2
          style={{
            color: "#bbb",
            textAlign: "center",
            fontSize: "1.8rem",
          }}
        >
          📄 Resume Coming Soon. Stay Tuned! 🔥
        </h2>
      </Row>
    </Container>
  );
}

export default ResumeNew;
