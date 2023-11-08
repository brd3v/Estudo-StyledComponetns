import {Input, Props} from './styled'


const Inputs = (props: Props) => (
    <Input  placeholder={props.placeholder} type={props.type}  />
)

export default Inputs