import "./Table.css";
import { useRef } from 'react';
import  { ReactToPrint } from 'react-to-print';
const Table = () => {
  const componentRef = useRef();
  

  return (
    <div>
      <div  ref={componentRef} id="print-area"
        className="mx-96 mt-10"
        style={{ background: "white", border: "1px dotted black" }}
      >
        <div className="mx-2 mt-2 mb-96">
          <div className="flex justify-between">
            <p>
              বাংলাদেশ ফরম নং ১০৭৭
              <br />
              (সংশোধিত)
            </p>
            <p>
              (পরিশিষ্ট: ৩৮)
              <br />
              ক্রমিক নং 869423008449
            </p>
          </div>
          <h1 className="text-center">
            ভূমি উন্নয়ন কর পরিশোধ রসিদ
            <br />
            (অনুচ্ছেদ ৩৯২ দ্রষ্টব্য)
          </h1>
          <p className="text-center mt-5">
            সিটি কর্পোরেশন /পৌর /ইউনিয়ন ভূমি অফিসের নাম :
            <span className="dotted-divider">জাজিরা সদর ইউনিয়ন ভূমি</span>{" "}
            <br />
            অফিস মৌজার ও জে. এল. নং:
            <span className="dotted-divider"> কবিরাজ কান্দি - 52</span> উপজেলা /
            থানা :<span className="dotted-divider">জাজিরা</span> জেলা:
            <span className="dotted-divider"> শরীয়তপুর </span>
            <br />২ নং রেজিস্টার অনুযায়ী হোল্ডিং নম্বর:{" "}
            <span className="dotted-divider">344</span> <br /> খতিয়ান নং:
            <span className="dotted-divider">341</span>
          </p>
          <div>
            <h1 className="text-center underline">মালিকের বিবরণ</h1>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <table style={{ border: "1px dotted black" }}>
                <thead>
                  <tr>
                    <th style={{ border: "1px dotted black", padding: "5px" }}>
                      ক্রমঃ
                    </th>{" "}
                    {/* Dotted border and padding for cells */}
                    <th style={{ border: "1px dotted black", padding: "5px" }}>
                      মালিকের নাম
                    </th>
                    <th style={{ border: "1px dotted black", padding: "5px" }}>
                      মালিকের অংশ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ১
                    </td>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      শামসুল হক ঢালী
                    </td>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ০.২৫
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ২
                    </td>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      সিরাজুল ঢালী
                    </td>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ০,২৫
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style={{ border: "1px solid black" }}>
          
                <thead>
                  <tr>
                    <th
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      ক্রমঃ
                    </th>{" "}
                    {/* Header with background color */}
                    <th
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      মালিকের নাম
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      মালিকের অংশ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      ১
                    </td>{" "}
                    {/* Data cells */}
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      ফজলুল হক ঢালী
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      ০.২৫
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      ৮
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      মোঃ মফিজুল হক
                    </td>
                    <td style={{ border: "1px solid black", padding: "5px" }}>
                      ০.২৫
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h1 className="text-center underline">জমির বিবরণ</h1>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <table style={{ border: "1px dotted black" }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      ক্রমঃ
                    </th>{" "}
                    {/* Header with background color */}
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      দাগ নং
                    </th>{" "}
                    {/* Header with background color */}
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      জমির শ্রেণী
                    </th>
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      জমির পরিমাণ (শতক)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ১
                    </td>{" "}
                    {/* Data cells */}
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      {" "}
                      342
                    </td>{" "}
                    {/* Data cells */}
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      নাল (কৃষি২)
                    </td>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      44.00000
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      2
                    </td>{" "}
                    {/* Data cells */}
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      {" "}
                      913
                    </td>{" "}
                    {/* Data cells */}
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      নাল (কৃষি২)
                    </td>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ১৮,০০০.০০
                    </td>
                  </tr>
                  {/* Add more table rows here as needed */}
                </tbody>
              </table>
              <table style={{ border: "1px dotted black" }}>
                {" "}
                {/* Dotted border for entire table */}
                <thead>
                  <tr>
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      ক্রমঃ
                    </th>{" "}
                    {/* Header with background color */}
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      দাগ নং
                    </th>
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      জমির শ্রেণী
                    </th>
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      জমির পরিমাণ (শতক)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ৩
                    </td>{" "}
                    {/* Data cells */}
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ১০৮৮
                    </td>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      মাল (কৃষি২)
                    </td>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ১৮,০০০.০০
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ৮
                    </td>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ১০৩১
                    </td>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      নাল (কৃষি২)
                    </td>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ৩২,০০০.০০
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <table style={{ border: "1px solid black" }}>
              <thead className="text=center">আদায়ের বিবরণ</thead>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    তিন বৎসরের ঊর্ধ্বের বকেয়া{" "}
                  </td>{" "}
                  {/* Data cells */}
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    গত তিন বৎসরের বকেয়া{" "}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    বকেয়ার সুদ ও ক্ষতিপূরণ{" "}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    হাল দাবি{" "}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    মোট দাবি{" "}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    মোট আদায়
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    মোট বকেয়া
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    মন্তব্য
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    ০
                  </td>{" "}
                  {/* Data cells */}
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    ০{" "}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    ০{" "}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    ২২৪{" "}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    ২২৪{" "}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    ২২৪
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    ০
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    মন্তব্য
                  </td>
                </tr>
                {/* Add more table rows here as needed */}
              </tbody>
            </table>
          </div>
          <p>সর্বমোট (কথায়): দুই শত চব্বিশ টাকা মাত্র ।</p>
          <div className="dotted-divider"></div>
          <div className="grid grid-cols-3 gap-10 ">
            <div>
              <p>নোট: সর্বশেষ কর পরিশোধের সাল - ১৪৩০</p>
              <p>চালান নং : 2223-0021481643</p>
              <p className="flex flex-row items-center">
                তারিখ :
                <span>
                  <p className="underline">২১ জ্যৈষ্ঠ ১৪৩০</p>
                  <p>০৪ জুন, ২০২৩</p>
                </span>
              </p>
            </div>
            <img
              className="w-20 ml-10"
              src="https://i.ibb.co/n65MLmf/apps-45636-14177013144315603-a8104893-cc8d-42c3-a3a3-47afada8e1a7-removebg-preview.png"
            />
            <div>
              <p>
                এই দাখিলা ইলেক্ট্রনিকভাবে তৈরি করা হয়েছে,
                <br />
                কোন স্বাক্ষর প্রয়োজন নেই।
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 mb-2">
        <ReactToPrint
          trigger={() => (
            <button
              className="btn text-white"
              style={{ backgroundColor: "#4B8DF8" }}
            >
              Print
            </button>
          )}
          content={() => componentRef.current} id="print-component"
        />
      </div>
    </div>
  );
};

export default Table;
