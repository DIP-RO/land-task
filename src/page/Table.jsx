import "./Table.css";
import { useRef } from "react";
import { ReactToPrint } from "react-to-print";
const Table = () => {
  const componentRef = useRef();

  return (
    <div className="sm:w-[600px] sm:h-full md:mx-32 lg:mx-96">
      <div
        ref={componentRef}
        className="mt-10 mx-5   h-[920px] "
        style={{ background: "white", border: "1px dotted black" ,}}
      >
        <div className="mx-2 mt-2 ">
          <div className="flex justify-between">
            <p className="text-xs">
              বাংলাদেশ ফরম নং ১০৭৭
              <br />
              (সংশোধিত)
            </p>
            <p className="text-xs">
              (পরিশিষ্ট: ৩৮)
              <br />
              ক্রমিক নং 869423008449
            </p>
          </div>
          <h1 className="text-center text-xs mt-5">
            ভূমি উন্নয়ন কর পরিশোধ রসিদ
            <br />
            (অনুচ্ছেদ ৩৯২ দ্রষ্টব্য)
          </h1>
          
          <div className="mt-5">
          <div className="flex items-center">
            <p className="text-xs">
              সিটি কর্পোরেশন /পৌর /ইউনিয়ন ভূমি অফিসের নাম :
            </p>
            <p className="text-xs ml-2 flex-grow">
              {" "}
              {/* Use flex-grow to make it fill remaining space */}
              জাজিরা সদর ইউনিয়ন ভূমি
              <span className="dotted block h-px w-full"></span>{" "}
              {/* Set width to full */}
            </p>
          </div>
          <div className="flex">
            <div className="flex items-center flex-grow">
              <p className="text-xs">অফিস মৌজার ও জে. এল. নং :</p>
              <p className="text-xs ml-2 flex-grow">
                কবিরাজ কান্দি - 52
                <span className="dotted block h-px w-full"></span>{" "}
                {/* Set width to full */}
              </p>
            </div>
            <div className="flex items-center flex-grow">
              <p className="text-xs">উপজেলা / থানা :</p>
              <p className="text-xs ml-2 flex-grow">
                জাজিরা
                <span className="dotted block h-px w-full"></span>{" "}
                {/* Set width to full */}
              </p>
            </div>
            <div className="flex items-center flex-grow">
              <p className="text-xs">জেলা:</p>
              <p className="text-xs ml-2 flex-grow">
                শরীয়তপুর
                <span className="dotted block h-px w-full"></span>{" "}
                {/* Set width to full */}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-xs">২ নং রেজিস্টার অনুযায়ী হোল্ডিং নম্বর :</p>
            <p className="text-xs ml-2 flex-grow">
              {" "}
              {/* Use flex-grow to make it fill remaining space */}
              344
              <span className="dotted block h-px w-full"></span>{" "}
              {/* Set width to full */}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-xs">খতিয়ান নং:</p>
            <p className="text-xs ml-2 flex-grow">
              {" "}
              {/* Use flex-grow to make it fill remaining space */}
              341
              <span className="dotted block h-px w-full"></span>{" "}
              {/* Set width to full */}
            </p>
          </div>
          </div>
          
          <div>
            <h1 className="mt-3 text-center text-xs underline">মালিকের বিবরণ</h1>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <table className="text-xs" style={{ border: "1px dotted black" }}>
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
              <table className="text-xs" style={{ border: "1px dotted black" }}>
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
                        
                      }}
                    >
                      মালিকের নাম
                    </th>
                    <th
                      style={{
                        border: "1px dotted black",
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
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ১
                    </td>{" "}
                    {/* Data cells */}
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ফজলুল হক ঢালী
                    </td>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ০.২৫
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ৮
                    </td>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      মোঃ মফিজুল হক
                    </td>
                    <td style={{ border: "1px dotted black", padding: "5px" }}>
                      ০.২৫
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h1 className="mt-3 text-center underline text-xs">জমির বিবরণ</h1>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <table className="text-xs" style={{ border: "1px dotted black" }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                        
                      }}
                    >
                      ক্রমঃ
                    </th>{" "}
                    {/* Header with background color */}
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                      
                      }}
                    >
                      দাগ নং
                    </th>{" "}
                    {/* Header with background color */}
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                      
                      }}
                    >
                      জমির শ্রেণী
                    </th>
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                      
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
              <table className="text-xs" style={{ border: "1px dotted black" }}>
                {" "}
                {/* Dotted border for entire table */}
                <thead>
                  <tr>
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                       
                      }}
                    >
                      ক্রমঃ
                    </th>{" "}
                    {/* Header with background color */}
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                       
                      }}
                    >
                      দাগ নং
                    </th>
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                      
                      }}
                    >
                      জমির শ্রেণী
                    </th>
                    <th
                      style={{
                        border: "1px dotted black",
                        padding: "5px",
                        
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
                      4
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
            <table className="text-xs"
              style={{
                border: "1px dotted",
                borderCollapse: "collapse",
                margin: "10px 2px",
                width: "100%",
                fontSize: "12px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    className="text-center"
                    style={{ border: "1px dotted black", padding: "5px" }}
                  >
                    সর্বমোট জমি (শতক)
                  </td>
                  <td className="b1 input_bangla" style={{ width: "50%" }}>
                    112
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className="text-xs"
              style={{
                border: "1px dotted black",
                padding: "5px",
                marginTop: "40px",
              }}
            >
              <thead>
                <tr>
                  <th
                    colSpan="8"
                    style={{
                      border: "1px dotted black",
                      padding: "5px",
                      backgroundColor: "#f2f2f2",
                    }}
                  >
                    আদায়ের বিবরণ
                  </th>
                </tr>
                <tr>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    তিন বৎসরের ঊর্ধ্বের বকেয়া
                  </td>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    গত তিন বৎসরের বকেয়া
                  </td>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    বকেয়ার সুদ ও ক্ষতিপূরণ
                  </td>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    হাল দাবি
                  </td>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    মোট দাবি
                  </td>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    মোট আদায়
                  </td>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    মোট বকেয়া
                  </td>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    মন্তব্য
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "#f2f2f2" }}>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    ০
                  </td>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    ০
                  </td>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    ০
                  </td>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    ২২৪
                  </td>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    ২২৪
                  </td>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    ২২৪
                  </td>
                  <td style={{ border: "1px dotted black", padding: "5px" }}>
                    ০
                  </td>
                  <td
                    style={{ border: "1px dotted black", padding: "5px" }}
                  ></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2">সর্বমোট (কথায়): দুই শত চব্বিশ টাকা মাত্র ।</p>
          <div className="dotted-divider"></div>
          <div className="grid grid-cols-3 gap-10 text-xs">
            <div className="">
              <p >নোট: সর্বশেষ কর পরিশোধের সাল -১৪৩০</p>
              <p>চালান নং : 2223-0021481643</p>
              <p className="flex flex-row items-center">
                তারিখ :
                <span>
                  <p className="underline">২১ জ্যৈষ্ঠ ১৪৩০</p>
                  <p>০৪ জুন, ২০২৩</p>
                </span>
              </p>
            </div>
            <div><img
              className="w-20 ml-10"
              src="https://i.ibb.co/n65MLmf/apps-45636-14177013144315603-a8104893-cc8d-42c3-a3a3-47afada8e1a7-removebg-preview.png"
            /></div>
            <div className="text-xs">
              <p>
                এই দাখিলা ইলেক্ট্রনিকভাবে তৈরি করা হয়েছে,
                <br />
                কোন স্বাক্ষর প্রয়োজন নেই।
              </p>
            </div>
            
           
          </div>
          <div className="dotted lg:mt-44 md:mt-32 sm:mt-32"></div>
          <div className="flex justify-end text-xs">1/1</div>
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
          content={() => componentRef.current}
          id="print-component"
        />
      </div>
    </div>
  );
};

export default Table;
