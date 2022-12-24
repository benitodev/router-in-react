import { Routes, Route } from "react-router-dom";

interface Props {
    children: JSX.Element[] | JSX.Element;
}

const routesWithNotFound = ({children}: Props) => {
  return (
    <Routes>
      {children}
      <Route path='*' element={<div>Not found</div>}></Route>
    </Routes>
  )
}
export default routesWithNotFound