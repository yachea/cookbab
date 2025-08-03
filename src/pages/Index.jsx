import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import HomeMealTotal from "../components/HomeMealTotal";
import HomeOneMeal from "../components/HomeOneMeal";
import HomeWeekCook from "../components/HomeWeekCook";

function Index() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <HomeBanner />
        <HomeOneMeal />
        <HomeWeekCook />
        <HomeMealTotal />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Index;
