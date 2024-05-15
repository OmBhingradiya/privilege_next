import Footer from "../components/subComponents/footer";
import Header from "../components/subComponents/header";

// export const metadata = {
//   title: "MedPark Hospital Bangkok | Leading Medical Care in Thailand",
//   description:
//     "Experience top-tier medical services at MedPark Hospital, Bangkok. Our state-of-the-art facilities and expert medical professionals ensure the best care for both locals and international patients.",
//   keywords:
//     "Thailand Hospital,Thailand Hospitals, Thailand Hospital list, Thailand Best Hospital, Thailand Best Hospital, Thailand Best Hospital List, Hospitals in Thailand,Hospitals in Bangkok Thailand, Thailand Bumrungrad Hospital, Best hospital in Bangkok,Hospital in Thailand,MedPark Hospital, Thailand Treatment,Thailand Treatment Service Company,Thailand Treatment Packages, Thai Treatment,Hospital",
// };
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
