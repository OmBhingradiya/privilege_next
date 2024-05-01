import Footer from "../components/subComponents/footer";
import Header from "../components/subComponents/header";

export const metadata = {
  title:
    "Unforgettable Thailand Tours | Tailored Honeymoon & Adventure Packages",
  description:
    "Plan your dream tour in Thailand with our exclusive honeymoon and adventure packages. Explore iconic destinations and experience the rich culture and beauty of Thailand.",
  keywords:
    "Thailand Hotels, Thailand Hotels Bangkok, Thailand Hotels 5 Star, Thailand Hotels Phuket, Thailand Hotels Prices, Thailand Hotels Cheap, Thailand Hotels Pattaya, Thailand Hotels on the Beach, Thailand Apartment, Thailand Apartment rental, Thailand Apartment Rent Bangkok, Thailand Honeymoon, Thailand Cheap Hotels, Thailand cheap Vacation, Thailand Cheap Travel, Thailand Best Hotels, Thailand Best Hotels Bangkok, Cheap Hotels in Thailand, Cheap Hotels in Bangkok, Hotel, Hotels, Thailand Honeymoon, Thailand Honeymoon Packages,Thailand Honeymoon Resorts,Thailand Honeymoon Reddit, Tour,Thailand Tour,Thailand Tourist,Tourist, Tourist Visa,Thailand Tour Package,Thailand cheap Vacation,Thailand Cheap Travel,Thailand Tourism, Tour, Hospitals Thailand, Hospitals in Thailand Bangkok",
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
