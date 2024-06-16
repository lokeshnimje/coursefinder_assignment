import React from 'react'
import "./testimonialsStyle.css"
import { HomeCourosal } from "./Courosal";
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
    const studentData = [
        {
          desc: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
          name: "Mandar Suryawanshi",
          post: " Northeastern University, USA",
        },
        {
          desc: "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
          name: "Aarohi Sighel",
          post: "University of South Australia, Australia",
        },
        {
          desc: "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
          name: "Susan Mendonca",
          post: "Conestoga College, Canada",
        },
        {
          desc: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
          name: "Mandar Suryawanshi",
          post: " Northeastern University, USA",
        },
        {
          desc: "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
          name: "Aarohi Sighel",
          post: "University of South Australia, Australia",
        },
        {
          desc: "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
          name: "Susan Mendonca",
          post: "Conestoga College, Canada",
        },
      ];
      
      const getTestimonialList = () => {
        let arr = [];
        for (let i = 0; i < studentData?.length; i++) {
          arr.push(
            <div
              key={i}
              style={{
                borderRadius: "10px",
                background: "white",
                padding: "15px",
                height: "250px",
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="testimonial-card">
                <ImQuotesLeft color="#226CF5" style={{ fontSize: "20px" }} />
                <p style={{ fontSize: "14px", lineHeight: "22px" }}>
                  {studentData?.[i]?.desc}
                </p>
              </div>
              <div style={{textAlign:'start'}}>
                <p style={{ fontWeight: "bold", margin: "0px" }}>
                  {studentData?.[i]?.name}
                </p>
                <p style={{ fontSize: "12px", fontWeight: "light", marginTop: "5px" }}>
                  {studentData?.[i]?.post}
                </p>
              </div>
            </div>
          );
        }
        return arr;
      };
      
  return (
    <div style={{ background: "#ffdcd8" , minHeight:'550px'}}>
    <br />
    <p className="heading">Our students love us</p>

    <div class="testimonial-section">
      <HomeCourosal data={getTestimonialList()} />
      <br />
      <br />
    </div>
  </div>
  )
}

export default Testimonials