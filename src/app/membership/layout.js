import Footer from "../components/subComponents/footer";
import Header from "../components/subComponents/header";

export const metadata = {
  title:
    "Membership Benefits | Thailand Privilege - Exclusive Access and Perks",
  description:
    "Unlock exclusive access and perks with the Thailand Privilege Card. From long-term stays to investment opportunities and retirement options, discover how our membership can enhance your lifestyle in Thailand.",
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
