import { Wrapper } from "./Button.style";
import { useNavigate } from 'react-router-dom'

export const Button = ({
  margin,
  bgColor,
  width,
  btnText,
  url,
  callback,
  disabled }) => {

  const navigate = useNavigate()
  return (
    <Wrapper disabled={disabled}
      margin={margin}
      bgColor={bgColor}
      width={width}
      onClick={() => {
        url ? navigate(url) : callback()
      }}>{btnText}</Wrapper>
  )
}
