import Footer from "../components/subComponents/footer";
import Header from "../components/subComponents/header";

export const metadata = {
  title: "Explore Thailand: Elite Privilege Residence Program",
  description:
    "Explore Thailand's Elite Privilege Residence Program: Long-term visas, exclusive benefits & seamless transition for investors, retirees & tourists seeking a privileged experience.",
  keywords:
    "Thailand Privilege, Thailand Privilege Residence Program, Elite Visa, Residence by Investment, Long-Term Stay, Privilege Card Members, Thai Retirement Visa, Golden Visa Thailand, Citizenship By Investment, Thailand Investment Visa, Residency Program, Long-Term Residence, Thailand Elite Privilege Visa, Privilege Entry Visa, Dual Citizenship, Thai Business Visa, Thailand Tour, Thailand Tourist, Tourist, Tourist Visa, Thailand Privilege Card Company Limited, Golden Visa, Thailand Residence Permit, Thailand Long Stay Visa, Thai Elite Visa, Exclusive Benefits, Thailand Privilege Card, Immigration to Thailand, Thailand immigration, Thailand Immigration Lawyer",
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
