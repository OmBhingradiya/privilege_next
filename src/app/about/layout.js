import Footer from "../components/subComponents/footer";
import Header from "../components/subComponents/header";

export const metadata = {
  title:
    "About Us | Thailand Privilege - Your Gateway to Exquisite Thai Living",
  description:
    "Learn more about the Thailand Privilege Program. We provide comprehensive services and support for obtaining Elite Visas, offering a gateway to luxurious and hassle-free living in Thailand.",
  keywords:
    "Thailand Privilege Residence Program, Elite Visa, Residence by Investment, Long-Term Stay, Privilege Card Members, Thai Retirement Visa, Golden Visa Thailand, Citizenship By Investment, Thailand Investment Visa, Residency Program, Long-Term Residence, Thailand Elite Privilege Visa, Privilege Entry Visa, Dual Citizenship, Thai Business Visa, Thailand Tour, Thailand Tourist, Tourist, Tourist Visa, Thailand Privilege Card Company Limited, Golden Visa, Thailand Residence Permit, Thailand Long Stay Visa, Thai Elite Visa, Exclusive Benefits, Thailand Privilege Card, Immigration to Thailand, Thailand immigration, Thailand immigration Lawyer, Thailand Immigration Consultant, Immigration Consultant, Immigration",
};

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
