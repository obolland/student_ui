import Header from '../../components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

import './baseLayout.styles.scss';

const BaseLayout = ({ children, title }) => {
  return (
    <>
      <Header />
      <div className="layout-container">
        <h1 className="mt-4 text-center">{title}</h1>
        {children}
      </div>
    </>
  )
}

export default BaseLayout;