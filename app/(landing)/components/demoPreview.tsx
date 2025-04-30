import { PreviewDetails } from "@/app/component/form/previewDetails";

const DemoPreview = () => (
  <div className="mx-auto w-full flex justify-center items-center">
    <PreviewDetails
      companyDetails={defaultValue.companyDetails}
      invoiceDetails={defaultValue.invoiceDetails}
      invoiceTerms={defaultValue.invoiceTerms}
      paymentDetails={defaultValue.paymentDetails}
      yourDetails={defaultValue.yourDetails}
    />
  </div>
);

const defaultValue = {
  companyDetails: {
    companyName: "Variable Labs",
    companyAddress: "1700 Teyvat Street",
    companyCity: "Inazuma View",
    companyState: "Tokyo",
    companyCountry: "Japan",
    companyLogo: "/android-chrome-192x192.png",
    companyTaxId: "",
    companyZip: "43241",
    email: "support@inazuma.tokyo",
  },
  yourDetails: {
    yourName: "Aditya Gupta",
    yourAddress: "7th Cross,2nd Block, Near Suzume Lane",
    yourCity: "Tokyo",
    yourState: "Tokyo",
    yourCountry: "Japan",
    yourLogo: "/aditya.png",
    yourEmail: "adityagup1a@gmail.com",
    yourTaxId: "",
    yourZip: "212321",
  },
  paymentDetails: {
    bankName: "HDFC Bank",
    accountNumber: "1234567890",
    accountName: "ADITYA",
    routingCode: "123456",
    swiftCode: "HDFC123234",
    ifscCode: "UTIB0000000",
    currency: "INR",
  },
  invoiceTerms: {
    invoiceNumber: "Invoice #25",
    issueDate: "Tue March 25 2025 00:00:00 GMT+0530 (India Standard Time)",
    dueDate: "Mon Apr 28 2025 00:00:00 GMT+0530 (India Standard Time)",
  },
  invoiceDetails: {
    note: "Services Period  25/03/2025 to 28/04/2025",
    discount: "22000",
    taxRate: "18",
    items: [
      {
        itemDescription: "Game Testing Service",
        amount: 100000,
        qty: 1,
      },
      {
        itemDescription: "Service Charge",
        amount: 32000,
        qty: 0,
      },
    ],
    currency: "INR",
  },
};
export default DemoPreview;
