const Header  = ({step, totalSteps}) => {
   
    return (
        <header>
            
          <h2>Choose Service
            
          <div>
            Step {step}/{totalSteps}
          </div>
          </h2>
        </header>
    );
}

export default Header;