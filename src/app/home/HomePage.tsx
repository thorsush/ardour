import { useState } from "react";
import LogoComponent from "../../logo-container/LogoCompoent";
import MainLayout from "../layout/main.layout";
import {
  ColumnContainer,
  Columns,
  DataBox,
  ImageContainer,
  ImageTextContainer,
  MainContainer,
  MainPageContainer,
} from "./home.styles";

const HomePage: React.FC<{}> = ({}) => {
  const [logoPrompt, setLogoPromt] = useState<boolean>(true);
  // useEffect(() => {
  //   setTimeout(() => setLogoPromt(false), 8000);
  // }, []);
  return !logoPrompt ? (
    <LogoComponent />
  ) : (
    <>
      <MainLayout>
        <MainPageContainer>
          A space to host tomorrow's episode
        </MainPageContainer>
        {images.map((src, i) => (
          <MainContainer>
            <ImageTextContainer>Text </ImageTextContainer>
            <ImageContainer>
              <img height={"80%"} width="100%" key={i} src={src} />
            </ImageContainer>
            <DataBox>
              <ColumnContainer>
                <Columns>
                  <div>CATEGORY</div>
                  <div>BEAUTY</div>
                </Columns>
                <Columns>
                  <div>LOCATION</div>
                  <div>MUMBAI</div>
                </Columns>
                <Columns>
                  <div>AREA</div>
                  <div>LODA SQ.FT</div>
                </Columns>
              </ColumnContainer>
            </DataBox>
          </MainContainer>
        ))}
      </MainLayout>
    </>
  );
};
const images = [
  "http://cdn.cnn.com/cnnnext/dam/assets/200220105313-04-popular-buildings-india-infosys-pune-restricted.jpg",
  "https://img.freepik.com/premium-photo/geometric-facades-residential-building_294094-27.jpg?w=2000",
  "https://thumbs.dreamstime.com/b/architecture-hong-kong-features-great-emphasis-contemporary-especially-modernism-postmodernism-functionalism-etc-due-to-101715691.jpg",
  "https://api.gharpedia.com/wp-content/uploads/2019/02/Heydar-Aliyev-Cultural-Centre-by-Zaha-Hadid-01-0101070001.jpg",
  "https://media.easemytrip.com/media/Blog/International/636951810748079878/636951810748079878tEhaoI.jpg",
];
export default HomePage;
