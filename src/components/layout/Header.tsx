import { Button } from "../base/button"



const Header: React.FC = () => {
  return (
    <header>
      <Button variant="contained" color="secondary" size="medium">Jelato</Button>
      <Button variant="outlined" color="primary" size="small">Jelato</Button>
      <Button variant="text" color="secondary" size="medium">Jelato</Button>
    </header>
  )
}

export default Header
