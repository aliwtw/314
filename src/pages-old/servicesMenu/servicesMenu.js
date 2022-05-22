import './servicesMenu.css';

const ServiceMenu = () => {

  return (
    <div className="services_container">
      <h3>How can we help you?</h3>

      <button className="services_button">Tow</button>
      <button className="services_button">Lockout</button>
      <button className="services_button">Fuel Delivery</button>
      <button className="services_button">Tire Change</button>
      <button className="services_button">Jump Start</button>
      <button className="services_button"><b>More Options</b></button>

    </div>
  )

}

export default ServiceMenu;