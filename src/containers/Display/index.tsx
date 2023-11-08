import Quadro from "../../components/Quadro";
import { Flex } from "./style";

const Display = () => (
    <Flex>
    <div>
    <h2>Entrada</h2><Quadro> R$ 2500, 00 </Quadro>
    </div>
    <div>
    <h2>Saida</h2><Quadro>R$ 3500, 00</Quadro>
    </div>
    <div>
    <h2>Saldo</h2><Quadro>R$ 1000, 00</Quadro>
    </div>
   

    </Flex>
)

export default Display