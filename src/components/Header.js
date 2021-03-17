import PropTypes from 'prop-types'

const Header = ({title}) => {

  return (
    <header className='header'>
      <h1></h1>
      
    </header>
  )
}

Header.defaultProps = {
  title: 'Layers',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
