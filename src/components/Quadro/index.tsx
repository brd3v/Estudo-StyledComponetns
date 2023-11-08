import { Card } from "./style"
type Cards = {
    children?: string | number
    
}
const Quadro = (props: Cards) => (
<Card>{props.children}</Card>
)
export default Quadro