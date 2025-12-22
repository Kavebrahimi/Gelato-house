import { Button } from "../base/button"
import Container from "../base/container"
import Logo from "../base/logo"



const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-2.5">
          <div>
            <Logo />
          </div>
          <div className="flex items-center gap-3">
            <div className="items-center hidden gap-3 md:flex">
              <Button variant="text">سفارش اینترنتی</Button>
              <Button variant="text">قوانین سایت</Button>
            </div>
            <Button variant="contained">ورود</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
