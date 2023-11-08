import Butaos from "../../components/Botao";
import Inputs from "../../components/Input";
import { Flex, FlexFixed } from "./styled";
const Entradas = () => (
   
  

    <>
    <Flex>
    <FlexFixed>
     <Inputs  placeholder={'Suas Entradas'} type="number" />
     <Butaos />
     </FlexFixed>
     <FlexFixed>
     <Inputs placeholder="Suas Saidas" type="number" />
     <Butaos />
     
     </FlexFixed>
     </Flex>
    </>
)

export default Entradas