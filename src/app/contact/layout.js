import Footer from "../components/subComponents/footer";
import Header from "../components/subComponents/header";
export const metadata = {
  title: "Contact Us | Thailand Privilege - Connect With Our Expert Team",
  description:
    "Get in touch with the Thailand Privilege team today. Our experts are ready to assist you with your visa inquiries, membership details, and all the information you need to start your journey in Thailand.",
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
